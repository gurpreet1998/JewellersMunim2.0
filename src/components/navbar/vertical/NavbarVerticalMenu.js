import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Nav, Collapse } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import NavbarVerticalMenuItem from './NavbarVerticalMenuItem';
import AppContext, { AuthContext } from 'context/Context';
import {
  fetchExtensionRole,
  useRolePermissionsData
} from 'hooks/useUserServiceData';

const CollapseItems = ({ route }) => {
  const { pathname } = useLocation();

  const openCollapse = childrens => {
    const checkLink = children => {
      if (children.to === pathname) {
        return true;
      }
      return (
        Object.prototype.hasOwnProperty.call(children, 'children') &&
        children.children.some(checkLink)
      );
    };
    return childrens.some(checkLink);
  };

  const [open, setOpen] = useState(openCollapse(route.children));

  return (
    <Nav.Item as="li">
      <Nav.Link
        onClick={() => {
          setOpen(!open);
        }}
        className={classNames('dropdown-indicator cursor-pointer', {
          'text-500': !route.active
        })}
        aria-expanded={open}
      >
        <NavbarVerticalMenuItem route={route} />
      </Nav.Link>
      <Collapse in={open}>
        <Nav className="flex-column nav" as="ul">
          <NavbarVerticalMenu routes={route.children} />
        </Nav>
      </Collapse>
    </Nav.Item>
  );
};

CollapseItems.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    children: PropTypes.array.isRequired,
    active: PropTypes.bool
  }).isRequired
};

const NavbarVerticalMenu = ({ routes }) => {
  const {
    config: { showBurgerMenu },
    setConfig
  } = useContext(AppContext);

  const auth = useContext(AuthContext);
  const extensionRole = fetchExtensionRole(auth);
  const { data: menuItems } = useRolePermissionsData(extensionRole);

  const CheckChildComponent = route => {
    if (!route.children) {
      return false;
    }
    const arr = [...route.children];

    // navigation menu items
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (
        menuItems?.data?.includes(element.name) ||
        menuItems?.data?.includes(element.keyword)
      ) {
        return true;
      }
    }
    return false;
  };

  const handleNavItemClick = () => {
    if (showBurgerMenu) {
      setConfig('showBurgerMenu', !showBurgerMenu);
    }
  };

  return routes.map(route => {
    if (
      CheckChildComponent(route) ||
      menuItems?.data?.includes(route?.name) ||
      menuItems?.data?.includes(route?.keyword)
    ) {
      if (!route.children) {
        return (
          <>
            <Nav.Item as="li" key={route.keyword} onClick={handleNavItemClick}>
              <NavLink
                exact={route.exact}
                to={route.to}
                isActive={match => {
                  if (!match) {
                    return false;
                  }
                  return route.to !== '#!';
                }}
                className={classNames('nav-link', {
                  'text-500': !route.active
                })}
              >
                <NavbarVerticalMenuItem route={route} />
              </NavLink>
            </Nav.Item>
          </>
        );
      } else {
        return (
          <CollapseItems
            AccessArr={menuItems?.data}
            route={route}
            key={route.keyword}
          />
        );
      }
    } else {
      return <></>;
    }
  });
};

NavbarVerticalMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape(NavbarVerticalMenuItem.propTypes))
    .isRequired
};

export default NavbarVerticalMenu;

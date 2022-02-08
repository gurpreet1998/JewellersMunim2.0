import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { Nav, Collapse } from 'react-bootstrap';
import classNames from 'classnames';
import NavbarVerticalMenuItem from './NavbarVerticalMenuItem';
import AppContext from 'context/Context';
import { AuthContext } from 'api/authentication/auth-context';
import { roleBased_Permission } from '_services/userService';

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

  // Use States Here
  const auth = useContext(AuthContext);
  const [ExtensionRole, setExtensionRole] = useState('');
  const [RolePermissionsObj, setRolePermissionsObj] = useState({});

  const GetAccessRolesByAPI = extnRole => {
    roleBased_Permission.GetPermissionsForRole(extnRole).then(res =>
      setRolePermissionsObj({
        ...RolePermissionsObj,
        [extnRole]: { Access: [...res] }
      })
    );
  };

  const CheckChildComponent = ROUTE => {
    if (!ROUTE.children) {
      return false;
    }
    const arr = [...ROUTE.children];
    const AccessArr = RolePermissionsObj?.[ExtensionRole]?.Access;

    // navigation menu items
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (AccessArr?.includes(element.name)) {
        return true;
      }
    }
    return false;
  };

  const RoleBasedPermission = () => {
    if (auth.isAuthenticated) {
      const extension_Role = auth.account?.idToken?.extension_Role || '';
      setExtensionRole(extension_Role);
      GetAccessRolesByAPI(extension_Role);
    } else {
      console.log('Login Failed');
    }
  };

  useEffect(() => {
    RoleBasedPermission();
  }, [auth]);

  const handleNavItemClick = () => {
    if (showBurgerMenu) {
      setConfig('showBurgerMenu', !showBurgerMenu);
    }
  };
  return routes.map(route => {
    if (
      CheckChildComponent(route) ||
      RolePermissionsObj?.[ExtensionRole]?.Access.includes(route?.keyword) ||
      RolePermissionsObj?.[ExtensionRole]?.Access.includes(route?.name)
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
            AccessArr={RolePermissionsObj?.[ExtensionRole]?.Access}
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

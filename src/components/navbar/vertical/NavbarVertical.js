import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import { Nav, Navbar, Row, Col } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import Logo from 'components/common/Logo';
import { LoadingDots } from 'components/loading-spinner/LoadingDots';
import NavbarVerticalMenu from './NavbarVerticalMenu';
import ToggleButton from './ToggleButton';
import { navbarBreakPoint } from 'config';
import { capitalize } from 'helpers/utils';
import routes from 'routes/routes';
import AppContext, { AuthContext } from 'context/Context';
import {
  fetchExtensionRole,
  useRolePermissionsData
} from 'hooks/useUserServiceData';

const NavbarVertical = () => {
  const {
    config: { navbarStyle, isNavbarVerticalCollapsed, showBurgerMenu }
  } = useContext(AppContext);

  const HTMLClassList = document.getElementsByTagName('html')[0].classList;

  useEffect(() => {
    if (isNavbarVerticalCollapsed) {
      HTMLClassList.add('navbar-vertical-collapsed');
    }
    return () => {
      HTMLClassList.remove('navbar-vertical-collapsed-hover');
    };
  }, [isNavbarVerticalCollapsed, HTMLClassList]);

  //Control mouseEnter event
  let time = null;
  const handleMouseEnter = () => {
    if (isNavbarVerticalCollapsed) {
      time = setTimeout(() => {
        HTMLClassList.add('navbar-vertical-collapsed-hover');
      }, 100);
    }
  };
  const handleMouseLeave = () => {
    clearTimeout(time);
    HTMLClassList.remove('navbar-vertical-collapsed-hover');
  };

  const navbarLabel = label => (
    <Row className="mt-3 mb-2 navbar-vertical-label-wrapper">
      <Col xs="auto" className="navbar-vertical-label navbar-vertical-label">
        {label}
      </Col>
      <Col className="ps-0">
        <hr className="mb-0 navbar-vertical-divider" />
      </Col>
    </Row>
  );

  return (
    <Navbar
      expand={navbarBreakPoint}
      className={classNames('navbar-vertical', {
        [`navbar-${navbarStyle}`]: navbarStyle !== 'transparent'
      })}
      variant="light"
    >
      <Flex alignItems="center">
        <ToggleButton />
        <Logo at="navbar-vertical" />
      </Flex>
      <Navbar.Collapse
        in={showBurgerMenu}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="navbar-vertical-content scrollbar">
          <Nav className="flex-column" as="ul">
            {routes.map(route => showRoleOptions(route))}
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );

  function showRoleOptions(route) {
    // Separate function to show options in terms of roles
    const auth = useContext(AuthContext);
    const extensionRole = fetchExtensionRole(auth);

    // Check if user has authenticated
    if (auth && auth.isAuthenticated) {
      const { isLoading } = useRolePermissionsData(extensionRole);

      switch (
        route.label // Render each section based on a condition
      ) {
        case 'Merchant Portal': // route.label must equal case
          if (extensionRole === 'Merchant')
            return (
              <div key={route.label}>
                {!route.labelDisable && navbarLabel(capitalize(route.label))}
                {isLoading !== true ? (
                  <NavbarVerticalMenu routes={route.children} />
                ) : (
                  <LoadingDots color={'#748194'} width={40} height={20} />
                )}
              </div>
            );
          break;

        case 'Accounting Portal':
          if (extensionRole === 'Accountant')
            return (
              <div key={route.label}>
                {!route.labelDisable && navbarLabel(capitalize(route.label))}
                {isLoading !== true ? (
                  <NavbarVerticalMenu routes={route.children} />
                ) : (
                  <LoadingDots color={'#748194'} width={40} height={20} />
                )}
              </div>
            );
          break;

        case 'Admin Portal':
          if (extensionRole === 'Admin')
            return (
              <div key={route.label}>
                {!route.labelDisable && navbarLabel(capitalize(route.label))}
                {isLoading !== true ? (
                  <NavbarVerticalMenu routes={route.children} />
                ) : (
                  <LoadingDots color={'#748194'} width={40} height={20} />
                )}
              </div>
            );
          break;

        case 'Customer Care Portal':
          if (extensionRole === 'Customer-Care')
            return (
              <div key={route.label}>
                {!route.labelDisable && navbarLabel(capitalize(route.label))}
                {isLoading !== true ? (
                  <NavbarVerticalMenu routes={route.children} />
                ) : (
                  <LoadingDots color={'#748194'} width={40} height={20} />
                )}
              </div>
            );
          break;

        default:
          return (
            <div key={route.label}>
              {!route.labelDisable && navbarLabel(capitalize(route.label))}
              <NavbarVerticalMenu routes={route.children} />
            </div>
          );
      }
    }
  }
};

export default NavbarVertical;

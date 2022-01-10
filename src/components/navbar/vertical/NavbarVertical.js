import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import { Nav, Navbar, Row, Col } from 'react-bootstrap';
import { navbarBreakPoint } from 'config';
import AppContext from 'context/Context';
import Flex from 'components/common/Flex';
import Logo from 'components/common/Logo';
import NavbarVerticalMenu from './NavbarVerticalMenu';
import ToggleButton from './ToggleButton';
import routes from 'routes/routes';
import { capitalize } from 'helpers/utils';

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

  // noinspection CheckTagEmptyBody
  const navbarLabel = label => (
    <Row className="mt-3 mb-2 navbar-vertical-label-wrapper">
      <Col xs="auto" className="navbar-vertical-label navbar-vertical-label">
        {label}
      </Col>
      <Col className="ps-0">
        <hr className="mb-0 navbar-vertical-divider"></hr>
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
        className="asdfa"
      >
        <div className="navbar-vertical-content scrollbar">
          <Nav className="flex-column" as="ul">
            {routes.map(route => (
              <div key={route.label}>
                {!route.labelDisable && navbarLabel(capitalize(route.label))}
                <NavbarVerticalMenu routes={route.children} />
              </div>
            ))}
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarVertical;

import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import classNames from 'classnames';
import AppContext from 'context/Context';
import Logo from 'components/common/Logo';
import SearchBox from './SearchBox';
import { navbarBreakPoint, topNavbarBreakpoint } from 'config';
import autoCompleteInitialItem from 'data/autocomplete/autocomplete';
import TopNavRightSideNavItem from './TopNavRightSideNavItem';

const NavbarTop = () => {
  const {
    config: { showBurgerMenu, navbarPosition, navbarCollapsed },
    setConfig
  } = useContext(AppContext);

  const handleBurgerMenu = () => {
    navbarPosition === 'top' && setConfig('navbarCollapsed', !navbarCollapsed);
    navbarPosition === 'vertical' &&
      setConfig('showBurgerMenu', !showBurgerMenu);
  };

  return (
    <Navbar
      className="navbar-glass fs--1 navbar-top sticky-kit"
      expand={navbarPosition === 'top' ? topNavbarBreakpoint : true}
    >
      <Navbar.Toggle
        className={classNames('toggle-icon-wrapper me-md-3 me-2', {
          'd-lg-none': navbarPosition === 'top',
          [`d-${navbarBreakPoint}-none`]: navbarPosition === 'vertical'
        })}
        as="div"
      >
        <button
          className="navbar-toggler-humburger-icon btn btn-link d-flex flex-center"
          onClick={handleBurgerMenu}
          id="burgerMenu"
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </button>
      </Navbar.Toggle>
      <Logo at="navbar-top" id="topLogo" />
      {/*<div className="fs-2 pe-3">Merchant Portal</div>*/}
      <Nav
        navbar
        className={`align-items-center d-none d-${topNavbarBreakpoint}-block`}
        as="ul"
      >
        <Nav.Item as="li">
          <SearchBox autoCompleteItem={autoCompleteInitialItem} />
        </Nav.Item>
      </Nav>

      <TopNavRightSideNavItem />
    </Navbar>
  );
};

export default NavbarTop;

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ProfileDropdown from '../top/ProfileDropdown';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AltNavbarTop = () => {
  return (
    <Navbar className="navbar-glass fs--1 navbar-top sticky-kit border-bottom border-1">
      <Nav navbar className={`align-items-center`} as="ul">
        <Nav.Item as="li">
          <div className="fs-1">Create Application</div>
        </Nav.Item>
      </Nav>
      <Nav
        navbar
        className="navbar-nav-icons ms-auto flex-row align-items-center"
        as="ul"
      >
        <Link
          to="/"
          className={classNames('text-decoration-none', 'text-left')}
        >
          <Nav.Item>
            <Nav.Link as={'div'} className="px-2 theme-control-toggle">
              <div className="theme-control-toggle-label">
                <FontAwesomeIcon icon="home" className="fs-0" />
              </div>
            </Nav.Link>
          </Nav.Item>
        </Link>

        <ProfileDropdown />
      </Nav>
    </Navbar>
  );
};

export default AltNavbarTop;

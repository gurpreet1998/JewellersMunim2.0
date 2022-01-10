import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import avatarIcon from 'assets/img/team/avatar.png';
import Avatar from 'components/common/Avatar';

import { AuthContext } from '../../../api/authentication/auth-context';

const ProfileDropdown = () => {
  const auth = useContext(AuthContext);
  // console.log('Profile');
  // console.log(auth);
  // console.log('auth');
  // console.log(auth);
  // console.log(auth.isAuthenticated);
  let userName = '';
  let jobTitle = '';
  if (auth && auth.isAuthenticated) {
    // console.log('Auth Name');
    userName = auth.account.idTokenClaims.name;
    console.log('Login data');
    console.log(auth.account.idTokenClaims.name);
    jobTitle = auth.account.idTokenClaims.jobTitle;
  }

  return (
    <Dropdown navbar={true} as="li">
      <Dropdown.Toggle
        bsPrefix="toggle"
        as={Link}
        to="#!"
        className="pe-0 nav-link"
      >
        <Avatar src={avatarIcon} />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-card  dropdown-menu-end">
        <div className="bg-white rounded-2 py-2 dark__bg-1000">
          <Dropdown.Item className="text-center" href="#!">
            <span>
              <p className={'fs-0'}>{userName}</p>
            </span>
            <span>
              <p className={'fw-normal text-700'}>{jobTitle} </p>
            </span>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/pages/profile">
            Profile &amp; account
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/pages/settings">
            Settings
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to="/authentication/logout"
            onClick={() => auth.onSignOut()}
          >
            Logout
          </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;

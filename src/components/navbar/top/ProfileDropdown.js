import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import Avatar from 'components/common/Avatar';
import avatarIcon from 'assets/img/team/avatar.png';

import { AuthContext } from 'api/authentication/auth-context';

const ProfileDropdown = () => {
  const auth = useContext(AuthContext);
  let userName = '';
  let jobTitle = '';
  let firstName = '';
  let lastName = '';

  if (auth && auth.isAuthenticated) {
    console.log('Login data =>', auth.account.idTokenClaims);

    userName = auth.account.idTokenClaims.name;
    jobTitle = auth.account.idTokenClaims.jobTitle;
    firstName = auth.account.idTokenClaims.given_name;
    lastName = auth.account.idTokenClaims.family_name;
  }

  return (
    <Dropdown navbar={true} as="li">
      <Dropdown.Toggle
        bsPrefix="toggle"
        as={Link}
        to="#!"
        className="pe-0 nav-link"
      >
        {auth.isAuthenticated === true ? (
          <Avatar size={'l'} name={`${firstName} ${lastName}`} />
        ) : (
          <Avatar size={'l'} src={avatarIcon} />
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-card  dropdown-menu-end">
        <div className="bg-white rounded-2 py-2 dark__bg-1000">
          <Dropdown.Item className="text-center bg-transparent cursor-default">
            <div className={'fs-0 pb-1'}>{userName}</div>
            <div className={'fw-light text-700'}>{jobTitle}</div>
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

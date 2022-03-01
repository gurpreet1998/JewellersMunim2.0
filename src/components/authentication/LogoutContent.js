import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logoutImg from 'assets/img/icons/spot-illustrations/45.png';
import { AuthContext } from 'context/Context';

const LogoutContent = ({ titleTag: TitleTag }) => {
  const auth = useContext(AuthContext);

  return (
    <>
      <img
        className="d-block mx-auto mb-4"
        src={logoutImg}
        alt="shield"
        width={100}
      />
      <TitleTag className={'text-500'}>See you next time!</TitleTag>
      <p>
        Thanks for using the Choice Portal. You are{' '}
        <br className="d-none d-sm-block" />
        now successfully signed out.
      </p>
      <Button
        color="primary"
        size="sm"
        className="mt-3"
        onClick={() => auth.onSignIn()}
      >
        <FontAwesomeIcon
          icon="chevron-left"
          transform="shrink-4 down-1"
          className="me-1"
        />
        Return to Login
      </Button>
    </>
  );
};

LogoutContent.propTypes = {
  layout: PropTypes.string,
  titleTag: PropTypes.string
};

LogoutContent.defaultProps = {
  layout: 'simple',
  titleTag: 'h4'
};

export default LogoutContent;

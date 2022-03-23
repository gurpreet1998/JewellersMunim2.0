import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from 'context/Context';

const Error401 = () => {
  const auth = useContext(AuthContext);

  return (
    <Card className="text-center">
      <Card.Body className="p-5">
        <div className="display-1 text-300 fs-error">401</div>
        <p className="lead mt-4 text-800 font-sans-serif fw-semi-bold">
          Sorry! It appears that you are not authorized to access this page.
        </p>
        <hr />
        <p>
          If you believe this is a mistake, please
          <Link className="ms-1" to="" onClick={() => auth.onSignIn()}>
            sign in
          </Link>{' '}
          to your Choice Portal and try again or
          <Link
            className="ms-1"
            to={{ pathname: 'mailto:websupport@choicepays.com' }}
            target="_blank"
          >
            contact us
          </Link>
          .
        </p>
        <Link className="btn btn-primary btn-sm mt-3" to="/">
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Take me home
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Error401;

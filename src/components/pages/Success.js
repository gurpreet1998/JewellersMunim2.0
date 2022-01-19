import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import animationData from 'assets/img/animated-icons/check-primary-light.json';

const Success = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Card className="text-center">
      <Card.Body className="p-5">
        <div className="display-1 text-300 fs-error">
          <Lottie options={defaultOptions} style={{ width: '100px' }} />
        </div>
        <p className="lead mt-4 text-800 font-sans-serif fw-semi-bold">
          Thank you for completing the application!
        </p>
        <hr />
        <Link className="btn btn-primary btn-sm mt-3" to="/">
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Take me home
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Success;

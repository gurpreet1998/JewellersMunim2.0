import React from 'react';
import PropTypes from 'prop-types';
import { Row, Spinner } from 'react-bootstrap';
import Flex from '../common/Flex';

const LoadingSpinner = ({ messageText = '', color = 'secondary' }) => {
  return (
    <>
      <Row>
        <Flex justifyContent="center" alignItems="center" className="ms-3">
          <h5 className="text-secondary mb-4">{messageText}</h5>
        </Flex>
      </Row>
      <Row>
        <Flex justifyContent="center" alignItems="center" className="ms-3">
          <div>
            <Spinner animation="border" role="status" variant={color}>
              <span className="visually-hidden">{messageText}</span>
            </Spinner>
          </div>
        </Flex>
      </Row>
    </>
  );
};

LoadingSpinner.propTypes = {
  messageText: PropTypes.string,
  color: PropTypes.string
};

export default LoadingSpinner;

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const BasicCardHeader = props => {
  return (
    <Card.Header>
      <h5
        className={`fw-normal text-800 mb-0 text-nowrap py-2 py-xl-0 ${props.fontSize}`}
      >
        {props.name}
      </h5>
    </Card.Header>
  );
};

BasicCardHeader.propTypes = {
  name: PropTypes.string.isRequired,
  fontSize: PropTypes.string
};
export default BasicCardHeader;

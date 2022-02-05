import React from 'react';
import PropTypes from 'prop-types';

import { Col, Row, Card } from 'react-bootstrap';

const BasicCardHeader = props => {
  return (
    <Card.Header>
      <Row className="flex-between-center">
        <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
          <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">{props.name}</h5>
        </Col>
      </Row>
    </Card.Header>
  );
};

BasicCardHeader.propTypes = {
  name: PropTypes.string
};
export default BasicCardHeader;

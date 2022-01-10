import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import editing from 'assets/img/icons/spot-illustrations/21.png';
import SoftBadge from 'components/common/SoftBadge';

const ComingSoon = () => {
  return (
    <Card>
      <Card.Body className="overflow-hidden p-lg-6">
        <Row className="align-items-center justify-content-between">
          <Col lg={6}>
            <img src={editing} className="img-fluid" alt="" />
          </Col>
          <Col lg={6} className="ps-lg-4 my-5 text-center text-lg-start">
            <SoftBadge pill bg="success" className="me-2">
              Coming soon
            </SoftBadge>
            <h3 className="mt-1">Stay Tuned!</h3>
            <p>We are working on this page</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ComingSoon;

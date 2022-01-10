import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import editing from 'assets/img/icons/spot-illustrations/21.png';

const InviteConsumer = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col>
          <Card>
            <Card.Header>
              <h5 className="fw-normal text-800 mb-0">Invite Consumer</h5>
            </Card.Header>
            <Card.Body className="overflow-hidden p-lg-6">
              <Row className="align-items-center justify-content-between">
                <Col lg={6}>
                  <img src={editing} className="img-fluid" alt="" />
                </Col>
                <Col lg={6} className="ps-lg-4 my-5 text-center text-lg-start">
                  <h3 className="text-primary">Placeholder!</h3>
                  <p className="lead">Invite Consumer Form Goes Here.</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default InviteConsumer;

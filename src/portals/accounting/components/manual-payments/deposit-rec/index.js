import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import TitleCard from 'components/common/TitleCard';

const DepositRec = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <TitleCard title="Manual Payments &gt; Deposit Rec" />
        </Col>
        <Col md={12}>
          <Card>
            <Card.Body>Coming soon</Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DepositRec;

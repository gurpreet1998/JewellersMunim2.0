import React from 'react';
import { Row, Col } from 'react-bootstrap';

import LoanStats from './LoanStats';
import AppStatus from './AppStatus';
import PortalSnapshot from './PortalSnapshot';

const HomeDashboard = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col lg={8}>
          <PortalSnapshot />
        </Col>
        <Col lg={4}>
          <LoanStats />
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <AppStatus />
        </Col>
      </Row>
    </>
  );
};

export default HomeDashboard;

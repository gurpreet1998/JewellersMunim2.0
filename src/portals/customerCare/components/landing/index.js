import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LoanStatusOverview from './loanStatusOverview';

const CustomerCareHome = () => {
  return (
    <>
      {/* <Row className="g-3 mb-3">
        <Col lg={12}>
          <AccountingStats />
        </Col>
      </Row> */}
      <Row className="g-3 mb-3">
        <Col md={12}>
          <LoanStatusOverview />
        </Col>
      </Row>
    </>
  );
};

export default CustomerCareHome;

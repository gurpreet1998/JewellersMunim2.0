import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LoanStatus from './LoanStatus';
import AccountingStats from './AccountingStats';

const AccountingHomeDashboard = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col lg={12}>
          <AccountingStats />
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <LoanStatus />
        </Col>
      </Row>
    </>
  );
};

export default AccountingHomeDashboard;

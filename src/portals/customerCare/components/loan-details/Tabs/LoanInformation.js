import React, { useState } from 'react';
import { LoanInformationTable } from 'data/accounting/landing';
// import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { Card, Row, Col, Button } from 'react-bootstrap';
export default function LoanInformation() {
  // eslint-disable-next-line no-unused-vars
  const [loanInformation, setLoanInformation] = useState(LoanInformationTable);
  return (
    <Card className={'h-lg-100'}>
      <Card.Header>
        {/* <Row>
          <Col xs={6} lg={12}>
            <Button>Action Items</Button>
          </Col>
        </Row> */}
      </Card.Header>
      <Card.Body>
        <Row>
          <Col
            xxl={4}
            sm={4}
            className={
              'border-bottom border-sm-0 border-sm-end border-xxl-0 border-xxl-end ps-4'
            }
          >
            <Row>
              <h6 className="mb-1 flex-1">Orignation Date</h6>
              <h6 className="mb-1 flex-1" text-align="right">
                {loanInformation.orignationDate}
              </h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Original Loan Amount</h6>
              <h6 className="mb-1 flex-1" text-align="right">
                {loanInformation.originalLoanAmount}
              </h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Original Term Month</h6>
              <h6 className="mb-1 flex-1" text-align="right">
                {loanInformation.originalTermMonth}
              </h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Monthly Payment Amount</h6>
              <h6 className="mb-1 flex-1" text-align="right">
                {loanInformation.monthlyPaymentAmount}
              </h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Past Due Date</h6>
              <h6 className="mb-1 flex-1" text-align="right">
                {loanInformation.pastDueDate}
              </h6>
            </Row>
          </Col>
          <Col xxl={4} sm={4} className={'border-xxl-0 ps-4'}>
            <Row>
              <h6 className="mb-1 flex-1">APR</h6>
              <h6 className="mb-1 flex-1" text-align="right">
                {loanInformation.APR}
              </h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Interest Rate</h6>
              <h6 className="mb-1 flex-1" text-align="right">
                {loanInformation.interestRate}
              </h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Daily Interest Amount</h6>
              <h6 className="mb-1 flex-1" text-align="right">
                {loanInformation.dailyInterestAmount}
              </h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Interest Paid To Date</h6>
              <h6 className="mb-1 flex-1" text-align="right">
                {loanInformation.interestPaidToDate}
              </h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Interest Days</h6>
              <h6 className="mb-1 flex-1" text-align="right">
                {loanInformation.interestDays}
              </h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Current Interest Owed</h6>
              <h6 className="mb-1 flex-1" text-align="right">
                {loanInformation.currentInterestOwed}
              </h6>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

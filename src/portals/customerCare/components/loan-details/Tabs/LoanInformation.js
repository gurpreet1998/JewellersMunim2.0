import React, { useState } from 'react';
import { LoanInformationTable } from 'data/accounting/landing';
// import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { Card, Row, Col, Button } from 'react-bootstrap';
export default function LoanInformation() {
  // eslint-disable-next-line no-unused-vars
  const [loanInformation, setLoanInformation] = useState(LoanInformationTable);
  return (
    <Card className="h-lg-100 fs--1">
      <Card.Body>
        <Row>
          <Col
            xxl={4}
            sm={4}
            className="border-bottom border-sm-0 border-sm-end border-xxl-0 border-xxl-end ps-4"
          >
            <Row>
              <h6 className="mb-1 flex-1">Orignation Date</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation.orignationDate}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Original Loan Amount</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation.originalLoanAmount}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Original Term Month</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation.originalTermMonth}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">APR</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation.APR}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Interest Rate</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation.interestRate}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Daily Interest Amount</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation.dailyInterestAmount}
              </p>
            </Row>
          </Col>
          <Col
            xxl={4}
            sm={4}
            className={
              'border-bottom border-sm-0 border-sm-end border-xxl-0 border-xxl-end ps-4'
            }
          >
            <Row>
              <h6 className="mb-1 flex-1">Interest Paid To Date</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation.interestPaidToDate}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Interest Days</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation.interestDays}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Current Interest Owed</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation.currentInterestOwed}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Monthly Payment Amount</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation.monthlyPaymentAmount}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Past Due Date</h6>
              <p className="mb-1 flex-1 text-warning" text-align="right">
                {loanInformation.pastDueDate}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Count of Open Late Fees</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation.openLateFeesCount}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Count of Other Fees</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation.countOfOtherFees}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Count of Late Fee's Reversed</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation.lateFeesReversed}
              </p>
            </Row>
          </Col>
          <Col
            xxl={4}
            sm={4}
            className={
              'border-bottom border-sm-0 border-xxl-0 border-xxl-end ps-4'
            }
          >
            <Row>
              <p className="fw-bold mb-2">Bucket</p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Payment (Days)</h6>
              <p className="mb-1 flex-1" text-align="right">
                Amount
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Current</h6>
              <p className="mb-1 flex-1" text-align="right">
                $ 129.52
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">3</h6>
              <p className="mb-1 flex-1" text-align="right">
                $ 0.00
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">30</h6>
              <p className="mb-1 flex-1" text-align="right">
                $ 0.00
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">60</h6>
              <p className="mb-1 flex-1" text-align="right">
                $ 0.00
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">90</h6>
              <p className="mb-1 flex-1" text-align="right">
                $ 0.00
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">120</h6>
              <p className="mb-1 flex-1" text-align="right">
                $ 0.00
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">150</h6>
              <p className="mb-1 flex-1" text-align="right">
                $ 0.00
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Total Amount Due</h6>
              <p className="mb-1 flex-1" text-align="right">
                $ 129.52
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Past Due Amount</h6>
              <p className="mb-1 flex-1" text-align="right">
                $ 0.00
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Total Fees Due</h6>
              <p className="mb-1 flex-1" text-align="right">
                $ 0.00
              </p>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

// Placeholder Data - todo: replace with API
import { LoanInformationTable } from 'data/accounting/landing';

const LoanInformation = () => {
  const [loanInformation] = useState(LoanInformationTable);
  return (
    <Card className={'h-lg-100'}>
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
              <h6 className="mb-1 flex-1">{loanInformation.orignationDate}</h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Original Loan Amount</h6>
              <h6 className="mb-1 flex-1">
                {loanInformation.originalLoanAmount}
              </h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Original Term Month</h6>
              <h6 className="mb-1 flex-1">
                {loanInformation.originalTermMonth}
              </h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Monthly Payment Amount</h6>
              <h6 className="mb-1 flex-1">
                {loanInformation.monthlyPaymentAmount}
              </h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Past Due Date</h6>
              <h6 className="mb-1 flex-1">{loanInformation.pastDueDate}</h6>
            </Row>
          </Col>
          <Col xxl={4} sm={4} className={'border-xxl-0 ps-4'}>
            <Row>
              <h6 className="mb-1 flex-1">APR</h6>
              <h6 className="mb-1 flex-1">{loanInformation.APR}</h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Interest Rate</h6>
              <h6 className="mb-1 flex-1">{loanInformation.interestRate}</h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Daily Interest Amount</h6>
              <h6 className="mb-1 flex-1">
                {loanInformation.dailyInterestAmount}
              </h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Interest Paid To Date</h6>
              <h6 className="mb-1 flex-1">
                {loanInformation.interestPaidToDate}
              </h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Interest Days</h6>
              <h6 className="mb-1 flex-1">{loanInformation.interestDays}</h6>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Current Interest Owed</h6>
              <h6 className="mb-1 flex-1">
                {loanInformation.currentInterestOwed}
              </h6>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LoanInformation;

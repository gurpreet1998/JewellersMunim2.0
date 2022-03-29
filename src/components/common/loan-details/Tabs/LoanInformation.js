import React, { useState, useEffect, useContext } from 'react';
// import { LoanInformationTable } from 'data/accounting/landing';
import { useParams } from 'react-router-dom';
import { Card, Row, Col, Table } from 'react-bootstrap';
import { loanService } from '_services/loanService';
import { AuthContext } from 'context/Context';
export default function LoanInformation() {
  // eslint-disable-next-line no-unused-vars
  //const loanParams = useParams();
  const { loanId } = useParams();
  const context = useContext(AuthContext);
  const currentRole = context.account.idToken.extension_Role;
  console.log(currentRole);
  const [loanInformation, setLoanInformation] = useState(loanId);
  useEffect(() => {
    loanService.getLoanInformation(loanId).then(res => setLoanInformation(res));
  }, []);
  console.log('Loaninfo', loanInformation);
  const data = [
    { payment: 'Current', amount: 129.52 },
    { payment: '1-5', amount: 0 },
    { payment: '6-29', amount: 0 },
    { payment: '30-59', amount: 0 },
    { payment: '60-89', amount: 0 },
    { payment: '90-119', amount: 0 },
    { payment: '120-159', amount: 0 },
    { payment: '160+', amount: 0 },
    { payment: 'Total Amount Due', amount: 129.52 },
    { payment: 'Past Due Amount', amount: 0 },
    { payment: 'Total Late Fees Due', amount: 0 },
    { payment: 'Total Other Fees Due', amount: 0 }
  ];

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
                {loanInformation?.originalDate}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Original Loan Amount</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.originalLoanAmount}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Original Term Month</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.originalTerms}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">APR</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.apr}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Interest Rate</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.intrestRate}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Daily Interest Amount</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.dailyIntrestAmount}
              </p>
            </Row>
          </Col>
          <Col
            xxl={4}
            sm={4}
            className={
              currentRole === 'Customer-Care'
                ? 'border-bottom border-sm-0 border-sm-end border-xxl-0 border-xxl-end ps-4'
                : 'ps-4'
            }
          >
            <Row>
              <h6 className="mb-1 flex-1">Interest Paid To Date</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.interestPaidToDate}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Interest Days</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.interstDays}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Current Interest Owed</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.currentIntrestOwed}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Monthly Payment Amount</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.monthlyPaymentAmount}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Past Due Date</h6>
              <p className="mb-1 flex-1 text-warning" text-align="right">
                {loanInformation?.daysPastDue}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Count of Open Late Fees</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.openLateFees}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Count of Other Fees</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.otherFees}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Count of Late Fee's Reversed</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.lateFeesReversed}
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
              <p className="fw-bold mb-1">Bucket</p>
            </Row>
            <Row>
              <Table striped bordered hover size="sm" responsive="sm">
                <thead>
                  <tr>
                    <th className="fw-bold">Payment (Days)</th>
                    <th className="fw-bold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((val, key) => {
                    return (
                      <tr key={key}>
                        <th>{val.payment}</th>
                        <td>$ {val.amount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

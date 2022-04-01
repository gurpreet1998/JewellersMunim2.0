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
  const [loanbucket, setLoanBucket] = useState(loanId);
  useEffect(() => {
    loanService.getLoanInformation(loanId).then(res => setLoanInformation(res));
    loanService.getLoanBucketDetails(loanId).then(res => setLoanBucket(res));
  }, []);
  console.log('Loaninfo', loanInformation);

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
                {loanInformation?.originationDate}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Original Loan Amount</h6>
              <p className="mb-1 flex-1" text-align="right">
                $ {loanInformation?.originalLoanAmount}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Original Term Month</h6>
              {loanInformation?.originalTerms > 1 ? (
                <p className="mb-1 flex-1" text-align="right">
                  {loanInformation?.originalTerms} Months
                </p>
              ) : (
                <p className="mb-1 flex-1" text-align="right">
                  {loanInformation?.originalTerms} Month
                </p>
              )}
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">APR</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.apr} %
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Interest Rate</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.interestRate} %
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Daily Interest Amount</h6>
              <p className="mb-1 flex-1" text-align="right">
                $ {loanInformation?.dailyInterestAmount}
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
                $ {loanInformation?.interestPaidToDate}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Interest Days</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.interestDays}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Current Interest Owed</h6>
              <p className="mb-1 flex-1" text-align="right">
                {loanInformation?.currentInterestOwed} %
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Monthly Payment Amount</h6>
              <p className="mb-1 flex-1" text-align="right">
                $ {loanInformation?.monthlyPaymentAmount}
              </p>
            </Row>
            <Row>
              <h6 className="mb-1 flex-1">Days Past Due</h6>
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
                  {loanbucket?.bucketDetails?.map((val, key) => {
                    return (
                      <tr key={key}>
                        <th>{val.bucket}</th>
                        <td>$ {val.amount}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <th>Total Amount Due</th>
                    <td>$ {loanbucket?.totalAmountDue}</td>
                  </tr>
                  <tr>
                    <th>Past Due Amount</th>
                    <td>$ {loanbucket?.pastDueAmount}</td>
                  </tr>
                  <tr>
                    <th>Total Late Fees Due</th>
                    <td>$ {loanbucket?.totalLateFeesDue}</td>
                  </tr>
                  <tr>
                    <th>Total Other Fees Due</th>
                    <td>$ {loanbucket?.totalOtherFeesDue}</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

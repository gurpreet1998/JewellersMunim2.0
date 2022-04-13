import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col, Table } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { AuthContext } from 'context/Context';
import LoadingSpinner from '../../../../loading-spinner/LoadingSpinner';
import { useLoanBucketData, useLoanInformationData } from 'hooks/useLoanData';
import { formatDateStr } from 'helpers/utils';

export default function LoanInformation() {
  const { loanId } = useParams();
  const context = useContext(AuthContext);
  const currentRole = context.account.idToken.extension_Role;

  const { isLoading: loanInfoIsLoading, data: loanInfo } =
    useLoanInformationData(loanId);

  const { isLoading: loanBucketIsLoading, data: loanBucket } =
    useLoanBucketData(loanId);

  return (
    <Card className="h-lg-100 fs--1">
      <Card.Body>
        <Row>
          <Col
            md={6}
            lg={4}
            className="mt-0 border-0 border-md-end border-md-bottom border-lg-bottom-0"
          >
            <Row>
              {loanInfoIsLoading ? (
                <LoadingSpinner messageText={'Loading...'} />
              ) : (
                <>
                  <Col xs={5} sm={6}>
                    <p className="fw-semi-bold mb-2">Origination Date</p>
                    <p className="fw-semi-bold mb-2">Original Loan</p>
                    <p className="fw-semi-bold mb-2">Original Term</p>
                    <p className="fw-semi-bold mb-2">APR</p>
                    <p className="fw-semi-bold mb-2">Interest Rate</p>
                    <p className="fw-semi-bold mb-2">Daily Interest</p>
                    <p className="fw-semi-bold mb-2">Current Principal</p>
                    <p className="fw-semi-bold mb-2 mb-md-3 mb-lg-0">
                      Monthly Payment
                    </p>
                  </Col>
                  <Col>
                    <p className="mb-2">
                      {formatDateStr(loanInfo?.data?.originationDate)}
                    </p>
                    <p className="mb-2">
                      {loanInfo?.data?.originalLoanAmount !== 0 ? (
                        <>
                          <NumberFormat
                            value={loanInfo?.data?.originalLoanAmount}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                          />
                        </>
                      ) : (
                        <>
                          <NumberFormat
                            value={0}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                          />
                        </>
                      )}
                    </p>
                    <p className="mb-2">
                      <p className="mb-1 flex-1">
                        {loanInfo?.data?.originalTerms}{' '}
                        {loanInfo?.data?.originalTerms > 1 ? 'Months' : 'Month'}
                      </p>
                    </p>
                    <p className="mb-2">
                      <NumberFormat
                        value={loanInfo?.data?.apr}
                        displayType={'text'}
                        suffix={'%'}
                        decimalScale={2}
                      />
                    </p>
                    <p className="mb-2">
                      <NumberFormat
                        value={loanInfo?.data?.interestRate}
                        displayType={'text'}
                        suffix={'%'}
                        decimalScale={2}
                      />
                    </p>
                    <p className="mb-2">
                      {loanInfo?.data?.dailyInterestAmount !== 0 ? (
                        <>
                          <NumberFormat
                            value={loanInfo?.data?.dailyInterestAmount}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                          />
                        </>
                      ) : (
                        <>
                          {' '}
                          <NumberFormat
                            value={0}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                          />
                        </>
                      )}
                    </p>
                    <p className={'mb-2'}>
                      {loanInfo?.data?.currentPrincipal !== 0 ? (
                        <>
                          <NumberFormat
                            value={loanInfo?.data?.currentPrincipal || 0}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                          />
                        </>
                      ) : (
                        <>
                          <NumberFormat
                            value={0}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                          />
                        </>
                      )}
                    </p>
                    <p className={'mb-2 mb-md-3 mb-lg-0'}>
                      {loanInfo?.data?.monthlyPaymentAmount !== 0 ? (
                        <>
                          <NumberFormat
                            value={loanInfo?.data?.monthlyPaymentAmount}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                          />
                        </>
                      ) : (
                        <>
                          <NumberFormat
                            value={0}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                          />
                        </>
                      )}
                    </p>
                  </Col>
                </>
              )}
            </Row>
          </Col>
          <Col
            md={6}
            lg={4}
            className="border-0 border-md-bottom border-lg-bottom-0 border-lg-end"
          >
            <Row>
              {loanInfoIsLoading ? (
                <LoadingSpinner messageText={'Loading...'} />
              ) : (
                <>
                  <Col xs={5} sm={6}>
                    <p className="fw-semi-bold mb-2">Date Interest Paid To</p>
                    <p className="fw-semi-bold mb-2">Interest Days</p>
                    <p className="fw-semi-bold mb-2">Unapplied Interest</p>
                    <p className="fw-semi-bold mb-2">Current Interest Owed</p>
                    <p className="fw-semi-bold mb-2">Days Past Due</p>
                    <p className="fw-semi-bold mb-2">Count of Open Late Fees</p>
                    <p className="fw-semi-bold mb-2">Count of Other Fees</p>
                    <p className="fw-semi-bold mb-2 mb-md-3 mb-lg-0">
                      Count of Reversed Late Fees
                    </p>
                  </Col>
                  <Col>
                    <p className={'mb-2'}>
                      {formatDateStr(loanInfo?.data?.interestPaidToDate) ||
                        'Not Found'}
                    </p>
                    <p className={'mb-2'}>{loanInfo?.data?.interestDays}</p>
                    <p className={'mb-2'}>
                      {loanInfo?.data?.unappliedInterestAmt}
                    </p>
                    <p className={'mb-2'}>
                      {loanInfo?.data?.currentInterestOwed !== 0 ? (
                        <>
                          <NumberFormat
                            value={loanInfo?.data?.currentInterestOwed}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                          />
                        </>
                      ) : (
                        <>
                          <NumberFormat
                            value={0}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                          />
                        </>
                      )}
                    </p>
                    <p className={'mb-2'}>
                      {loanInfo?.data?.daysPastDue}{' '}
                      {loanInfo?.data?.daysPastDue > 1 ? 'Days' : 'Day'}
                    </p>
                    <p className={'mb-2'}>{loanInfo?.data?.openLateFees}</p>
                    <p className={'mb-2'}>{loanInfo?.data?.otherFees}</p>
                    <p className={'mb-2 mb-md-3 mb-lg-0'}>
                      {loanInfo?.data?.lateFeesReversed}
                    </p>
                  </Col>
                </>
              )}
            </Row>
          </Col>
          <Col md={6} lg={4} className="pt-3 pt-lg-0">
            {currentRole === 'Customer-Care' ? (
              <Row className={'px-3'}>
                {loanBucketIsLoading ? (
                  <LoadingSpinner messageText={'Loading...'} />
                ) : (
                  <>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th colSpan={2} className={'fw-semi-bold fs-0'}>
                            Bucket
                          </th>
                        </tr>
                        <tr>
                          <th className="fw-medium">Payment (Days)</th>
                          <th className="fw-medium">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loanBucket?.data?.bucketDetails?.map((val, key) => {
                          return (
                            <tr key={key}>
                              <td>{val.bucket}</td>
                              <td>
                                <NumberFormat
                                  value={val.amount}
                                  displayType={'text'}
                                  thousandSeparator={true}
                                  prefix={'$'}
                                  decimalScale={2}
                                  fixedDecimalScale={true}
                                />
                              </td>
                            </tr>
                          );
                        })}
                        <tr>
                          <th>Total Amount Due</th>
                          <th>
                            <NumberFormat
                              value={loanBucket?.data?.totalAmountDue}
                              displayType={'text'}
                              thousandSeparator={true}
                              prefix={'$'}
                              decimalScale={2}
                              fixedDecimalScale={true}
                            />
                          </th>
                        </tr>
                        <tr>
                          <th>Past Due Amount</th>
                          <th>
                            <NumberFormat
                              value={loanBucket?.data?.pastDueAmount}
                              displayType={'text'}
                              thousandSeparator={true}
                              prefix={'$'}
                              decimalScale={2}
                              fixedDecimalScale={true}
                            />
                          </th>
                        </tr>
                        <tr>
                          <th>Total Late Fees Due</th>
                          <th>
                            <NumberFormat
                              value={loanBucket?.data?.totalLateFeesDue}
                              displayType={'text'}
                              thousandSeparator={true}
                              prefix={'$'}
                              decimalScale={2}
                              fixedDecimalScale={true}
                            />
                          </th>
                        </tr>
                        <tr>
                          <th>Total Other Fees Due</th>
                          <th>
                            <NumberFormat
                              value={loanBucket?.data?.totalOtherFeesDue}
                              displayType={'text'}
                              thousandSeparator={true}
                              prefix={'$'}
                              decimalScale={2}
                              fixedDecimalScale={true}
                            />
                          </th>
                        </tr>
                      </tbody>
                    </Table>
                  </>
                )}
              </Row>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

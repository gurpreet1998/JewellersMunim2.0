import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col, Table } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import LoadingSpinner from '../../../../loading-spinner/LoadingSpinner';
import { useLoanBucketData, useLoanInformationData } from 'hooks/useLoanData';
import { formatDateStr } from 'helpers/utils';

export default function LoanInformation() {
  const { loanId } = useParams();
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
            <Row className={'d-flex justify-content-center px-2'}>
              {loanInfoIsLoading ? (
                <LoadingSpinner messageText={'Loading...'} />
              ) : (
                <>
                  <Col xs={11} sm={12}>
                    <div className={'d-flex pt-0 border-dashed-bottom'}>
                      <p className="fw-semi-bold flex-grow-1">
                        Origination Date
                      </p>
                      <p>{formatDateStr(loanInfo?.data?.originationDate)}</p>
                    </div>
                    <div className={'d-flex pt-2 border-dashed-bottom'}>
                      <p className="fw-semi-bold flex-grow-1">Original Loan</p>
                      <p>
                        <NumberFormat
                          value={
                            loanInfo?.data?.originalLoanAmount !== 0
                              ? loanInfo?.data?.originalLoanAmount
                              : 0
                          }
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'$'}
                          decimalScale={2}
                          fixedDecimalScale={true}
                        />
                      </p>
                    </div>
                    <div className={'d-flex  pt-2 border-dashed-bottom'}>
                      <p className="fw-semi-bold flex-grow-1">Original Term</p>
                      <p>
                        {loanInfo?.data?.originalTerms}{' '}
                        {loanInfo?.data?.originalTerms > 1 ? 'Months' : 'Month'}
                      </p>
                    </div>
                    <div className={'d-flex pt-2 border-dashed-bottom'}>
                      <p className="fw-semi-bold flex-grow-1">APR</p>
                      <p>
                        <NumberFormat
                          value={loanInfo?.data?.apr}
                          displayType={'text'}
                          suffix={'%'}
                          decimalScale={2}
                          fixedDecimalScale={true}
                        />
                      </p>
                    </div>
                    <div className={'d-flex pt-2 border-dashed-bottom'}>
                      <p className="fw-semi-bold flex-grow-1">Interest Rate</p>
                      <p>
                        <NumberFormat
                          value={loanInfo?.data?.interestRate}
                          displayType={'text'}
                          suffix={'%'}
                          decimalScale={2}
                          fixedDecimalScale={true}
                        />
                      </p>
                    </div>
                    <div className={'d-flex pt-2 border-dashed-bottom'}>
                      <p className="fw-semi-bold flex-grow-1">Daily Interest</p>
                      <p>
                        <NumberFormat
                          value={
                            loanInfo?.data?.dailyInterestAmount !== 0
                              ? loanInfo?.data?.dailyInterestAmount
                              : 0
                          }
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'$'}
                          decimalScale={2}
                          fixedDecimalScale={true}
                        />
                      </p>
                    </div>

                    <div className={'d-flex pt-2 border-dashed-bottom'}>
                      <p className="fw-semi-bold flex-grow-1">
                        Current Principal
                      </p>
                      <p>
                        <NumberFormat
                          value={
                            loanInfo?.data?.current !== null
                              ? loanInfo?.data?.current
                              : 0
                          }
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'$'}
                          decimalScale={2}
                          fixedDecimalScale={true}
                        />
                      </p>
                    </div>

                    <div
                      className={'d-flex pt-2 border-dashed-bottom border-md-0'}
                    >
                      <p className="fw-semi-bold flex-grow-1">
                        Monthly Payment
                      </p>
                      <p className={'mb-2 mb-md-3 mb-lg-0'}>
                        <NumberFormat
                          value={
                            loanInfo?.data?.monthlyPaymentAmount !== 0
                              ? loanInfo?.data?.monthlyPaymentAmount
                              : 0
                          }
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'$'}
                          decimalScale={2}
                          fixedDecimalScale={true}
                        />
                      </p>
                    </div>
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
            <Row className={'d-flex justify-content-center px-2'}>
              {loanInfoIsLoading ? (
                <LoadingSpinner messageText={'Loading...'} />
              ) : (
                <>
                  <Col xs={11} sm={12}>
                    <div className={'d-flex pt-2 pt-md-0 border-dashed-bottom'}>
                      <p className="fw-semi-bold flex-grow-1">
                        Date Interest Paid To
                      </p>
                      <p>{loanInfo?.data?.interestPaidToDate || 'Not Found'}</p>
                    </div>

                    <div className={'d-flex pt-2 border-dashed-bottom'}>
                      <p className="fw-semi-bold flex-grow-1">Interest Days</p>
                      <p>{loanInfo?.data?.interestDays}</p>
                    </div>
                    <div className={'d-flex pt-2 border-dashed-bottom'}>
                      <p className="fw-semi-bold flex-grow-1">
                        Unapplied Interest
                      </p>
                      <p>
                        <NumberFormat
                          value={
                            loanInfo?.data?.unappliedInterestAmt !== 0
                              ? loanInfo?.data?.unappliedInterestAmt
                              : 0
                          }
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'$'}
                          decimalScale={2}
                          fixedDecimalScale={true}
                        />
                      </p>
                    </div>
                    <div className={'d-flex pt-2 border-dashed-bottom'}>
                      <p className="fw-semi-bold flex-grow-1">
                        Current Interest Owed
                      </p>
                      <p>
                        <NumberFormat
                          value={
                            loanInfo?.data?.currentInterestOwed !== 0
                              ? loanInfo?.data?.currentInterestOwed
                              : 0
                          }
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'$'}
                          decimalScale={2}
                          fixedDecimalScale={true}
                        />
                      </p>
                    </div>
                    <div className={'d-flex pt-2 border-dashed-bottom'}>
                      <p className="fw-semi-bold flex-grow-1">Days Past Due</p>
                      <p>{loanInfo?.data?.daysPastDue}</p>
                    </div>
                    <div className={'d-flex pt-2 border-dashed-bottom'}>
                      <p className="fw-semi-bold flex-grow-1">
                        Count of Open Late Fees
                      </p>
                      <p>{loanInfo?.data?.openLateFees}</p>
                    </div>
                    <div className={'d-flex pt-2 border-dashed-bottom'}>
                      <p className="fw-semi-bold flex-grow-1">
                        Count of Other Fees
                      </p>
                      <p>{loanInfo?.data?.otherFees}</p>
                    </div>
                    <div className={'d-flex pt-2'}>
                      <p className="fw-semi-bold flex-grow-1">
                        Count of Reversed Late Fees
                      </p>
                      <p>{loanInfo?.data?.lateFeesReversed}</p>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </Col>
          <Col lg={4} className="pt-3 pt-lg-0">
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
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

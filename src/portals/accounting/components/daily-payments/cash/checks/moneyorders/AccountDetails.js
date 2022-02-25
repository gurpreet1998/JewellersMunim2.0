import React, { useState, useEffect } from 'react';
import Flex from 'components/common/Flex';
import { Row, Col, Form, Card } from 'react-bootstrap';
import TitleCard from 'components/common/TitleCard';
import Payment from './Payment';
import Deposits from './Deposits';

import { LoanTableDataACH } from 'data/accounting/unmatcheddeposits';
import { BulkDepositsTableDataACH } from 'data/accounting/unmatcheddeposits';
import TransactionHandler from '../../../TransactionHandler';

const AccountDetails = () => {
  // const [bank, setBank] = useState(0);
  const [paymentbatch, setPaymentBatch] = useState('');
  const [paymentbatchtype, setPaymentBatchType] = useState('');
  const [loanData, setLoanData] = useState(LoanTableDataACH);
  const [flag, setFlag] = useState(false);
  const [depositData, setDepositData] = useState(BulkDepositsTableDataACH);
  const tempLoanData = LoanTableDataACH;
  const tempDepositData = BulkDepositsTableDataACH;

  const reconcileData = () => {
    const result1 = loanData.filter(o =>
      depositData.some(({ depositAmount }) => o.paymentAmount === depositAmount)
    );
    setLoanData(result1);

    const result2 = depositData.filter(o =>
      loanData.some(({ paymentAmount }) => o.depositAmount === paymentAmount)
    );
    setFlag(true);
    setDepositData(result2);
  };

  const unReconcileData = () => {
    setLoanData(tempLoanData);
    console.log('tempLoanData', tempLoanData);
    setDepositData(tempDepositData);
    setFlag(false);
  };

  useEffect(() => {
    console.log('UseEffect ', loanData);
  }, [loanData]);

  useEffect(() => {
    if (paymentbatchtype === '') {
      setPaymentBatch('');
    }
  }, [paymentbatchtype]);

  return (
    <>
      <Row className="g-3 mb-3">
        <Col>
          <TitleCard title="Payment Reconciliation &gt; Cash/Check/Money Orders" />
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>Payment Batch Type</Col>
                <Col>
                  <Flex>
                    <Form.Select
                      size="sm"
                      value={paymentbatchtype}
                      onChange={e => setPaymentBatchType(e.target.value)}
                      className="me-2"
                    >
                      <option value="">Select Payment Batch Type</option>
                      <option value="Cash/Money Order">Cash/Money Order</option>
                    </Form.Select>
                  </Flex>
                </Col>
                {paymentbatchtype !== '' ? (
                  <>
                    <Col>Payment Batch</Col>
                    <Col>
                      <Flex>
                        <Form.Select
                          size="sm"
                          value={paymentbatch}
                          onChange={e => setPaymentBatch(e.target.value)}
                          className="me-2"
                        >
                          <option value="">Select Payment Batch Type</option>
                          <option value="20220209-CashMoneyOrder">
                            20220209-CashMoneyOrder
                          </option>
                        </Form.Select>
                      </Flex>
                    </Col>
                  </>
                ) : (
                  <></>
                )}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <TitleCard title="Payment Reconciliation &gt; ACH"
            endEl={
              <Flex>
                <Form.Select
                  size="sm"
                  value={paymentbatch}
                  onChange={e => setPaymentBatch(e.target.value)}
                  className="me-2"
                >
                  <option value="">Select Payment Batch</option>
                  <option onClick={change} value="20220207-ACHPersonalChecking">20220207-ACHPersonalChecking</option>
                </Form.Select>
              </Flex>
            }
          /> */}
      <Card className="bg-100 shadow-none border p-card">
        <Row className="g-3">
          <Col lg={{ span: 2, order: 2 }}>
            {paymentbatch !== '' ? (
              <TransactionHandler
                reconcileData={reconcileData}
                unReconcileData={unReconcileData}
                flag={flag}
              />
            ) : (
              <></>
            )}
          </Col>
          <Col lg={{ span: 5, order: 1 }}>
            {paymentbatch !== '' ? <Payment data={loanData} /> : <></>}
          </Col>
          <Col lg={{ span: 5, order: 3 }}>
            {paymentbatch !== '' ? <Deposits data={depositData} /> : <></>}
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default AccountDetails;

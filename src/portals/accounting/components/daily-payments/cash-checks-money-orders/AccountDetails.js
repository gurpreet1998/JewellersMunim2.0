import React, { useState, useEffect } from 'react';
import Flex from 'components/common/Flex';
import { Row, Col, Form, Card } from 'react-bootstrap';
import TitleCard from 'components/common/TitleCard';
import Payment from './Payment';
import Deposits from './Deposits';

import { LoanTableDataACH } from 'data/accounting/unmatcheddeposits';
import { BulkDepositsTableDataACH } from 'data/accounting/unmatcheddeposits';
import { getItemFromStore, setItemToStore } from 'helpers/utils';
import ReconciliationHandler from '../../ReconciliationHandler';

const AccountDetails = () => {
  // const [bank, setBank] = useState(0);
  const [paymentBatch, setPaymentBatch] = useState('');
  const [paymentBatchType, setPaymentBatchType] = useState('');
  const [loanData, setLoanData] = useState(LoanTableDataACH);
  const [disabled] = useState(true);
  const [reconciledChecked, setReconciledChecked] = useState(true);
  const [depositData, setDepositData] = useState(BulkDepositsTableDataACH);
  const tempLoanData = LoanTableDataACH;
  const tempDepositData = BulkDepositsTableDataACH;

  const reconcileOnClick = () => {
    const result1 = loanData.filter(o =>
      depositData.some(({ depositAmount }) => o.paymentAmount === depositAmount)
    );
    setLoanData(result1);

    const result2 = depositData.filter(o =>
      loanData.some(({ paymentAmount }) => o.depositAmount === paymentAmount)
    );
    setReconciledChecked(true);
    setDepositData(result2);
  };

  const unreconciledOnClick = () => {
    setLoanData(tempLoanData);
    console.log('tempLoanData', tempLoanData);
    setDepositData(tempDepositData);
    setReconciledChecked(false);
  };

  const matchOnClick = () => {
    return console.log('matchOnClick placeholder');
  };

  const unMatchOnClick = () => {
    return console.log('unMatchOnClick placeholder');
  };

  const resetOnClick = () => {
    return console.log('resetOnClick placeholder');
  };

  const postOnClick = () => {
    return console.log('postOnClick placeholder');
  };

  useEffect(() => {
    console.log('UseEffect loanData:', loanData);
  }, [loanData]);

  useEffect(() => {
    if (paymentBatchType === '') {
      setPaymentBatch('');
    }
  }, [paymentBatchType]);

  useEffect(() => {
    const batchData = getItemFromStore(
      'daily-payments-cash-checks-money-orders-store',
      {
        paymentBatchType: '',
        paymentBatch: ''
      }
    );
    setPaymentBatchType(batchData.paymentBatchType);
    setPaymentBatch(batchData.paymentBatch);
  }, []);

  useEffect(() => {
    const valuesToSave = { paymentBatchType, paymentBatch };
    setItemToStore(
      'daily-payments-cash-checks-money-orders-store',
      valuesToSave
    );
  });

  return (
    <>
      <Row className="g-3 mb-3">
        <Col>
          <TitleCard
            title="Payment Reconciliation &gt; Cash, Checks, & Money Orders"
            endEl={
              <Flex>
                <Form.Select
                  size="sm"
                  value={paymentBatchType}
                  onChange={e => setPaymentBatchType(e.target.value)}
                  className="me-2"
                >
                  <option value="">Select Payment Batch Type</option>
                  <option value="Cash/Money Order">Cash/Money Order</option>
                </Form.Select>
                {paymentBatchType.length !== 0 ? (
                  <Form.Select
                    size="sm"
                    value={paymentBatch}
                    onChange={e => setPaymentBatch(e.target.value)}
                    className="me-2"
                  >
                    <option value="">Select Payment Batch</option>
                    <option value="20220209-CashMoneyOrder">
                      20220209-CashMoneyOrder
                    </option>
                  </Form.Select>
                ) : (
                  <></>
                )}
              </Flex>
            }
          />
        </Col>
      </Row>

      <Card className="bg-100 shadow-none border p-card">
        <Row className="g-3">
          {paymentBatch.length !== 0 ? (
            <>
              <Col lg={{ span: 2, order: 2 }}>
                <ReconciliationHandler
                  reconciledAction={reconcileOnClick}
                  unReconciledAction={unreconciledOnClick}
                  matchAction={matchOnClick}
                  unMatchAction={unMatchOnClick}
                  resetAction={resetOnClick}
                  postAction={postOnClick}
                  disabled={disabled}
                  reconciledChecked={reconciledChecked}
                  selectedFilter={paymentBatch}
                />
              </Col>
              <Col lg={{ span: 5, order: 1 }}>
                <Payment data={loanData} />
              </Col>
              <Col lg={{ span: 5, order: 3 }}>
                <Deposits data={depositData} />
              </Col>
            </>
          ) : (
            <>
              <Card.Body className="overflow-hidden p-lg-6">
                <Row className="align-items-center justify-content-between">
                  <Col sm={12} className=" my-5 text-center">
                    <h3 className="mt-1">Nothing Selected!</h3>
                    <p>
                      Select a Payment Batch Type and Payment Batch to review
                      loans for reconciliation
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </>
          )}
        </Row>
      </Card>
    </>
  );
};
export default AccountDetails;

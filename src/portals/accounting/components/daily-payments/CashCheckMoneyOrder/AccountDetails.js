import React, { useState } from 'react';
import Flex from 'components/common/Flex';
import { Row, Col, Form, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import TitleCard from 'components/common/TitleCard';
import ReconciliationHandler from '../../ReconciliationHandler';
import Deposits from './Deposits';
import Payment from './Payment';

import { CashCheckMoneyOrderService } from '_services/accounting';
import {
  usePaymentBatchData,
  usePaymentBatchTypeData,
  useReconciledCashCheckMoneyOrderData,
  useUnreconciledCashCheckMoneyOrderData
} from 'hooks/useAccountingData';

const AccountDetails = () => {
  const [paymentBatchId, setPaymentBatchId] = useState(0);
  const [paymentBatchType, setPaymentBatchType] = useState(0);
  const [reconciledChecked, setReconciledChecked] = useState(true);
  const [loanData, setLoanData] = useState([]);
  const [depositData, setDepositData] = useState([]);
  const [disabled] = useState(true);
  const [selectedDeposit, setSelectedDeposit] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState([]);

  const { data: paymentBatchTypes } = usePaymentBatchTypeData();
  const { data: paymentBatches } = usePaymentBatchData(paymentBatchType);

  const { isLoading: reconciledDataLoading, data: reconciledData } =
    useReconciledCashCheckMoneyOrderData(paymentBatchId);

  const { isLoading: unreconciledDataLoading, data: unreconciledData } =
    useUnreconciledCashCheckMoneyOrderData(paymentBatchId);

  let useReconciledData = () => {
    if (reconciledDataLoading) {
      console.log('loading...', reconciledDataLoading);
    } else {
      setReconciledChecked(true);
      setLoanData(reconciledData?.data?.result?.paymentDataModel);
      setDepositData(reconciledData?.data?.result?.bankDepositDataModel);
    }
  };

  let useUnreconciledData = () => {
    if (unreconciledDataLoading) {
      console.log('loading...', unreconciledDataLoading);
    } else {
      setReconciledChecked(false);
      setLoanData(unreconciledData?.data?.result?.paymentDataModel);
      setDepositData(unreconciledData?.data?.result?.bankDepositDataModel);
    }
  };

  const chooseLoan = val => {
    console.log('loan val', val);
    console.log('selectedLoan', selectedLoan);

    setSelectedLoan(val);
  };
  const chooseDeposit = val => {
    console.log('deposit val', val);
    setSelectedDeposit(val);
  };

  let selectedData = {
    paymentDataModel: selectedLoan,
    bankDepositDataModel: selectedDeposit
  };

  const matchOnClick = () => {
    CashCheckMoneyOrderService.saveMatchRecordsForCashCheckAndMoneyOrder(
      paymentBatchId,
      selectedData
    ).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
      let paymentSum = 0;
      let depositSum = 0;
      console.log('selectedData', selectedData);
      selectedData.paymentDataModel.forEach(item => {
        console.log('item', item);
        paymentSum += item.amount;
      });
      selectedData.bankDepositDataModel.forEach(item => {
        depositSum += item.depositAmount;
        console.log(item);
      });
      console.log('Payment sum', paymentSum);
      console.log('Deposit sum', depositSum);
      if (depositSum !== paymentSum) {
        toast.warning(`Match record failed`);
      }
    });
  };

  const unMatchOnClick = () => {
    CashCheckMoneyOrderService.saveUnMatchRecordsForCashCheckAndMoneyOrder(
      paymentBatchId,
      selectedData
    ).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
    });
  };

  const resetOnClick = () => {
    console.log('Reset Placeholder - Action Still Required');
  };

  const postOnClick = () => {
    CashCheckMoneyOrderService.savePostTransactionForCashCheckAndMoneyOrder(
      paymentBatchId,
      paymentBatchType
    ).then(res => {
      if (res.result === 'Please try again') {
        toast.warning(res.result);
      } else {
        toast.success(res.result);
      }
    });
  };

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
                  onChange={e => setPaymentBatchType(Number(e.target.value))}
                  className="me-2"
                >
                  <option value={0}>Select Payment Batch Type</option>
                  {paymentBatchTypes?.data?.map((batch, index) => (
                    <option value={batch.paymentBatchTypeId} key={index}>
                      {batch.paymentBatchTypeName}
                    </option>
                  ))}
                </Form.Select>
                {paymentBatchType > 0 ? (
                  <Form.Select
                    size="sm"
                    value={paymentBatchId}
                    onChange={e => setPaymentBatchId(Number(e.target.value))}
                    className="me-2"
                  >
                    <option value={0}>Select Payment Batch</option>
                    {paymentBatches?.data?.map((batch, index) => (
                      <option value={batch.paymentBatchId} key={index}>
                        {batch.batch}
                      </option>
                    ))}
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
          {paymentBatchId > 0 ? (
            <>
              <Col lg={{ span: 2, order: 2 }}>
                <ReconciliationHandler
                  reconciledAction={useReconciledData}
                  unReconciledAction={useUnreconciledData}
                  matchAction={matchOnClick}
                  unMatchAction={unMatchOnClick}
                  resetAction={resetOnClick}
                  postAction={postOnClick}
                  disabled={disabled}
                  reconciledChecked={reconciledChecked}
                />
              </Col>
              <Col lg={{ span: 5, order: 1 }}>
                <Payment data={loanData} chooseLoan={chooseLoan} />
              </Col>
              <Col lg={{ span: 5, order: 3 }}>
                <Deposits data={depositData} chooseDeposit={chooseDeposit} />
              </Col>
            </>
          ) : (
            <>
              <Card.Body className="overflow-hidden p-lg-6">
                <Row className="align-items-center justify-content-between">
                  <Col sm={12} className=" my-5 text-center">
                    <h3 className="mt-1">Nothing Selected!</h3>
                    <p>
                      Select a batch type and payment batch to review for
                      reconciliation
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

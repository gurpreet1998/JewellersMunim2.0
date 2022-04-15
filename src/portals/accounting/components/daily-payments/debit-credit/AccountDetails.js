import React, { useState, useEffect } from 'react';
import Flex from 'components/common/Flex';
import { Row, Col, Form, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import TitleCard from 'components/common/TitleCard';
import Payment from './Payment';
import Deposits from './Deposits';
import { DebitCreditCardService } from '_services/accounting';
import {
  usePaymentBatchData,
  usePaymentBatchTypeSelectionData,
  useReconciledCardData,
  useUnreconciledCardData
} from 'hooks/useAccountingData';
import ReconciliationHandler from '../../ReconciliationHandler';

const AccountDetails = () => {
  const [paymentBatchId, setPaymentBatchId] = useState(0);
  const [paymentBatchType, setPaymentBatchType] = useState(0);
  const [reconciledCheck, setReconciledCheck] = useState(true);
  const [disabled] = useState(true);
  const [loanData, setLoanData] = useState([]);
  const [depositData, setDepositData] = useState([]);
  const [selectedDeposit, setSelectedDeposit] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState([]);

  const { data: paymentBatchTypes } = usePaymentBatchTypeSelectionData();
  const { data: paymentBatches } = usePaymentBatchData(paymentBatchType);
  const { data: reconciledCards } = useReconciledCardData(paymentBatchId);
  const { data: unreconciledCards } = useUnreconciledCardData(paymentBatchId);

  console.log('reconciledCards ', reconciledCards);
  console.log('unreconciledCards ', unreconciledCards);
  console.log('loanData ', loanData);

  const resetOnClick = () => {
    console.log('Reset Placeholder - Action Still Required');
  };

  useEffect(() => {
    if (paymentBatchId !== 0) {
      DebitCreditCardService.getGetReconciledDataForDebitCreditCard(
        paymentBatchId
      ).then(res => {
        setLoanData(res.result.paymentDataModel);
        setDepositData(res.result.bankDepositDataModel);
        setReconciledCheck(true);
      });
    }
  }, [paymentBatchId]);

  useEffect(() => {
    if (reconciledCheck) {
      reconcileOnClick(paymentBatchId);
    } else {
      unreconciledOnClick(paymentBatchId);
    }
  }, [reconciledCheck]);

  const reconcileOnClick = event => {
    if (paymentBatchId > 0) {
      DebitCreditCardService.getGetReconciledDataForDebitCreditCard(event).then(
        res => {
          setDepositData(res.result.bankDepositDataModel);
          setLoanData(res.result.paymentDataModel);
          setReconciledCheck(true);
        }
      );
    }
  };

  const unreconciledOnClick = e => {
    DebitCreditCardService.getGetUnReconciledDataForDebitCreditCard(e).then(
      res => {
        setDepositData(res.result.bankDepositDataModel);
        setLoanData(res.result.paymentDataModel);
        setReconciledCheck(false);
      }
    );
  };

  const chooseLoan = val => {
    setSelectedLoan(val);
  };
  const chooseDeposit = val => {
    setSelectedDeposit(val);
  };

  let selectedData = {
    paymentDataModel: selectedLoan,
    bankDepositDataModel: selectedDeposit
  };
  console.log('selectedData', selectedData);
  const matchOnClick = () => {
    DebitCreditCardService.saveMatchRecordsForDebitCreditCard(
      paymentBatchId,
      selectedData
    ).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
      let paymentSum = 0;
      let depositSum = 0;
      selectedData.paymentDataModel.forEach(item => {
        paymentSum += item.amount;
      });
      selectedData.bankDepositDataModel.forEach(item => {
        depositSum += item.depositAmount;
        console.log('item', item);
      });
      console.log('Payment sum', paymentSum);
      console.log('Deposit sum', depositSum);
      if (depositSum !== paymentSum) {
        toast.warning(`Match record failed`);
      }
    });
  };

  const unMatchOnClick = () => {
    DebitCreditCardService.saveUnMatchRecordsForDebitCreditCard(
      paymentBatchId,
      selectedData
    ).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
    });
  };

  const postOnClick = () => {
    DebitCreditCardService.savePostTransactionForDebitCreditCard(
      paymentBatchId,
      paymentBatchType
    ).then(res => {
      if (res.result === 'Please try again') {
        toast.warning(res.result);
      } else {
        toast.success(res.result);
        setDepositData([]);
        setLoanData([]);
      }
    });
  };

  return (
    <>
      <Row className="g-3 mb-3">
        <Col>
          <TitleCard
            title="Payment Reconciliation &gt; Debit/Credit Cards"
            endEl={
              <Flex>
                <Form.Select
                  size="sm"
                  value={paymentBatchType}
                  onChange={e => setPaymentBatchType(Number(e.target.value))}
                  className="me-2"
                >
                  <option value={0}>Select Payment Batch Type</option>
                  {paymentBatchTypes?.data.map((batch, index) => (
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
                  reconciledAction={() => {
                    setReconciledCheck(paymentBatchId);
                  }}
                  unReconciledAction={() => {
                    unreconciledOnClick(paymentBatchId);
                  }}
                  matchAction={matchOnClick}
                  unMatchAction={unMatchOnClick}
                  resetAction={resetOnClick}
                  postAction={postOnClick}
                  disabled={disabled}
                  reconciledChecked={reconciledCheck}
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
                      Select a Lender and Bank Account to review loans for
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

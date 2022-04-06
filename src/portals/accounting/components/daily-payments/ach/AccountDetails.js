import React, { useState, useEffect } from 'react';
import Flex from 'components/common/Flex';
import { toast } from 'react-toastify';
import { Row, Col, Form, Card } from 'react-bootstrap';
import TitleCard from 'components/common/TitleCard';
import Payment from './Payment';
import Deposits from './Deposits';

import { getItemFromStore, setItemToStore } from 'helpers/utils';
import { ACHService } from '_services/accounting';
import ReconciliationHandler from '../../ReconciliationHandler';

const AccountDetails = () => {
  const [paymentBatch, setPaymentBatch] = useState('');
  const [paymentBatches, setPaymentBatches] = useState([]);
  const [loanData, setLoanData] = useState([]);
  const [disabled] = useState(true);
  const [reconciledChecked, setReconciledChecked] = useState(true);

  // todo: NOTE: What is this used for? If needed, can we name it something more descriptive
  // const [Cflag, setCflag] = useState(true);

  const [depositData, setDepositData] = useState([]);
  const [selectedDeposit, setSelectedDeposit] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState([]);

  useEffect(() => {
    ACHService.getPaymentBatchACH().then(res => setPaymentBatches(res));
  }, []);

  useEffect(() => {
    if (paymentBatch.length > 0) {
      ACHService.getGetReconciledACHData(paymentBatch).then(res => {
        setLoanData(res.result.paymentDataModel);
        setDepositData(res.result.bankDepositDataModel);
      });
    }
  }, [paymentBatch]);

  useEffect(() => {}, [loanData, depositData]);

  useEffect(() => {
    const batchData = getItemFromStore('daily-payments-ach-batch-store', {
      paymentBatch: ''
    });
    setPaymentBatch(batchData.paymentBatch);
  }, []);

  useEffect(() => {
    const valuesToSave = { paymentBatch };
    setItemToStore('daily-payments-ach-batch-store', valuesToSave);
  });

  const postOnClick = () => {
    ACHService.savePostACHTransaction(paymentBatch).then(res => {
      if (res.result === 'Please try again') {
        toast.warning(res.result);
      } else {
        toast.success(res.result);
      }
    });
  };

  const reconcileOnClick = event => {
    ACHService.getGetReconciledACHData(event).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
      setReconciledChecked(true);
    });
  };

  const unreconciledOnClick = e => {
    ACHService.getGetUnReconciledACHData(e).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
      setReconciledChecked(false);
    });
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

  const matchOnClick = () => {
    ACHService.saveMatchACHRecords(paymentBatch, selectedData).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
      let paymentSum = 0;
      let depositSum = 0;
      selectedData.paymentDataModel.forEach(item => {
        paymentSum += item.amount;
      });
      selectedData.bankDepositDataModel.forEach(item => {
        depositSum += item.depositAmount;
        console.log(item);
      });
      console.log('Payment sum', paymentSum);
      console.log('Deposit sum', depositSum);
      if (depositSum != paymentSum) {
        toast.warning(`Match record failed`);
      }
    });
  };

  const unMatchOnClick = () => {
    ACHService.saveUnMatchACHRecords(paymentBatch, selectedData).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
      // setCflag(false);
    });
  };

  const resetOnClick = () => {
    console.log('PLACEHOLDER: Add Reset on Click Functionality');
  };

  return (
    <>
      <Row className="g-3 mb-3">
        <Col>
          <TitleCard
            title="Payment Reconciliation &gt; ACH"
            endEl={
              <Flex>
                <Form.Select
                  size="sm"
                  value={paymentBatch}
                  onChange={e => setPaymentBatch(e.target.value)}
                  className="me-2"
                >
                  <option value="">Select Payment Batch</option>
                  {paymentBatches.map((batch, index) => (
                    <option value={batch.paymentBatchId} key={index}>
                      {batch.paymentBatchTypeName}
                    </option>
                  ))}
                </Form.Select>
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
                  reconciledAction={() => {
                    reconcileOnClick(paymentBatch);
                  }}
                  unReconciledAction={() => {
                    unreconciledOnClick(paymentBatch);
                  }}
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
                    <p>Select a Payment Batch to review for reconciliation</p>
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

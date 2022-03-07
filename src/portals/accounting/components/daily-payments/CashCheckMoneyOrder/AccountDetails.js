import React, { useState, useEffect } from 'react';
import Flex from 'components/common/Flex';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import TitleCard from 'components/common/TitleCard';
import Payment from './Payment';
import Deposits from './Deposits';
import {
  CashCheckMoneyOrderPaymentBatchService,
  CashCheckMoneyOrderService
} from '_services/accounting';

const AccountDetails = () => {
  const [paymentbatch, setPaymentBatch] = useState(0);
  const [paymentbatchtype, setPaymentBatchType] = useState(0);
  const [paymentbatches, setPaymentBatches] = useState([]);
  const [paymentbatchtypes, setPaymentBatchTypes] = useState([]);

  const [reconcileCheck, setreconcileCheck] = useState(true);

  const [loanData, setLoanData] = useState([]);
  const [flag] = useState(true);
  const [Bflag, setBflag] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [Cflag, setCflag] = useState(true);
  const [depositData, setDepositData] = useState([]);
  const [selectedDeposit, setSelectedDeposit] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState([]);

  useEffect(() => {
    CashCheckMoneyOrderPaymentBatchService.getPaymentBatchType().then(res =>
      setPaymentBatchTypes(res)
    );
  }, []);

  useEffect(() => {
    CashCheckMoneyOrderPaymentBatchService.getPaymentBatch(
      paymentbatchtype
    ).then(res => setPaymentBatches(res));
  }, [paymentbatchtype]);

  useEffect(() => {
    CashCheckMoneyOrderService.getGetReconciledDataForCashCheckAndMoneyOrder(
      paymentbatch
    ).then(res => {
      setLoanData(res.result.paymentDataModel);
      setDepositData(res.result.bankDepositDataModel);
      setreconcileCheck(true);
    });
  }, [paymentbatch]);

  //   useEffect(() => {}, [loanData, depositData]);

  useEffect(() => {
    if (reconcileCheck) {
      reconcileOnClick(paymentbatch);
    } else {
      unreconciledOnClick(paymentbatch);
    }
  }, [reconcileCheck]);

  const reconcileOnClick = event => {
    CashCheckMoneyOrderService.getGetReconciledDataForCashCheckAndMoneyOrder(
      event
    ).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
      setBflag(true);
    });
  };

  const unreconciledOnClick = e => {
    CashCheckMoneyOrderService.getGetUnReconciledDataForCashCheckAndMoneyOrder(
      e
    ).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
      setBflag(false);
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
  console.log(selectedData);
  const matchOnClick = () => {
    CashCheckMoneyOrderService.saveMatchRecordsForCashCheckAndMoneyOrder(
      paymentbatch,
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
    CashCheckMoneyOrderService.saveUnMatchRecordsForCashCheckAndMoneyOrder(
      paymentbatch,
      selectedData
    ).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
      setCflag(false);
    });
  };

  const postOnClick = () => {
    CashCheckMoneyOrderService.savePostTransactionForCashCheckAndMoneyOrder(
      paymentbatch,
      paymentbatchtype
    ).then(res => {
      if (res.result === 'Please try again') {
        toast.warning(res.result);
      } else {
        toast.success(res.result);
      }
    });
  };

  useEffect(() => {
    setPaymentBatch(0);
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
                      onChange={e =>
                        setPaymentBatchType(Number(e.target.value))
                      }
                      className="me-2"
                    >
                      <option value={0}>Select Payment Batch Type</option>
                      {/* <option value="Cash/Money Order">Cash/Money Order</option> */}
                      {paymentbatchtypes.map((batch, index) => (
                        <option value={batch.paymentBatchTypeId} key={index}>
                          {batch.paymentBatchTypeName}
                        </option>
                      ))}
                    </Form.Select>
                  </Flex>
                </Col>
                {paymentbatchtype !== 0 ? (
                  <>
                    <Col>Payment Batch</Col>
                    <Col>
                      <Flex>
                        <Form.Select
                          size="sm"
                          value={paymentbatch}
                          onChange={e =>
                            setPaymentBatch(Number(e.target.value))
                          }
                          className="me-2"
                        >
                          <option value={0}>Select Payment Batch</option>
                          {/* <option value="1">20220209-CashMoneyOrder</option> */}
                          {paymentbatches.map((batch, index) => (
                            <option value={batch.paymentBatchId} key={index}>
                              {batch.batch}
                            </option>
                          ))}
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
            {paymentbatch !== 0 ? (
              // <TransactionHandler
              //     reconcileData={reconcileData}
              //     unReconcileData={unReconcileData}
              //     flag={flag}
              // />
              <Card className="bg-transparent-50 shadow-none border border-200">
                <Card.Body>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      id="flexRadioDefault1"
                      label="View Matched"
                      name="ReconcileRadio"
                      checked={reconcileCheck}
                      className="form-label-nogutter"
                      onChange={() => {
                        setreconcileCheck(true);
                      }}
                      // defaultChecked
                    />
                    <Form.Check
                      inline
                      type="radio"
                      id="flexRadioDefault2"
                      label="View Un-Matched"
                      checked={!reconcileCheck}
                      name="ReconcileRadio"
                      className="form-label-nogutter"
                      onChange={() => {
                        setreconcileCheck(false);
                      }}
                    />
                  </div>
                  <div className="border-dashed-bottom my-3" />
                  <Button
                    size="sm"
                    variant={'falcon-primary'}
                    className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-100 text-truncate mb-2"
                    disabled={Bflag}
                    onClick={() => matchOnClick()}
                  >
                    Match
                  </Button>
                  <Button
                    size="sm"
                    variant={'falcon-primary'}
                    className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-100 text-truncate mb-0 mb-lg-2"
                    disabled={!Bflag}
                    onClick={() => {
                      unMatchOnClick();
                    }}
                  >
                    Un-Match
                  </Button>
                  <Button
                    size="sm"
                    variant={'falcon-warning'}
                    disabled={!flag}
                    className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-100 text-truncate mb-2"
                    // onClick={() => resetOnClick()}
                  >
                    Reset
                  </Button>
                  <Button
                    size="sm"
                    variant={'falcon-success'}
                    disabled={!flag}
                    className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-100 text-truncate mb-0"
                    onClick={() => postOnClick()}
                  >
                    Post Transactions
                  </Button>
                </Card.Body>
              </Card>
            ) : (
              <></>
            )}
          </Col>
          <Col lg={{ span: 5, order: 1 }}>
            {paymentbatch !== 0 ? (
              <Payment data={loanData} chooseLoan={chooseLoan} />
            ) : (
              <></>
            )}
          </Col>
          <Col lg={{ span: 5, order: 3 }}>
            {paymentbatch !== 0 ? (
              <Deposits data={depositData} chooseDeposit={chooseDeposit} />
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default AccountDetails;

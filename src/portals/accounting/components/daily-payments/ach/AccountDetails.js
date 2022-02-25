import React, { useState, useEffect } from 'react';
import Flex from 'components/common/Flex';
import { Row, Col, Form, Card } from 'react-bootstrap';
import TitleCard from 'components/common/TitleCard';
import Payment from './Payment';
import Deposits from './Deposits';
import { ACHService } from '_services/accounting';
import { Button } from 'react-bootstrap';

// import { LoanTableDataACH } from 'data/accounting/unmatcheddeposits';
// import { BulkDepositsTableDataACH } from 'data/accounting/unmatcheddeposits';
// import TransactionHandler from '../TransactionHandler';

const AccountDetails = () => {
  const [paymentbatch, setPaymentBatch] = useState();
  const [paymentbatches, setPaymentBatches] = useState([]);
  const [loanData, setLoanData] = useState([]);
  const [flag] = useState(true);
  const [Bflag, setBflag] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [Cflag, setCflag] = useState(true);
  const [depositData, setDepositData] = useState([]);
  const [selectedDeposit, setSelectedDeposit] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState([]);

  useEffect(() => {
    ACHService.getPaymentBatchACH().then(res => setPaymentBatches(res));
  }, []);

  useEffect(() => {
    if (paymentbatch !== undefined) {
      ACHService.getGetReconciledACHData(paymentbatch).then(res => {
        setLoanData(res.paymentDataModel);
        setDepositData(res.bankDepositDataModel);
      });
    }
  }, [paymentbatch]);

  useEffect(() => {}, [loanData, depositData]);

  const reconcileOnClick = event => {
    ACHService.getGetReconciledACHData(event).then(res => {
      setDepositData(res.bankDepositDataModel);
      setLoanData(res.paymentDataModel);
      setBflag(true);
    });
  };

  const unreconciledOnClick = e => {
    ACHService.getGetUnReconciledACHData(e).then(res => {
      setDepositData(res.bankDepositDataModel);
      setLoanData(res.paymentDataModel);
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
    ACHService.saveMatchACHRecords(paymentbatch, selectedData).then(res => {
      setDepositData(res.bankDepositDataModel);
      setLoanData(res.paymentDataModel);
    });
  };

  const unMatchOnClick = () => {
    ACHService.saveUnMatchACHRecords(paymentbatch, selectedData).then(res => {
      setDepositData(res.bankDepositDataModel);
      setLoanData(res.paymentDataModel);
      setCflag(false);
    });
  };

  const postOnClick = () => {
    ACHService.savePostACHTransaction(paymentbatch);
  };

  // Last Edited till here

  // useEffect(() => {
  //   console.log('UseEffect ', loanData);
  // }, [loanData]);
  return (
    <>
      <Row className="g-3 mb-3">
        <Col>
          <TitleCard title="Payment Reconciliation &gt; ACH" />
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Row className="align-items-center">
                <Col className="pe-xl-8">Payment Batch</Col>
                <Col xs="12" md="5" className="ms-auto">
                  <Flex>
                    <Form.Select
                      size="sm"
                      value={paymentbatch}
                      onChange={e => setPaymentBatch(e.target.value)}
                      className="me-2"
                    >
                      <option value="">Select Payment Batch</option>
                      {paymentbatches.map((batch, index) => (
                        <option value={batch.paymentBatchId} key={index}>
                          {batch.paymentBatchTypeName}
                        </option>
                      ))}
                    </Form.Select>
                  </Flex>
                </Col>
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
            {paymentbatch !== undefined ? (
              <Card className="bg-transparent-50 shadow-none border border-200">
                <Card.Body>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      id="flexRadioDefault1"
                      label="Reconciled"
                      name="ReconcileRadio"
                      className="form-label-nogutter"
                      onChange={() => {
                        reconcileOnClick(paymentbatch);
                      }}
                      defaultChecked
                    />
                    <Form.Check
                      inline
                      type="radio"
                      id="flexRadioDefault2"
                      label="Un-Reconciled"
                      name="ReconcileRadio"
                      className="form-label-nogutter"
                      onChange={() => {
                        unreconciledOnClick(paymentbatch);
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
              // <TransactionHandler
              //   flag={flag}
              //   reconcileData={reconcileOnClick}
              //   unReconcileData={unreconcileOnClick}
              //   matchData={matchOnClick}
              //   unMatchData={unMatchOnClick}
              //   postData={postOnClick}
              // />
              <></>
            )}
          </Col>
          <Col lg={{ span: 5, order: 1 }}>
            {paymentbatch !== undefined ? (
              <Payment data={loanData} chooseLoan={chooseLoan} />
            ) : (
              <></>
            )}
          </Col>
          <Col lg={{ span: 5, order: 3 }}>
            {paymentbatch !== undefined ? (
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

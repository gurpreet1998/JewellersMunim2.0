import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import TitleCard from 'components/common/TitleCard';
import Payment from './Payment';
import Deposits from './Deposits';

import { depositService } from '_services/accounting';

const AccountDetails = () => {
  const [bank, setBank] = useState(0);
  const [lender, setLender] = useState();
  const [banks, setBanks] = useState([]);
  const [lenders, setLenders] = useState([]);
  const [loanData, setLoanData] = useState([]);
  const [flag] = useState(true);
  const [Bflag, setBflag] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [Cflag, setCflag] = useState(true);
  const [depositData, setDepositData] = useState([]);

  // Lender Id 1 until we get login return lender info
  const [selectedDeposit, setSelectedDeposit] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState([]);

  // const [postData, setPostData] = useState({
  //   loanSelectedData: [],
  //   depositSelectedData: []
  // });

  useEffect(() => {
    depositService.getLendersNames(1).then(res => setLenders(res));
    depositService.getBankNames(1).then(res => setBanks(res));
  }, []);

  useEffect(() => {
    if (bank > 0) {
      depositService.getGetReconciledCMLData(bank).then(res => {
        setLoanData(res.result.paymentDataModel);
        setDepositData(res.result.bankDepositDataModel);
      });
    }
  }, [bank]);

  useEffect(() => {}, [loanData, depositData]);

  const postOnClick = () => {
    depositService.savePostTransaction(bank);
  };

  const reconcileOnClick = event => {
    depositService.getGetReconciledCMLData(event).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
      setBflag(true);
    });
  };

  const unreconciledOnClick = e => {
    depositService.getGetUnReconciledCMLData(e).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
      setBflag(false);
    });
  };
  const chooseLoan = val => {
    setSelectedLoan(val);
    // console.log('loan VALLLLL:', val);
    // setPostData({ ...postData, loanSelectedData: selectedLoan });
    // console.log(postData);
  };
  const chooseDeposit = val => {
    setSelectedDeposit(val);
    // console.log('Deposit VALLLLL:', val);
    // setPostData({ ...postData, depositSelectedData: selectedDeposit });
    // console.log(postData);
  };

  let selectedData = {
    paymentDataModel: selectedLoan,
    bankDepositDataModel: selectedDeposit
  };

  const matchOnClick = () => {
    depositService.saveMatchRecords(bank, selectedData).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
    });
  };

  const unMatchOnClick = () => {
    depositService.saveUnMatchRecords(bank, selectedData).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
      setCflag(false);
    });
  };
  const resetOnClick = () => {
    setSelectedDeposit([]);
  };

  return (
    <>
      <Row className="g-3 mb-3">
        <Col xs={12}>
          <TitleCard
            title="Bank Reconciliations &gt; CML Lender"
            endEl={
              <Flex>
                <Form.Select
                  size="sm"
                  value={lender}
                  onChange={e => setLender(e.target.value)}
                  className="me-2"
                >
                  <option value="">Select Lender</option>
                  {lenders.map((lender, index) => (
                    <option value={lender.lender} key={index}>
                      {lender.lender}
                    </option>
                  ))}
                </Form.Select>
                {lender !== undefined ? (
                  <Form.Select
                    size="sm"
                    value={bank}
                    onChange={e => setBank(e.target.value)}
                    className="me-2"
                  >
                    <option value="">Select Bank Account...</option>
                    {banks.map((bank, index) => (
                      <option value={bank.bankAccountId} key={index}>
                        {bank.banks}
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
          <Col lg={{ span: 2, order: 2 }}>
            {bank !== 0 ? (
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
                        reconcileOnClick(bank);
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
                        unreconciledOnClick(bank);
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
                    onClick={() => resetOnClick()}
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
            {bank !== 0 ? (
              <Payment data={loanData} chooseLoan={chooseLoan} />
            ) : (
              <></>
            )}
          </Col>

          <Col lg={{ span: 5, order: 3 }}>
            {bank !== 0 ? (
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

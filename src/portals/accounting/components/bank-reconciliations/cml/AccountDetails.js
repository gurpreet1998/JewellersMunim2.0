/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Flex from 'components/common/Flex';
import { Row, Col, Form, Card } from 'react-bootstrap';
import TitleCard from 'components/common/TitleCard';
import SubTitleCard from 'components/common/SubTitleCard';
import Payment from './Payment';
import { Button } from 'react-bootstrap';
import Deposits from './Deposits';

import { depositService } from '_services/accounting';
import TransactionHandler from '../TransactionHandler';

const AccountDetails = () => {
  const [bank, setBank] = useState(0);
  const [lender, setLender] = useState();
  const [banks, setBanks] = useState([]);
  const [lenders, setLenders] = useState([]);
  const [loanData, setLoanData] = useState([]);
  const [flag] = useState(true);
  const [depositData, setDepositData] = useState([]);

  //Lender Id 1 until we get login return lender info
  const [selectedDeposit, setSelectedDeposit] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState([]);
  const [postData, setPostData] = useState({
    loanSelectedData: [],
    depositSelectedData: []
  });
  useEffect(() => {
    depositService.getLendersNames(1).then(res => setLenders(res));

    depositService.getBankNames(1).then(res => setBanks(res));
  }, []);

  useEffect(() => {
    if (bank > 0) {
      depositService.getGetUnReconciledCMLData(bank).then(res => {
        setLoanData(res.paymentDataModel);
        setDepositData(res.bankDepositDataModel);
        console.log('res.paymentData');
        console.log(typeof res.paymentDataModel);
      });
    }
  }, [bank]);
  useEffect(() => {}, [loanData, depositData]);

  const postOnClick = () => {
    depositService.savePostTransaction(bank);
  };

  const reconcileOnClick = event => {
    depositService.getGetReconciledCMLData(event).then(res => {
      setDepositData(res.bankDepositDataModel);
      setLoanData(res.paymentDataModel);
    });
  };

  const unreconcileOnClick = e => {
    depositService.getGetUnReconciledCMLData(e).then(res => {
      setDepositData(res.bankDepositDataModel);
      setLoanData(res.paymentDataModel);
    });
  };
  const chooseLoan = val => {
    setSelectedLoan(val);
    // console.log('loan VALLLLL:', val);
    setPostData({ ...postData, loanSelectedData: selectedLoan });
    // console.log(postData);
  };
  const chooseDeposit = val => {
    setSelectedDeposit(val);
    // console.log('Deposit VALLLLL:', val);
    setPostData({ ...postData, depositSelectedData: selectedDeposit });
    // console.log(postData);
  };

  let selectedData = {
    paymentDataModel: selectedLoan,
    bankDepositDataModel: selectedDeposit
  };

  const matchOnClick = () => {
    depositService.saveMatchRecords(bank, selectedData);
  };

  const unMatchOnClick = () => {
    depositService.saveUnMatchRecords(bank, selectedData);
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
                    <option value="">Select Bank</option>
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
              <div className="btn-group-justified">
                <div
                  className="px-2 ms-1 mb-2 w-100"
                  // onChange={() => unreconcileOnClick()}
                >
                  <label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ReconcileRadio"
                      id="flexRadioDefault1"
                      style={{ marginRight: '5px' }}
                      onClick={() => reconcileOnClick(bank)}
                    />
                    View Reconciled
                  </label>
                  <label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ReconcileRadio"
                      id="flexRadioDefault2"
                      style={{
                        marginRight: '5px',
                        marginBottom: '2px',
                        marginTop: '3px'
                      }}
                      defaultChecked
                      onClick={() => unreconcileOnClick(bank)}
                    />
                    View Un-Reconciled
                  </label>
                </div>
                <Button
                  size="sm"
                  variant={'primary'}
                  className="px-2 ms-1 mb-2 w-100"
                  disabled={!flag}
                  onClick={() => matchOnClick()}
                >
                  Match
                </Button>
                <Button
                  size="sm"
                  variant={'primary'}
                  className="px-2 ms-1 mb-2 w-100"
                  disabled={!flag}
                  onClick={() => unMatchOnClick()}
                >
                  Un-Match
                </Button>
                {/* <Button
              size="sm"
              variant={'primary'}
              className="px-2 ms-1 mb-2 w-100"
              // onClick={() => reconcileData()}
            >
              Add to Exceptions
            </Button> */}
                <Button
                  size="sm"
                  variant={'secondary'}
                  disabled={flag}
                  className="px-2 ms-1 mb-2 w-100"
                  // onClick={() => reconcileData()}
                >
                  Reset
                </Button>
                <Button
                  size="sm"
                  variant={'success'}
                  disabled={!flag}
                  className="px-2 ms-1 mb-2 w-100"
                  onClick={() => postOnClick()}
                >
                  Post Transactions
                </Button>
              </div>
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
      {/* <Filters /> */}
    </>
  );
};
export default AccountDetails;

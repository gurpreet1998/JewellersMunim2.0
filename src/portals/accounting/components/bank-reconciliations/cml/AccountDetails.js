import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Card } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import TitleCard from 'components/common/TitleCard';
import Payment from './Payment';
import Deposits from './Deposits';

import { getItemFromStore, setItemToStore } from 'helpers/utils';
import { depositService } from '_services/accounting';
import ReconciliationHandler from '../../ReconciliationHandler';

const AccountDetails = () => {
  const initValues = {
    lender: '',
    bank: ''
  };

  const [lender, setLender] = useState(initValues.lender);
  const [bank, setBank] = useState(initValues.bank);
  const [lenders, setLenders] = useState([]);
  const [banks, setBanks] = useState([]);
  const [depositData, setDepositData] = useState([]);
  const [loanData, setLoanData] = useState([]);
  const [disabled] = useState(true);
  const [reconciledChecked, setReconciledChecked] = useState(true);

  // todo: NOTE: What is this used for? If needed, can we name it something more descriptive
  // const [Cflag, setCflag] = useState(true);

  // Lender Id 1 until we get login return lender info
  const [selectedDeposit, setSelectedDeposit] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState([]);

  useEffect(() => {
    const formData = getItemFromStore(
      'bank-reconciliation-cml-store',
      initValues
    );
    setBank(formData.bank);
    setLender(formData.lender);
  }, []);

  useEffect(() => {
    const valuesToSave = { lender, bank };
    setItemToStore('bank-reconciliation-cml-store', valuesToSave);
  });

  useEffect(() => {
    depositService.getLendersNames(1).then(res => setLenders(res));
    depositService.getBankNames(1).then(res => setBanks(res));
  }, []);

  useEffect(() => {
    if (bank.length > 0) {
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
      setReconciledChecked(true);
    });
  };

  const unreconciledOnClick = e => {
    depositService.getGetUnReconciledCMLData(e).then(res => {
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
    depositService.saveMatchRecords(bank, selectedData).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
    });
  };

  const unMatchOnClick = () => {
    depositService.saveUnMatchRecords(bank, selectedData).then(res => {
      setDepositData(res.result.bankDepositDataModel);
      setLoanData(res.result.paymentDataModel);
      // setCflag(false);
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
                {lender.length !== 0 ? (
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
          {bank.length !== 0 ? (
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
                  selectedFilter={bank}
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

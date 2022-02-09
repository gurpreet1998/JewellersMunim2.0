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
  // const [tempLoanData, setTempLoanData] = useState([]);
  // const [tempDepositData, setTempDepositData] = useState([]);

  //Lender Id 1 until we get login implemented

  // const reconcileData = () => {
  //   const result1 = loanData.filter(o =>
  //     depositData.some(({ depositAmount }) => o.paymentAmount === depositAmount)
  //   );
  //   setLoanData(result1);
  //   const result2 = depositData.filter(o =>
  //     loanData.some(({ paymentAmount }) => o.depositAmount === paymentAmount)
  //   );
  //   setFlag(true);
  //   console.log(loanData);
  //   setDepositData(result2);
  // };
  // const unReconcileData = () => {
  //   setLoanData(tempLoanData);
  //   console.log(tempLoanData);
  //   setDepositData(tempDepositData);
  //   setFlag(false);
  // };

  useEffect(() => {
    depositService.getLendersNames(1).then(res => setLenders(res));

    depositService.getBankNames(1).then(res => setBanks(res));

    // setTempLoanData(loanData);
    // setTempDepositData(depositData);
    console.log('depositData', depositData);
  }, []);

  useEffect(() => {
    depositService.getDepositsTableData(bank).then(res => {
      setDepositData(res);
      setLoanData(res);
      console.log('depositService results-', res);
    });
  }, [bank]);

  const postOnClick = event => {
    depositService.savePostTransaction(event);
    console.log('postOnClick  event-', event);
  };
  // useEffect(() => {}, [loanData, depositData]);

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
            {bank !== 0 ? <TransactionHandler flag={flag} /> : <></>}
          </Col>

          <Col lg={{ span: 5, order: 1 }}>
            {bank !== 0 ? <Payment data={loanData} /> : <></>}
          </Col>

          <Col lg={{ span: 5, order: 3 }}>
            {bank !== 0 ? <Deposits data={depositData} /> : <></>}
          </Col>
        </Row>
      </Card>
      {/* <Filters /> */}
    </>
  );
};
export default AccountDetails;

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
        <Col md={12}>
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
              </Flex>
            }
          />
        </Col>
        <Col md={12}>
          {lender !== undefined ? (
            <SubTitleCard
              title="Depository Account Details"
              endEl={
                <Flex>
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
                </Flex>
              }
            />
          ) : (
            <></>
          )}
        </Col>
        <Col lg={5}>{bank !== 0 ? <Payment data={loanData} /> : <></>}</Col>

        <Col lg={2}>
          {bank !== 0 ? (
            <Card className="bg-100 shadow-none border mb-1">
              <Card.Body>
                <div>
                  <Form.Check
                    type="radio"
                    id="flexRadioDefault1"
                    label="Reconciled"
                    name="ReconcileRadio"
                    className="form-label-nogutter"
                    // onChange={reconcileData}
                  />
                  <Form.Check
                    type="radio"
                    id="flexRadioDefault2"
                    label="Un-Reconciled"
                    name="ReconcileRadio"
                    className="form-label-nogutter"
                    // onChange={unReconcileData}
                    defaultChecked
                  />
                </div>
                <div className="border-dashed-bottom my-3" />

                <Row>
                  <Col>
                    <Button
                      size="sm"
                      variant={'falcon-primary'}
                      className="px-2 mb-2 w-100"
                      disabled={flag}
                      // onClick={() => reconcileData()}
                    >
                      Match
                    </Button>
                    <Button
                      size="sm"
                      variant={'falcon-primary'}
                      className="px-2 mb-2 w-100"
                      disabled={flag}
                      // onClick={() => reconcileData()}
                    >
                      Un-Match
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      size="sm"
                      variant={'falcon-warning'}
                      disabled={flag}
                      className="px-2 mb-2 w-100"
                      // onClick={() => reconcileData()}
                    >
                      Reset
                    </Button>
                    <Button
                      size="sm"
                      variant={'falcon-success'}
                      disabled={!flag}
                      className="px-2 mb-2 w-100"
                      // onClick={() => reconcileData()}
                    >
                      Post Transactions
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ) : (
            <></>
          )}
        </Col>

        <Col lg={5}>{bank !== 0 ? <Deposits data={depositData} /> : <></>}</Col>
      </Row>
      {/* <Filters /> */}
    </>
  );
};
export default AccountDetails;

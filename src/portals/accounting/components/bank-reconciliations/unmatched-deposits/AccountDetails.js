/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Flex from 'components/common/Flex';
import { Row, Col, Form } from 'react-bootstrap';
import TitleCard from 'components/common/TitleCard';
import SubTitleCard from 'components/common/SubTitleCard';
import Loan from './Loan';
import { Button } from 'react-bootstrap';
import Deposits from './Deposits';

import { depositService } from '_services/accounting';

const AccountDetails = () => {
  const [bank, setBank] = useState(0);
  const [lender, setLender] = useState();
  const [banks, setBanks] = useState([]);
  const [lenders, setLenders] = useState([]);
  const [loanData, setLoanData] = useState([]);
  const [flag, setFlag] = useState({});
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
    console.log(depositData);
  }, []);

  useEffect(() => {
    depositService.getDepositsTableData(bank).then(res => {
      setDepositData(res);
      setLoanData(res);
      console.log(res);
    });
  }, [bank]);

  const postOnClick = event => {
    depositService.savePostTransaction(event);
    console.log(event);
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
                    className="me-0"
                  >
                    <option value="">Select Bank</option>
                    {banks.map((bank, index) => (
                      <option value={bank.bankAccountId} key={index}>
                        {bank.banks}
                      </option>
                    ))}
                    {/* {console.log(bank)} */}
                  </Form.Select>
                </Flex>
              }
            />
          ) : null}
        </Col>
        <Col md={5}>{bank !== 0 ? <Loan data={loanData} /> : null}</Col>
        <Col md={2}>
          {bank !== 0 ? (
            <div className="btn-group-justified">
              <div className="px-2 ms-1 mb-2 w-100">
                <label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ReconcileRadio"
                    id="flexRadioDefault1"
                    style={{ marginRight: '5px' }}
                    checked={true}
                    // onClick={() => reconcileData()}
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
                    // onClick={() => unReconcileData()}
                  />
                  View Un-Reconciled
                </label>
              </div>
              <Button
                size="sm"
                variant={'secondary'}
                className="px-2 ms-1 mb-2 w-100"
                disabled={!flag}
                // onClick={() => reconcileData()}
              >
                Match
              </Button>
              <Button
                size="sm"
                variant={'secondary'}
                className="px-2 ms-1 mb-2 w-100"
                disabled={!flag}
                // onClick={() => reconcileData()}
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
                onClick={() => postOnClick(bank)}
              >
                Post Transactions
              </Button>
            </div>
          ) : null}
        </Col>
        <Col md={5}>{bank !== 0 ? <Deposits data={depositData} /> : null}</Col>
      </Row>
      {/* <Filters /> */}
    </>
  );
};
export default AccountDetails;

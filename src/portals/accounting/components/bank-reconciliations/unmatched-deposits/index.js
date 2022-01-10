import React, { useState, useEffect } from 'react';
import Flex from 'components/common/Flex';
import { Row, Col, Form } from 'react-bootstrap';
import TitleCard from 'components/common/TitleCard';
import SubTitleCard from 'components/common/SubTitleCard';
import Loan from './Loan';
import { Button } from 'react-bootstrap';
import Deposits from './Deposits';
import { lenders } from 'data/accounting/unmatcheddeposits';
import { banks } from 'data/accounting/unmatcheddeposits';
import { LoanTableData } from 'data/accounting/unmatcheddeposits';
import { DepositsTableData } from 'data/accounting/unmatcheddeposits';
const UnmatchedDeposits = () => {
  const [bank, setBank] = useState(0);
  const [lender, setLender] = useState(0);
  const [loanData, setLoanData] = useState(LoanTableData);
  const [depositData, setDepositData] = useState(DepositsTableData);
  const reconcileData = () => {
    // console.log(loanData);
    const result1 = loanData.filter(o =>
      depositData.some(
        ({ depositAmount }) => o.expectedDepositAmount === depositAmount
      )
    );
    setLoanData(result1);
    const result2 = depositData.filter(o =>
      loanData.some(
        ({ expectedDepositAmount }) => o.depositAmount === expectedDepositAmount
      )
    );
    // console.log(loanData);
    setDepositData(result2);
  };

  useEffect(() => {
    console.log('UseEffect ' + loanData);
  }, [loanData]);
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
                  <option value="">Select Lender...</option>
                  {lenders.map((lender, index) => (
                    <option value={index} key={lender}>
                      {lender}
                    </option>
                  ))}
                </Form.Select>
              </Flex>
            }
          />
        </Col>
        <Col md={12}>
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
                  <option value="">Select Bank...</option>
                  {banks.map((bank, index) => (
                    <option value={index} key={bank}>
                      {bank}
                    </option>
                  ))}
                </Form.Select>
              </Flex>
            }
          />
        </Col>
        <Col md={5}>
          <Loan data={loanData} />
        </Col>
        <Col md={2}>
          <div className="btn-group-justified">
            <Button
              size="sm"
              variant={'primary'}
              className="px-2 ms-1 mb-2 w-100"
              onClick={() => reconcileData()}
            >
              Reconciled Transaction
            </Button>
            <Button
              size="sm"
              variant={'primary'}
              className="px-2 ms-1 mb-2 w-100"
              // onClick={() => reconcileData()}
            >
              Un Reconciled Transaction
            </Button>
            <Button
              size="sm"
              variant={'primary'}
              className="px-2 ms-1 mb-2 w-100"
              // onClick={() => reconcileData()}
            >
              Match Transactions
            </Button>
            <Button
              size="sm"
              variant={'primary'}
              className="px-2 ms-1 mb-2 w-100"
              // onClick={() => reconcileData()}
            >
              Add to Exceptions
            </Button>
            <Button
              size="sm"
              variant={'primary'}
              className="px-2 ms-1 mb-2 w-100"
              // onClick={() => reconcileData()}
            >
              Reset
            </Button>
            <Button
              size="sm"
              variant={'success'}
              className="px-2 ms-1 mb-2 w-100"
              // onClick={() => reconcileData()}
            >
              Post Transactions
            </Button>
          </div>
        </Col>
        <Col md={5}>
          <Deposits data={depositData} />
        </Col>
      </Row>
      {/* <Filters /> */}
    </>
  );
};
export default UnmatchedDeposits;

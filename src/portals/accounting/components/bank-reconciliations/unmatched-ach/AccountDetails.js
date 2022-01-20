import React, { useState, useEffect } from 'react';
import Flex from 'components/common/Flex';
import { Row, Col, Form } from 'react-bootstrap';
import TitleCard from 'components/common/TitleCard';
import SubTitleCard from 'components/common/SubTitleCard';
import Loan from './Loan';
import { Button } from 'react-bootstrap';
import Deposits from './Deposits';
// import { lenders } from 'data/accounting/unmatcheddeposits';
import { banks } from 'data/accounting/unmatcheddeposits';
import { LoanTableData } from 'data/accounting/unmatcheddeposits';
import { BulkDepositsTableData } from 'data/accounting/unmatcheddeposits';
const AccountDetails = () => {
  const [bank, setBank] = useState(0);
  // const [lender, setLender] = useState(0);
  const [loanData, setLoanData] = useState(LoanTableData);
  const [flag, setFlag] = useState({});
  const [depositData, setDepositData] = useState(BulkDepositsTableData);
  const tempLoanData = LoanTableData;
  const tempDepositData = BulkDepositsTableData;
  const reconcileData = () => {
    // console.log(loanData);
    const result1 = loanData.filter(o =>
      depositData.some(({ depositAmount }) => o.paymentAmount === depositAmount)
    );
    setLoanData(result1);
    const result2 = depositData.filter(o =>
      loanData.some(({ paymentAmount }) => o.depositAmount === paymentAmount)
    );
    setFlag(true);
    // console.log(loanData);
    setDepositData(result2);
  };
  const unReconcileData = () => {
    setLoanData(tempLoanData);
    console.log(tempLoanData);
    setDepositData(tempDepositData);
    setFlag(false);
  };

  useEffect(() => {
    console.log('UseEffect ' + loanData);
  }, [loanData]);
  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <TitleCard title="Bank Reconciliations &gt; CP+ Lender" />
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
            <div className="px-2 ms-1 mb-2 w-100">
              <label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="ReconcileRadio"
                  id="flexRadioDefault1"
                  checked={true}
                  style={{ marginRight: '5px' }}
                  onClick={() => reconcileData()}
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
                  onClick={() => unReconcileData()}
                />
                View Un-Reconciled
              </label>
            </div>
            <Button
              size="sm"
              variant={'secondary'}
              className="px-2 ms-1 mb-2 w-100"
              disabled={flag}
              // onClick={() => reconcileData()}
            >
              Match
            </Button>
            <Button
              size="sm"
              variant={'secondary'}
              className="px-2 ms-1 mb-2 w-100"
              disabled={flag}
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
export default AccountDetails;
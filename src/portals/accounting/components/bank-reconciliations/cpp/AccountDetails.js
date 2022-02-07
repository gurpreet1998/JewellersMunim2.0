import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import TitleCard from 'components/common/TitleCard';
import Payment from './Payment';
import Deposits from './Deposits';

import { LoanTableData } from 'data/accounting/unmatcheddeposits';
import { BulkDepositsTableData } from 'data/accounting/unmatcheddeposits';

const AccountDetails = () => {
  // const [bank, setBank] = useState(0);
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
        <Col md={5}>
          <Payment data={loanData} />
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

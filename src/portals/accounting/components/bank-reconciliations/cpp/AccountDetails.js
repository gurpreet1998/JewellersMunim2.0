import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Form, Card } from 'react-bootstrap';
import TitleCard from 'components/common/TitleCard';
import Payment from './Payment';
import Deposits from './Deposits';

import { LoanTableData } from 'data/accounting/unmatcheddeposits';
import { BulkDepositsTableData } from 'data/accounting/unmatcheddeposits';

const AccountDetails = () => {
  // const [bank, setBank] = useState(0);
  const [loanData, setLoanData] = useState(LoanTableData);
  const [flag, setFlag] = useState(false);
  const [depositData, setDepositData] = useState(BulkDepositsTableData);
  const tempLoanData = LoanTableData;
  const tempDepositData = BulkDepositsTableData;

  const reconcileData = () => {
    const result1 = loanData.filter(o =>
      depositData.some(({ depositAmount }) => o.paymentAmount === depositAmount)
    );
    setLoanData(result1);

    const result2 = depositData.filter(o =>
      loanData.some(({ paymentAmount }) => o.depositAmount === paymentAmount)
    );
    setFlag(true);
    setDepositData(result2);
  };

  const unReconcileData = () => {
    setLoanData(tempLoanData);
    console.log('tempLoanData', tempLoanData);
    setDepositData(tempDepositData);
    setFlag(false);
  };

  useEffect(() => {
    console.log('UseEffect ', loanData);
  }, [loanData]);

  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <TitleCard title="Bank Reconciliations &gt; CP+ Lender" />
        </Col>
        <Col lg={5}>
          <Payment data={loanData} />
        </Col>
        <Col lg={2}>
          <Card className="bg-100 shadow-none border mb-1">
            <Card.Body>
              <div>
                <Form.Check
                  type="radio"
                  id="flexRadioDefault1"
                  label="Reconciled"
                  name="ReconcileRadio"
                  className="form-label-nogutter"
                  onChange={reconcileData}
                />
                <Form.Check
                  type="radio"
                  id="flexRadioDefault2"
                  label="Un-Reconciled"
                  name="ReconcileRadio"
                  className="form-label-nogutter"
                  onChange={unReconcileData}
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
        </Col>
        <Col lg={5}>
          <Deposits data={depositData} />
        </Col>
      </Row>
      {/* <Filters /> */}
    </>
  );
};
export default AccountDetails;

import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import TitleCard from 'components/common/TitleCard';
import Payment from './Payment';
import Deposits from './Deposits';

import { LoanTableData } from 'data/accounting/unmatcheddeposits';
import { BulkDepositsTableData } from 'data/accounting/unmatcheddeposits';
import TransactionHandler from '../TransactionHandler';

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
        <Col>
          <TitleCard title="Bank Reconciliations &gt; CP+ Lender" />
        </Col>
      </Row>
      <Card className="bg-100 shadow-none border p-card">
        <Row className="g-3">
          <Col lg={{ span: 2, order: 2 }}>
            <TransactionHandler
              reconcileData={reconcileData}
              unReconcileData={unReconcileData}
              flag={flag}
            />
          </Col>
          <Col lg={{ span: 5, order: 1 }}>
            <Payment data={loanData} />
          </Col>
          <Col lg={{ span: 5, order: 3 }}>
            <Deposits data={depositData} />
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default AccountDetails;

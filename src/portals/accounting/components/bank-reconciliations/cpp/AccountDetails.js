import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import TitleCard from 'components/common/TitleCard';
import Payment from './Payment';
import Deposits from './Deposits';
import ReconciliationHandler from '../../ReconciliationHandler';

import { LoanTableData } from 'data/accounting/unmatcheddeposits';
import { BulkDepositsTableData } from 'data/accounting/unmatcheddeposits';

const AccountDetails = () => {
  const [loanData, setLoanData] = useState(LoanTableData);
  const [depositData, setDepositData] = useState(BulkDepositsTableData);
  const [disabled] = useState(true);
  const [reconciledChecked, setReconciledChecked] = useState(true);

  const tempLoanData = LoanTableData;
  const tempDepositData = BulkDepositsTableData;

  const reconcileOnClick = () => {
    const result1 = loanData.filter(o =>
      depositData.some(({ depositAmount }) => o.paymentAmount === depositAmount)
    );
    setLoanData(result1);

    const result2 = depositData.filter(o =>
      loanData.some(({ paymentAmount }) => o.depositAmount === paymentAmount)
    );
    setReconciledChecked(true);
    setDepositData(result2);
  };

  const unreconciledOnClick = () => {
    setLoanData(tempLoanData);
    console.log('tempLoanData', tempLoanData);
    setDepositData(tempDepositData);
    setReconciledChecked(false);
  };

  const matchOnClick = () => {
    return console.log('matchOnClick placeholder');
  };

  const unMatchOnClick = () => {
    return console.log('unMatchOnClick placeholder');
  };

  const resetOnClick = () => {
    return console.log('resetOnClick placeholder');
  };

  const postOnClick = () => {
    return console.log('postOnClick placeholder');
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
            <ReconciliationHandler
              reconciledAction={reconcileOnClick}
              unReconciledAction={unreconciledOnClick}
              matchAction={matchOnClick}
              unMatchAction={unMatchOnClick}
              resetAction={resetOnClick}
              postAction={postOnClick}
              disabled={disabled}
              reconciledChecked={reconciledChecked}
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

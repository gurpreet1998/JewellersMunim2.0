import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import TitleCard from 'components/common/TitleCard';
import Flex from 'components/common/Flex';
import DepositoryAccounts from './DepositoryAccounts';
import TransactionSummary from './TransactionSummary';

// Placeholder data - todo: Replace with API
import { bankAccounts } from 'data/accounting/pendingSettlements';
import { autopayTransactions } from 'data/accounting/dailyPayments';

const CPPAutoPayLoans = () => {
  const [bankAccount, setBankAccount] = useState(0);

  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <TitleCard
            title="Daily Payments &gt; CP+ Loans with AutoPay"
            endEl={
              <Flex>
                <Form.Select
                  size="sm"
                  value={bankAccount}
                  onChange={e => setBankAccount(e.target.value)}
                  className="me-2"
                >
                  <option value="">Select Bank Account...</option>
                  {bankAccounts.map((bankAccount, index) => (
                    <option value={index} key={bankAccount}>
                      {bankAccount}
                    </option>
                  ))}
                </Form.Select>
              </Flex>
            }
          />
        </Col>
        <Col md={8}>
          <DepositoryAccounts />
        </Col>
        <Col md={4}>
          <TransactionSummary data={autopayTransactions} />
        </Col>
      </Row>
    </>
  );
};

export default CPPAutoPayLoans;

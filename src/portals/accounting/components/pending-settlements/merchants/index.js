import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import CMLTransactions from './CMLTransactions';
import TitleCard from 'components/common/TitleCard';
import Flex from 'components/common/Flex';

// Placeholder data - todo: Replace with API
import { bankAccounts, merchants } from 'data/accounting/pendingSettlements';

const PendingMerchantSettlements = () => {
  const [merchant, setMerchant] = useState(0);
  const [bankAccount, setBankAccount] = useState(0);

  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <TitleCard
            title="Pending Settlements &gt; Merchants"
            endEl={
              <Flex>
                <Form.Select
                  size="sm"
                  value={merchant}
                  onChange={e => setMerchant(e.target.value)}
                  className="me-2"
                >
                  <option value="">Select Merchant...</option>
                  {merchants.map((merchant, index) => (
                    <option value={index} key={merchant}>
                      {merchant}
                    </option>
                  ))}
                </Form.Select>
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
        <Col md={12}>
          <CMLTransactions />
        </Col>
      </Row>
    </>
  );
};

export default PendingMerchantSettlements;

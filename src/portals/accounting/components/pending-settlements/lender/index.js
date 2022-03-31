import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import CMLTransactions from './CMLTransactions';
import TitleCard from 'components/common/TitleCard';
import Flex from 'components/common/Flex';

// Placeholder data - todo: Replace with API
import { bankAccounts, merchants } from 'data/accounting/pendingSettlements';

const PendingMerchantSettlements = () => {
  const [merchant, setMerchant] = useState('');
  const [bankAccount, setBankAccount] = useState('');

  useEffect(() => {
    //if(merchant==="")
    //{
    setBankAccount('');
    //}
  }, [merchant]);

  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <TitleCard
            title="Pending Settlement &gt; Sponsor Banks"
            endEl={
              <Flex>
                <Form.Select
                  size="sm"
                  value={merchant}
                  onChange={e => setMerchant(e.target.value)}
                  className="me-2"
                >
                  <option value="">Sponsor Bank</option>
                  {merchants.map((merchant, index) => (
                    <option value={index + 186} key={index}>
                      {merchant}
                    </option>
                  ))}
                </Form.Select>
                {merchant !== '' ? (
                  <Form.Select
                    size="sm"
                    value={bankAccount}
                    onChange={e => setBankAccount(e.target.value)}
                    className="me-2"
                  >
                    <option value="">Sponsor Bank Account</option>
                    {bankAccounts.map((bankAccount, index) => (
                      <option value={index + 186} key={index}>
                        {bankAccount}
                      </option>
                    ))}
                  </Form.Select>
                ) : (
                  <></>
                )}
              </Flex>
            }
          />
        </Col>
        {bankAccount !== '' ? (
          <>
            <Col style={{ textAlign: 'right', marginRight: '1rem' }}>
              <Button
                type="button"
                //style={{ marginLeft: '2rem' }}
                //onClick={() => setaddNewUserFormShow(false)}
                variant="secondary"
              >
                Reset
              </Button>
              <Button
                type="button"
                variant="primary"
                style={{ marginLeft: '2rem' }}
              >
                Settle to Sponsor Bank
              </Button>
            </Col>
            <Col md={12}>
              <CMLTransactions merchant={merchant} />
            </Col>
          </>
        ) : (
          <></>
        )}
      </Row>
    </>
  );
};

export default PendingMerchantSettlements;

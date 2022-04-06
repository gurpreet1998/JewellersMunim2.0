import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import CMLTransactions from './CMLTransactions';
import TitleCard from 'components/common/TitleCard';
import Flex from 'components/common/Flex';

// Placeholder data - todo: Replace with API
import {
  sponsorBank,
  sponsorBankAccount
} from 'data/accounting/pendingSettlements';

const PendingMerchantSettlements = () => {
  //const [merchant, setMerchant] = useState('');
  const [sponsorBankData, setSponsorBankData] = useState('');
  //const [bankAccount, setBankAccount] = useState('');
  const [sponsorBankAccountData, setSponsorBankAccountData] = useState('');

  useEffect(() => {
    //if(merchant==="")
    //{
    setSponsorBankAccountData('');
    //}
  }, [sponsorBankData]);

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
                  value={sponsorBankData}
                  onChange={e => setSponsorBankData(e.target.value)}
                  className="me-2"
                >
                  <option value="">Sponsor Bank</option>
                  {sponsorBank.map((sponsorBankData, index) => (
                    <option value={index + 186} key={index}>
                      {sponsorBankData}
                    </option>
                  ))}
                </Form.Select>
                {sponsorBankData !== '' ? (
                  <Form.Select
                    size="sm"
                    value={sponsorBankAccountData}
                    onChange={e => setSponsorBankAccountData(e.target.value)}
                    className="me-2"
                  >
                    <option value="">Sponsor Bank Account</option>
                    {sponsorBankAccount.map((sponsorBankAccountData, index) => (
                      <option value={index + 186} key={index}>
                        {sponsorBankAccountData}
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
        {sponsorBankAccountData !== '' ? (
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
              <CMLTransactions merchant={sponsorBankData} />
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

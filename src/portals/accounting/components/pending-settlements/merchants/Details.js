import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import TitleCard from 'components/common/TitleCard';
import CMLTransaction from './CMLPayments';
import CMLRefund from './CMLRefund';
import CPPTransaction from './CPPayments';
import CPRefund from './CPRefund';
import { pendingSettlementService } from '_services/accounting';
import { paymentCategory } from 'data/accounting/pendingSettlements';

const MerchantSettlementDetails = () => {
  const [paymentCat, setpaymentCat] = useState('CML Payments');
  // eslint-disable-next-line no-unused-vars
  const [paymentCategories, setpaymentCategories] = useState(paymentCategory);
  const params = useParams();
  const [merchantName, setMerchantName] = useState('');
  let merchantId = params.merchantId;
  let history = useHistory();

  // console.log('merchantId', merchantId);
  useEffect(() => {
    pendingSettlementService
      .GetMerchantSettlementFindName(merchantId)
      .then(res => setMerchantName(res));
    pendingSettlementService
      .GetMerchantSettlementPaymentCategory(merchantId)
      .then(res => setpaymentCat(res));
  }, []);
  useEffect(() => {}, [paymentCat]);
  const handleBack = () => {
    history.goBack();
  };

  return (
    <>
      <Row className="g-3 mb-3">
        <Col xs={12}>
          <TitleCard
            title={`Merchant Settlement Details> ${merchantName}`}
            endEl={
              <Flex>
                <Form.Select
                  size="sm"
                  value={paymentCat}
                  onChange={e => {
                    setpaymentCat(e.target.value);
                  }}
                  className="me-2"
                >
                  <option value="">Select payment</option>
                  {paymentCategories.map((category, index) => (
                    <option value={category} key={index}>
                      {category}
                    </option>
                  ))}
                </Form.Select>
              </Flex>
            }
          />
        </Col>
      </Row>
      <Card className="bg-100 shadow-none border p-card">
        <Card.Header className="mb-0 mt-0 flex-1">
          <Row xs={6} lg={12}>
            <Col>
              <Button
                size="sm"
                // variant={'falcon-warning'}
                className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-100 text-truncate mb-2"
                onClick={handleBack}
              >
                Go Back
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Row className="g-3">
          {paymentCat === 'CML Payments' ? (
            <CMLTransaction />
          ) : paymentCat === 'CML Refunds' ? (
            <CMLRefund />
          ) : paymentCat === 'CP+ Payments' ? (
            <CPPTransaction />
          ) : paymentCat === 'CP+ Refunds' ? (
            <CPRefund />
          ) : paymentCat === 'CP+ Promos' ? (
            <CPPTransaction />
          ) : (
            <>
              <Card.Body className="overflow-hidden p-lg-6">
                <Row className="align-items-center justify-content-between">
                  <Col sm={12} className=" my-5 text-center">
                    <h3 className="mt-1">Nothing Selected!</h3>
                    <p>
                      Select a Payment Category to review Merchant Settlement
                      Details
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </>
          )}
        </Row>
      </Card>
    </>
  );
};

export default MerchantSettlementDetails;

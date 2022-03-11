import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Summary from './Summary';
import TitleCard from 'components/common/TitleCard';

const PendingMerchantSettlements = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <TitleCard title="Pending Settlement &gt; Merchants Settlement Summary" />
        </Col>
        <Col style={{ textAlign: 'right', marginRight: '3rem' }}>
          <Button
            type="button"
            variant="primary"
            style={{ marginLeft: '2rem' }}
          >
            Settle to Merchant
          </Button>
        </Col>
        <Col md={12}>
          <Summary />
        </Col>
      </Row>
    </>
  );
};

export default PendingMerchantSettlements;

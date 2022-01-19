import React from 'react';
import PropTypes from 'prop-types';

import { Form, Row } from 'react-bootstrap';
import Flex from 'components/common/Flex';

const PaymentFormHeader = ({ setMethod, cardTypeLabel }) => {
  return (
    <>
      <Row>
        <Flex justifyContent="start" alignItems="middle">
          <Form.Check
            type="radio"
            id="card-payment"
            className="mb-0 form-check pe-4"
          >
            <Form.Check.Input
              type="radio"
              onChange={e => setMethod(e.target.id)}
              name="payment-method"
              defaultChecked
            />
            <Form.Check.Label className="mb-2 fs-md-0 fs--1">
              {/*Debit or Credit Card*/}
              {cardTypeLabel}
            </Form.Check.Label>
          </Form.Check>

          <Form.Check
            type="radio"
            id="checking-ach"
            onChange={e => setMethod(e.target.id)}
            className="mb-0 form-check"
          >
            <Form.Check.Input
              type="radio"
              onChange={e => setMethod(e.target.id)}
              name="payment-method"
            />
            <Form.Check.Label className="mb-4 fs-md-0 fs--1">
              Checking (ACH) or Savings
            </Form.Check.Label>
          </Form.Check>
        </Flex>
      </Row>
    </>
  );
};

PaymentFormHeader.propTypes = {
  setMethod: PropTypes.any,
  cardTypeLabel: PropTypes.string
};

export default PaymentFormHeader;

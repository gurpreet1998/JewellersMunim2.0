import React from 'react';
import PropTypes from 'prop-types';

import { Col, Form, Row } from 'react-bootstrap';
import FormInput from '../../../../FormInput';
import cards from 'assets/img/icons/icon-payment-methods-grid.png';

const PaymentCardForm = ({ errors, register }) => {
  return (
    <>
      <Form>
        <Row className="gx-0 ps-2 mb-4">
          <Col sm={8} className="px-3">
            <FormInput
              type="text"
              id="cardNumber"
              errors={errors}
              label="Card Number"
              name="cardNumber"
              placeholder="•••• •••• •••• ••••"
              formGroupProps={{
                className: 'mb-3'
              }}
              formControlProps={{
                ...register('cardNumber', {
                  required: 'Please enter your card number (numbers only)',
                  maxLength: 16,
                  pattern: /[0-9]{16}/
                })
              }}
            />
            <Row className="align-items-center">
              <FormInput
                type="text"
                id="expDate"
                errors={errors}
                label="Exp Date"
                name="expDate"
                placeholder="mm/yy"
                formGroupProps={{
                  className: 'mb-3 px-3',
                  as: Col,
                  xl: 6
                }}
                formControlProps={{
                  ...register('expDate', {
                    required: 'Please enter the expiration month & year',
                    maxLength: 8,
                    pattern: /(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/
                  })
                }}
              />

              <FormInput
                type="text"
                id="cvv"
                errors={errors}
                label="CVV"
                name="cvv"
                placeholder="123"
                formGroupProps={{
                  className: 'mb-3 px-3',
                  as: Col,
                  xl: 6
                }}
                formControlProps={{
                  ...register('cvv', {
                    required: 'Please enter your cards CVV',
                    maxLength: 3,
                    pattern: /[0-9]{3}/
                  })
                }}
              />
            </Row>
          </Col>
          <Col xs={4} className="ps-3 text-center pt-2 d-none d-sm-block">
            <div className="rounded-1 p-2 mt-3 bg-100">
              <div className="text-uppercase fs--2 fw-bold">We Accept</div>
              <img src={cards} width={120} alt="card payment options" />
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

PaymentCardForm.propTypes = {
  errors: PropTypes.any,
  register: PropTypes.any
};

export default PaymentCardForm;

import React from 'react';
import PropTypes from 'prop-types';

import { Col, Form, Row } from 'react-bootstrap';
import FormInput from '../../../../FormInput';

const BankInfoForm = ({ errors, register }) => {
  return (
    <>
      <Form>
        <Row className="gx-0 ps-2 mb-4">
          <Col sm={8} className="px-3">
            <FormInput
              type="text"
              id="cardNumber"
              errors={errors}
              label="Bank/ Institution Name"
              name="cardNumber"
              placeholder="Medallion Bank"
              formGroupProps={{ className: 'mb-3', as: Col, xl: 12 }}
              formControlProps={{
                ...register('bankName', {
                  required: "Please enter your bank's name"
                })
              }}
            />

            <Row className="align-items-center">
              <FormInput
                type="text"
                id="routingNumber"
                errors={errors}
                label="ABA/ Routing Number"
                name="routingNumber"
                placeholder="12345678"
                formGroupProps={{
                  className: 'mb-3',
                  as: Col,
                  xl: 6
                }}
                formControlProps={{
                  ...register('routingNumber', {
                    required: 'Please enter your routing number',
                    maxLength: 9,
                    pattern: /[0-9]{9}/
                  })
                }}
              />
              <FormInput
                type="text"
                id="accountNumber"
                errors={errors}
                label="Account Number"
                name="accountNumber"
                placeholder="12345678"
                formGroupProps={{
                  className: 'mb-3',
                  as: Col,
                  xl: 6
                }}
                formControlProps={{
                  ...register('accountNumber', {
                    required: 'Please enter your account number'
                  })
                }}
              />
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  );
};

BankInfoForm.propTypes = {
  errors: PropTypes.any,
  register: PropTypes.any
};

export default BankInfoForm;

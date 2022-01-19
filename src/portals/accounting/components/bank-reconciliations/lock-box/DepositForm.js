/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from 'portals/merchant/components/new-application/FormInput';
import { Col, Form, Row } from 'react-bootstrap';
import DOBDatePicker from 'portals/merchant/components/new-application/sections/applicant-info/DOBDatePicker';

import { idType } from 'data/new-application/self-identification';
import { stateList } from 'data/new-application/contact-info';

const DepositForm = ({ register, setValue, errors, watch }) => {
  const date = new Date();
  // const startDate = date.setDate(date.getDate());
  // const idExpStartDate = date.setDate(date.getDate() + 1);

  // const handleChange = e => {
  //   const value =
  //     e.target.type === 'checkbox' ? e.target.checked : e.target.value;

  //   setState({ ...state, [e.target.name]: value });
  // };

  return (
    <>
      <Row className="g-5 mb-3 ml-3">
        <Col>
          <Row>
            <FormInput
              label="First Name*"
              name="firstName"
              errors={errors}
              formGroupProps={{ as: Col, md: 4, xl: 3, className: 'mb-3' }}
              formControlProps={{
                ...register('firstName', {
                  required: 'Please provide your first name'
                }),
                placeholder: 'Nancy'
              }}
            />
          </Row>
          <Row>
            <FormInput
              label="Last Name*"
              name="lastName"
              errors={errors}
              formGroupProps={{ as: Col, md: 4, xl: 3, className: 'mb-3' }}
              formControlProps={{
                ...register('lastName', {
                  required: 'Please provide your last name'
                }),
                placeholder: 'Smith'
              }}
            />
          </Row>
          <Row>
            <DOBDatePicker
              label="Date"
              name="date"
              errors={errors}
              setValue={setValue}
              formGroupProps={{ as: Col, xl: 3, className: 'mb-3' }}
              formControlProps={{
                placeholder: '04/16/1989',
                ...register('date', {
                  // required: 'Please select your birth date'
                })
              }}
            />
          </Row>
          <Row>
            <FormInput
              label="Payment Type"
              name="paymentType"
              type="selectWithKeyValuePair"
              errors={errors}
              placeholder="Payment Type"
              options={stateList}
              formGroupProps={{ as: Col, sm: 4, className: 'mb-3' }}
              formControlProps={{
                // ...register('state', { required: 'State field is required' })
                ...register('paymentType')
              }}
            />
          </Row>
          <Row>
            <FormInput
              label="Loan ID"
              name="loanId"
              errors={errors}
              formGroupProps={{ as: Col, sm: 4, className: 'mb-3' }}
              formControlProps={{
                placeholder: '1234',
                ...register('loanId')
              }}
            />
          </Row>
        </Col>
      </Row>
      <Row className="g-2 mb-3"></Row>
      <Row className="g-2 mb-3"></Row>

      <Row className="g-2 mb-3">
        <FormInput
          type="selectWithKeyValuePair"
          label="Monthly Statement"
          name="monthlyStatement"
          placeholder="Monthly Statement"
          errors={errors}
          options={idType}
          formGroupProps={{ as: Col, sm: 6, xl: 3, className: 'mb-3' }}
          formControlProps={{
            ...register('monthlyStatement')
          }}
        />
      </Row>
    </>
  );
};

DepositForm.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func
};

export default DepositForm;

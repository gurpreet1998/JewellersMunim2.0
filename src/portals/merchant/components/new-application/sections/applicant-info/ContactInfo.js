import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../FormInput';
import { Col, Form, Row } from 'react-bootstrap';
import {
  validEmailPattern,
  validPhonePattern,
  validSSNPattern,
  validZipPattern
} from 'helpers/regex';
import DOBDatePicker from './DOBDatePicker';

import { idType } from 'data/new-application/self-identification';
import { stateList } from 'data/new-application/contact-info';

const ContactInfoForm = ({ register, setValue, errors, watch }) => {
  const date = new Date();
  const startDate = date.setDate(date.getDate());
  const idExpStartDate = date.setDate(date.getDate() + 1);

  const [state, setState] = useState({
    noEmail: false // is not checked
  });

  const handleChange = e => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setState({ ...state, [e.target.name]: value });
  };

  const preLoadEmail = {
    email: state.noEmail ? 'noemail@choicepays.com' : null
  };

  return (
    <>
      <Row className="g-2 mb-3">
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
        <FormInput
          label="Middle Name"
          name="middleName"
          errors={errors}
          formGroupProps={{ as: Col, md: 4, xl: 3, className: 'mb-3' }}
          formControlProps={{
            ...register('middleName'),
            placeholder: 'Jane'
          }}
        />
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
        <DOBDatePicker
          label="Date of Birth*"
          name="dob"
          errors={errors}
          setValue={setValue}
          formGroupProps={{ as: Col, xl: 3, className: 'mb-3' }}
          formControlProps={{
            placeholder: '04/16/1989',
            ...register('dob', {
              required: 'Please select your birth date'
            })
          }}
        />
      </Row>
      <Row className="g-2 mb-3">
        <FormInput
          label="Home Street Address*"
          name="Address1"
          errors={errors}
          formGroupProps={{ as: Col, sm: 8, className: 'mb-3' }}
          formControlProps={{
            placeholder: '123 Main St.',
            ...register('Address1', {
              required: 'Street address field is required'
            })
          }}
        />
        <FormInput
          label="Bld, Apt/Ste #"
          name="BldStreet"
          errors={errors}
          formGroupProps={{ as: Col, sm: 4, className: 'mb-3' }}
          formControlProps={{
            placeholder: 'Unit 1',
            ...register('BldStreet')
          }}
        />
      </Row>
      <Row className="g-2 mb-3">
        <FormInput
          label="City*"
          name="city"
          errors={errors}
          formGroupProps={{ as: Col, sm: 4, className: 'mb-3' }}
          formControlProps={{
            placeholder: 'Las Vegas',
            ...register('city', { required: 'City field is required' })
          }}
        />
        <FormInput
          label="State*"
          name="state"
          type="selectWithKeyValuePair"
          errors={errors}
          placeholder="Select State..."
          options={stateList}
          formGroupProps={{ as: Col, sm: 4, className: 'mb-3' }}
          formControlProps={{
            ...register('state', { required: 'State field is required' })
          }}
        />
        <FormInput
          label="Zip Code*"
          name="zipCode"
          errors={errors}
          formGroupProps={{ as: Col, sm: 4, className: 'mb-3' }}
          formControlProps={{
            placeholder: '89140',
            ...register('zipCode', {
              required: 'You must provide your Zip Code',
              pattern: {
                value: validZipPattern,
                message: 'Zip Code not valid'
              }
            })
          }}
        />
      </Row>
      <Row className="g-2 mb-3">
        <FormInput
          type="text"
          label="Home Phone*"
          name="phone"
          errors={errors}
          formGroupProps={{ as: Col, lg: 6, xl: 3, className: 'mb-3' }}
          formControlProps={{
            className: 'input-spin-none',
            placeholder: '(702) 888-8888',
            ...register('phone', {
              required: 'You must provide your primary phone number',
              pattern: {
                value: validPhonePattern,
                message: 'Phone number not valid'
              }
            })
          }}
        />
        <FormInput
          type="text"
          label="Mobile Phone"
          name="altPhone"
          errors={errors}
          formGroupProps={{ as: Col, lg: 6, xl: 3, className: 'mb-3' }}
          formControlProps={{
            className: 'input-spin-none',
            placeholder: '702-888-8888',
            ...register('altPhone', {
              pattern: {
                value: validPhonePattern,
                message: 'Phone number not valid'
              }
            })
          }}
        />
        <Col lg={9} xl={4}>
          <FormInput
            ref={register}
            type="email"
            errors={errors}
            label="Email*"
            id={'email'}
            name="email"
            formGroupProps={{
              className: 'mb-md-3 mb-0'
            }}
            formControlProps={{
              ...register('email', {
                required: 'Email field is required',
                pattern: {
                  value: validEmailPattern,
                  message: 'Email must be valid'
                }
              }),
              value: preLoadEmail.email,
              placeholder: 'nsmith@email.com'
            }}
          />
        </Col>
        <Col
          lg={3}
          xl={2}
          className="ps-2 d-flex flex-nowrap align-self-center pt-lg-4 pt-0"
        >
          <Form.Check
            type="checkbox"
            name="noEmail"
            checked={state.noEmail}
            onChange={handleChange}
            label="No Email Address?"
          />
        </Col>
      </Row>
      <Row className="g-2 mb-3">
        <FormInput
          type="password"
          errors={errors}
          label="Social Security Number*"
          name="ssn"
          placeholder="xxx-xx-xxxx"
          formGroupProps={{ as: Col, sm: 6, className: 'mb-3' }}
          formControlProps={{
            ...register('ssn', {
              required: 'You must provide your SSN',
              pattern: {
                value: validSSNPattern,
                message: 'SSN must be valid'
              }
            })
          }}
        />
        <FormInput
          type="password"
          errors={errors}
          label="Confirm SSN*"
          name="confirmSSN"
          placeholder="xxx-xx-xxxx"
          formGroupProps={{ as: Col, sm: 6, className: 'mb-3' }}
          formControlProps={{
            ...register('confirmSSN', {
              required: 'Confirm SSN field is required',
              validate: value =>
                value === watch('ssn') || 'The SSNs do not match'
            })
          }}
        />
      </Row>
      <Row className="g-2 mb-3">
        <FormInput
          type="selectWithKeyValuePair"
          label="Identification Type*"
          name="idType"
          placeholder="Select ID..."
          errors={errors}
          options={idType}
          formGroupProps={{ as: Col, sm: 6, xl: 3, className: 'mb-3' }}
          formControlProps={{
            ...register('idType', { required: 'Please select an ID Type' })
          }}
        />
        <FormInput
          label="ID Number*"
          name="idNumber"
          errors={errors}
          formGroupProps={{ as: Col, sm: 6, xl: 3, className: 'mb-3' }}
          formControlProps={{
            placeholder: 'DL12345678',
            ...register('idNumber', {
              required: 'Please enter your valid ID number'
            })
          }}
        />
        <FormInput
          type="date"
          label="ID Issuance Date*"
          name="idIssuanceDate"
          errors={errors}
          setValue={setValue}
          formGroupProps={{ as: Col, sm: 6, xl: 3, className: 'mb-3' }}
          formControlProps={{
            placeholder: 'E.g. 12/01/2020',
            ...register('idIssuanceDate', {
              required: 'Please select a valid date'
            })
          }}
          datepickerProps={{
            dateFormat: 'MM/dd/yyyy',
            showMonthDropdown: true,
            showYearDropdown: true,
            dropdownMode: 'select',
            maxDate: startDate
          }}
        />

        <FormInput
          type="date"
          label="ID Expiration Date*"
          name="idExpirationDate"
          errors={errors}
          setValue={setValue}
          formGroupProps={{ as: Col, sm: 6, xl: 3, className: 'mb-3' }}
          formControlProps={{
            placeholder: 'E.g. 12/01/2028',
            ...register('idExpirationDate', {
              required: 'Please select a valid date'
            })
          }}
          datepickerProps={{
            dateFormat: 'MM/dd/yyyy',
            showMonthDropdown: true,
            showYearDropdown: true,
            dropdownMode: 'select',
            minDate: idExpStartDate
          }}
        />
      </Row>
    </>
  );
};

ContactInfoForm.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func
};

export default ContactInfoForm;

import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../FormInput';

const ChoiceDisclosures = ({ register, errors }) => {
  return (
    <>
      <div className="border border-500 bg-100 rounded-1 px-3 py-2">
        <div className={'mb-2'}>
          <p className="fs--2 fs-md--1 mb-1">
            I agree that I am furnishing my information to CHOICE and I give
            CHOICE permission to share my personal information with it's
            partners for the purpose of looking for offers of credit for goods
            and services from merchants, either now or in the future, and for
            marketing products and services to me
          </p>
          <FormInput
            className={'mb-2'}
            type="checkbox"
            label="I Agree"
            errors={errors}
            name="agreedToTerms"
            formControlProps={{
              ...register('agreedToTerms', {
                required: 'You need to agree to the terms to continue.'
              })
            }}
          />
        </div>
        <div className={'mb-0'}>
          <p className="fs--2 fs-md--1 mb-1">
            You understand and agree that you are providing instructions to
            CHOICE under the Fair Credit Reporting Act (“FCRA”) to access
            information from your personal credit profile or other information
            from one or more consumer reporting agencies such as Equifax,
            Experian, or TransUnion. You authorize CHOICE to obtain such
            information solely to conduct a pre-qualification for credit. By
            checking the box and proceeding, we will initiate a “soft pull” of
            your credit and this will not affect your credit score.
          </p>
          <FormInput
            className={'mb-2'}
            type="checkbox"
            label="I Affirm"
            errors={errors}
            name="agreedToTerms2"
            formControlProps={{
              ...register('agreedToTerms2', {
                required: 'You need to agree to the terms to continue.'
              })
            }}
          />
        </div>
      </div>
    </>
  );
};

ChoiceDisclosures.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default ChoiceDisclosures;

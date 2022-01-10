import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import ContactInfoForm from './ContactInfo';
import PatriotActAlert from './PatriotAct';

const ApplicantInfo = ({ register, setValue, errors, watch }) => {
  return (
    <>
      <ContactInfoForm
        register={register}
        setValue={setValue}
        errors={errors}
        watch={watch}
      />
      <Row className="g-2 my-3">
        <PatriotActAlert />
      </Row>
    </>
  );
};

ApplicantInfo.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func
};
export default ApplicantInfo;

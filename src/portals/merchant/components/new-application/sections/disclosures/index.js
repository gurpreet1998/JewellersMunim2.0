import React from 'react';
import { Card } from 'react-bootstrap';
import ApplicationDisclosure from './AppConsent';
import ESignConsent from './ESignConsent';
import PropTypes from 'prop-types';

const DisclosuresForm = ({ register, errors }) => {
  return (
    <Card className="shadow-none">
      <Card.Body>
        <ApplicationDisclosure register={register} errors={errors} />
        <hr className="my-3" />
        <ESignConsent register={register} errors={errors} />
      </Card.Body>
    </Card>
  );
};

DisclosuresForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default DisclosuresForm;

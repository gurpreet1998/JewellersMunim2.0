import React from 'react';
import PropTypes from 'prop-types';
import FormLayout from './FormLayout';
import AuthWizardProvider from './AuthWizardProvider';

const NewApplication = ({ variant, validation, progressBar }) => {
  return (
    <AuthWizardProvider>
      <FormLayout
        variant={variant}
        validation={validation}
        progressBar={progressBar}
      />
    </AuthWizardProvider>
  );
};

NewApplication.propTypes = {
  variant: PropTypes.oneOf(['pills']),
  validation: PropTypes.bool,
  progressBar: PropTypes.bool
};

export default NewApplication;

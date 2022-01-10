import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NewApplicationContext } from 'context/Context';

const AuthWizardProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [step, setStep] = useState(1);

  const value = { user, setUser, step, setStep };
  return (
    <NewApplicationContext.Provider value={value}>
      {children}
    </NewApplicationContext.Provider>
  );
};

AuthWizardProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthWizardProvider;

import React from 'react';
import LoginForm from 'components/authentication/LoginForm';
import AuthCardLayout from 'layouts/AuthCardLayout';

const Login = () => {
  return (
    <AuthCardLayout>
      <h4 className="fs-3 fs-md-2 fs-lg-3 text-400">Welcome!</h4>
      <h5 className={'text-600 pb-3'}>Sign in to the Choice Portal</h5>
      <small>
        You are running this application in<b>{process.env.NODE_ENV}</b>mode.
      </small>
      <br />
      <small>
        Application URL :<b>{process.env.REACT_APP_API_URI}</b>
      </small>
      <LoginForm layout="card" hasLabel />
    </AuthCardLayout>
  );
};

export default Login;

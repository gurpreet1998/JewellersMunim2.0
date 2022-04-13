import React from 'react';
import LoginForm from 'components/authentication/LoginForm';
import AuthCardLayout from 'layouts/AuthCardLayout';

const Login = () => {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  return (
    <AuthCardLayout>
      <h4 className="fs-3 fs-md-2 fs-lg-3 text-400">Welcome!</h4>
      <h5 className={'text-600 pb-3'}>Sign in to the Choice Portal</h5>
      {process.env.NODE_ENV === 'development' ? (
        <>
          <p className={'fs--2 pb-0'}>
            You are running this application in <b>{process.env.NODE_ENV}</b>{' '}
            mode.
          </p>
          <p className={'fs--2 pb-0'}>
            Application API URI: <b>{process.env.REACT_APP_API_URI}</b> <br />
            Application Web URI: <b>{process.env.REACT_APP_REDIRECT_URI}</b>
          </p>
        </>
      ) : (
        <></>
      )}
      <LoginForm layout="card" hasLabel />
    </AuthCardLayout>
  );
};

export default Login;

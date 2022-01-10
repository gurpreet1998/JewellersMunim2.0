import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from 'components/authentication/Login';
import Logout from 'components/authentication/Logout';
import Registration from 'components/authentication/Registration';
import ForgetPassword from 'components/authentication/ForgetPassword';
import ConfirmMail from 'components/authentication/ConfirmMail';
import PasswordReset from 'components/authentication/PasswordReset';

const AuthCardRoutes = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/login`} exact component={Login} />
      <Route path={`${url}/register`} exact component={Registration} />
      <Route path={`${url}/logout`} exact component={Logout} />
      <Route path={`${url}/forgot-password`} exact component={ForgetPassword} />
      <Route path={`${url}/reset-password`} exact component={PasswordReset} />
      <Route path={`${url}/confirm-mail`} exact component={ConfirmMail} />

      {/*Redirect*/}
      <Redirect to="/errors/404" />
    </Switch>
  );
};

export default AuthCardRoutes;

/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NewApplication from '../components/new-application';
import MyApplications from '../components/my-applications';
import LoanCalculator from '../components/loan-calculator';
import InviteConsumer from '../components/invite-consumer';
import InviteHistory from '../components/invitation-history';
import PowerBi from '../components/power-bi/PowerBi';

const MerchantPortalRoutes = ({ match: { url } }) => (
  <Switch>
    <Route path={`${url}/new-application`} exact component={NewApplication} />
    <Route path={`${url}/my-applications`} exact component={MyApplications} />
    <Route path={`${url}/loan-calculator`} exact component={LoanCalculator} />
    <Route path={`${url}/invite-consumer`} exact component={InviteConsumer} />
    <Route path={`${url}/invitation-history`} exact component={InviteHistory} />
    <Route path={`${url}/power-bi`} exact component={PowerBi} />

    {/*Redirect*/}
    <Redirect to="/errors/404" />
  </Switch>
);

export default MerchantPortalRoutes;

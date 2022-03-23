/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import InviteConsumer from '../components/invite-consumer';
import InviteHistory from '../components/invitation-history';
import LoanCalculator from '../components/loan-calculator';
import MyApplications from '../components/my-applications';
import NewApplication from '../components/new-application';
import PowerBi from '../components/power-bi/PowerBi';
import { AuthContext } from 'context/Context';
import {
  fetchExtensionRole,
  useRolePermissionsData
} from 'hooks/useUserServiceData';

export default function MerchantPortalRoutes({ match: { url } }) {
  const auth = useContext(AuthContext);
  const extensionRole = fetchExtensionRole(auth);
  const { data: menuItems } = useRolePermissionsData(extensionRole);

  const checkForAccess = routeName => {
    if (auth.isAuthenticated) {
      return !!menuItems?.data?.includes(routeName);
    }
    return false;
  };

  return (
    <>
      {menuItems?.data && (
        <Switch>
          <Route path={`${url}/new-application`} exact>
            {checkForAccess('New Application', extensionRole) ? (
              <NewApplication />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>
          <Route path={`${url}/my-applications`} exact>
            {checkForAccess('My Applications') ? (
              <MyApplications />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>
          <Route path={`${url}/loan-calculator`} exact>
            {checkForAccess('Loan Calculator') ? (
              <LoanCalculator />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>
          <Route path={`${url}/invite-consumer`} exact>
            {checkForAccess('Invite Consumer') ? (
              <InviteConsumer />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>
          <Route path={`${url}/invitation-history`} exact>
            {checkForAccess('Invitation History') ? (
              <InviteHistory />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>
          <Route path={`${url}/power-bi`} exact>
            {checkForAccess('Power BI Report') ? (
              <PowerBi />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>
        </Switch>
      )}
    </>
  );
}

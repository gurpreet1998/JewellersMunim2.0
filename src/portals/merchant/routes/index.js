/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NewApplication from '../components/new-application';
import MyApplications from '../components/my-applications';
import LoanCalculator from '../components/loan-calculator';
import InviteConsumer from '../components/invite-consumer';
import InviteHistory from '../components/invitation-history';
import PowerBi from '../components/power-bi/PowerBi';

import { AuthContext } from 'api/authentication/auth-context';
import { roleBased_Permission } from '_services/userService';

export default function MerchantPortalRoutes({ match: { url } }) {
  const auth = useContext(AuthContext);
  console.log('auth ctx:', auth);
  const [extensionRole, setExtensionRole] = useState('');
  const [rolePermissionsObj, setRolePermissionsObj] = useState({});

  const GetAccessRolesByAPI = extnRole => {
    roleBased_Permission.GetPermissionsForRole(extnRole).then(res =>
      setRolePermissionsObj({
        ...rolePermissionsObj,
        [extnRole]: { Access: [...res] }
      })
    );
  };

  const RoleBasedPermission = () => {
    if (auth.isAuthenticated) {
      const extension_Role = auth.account?.idToken?.extension_Role || '';

      setExtensionRole(extension_Role);
      GetAccessRolesByAPI(extension_Role);
    } else {
      console.log('Login Failed');
    }
  };

  const checkForAccess = RouteName => {
    console.log(
      'Access Role =>',
      rolePermissionsObj?.[extensionRole]?.Access,
      'extensionRole =>',
      extensionRole
    );
    if (auth.isAuthenticated) {
      return !!rolePermissionsObj?.[extensionRole]?.Access.includes(RouteName);
    }
    return true;
  };

  useEffect(() => {
    console.log('Merchant Portal Initiated');
    RoleBasedPermission();
  }, [auth]);

  return (
    <>
      {rolePermissionsObj?.[extensionRole]?.Access && (
        <Switch>
          <Route path={`${url}/new-application`} exact>
            {checkForAccess('New Application', extensionRole) ? (
              <NewApplication />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>
          <Route path={`${url}/my-applications`} exact>
            {checkForAccess('My Applications') ? (
              <MyApplications />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>
          <Route path={`${url}/loan-calculator`} exact>
            {checkForAccess('Loan Calculator') ? (
              <LoanCalculator />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>
          <Route path={`${url}/invite-consumer`} exact>
            {checkForAccess('Invite Consumer') ? (
              <InviteConsumer />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>
          <Route path={`${url}/invitation-history`} exact>
            {checkForAccess('Invitation History') ? (
              <InviteHistory />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>
          <Route path={`${url}/power-bi`} exact>
            {checkForAccess('Power BI Report') ? (
              <PowerBi />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>
        </Switch>
      )}
    </>
  );
}

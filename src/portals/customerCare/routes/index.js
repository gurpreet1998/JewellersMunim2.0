/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CustomerCareHome from '../components/landing';
import CustomerLoanDetails from '../components/loan-details';
import { AuthContext } from 'context/Context';
import { roleBased_Permission } from '_services/userService';
// import BatchDetails from '../components/bank-reconciliations/lock-box/BatchDetails';
import HardStops from '../components/loanApplications/hardStops';
import DisputeAndComplaints from '../components/loans/disputesAndComplains';
import RedFlags from '../components/loans/redFlags';
import NSF from '../components/loans/NSF';
import Merchants from '../components/merchants';
import Lenders from '../components/lenders';
import Reports from '../components/reports';

export default function CustomerCarePortalRoutes({ match: { url } }) {
  const auth = useContext(AuthContext);
  const [ExtensionRole, setExtensionRole] = useState('');
  const [RolePermissionsObj, setRolePermissionsObj] = useState({});

  const GetAccessRolesByAPI = extnRole => {
    roleBased_Permission.GetPermissionsForRole(extnRole).then(res =>
      setRolePermissionsObj({
        ...RolePermissionsObj,
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

  /**
   * - The `RolePermissionsObj?.[ExtensionRole]?.Access` provides a list
   * of menu items/ routes based on permission settings
   * - The `ExtensionRole` is the type of access your role has. E.g. Accountant
   * @param RouteName: The keyword to determine access type. E.g. `AccountingHome`
   * @returns {boolean}
   */
  const checkForAccess = RouteName => {
    if (auth.isAuthenticated) {
      return !!RolePermissionsObj?.[ExtensionRole]?.Access.includes(RouteName);
    }
    return true;
  };

  useEffect(() => {
    console.log('CustomerCare Portal Initiated');
    RoleBasedPermission();
  }, [auth]);

  return (
    <>
      {RolePermissionsObj?.[ExtensionRole]?.Access && (
        <Switch>
          <Route path={`${url}/home`} exact>
            {checkForAccess('CustomerCareHome', ExtensionRole) ? (
              <CustomerCareHome />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/home/loandetails/:loanId`}>
            {checkForAccess('CustomerCareHome', ExtensionRole) ? (
              <CustomerLoanDetails />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/loanapplications/hardstops`} exact>
            {checkForAccess('HardStops', ExtensionRole) ? (
              <HardStops />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/loans/dispute&complaints`} exact>
            {checkForAccess('DisputeAndComplaints', ExtensionRole) ? (
              <DisputeAndComplaints />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/loans/redflags`} exact>
            {checkForAccess('RedFlags', ExtensionRole) ? (
              <RedFlags />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/loans/nsf`} exact>
            {checkForAccess('NSF', ExtensionRole) ? (
              <NSF />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/merchants`} exact>
            {checkForAccess('CustomerCareMerchants', ExtensionRole) ? (
              <Merchants />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/lenders`} exact>
            {checkForAccess('CustomerCareLenders', ExtensionRole) ? (
              <Lenders />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/reports`} exact>
            {checkForAccess('CustomerCareReports', ExtensionRole) ? (
              <Reports />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>
        </Switch>
      )}
    </>
  );
}

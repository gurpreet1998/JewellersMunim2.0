/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CustomerCareHome from '../components/landing';
import LoanDetails from 'components/common/loan-details';
import HardStops from '../components/loanApplications/hardStops';
import DisputeAndComplaints from '../components/loans/disputesAndComplains';
import RedFlags from '../components/loans/redFlags';
import NSF from '../components/loans/NSF';
import Merchants from '../components/merchants';
import Lenders from '../components/lenders';
import Reports from '../components/reports';
import { AuthContext } from 'context/Context';
import {
  fetchExtensionRole,
  useRolePermissionsData
} from 'hooks/useUserServiceData';

export default function CustomerCarePortalRoutes({ match: { url } }) {
  const auth = useContext(AuthContext);
  const extensionRole = fetchExtensionRole(auth);
  const { data: menuItems } = useRolePermissionsData(extensionRole);

  /**
   * - The `fetchExtensionRole(auth)` provides a list of menu items/ routes
   * - based on permission settings.
   * - The `extensionRole` is the type of access your role has. E.g. Accountant
   * @param routeName: The keyword to determine access type. E.g. `AccountingHome`
   * @returns {boolean}
   */
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
          <Route path={`${url}/home`} exact>
            {checkForAccess('CustomerCareHome', extensionRole) ? (
              <CustomerCareHome />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/loan/:loanId`}>
            {checkForAccess('CustomerCareHome', extensionRole) ? (
              <LoanDetails />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/loanapplications/hardstops`} exact>
            {checkForAccess('HardStops', extensionRole) ? (
              <HardStops />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/loans/dispute&complaints`} exact>
            {checkForAccess('DisputeAndComplaints', extensionRole) ? (
              <DisputeAndComplaints />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/loans/redflags`} exact>
            {checkForAccess('RedFlags', extensionRole) ? (
              <RedFlags />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/loans/nsf`} exact>
            {checkForAccess('NSF', extensionRole) ? (
              <NSF />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/merchants`} exact>
            {checkForAccess('CustomerCareMerchants', extensionRole) ? (
              <Merchants />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/lenders`} exact>
            {checkForAccess('CustomerCareLenders', extensionRole) ? (
              <Lenders />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/reports`} exact>
            {checkForAccess('CustomerCareReports', extensionRole) ? (
              <Reports />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>
        </Switch>
      )}
    </>
  );
}

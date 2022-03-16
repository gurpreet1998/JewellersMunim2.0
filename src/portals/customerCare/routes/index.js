/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AccountingHomeDashboard from 'portals/accounting/components/landing';
// import PendingMerchantSettlements from '../components/pending-settlements/merchants';
// import PendingLenderSettlements from '../components/pending-settlements/lender';
// import CPPAutoPayLoans from '../components/daily-payments/autopay-loans';
// import DebitCreditCardPayments from '../components/daily-payments/debit-credit';
// import ACHPayments from '../components/daily-payments/ach';
// import CMLReconciliation from '../components/bank-reconciliations/cml';
// import LockBox from '../components/bank-reconciliations/lock-box';
// import CPPReconciliation from '../components/bank-reconciliations/cpp';
// import DepositRec from '../components/manual-payments/deposit-rec';
// import LoanDetails from '../components/loan-details';
// import Cash from '../components/daily-payments/CashCheckMoneyOrder';
// import SearchResults from '../components/search-results';
// import MerchantSettlementDetails from '../components/pending-settlements/merchants/Details';
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
              <AccountingHomeDashboard />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          {/* <Route path={`${url}/reconciliations/lock-box/batchdetails/:batchId`}>
            {checkForAccess('AccountingHome', ExtensionRole) ? (
              <BatchDetails />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route> */}
          {/* <Route path={`${url}/home/loandetails/:loanId`}>
            {checkForAccess('AccountingHome', ExtensionRole) ? (
              <LoanDetails />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route> */}

          {/* <Route path={`${url}/home/searchresults`}>
            {checkForAccess('AccountingHome', ExtensionRole) ? (
              <SearchResults />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route> */}

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

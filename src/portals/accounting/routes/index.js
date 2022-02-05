/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AccountingHomeDashboard from '../components/landing';
import PendingMerchantSettlements from '../components/pending-settlements/merchants';
import PendingLenderSettlements from '../components/pending-settlements/lender';
import CPPAutoPayLoans from '../components/daily-payments/autopay-loans';
import DebitCreditCardPayments from '../components/daily-payments/debit-credit';
import ACHPayments from '../components/daily-payments/ach';
import CMLReconciliation from '../components/bank-reconciliations/cml';
import LockBox from '../components/bank-reconciliations/lock-box';
import CPPReconciliation from '../components/bank-reconciliations/cpp';
import DepositRec from '../components/manual-payments/deposit-rec';
import LoanDetails from '../components/loan-details';
import { AuthContext } from 'api/authentication/auth-context';
import { roleBased_Permission } from '_services/userService';

export default function AccountingPortalRoutes({ match: { url } }) {
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

  const checkForAccess = RouteName => {
    console.log(
      'Access Role',
      RolePermissionsObj?.[ExtensionRole]?.Access,
      'ExtensionRole =>',
      ExtensionRole
    );
    if (auth.isAuthenticated) {
      return !!RolePermissionsObj?.[ExtensionRole]?.Access.includes(RouteName);
    }
    return true;
  };

  useEffect(() => {
    console.log('Accounting Portal Initiated');
    RoleBasedPermission();
  }, [auth]);

  return (
    <>
      {RolePermissionsObj?.[ExtensionRole]?.Access && (
        <Switch>
          <Route path={`${url}/home`} exact>
            {checkForAccess('AccountingHome', ExtensionRole) ? (
              <AccountingHomeDashboard />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/home/loandetails/:loanId`}>
            {checkForAccess('AccountingHome', ExtensionRole) ? (
              <LoanDetails />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/reconciliations/cml`} exact>
            {checkForAccess('CML Lender', ExtensionRole) ? (
              <CMLReconciliation />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/reconciliations/cpplus`} exact>
            {checkForAccess('CP+ Lender', ExtensionRole) ? (
              <CPPReconciliation />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/reconciliations/lock-box`} exact>
            {checkForAccess('Lock Box', ExtensionRole) ? (
              <LockBox />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/payments/daily/autopay`} exact>
            {checkForAccess('CP+ AutoPay', ExtensionRole) ? (
              <CPPAutoPayLoans />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/payments/daily/debit-credit`} exact>
            {checkForAccess('Debit/ Credit Cards', ExtensionRole) ? (
              <DebitCreditCardPayments />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/payments/daily/ach`} exact>
            {checkForAccess('ACH', ExtensionRole) ? (
              <ACHPayments />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/payments/manual/deposit-rec`} exact>
            {checkForAccess('Deposit Rec', ExtensionRole) ? (
              <DepositRec />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/pending-settlements/merchants`} exact>
            {checkForAccess('Merchants', ExtensionRole) ? (
              <PendingMerchantSettlements />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>

          <Route path={`${url}/pending-settlements/lender`} exact>
            {checkForAccess('Lender (Medallion)', ExtensionRole) ? (
              <PendingLenderSettlements />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>
        </Switch>
      )}
    </>
  );
}

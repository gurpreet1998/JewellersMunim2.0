/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
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
import Cash from '../components/daily-payments/CashCheckMoneyOrder';
import SearchResults from '../components/search-results';
import MerchantSettlementDetails from '../components/pending-settlements/merchants/Details';
import BatchDetails from '../components/bank-reconciliations/lock-box/BatchDetails';
import { AuthContext } from 'context/Context';
import {
  fetchExtensionRole,
  useRolePermissionsData
} from 'hooks/useUserServiceData';

export default function AccountingPortalRoutes({ match: { url } }) {
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
          <Route path={`${url}/home`} exact>
            {checkForAccess('AccountingHome', extensionRole) ? (
              <AccountingHomeDashboard />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/home/loandetails/:loanId`}>
            {checkForAccess('AccountingHome', extensionRole) ? (
              <LoanDetails />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/home/searchresults`}>
            {checkForAccess('AccountingHome', extensionRole) ? (
              <SearchResults />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/reconciliations/cml`} exact>
            {checkForAccess('CML Lender', extensionRole) ? (
              <CMLReconciliation />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/reconciliations/cpplus`} exact>
            {checkForAccess('CP+ Lender', extensionRole) ? (
              <CPPReconciliation />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/reconciliations/lock-box`} exact>
            {checkForAccess('Lock Box', extensionRole) ? (
              <LockBox />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/reconciliations/lock-box/batchdetails/:batchId`}>
            {checkForAccess('AccountingHome', extensionRole) ? (
              <BatchDetails />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/payments/daily/autopay`} exact>
            {checkForAccess('CP+ AutoPay', extensionRole) ? (
              <CPPAutoPayLoans />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/payments/daily/debit-credit`} exact>
            {checkForAccess('Debit/ Credit Cards', extensionRole) ? (
              <DebitCreditCardPayments />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/payments/daily/ach`} exact>
            {checkForAccess('ACH', extensionRole) ? (
              <ACHPayments />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/payments/daily/cash`} exact>
            {checkForAccess('Cash/Checks/MoneyOrders', extensionRole) ? (
              <Cash />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/payments/manual/deposit-rec`} exact>
            {checkForAccess('Deposit Rec', extensionRole) ? (
              <DepositRec />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/pending-settlements/merchants`} exact>
            {checkForAccess('Merchants', extensionRole) ? (
              <PendingMerchantSettlements />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route
            path={`${url}/pending-settlements/merchants/:merchantId`}
            exact
          >
            {checkForAccess('Merchants', extensionRole) ? (
              <MerchantSettlementDetails />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>

          <Route path={`${url}/pending-settlements/lender`} exact>
            {checkForAccess('Lender (Medallion)', extensionRole) ? (
              <PendingLenderSettlements />
            ) : (
              <Redirect to="/errors/401" />
            )}
          </Route>
        </Switch>
      )}
    </>
  );
}

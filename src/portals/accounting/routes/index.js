/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AccountingHomeDashboard from '../components/landing';
import PendingMerchantSettlements from '../components/pending-settlements/merchants';
import PendingLenderSettlements from '../components/pending-settlements/lender';
import CPPAutoPayLoans from '../components/daily-payments/autopay-loans';
import DebitCreditCardPayments from '../components/daily-payments/debit-credit';
import ACHPayments from '../components/daily-payments/ach';
import UnmatchedDeposits from '../components/bank-reconciliations/unmatched-deposits';
import LockBox from '../components/bank-reconciliations/lock-box';
import UnmatchedACHDeposits from '../components/bank-reconciliations/unmatched-ach';
import DepositRec from '../components/manual-payments/deposit-rec';

const AccountingPortalRoutes = ({ match: { url } }) => (
  <Switch>
    <Route path={`${url}/home`} exact component={AccountingHomeDashboard} />
    {/* Bank Reconciliations */}
    <Route
      path={`${url}/reconciliations/unmatched`}
      exact
      component={UnmatchedDeposits}
    />
    <Route
      path={`${url}/reconciliations/unmatched-ach`}
      exact
      component={UnmatchedACHDeposits}
    />
    <Route path={`${url}/reconciliations/lock-box`} exact component={LockBox} />

    {/*Payments*/}
    <Route
      path={`${url}/payments/daily/autopay`}
      exact
      component={CPPAutoPayLoans}
    />
    <Route
      path={`${url}/payments/daily/debit-credit`}
      exact
      component={DebitCreditCardPayments}
    />
    <Route path={`${url}/payments/daily/ach`} exact component={ACHPayments} />
    <Route
      path={`${url}/payments/manual/deposit-rec`}
      exact
      component={DepositRec}
    />

    {/*Pending Settlements */}
    <Route
      path={`${url}/pending-settlements/merchants`}
      exact
      component={PendingMerchantSettlements}
    />
    <Route
      path={`${url}/pending-settlements/lender`}
      exact
      component={PendingLenderSettlements}
    />

    {/*Redirect*/}
    <Redirect to="/errors/404" />
  </Switch>
);

export default AccountingPortalRoutes;

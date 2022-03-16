/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from 'routes/routes';
import { flatRoutes } from 'helpers/utils';
import ComingSoon from 'components/pages/ComingSoon';

import MerchantPortalRoutes from 'portals/merchant/routes';
import AccountingPortalRoutes from 'portals/accounting/routes';
import AdminPortalRoutes from 'portals/admin/routes';
import CustomerCarePortalRoutes from 'portals/customerCare/routes';

const inActiveRoutes = flatRoutes(routes).filter(route => !route.active);

const MainRoutes = () => (
  <Switch>
    {/* Merchant Portal*/}
    <Route path="/portal/merchant/" component={MerchantPortalRoutes} />

    {/* Accounting Portal*/}
    <Route path="/portal/accounting/" component={AccountingPortalRoutes} />

    <Route path="/portal/admin/" component={AdminPortalRoutes} />

    <Route path="/portal/customercare/" component={CustomerCarePortalRoutes} />

    {/*Coming Soon*/}
    <Route
      path={inActiveRoutes.map(route => route.to)}
      exact
      component={ComingSoon}
    />

    {/*Redirect*/}
    <Redirect to="/errors/404" />
  </Switch>
);

export default MainRoutes;

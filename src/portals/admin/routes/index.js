/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from 'context/Context';
import { roleBased_Permission } from '_services/userService';
import Overview from '../components/overview';
import Merchants from '../components/merchants';
import Lenders from '../components/lenders';
import SponsorBanks from '../components/sponsor banks';
import Home from '../components/home';
import Users from 'portals/admin/components/users';

export default function AdminPortalRoutes({ match: { url } }) {
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
    console.log('Admin Portal Initiated');
    RoleBasedPermission();
  }, [auth]);

  return (
    <>
      {rolePermissionsObj?.[extensionRole]?.Access && (
        <Switch>
          <Route path={`${url}/home`} exact>
            {checkForAccess('adminhome', extensionRole) ? (
              <Home />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>
          <Route path={`${url}/overview`} exact>
            {checkForAccess('Overview', extensionRole) ? (
              <Overview />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>
          <Route path={`${url}/users`} exact>
            {checkForAccess('Users', extensionRole) ? (
              <Users />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>
          <Route path={`${url}/merchants`} exact>
            {checkForAccess('AdminMerchants') ? (
              <Merchants />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>
          <Route path={`${url}/lenders`} exact>
            {checkForAccess('Lenders') ? (
              <Lenders />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>
          <Route path={`${url}/sponsorbanks`} exact>
            {checkForAccess('Sponsors Banks') ? (
              <SponsorBanks />
            ) : (
              <Redirect to="/errors/404" />
            )}
          </Route>
        </Switch>
      )}
    </>
  );
}

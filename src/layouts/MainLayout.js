import React, { useContext, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomeDashboard from 'portals/merchant/components/landing';
import NavbarTop from 'components/navbar/top/NavbarTop';
import NavbarVertical from 'components/navbar/vertical/NavbarVertical';
import AppContext from 'context/Context';
import MainRoutes from './MainRoutes';
import Footer from 'components/footer/Footer';
import { AuthContext } from '../api/authentication/auth-context';
import AccountingStats from 'portals/accounting/components/landing';
import Login from 'components/authentication/Login';
import { Redirect } from 'react-router-dom';

const MainLayout = () => {
  const { hash, pathname } = useLocation();

  const {
    config: { isFluid, navbarPosition }
  } = useContext(AppContext);

  const auth = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={isFluid ? 'container-fluid' : 'container'}>
      {auth.isAuthenticated ? (
        navbarPosition === 'vertical' && <NavbarVertical />
      ) : (
        <></>
      )}
      <div className="content">
        {auth.isAuthenticated ? <NavbarTop /> : <></>}
        <Switch>
          {ShowDesiredLandingPage()}
          <MainRoutes />
        </Switch>
        {auth.isAuthenticated ? <Footer /> : <></>}
      </div>
    </div>
  );
};

/**
 * Separate function to show pages in terms of roles
 * @returns {JSX.Element} A path to role-based landing page
 * @constructor
 */
function ShowDesiredLandingPage() {
  const auth = useContext(AuthContext);

  if (auth && auth.isAuthenticated) {
    // Check if user has authenticated
    const CurrentRole = auth.account.idTokenClaims.extension_Role;

    switch (CurrentRole) {
      case 'Merchant':
        return <Route path="/" exact component={HomeDashboard} />;

      case 'Developer':
        return <Route path="/" exact component={AccountingStats} />;

      default:
        return <Redirect to={`errors/501`} />; // When role is not defined
    }
  } else {
    return <Route path="/" exact component={Login} />;
  }
}

export default MainLayout;

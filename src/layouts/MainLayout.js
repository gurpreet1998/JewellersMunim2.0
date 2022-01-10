import React, { useContext, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomeDashboard from 'portals/merchant/components/landing';
import NavbarTop from 'components/navbar/top/NavbarTop';
import NavbarVertical from 'components/navbar/vertical/NavbarVertical';
import AppContext from 'context/Context';
import MainRoutes from './MainRoutes';
import Footer from 'components/footer/Footer';

const MainLayout = () => {
  const { hash, pathname } = useLocation();

  const {
    config: { isFluid, navbarPosition }
  } = useContext(AppContext);

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
      {navbarPosition === 'vertical' && <NavbarVertical />}
      <div className="content">
        <NavbarTop />
        <Switch>
          <Route path="/" exact component={HomeDashboard} />
          <MainRoutes />
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

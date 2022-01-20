import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import is from 'is_js';
import MainLayout from './MainLayout';
// import SettingsToggle from 'components/settings-panel/SettingsToggle';
// import SettingsPanel from 'components/settings-panel/SettingsPanel';

import ErrorLayout from './ErrorLayout';

import { toast, ToastContainer } from 'react-toastify';
import { CloseButton, Fade } from 'components/common/Toast';
import AuthCardRoutes from 'components/authentication/AuthCardRoutes';

const Layout = () => {
  const HTMLClassList = document.getElementsByTagName('html')[0].classList;

  useEffect(() => {
    if (is.windows()) {
      HTMLClassList.add('windows');
    }
    if (is.chrome()) {
      HTMLClassList.add('chrome');
    }
    if (is.firefox()) {
      HTMLClassList.add('firefox');
    }
  }, [HTMLClassList]);

  return (
    <>
      <Switch>
        <Route path="/errors" component={ErrorLayout} />
        <Route path="/authentication/" component={AuthCardRoutes} />
        {/* <Route
          path="/portal/merchant/new-application"
          component={NewApplicationWizard}
        /> */}

        <Route component={MainLayout} />
        <Redirect to="/errors/404" />
      </Switch>
      {/*<SettingsToggle />*/}
      {/*<SettingsPanel />*/}
      <ToastContainer
        transition={Fade}
        closeButton={CloseButton}
        closeOnClick
        position={toast.POSITION.BOTTOM_LEFT}
      />
    </>
  );
};

export default Layout;

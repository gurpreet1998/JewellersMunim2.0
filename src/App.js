import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import AuthProvider from 'api/authentication/auth-provider';
import Layout from 'layouts/Layout';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.min.css';
import Error404 from 'components/errors/Error404';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename={process.env.PUBLIC_URL}>
        <Error404 />
      </Router>
      {process.env.NODE_ENV === 'development' ? (
        <>
          <ReactQueryDevtools initialIsOpen={false} position={'bottom-left'} />
        </>
      ) : (
        <></>
      )}
    </QueryClientProvider>
  );
};

export default AuthProvider(App);

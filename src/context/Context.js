import { createContext } from 'react';
import { settings } from 'config';

const AppContext = createContext(settings);

export const OfferContext = createContext({ offers: [] });

// export const AuthContext = createContext();

export const NewApplicationContext = createContext({
  user: {},
  servicedata: {},
  paymentdata: {}
});

export default AppContext;

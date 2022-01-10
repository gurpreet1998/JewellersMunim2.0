import { UserAgentApplication } from 'msal';
const REACT_APP_CLIENT_ID = 'bbea8205-0507-42dd-bc6f-b2bf0b2a0b78';
const REACT_APP_AUTHORITY =
  'https://choicepayb2c.b2clogin.com/tfp/choicepayb2c.onmicrosoft.com/B2C_1_choicepayUF';
const REACT_APP_VALIDATE_AUTHORITY = 'false';
const REACT_APP_REDIRECT_URI = 'http://localhost:3000/';
const REACT_APP_POST_LOGOUT_REDIRECT_URI =
  'http://localhost:3000/authentication/logout';
const REACT_APP_NAVIGATE_TO_LOGIN_REQUEST_URL = 'false';

export const requiresInteraction = errorMessage => {
  if (!errorMessage || !errorMessage.length) {
    return false;
  }

  return (
    errorMessage.indexOf('consent_required') > -1 ||
    errorMessage.indexOf('interaction_required') > -1 ||
    errorMessage.indexOf('login_required') > -1
  );
};

export const fetchMsGraph = async (url, accessToken) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  return response.json();
};

export const isIE = () => {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ') > -1;
  const msie11 = ua.indexOf('Trident/') > -1;

  // If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
  // const isEdge = ua.indexOf("Edge/") > -1;

  return msie || msie11;
};

export const AUTH_SCOPES = {
  OPENID: 'openid',
  OFFLINE_ACCESS: 'offline_access',
  PROFILE: 'profile'
};

export const AUTH_REQUESTS = {
  LOGIN: {
    scopes: [AUTH_SCOPES.OPENID, AUTH_SCOPES.PROFILE]
  },
  EMAIL: {
    scopes: []
  },
  REFRESH_TOKEN: {
    scopes: [REACT_APP_CLIENT_ID]
  }
};

export const msalApp = new UserAgentApplication({
  auth: {
    clientId: REACT_APP_CLIENT_ID,
    authority: REACT_APP_AUTHORITY,
    validateAuthority: REACT_APP_VALIDATE_AUTHORITY === 'true',
    redirectUri: REACT_APP_REDIRECT_URI,
    postLogoutRedirectUri: REACT_APP_POST_LOGOUT_REDIRECT_URI,
    navigateToLoginRequestUrl:
      REACT_APP_NAVIGATE_TO_LOGIN_REQUEST_URL === 'true'
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: isIE()
  },
  system: {
    navigateFrameWait: 0
  }
});

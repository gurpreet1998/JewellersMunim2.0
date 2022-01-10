export const msalConfig = {
  auth: {
    clientId: 'bbea8205-0507-42dd-bc6f-b2bf0b2a0b78',
    authority:
      'https://choicepayb2c.b2clogin.com/tfp/choicepayb2c.onmicrosoft.com/B2C_1_choicepayUF', // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: 'http://localhost:3000'
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ['User.Read']
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com'
};

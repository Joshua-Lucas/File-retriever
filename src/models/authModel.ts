const msal = require("@azure/msal-node");

//MSAL configuration
const msalconfig = {
  auth: {
    clientId: process.env.OAUTH_APP_ID,
    authority: process.env.OAUTH_AUTHORITY,
    clientSecret: process.env.OAUTH_APP_SECRET,
  },
  system: {
    loggerOptions: {
      loggerCalback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Verbose,
    },
  },
};

// MSAL object
export const msalClient = new msal.ConfidentialClientApplication(msalconfig);

// var msalRequest = { scopes: ["File.Read"] };

// // function ensureScope(scope: string[]) {
// //   if (
// //     !msalRequest.scopes.some(function checkingScopesArrayForScopeItem(
// //       scopeItem: string
// //     ) {
// //       scopeItem.toLowerCase() === scope.toLowerCase();
// //     })
// //   ) {
// //     msalRequest.scopes.push(scope);
// //   }
// // }

// //Initalize MSAL client
// const msalClient = new msal.ConfidentialClientApplication(msalconfig);

// //Log the Client in
// async function signIn() {
//   const authRequest = await msalClient.acquireTokenSilent(msalRequest.scopes)

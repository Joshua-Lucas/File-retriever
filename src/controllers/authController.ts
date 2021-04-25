import { msalClient } from "../models/authModel";

// set up user sign in and redirect

/* idea for routes:

    user fetches the request, the api authorizes the request then sends back a token which is then used to retrieve the file from ms graph and then api servers file to user.

    original route that handles the auth : app/html/:fileName
    
    redirect route that handles getting file and serving it : app/getFile/fileName

*/

async function getAuth(req, res) {
  let fileName: string = req.params.fileName;
  const authCodeUrlPerameters = {
    scopes: ["Files.Read"],
    redirectUri: `${process.env.OAUTH_REDIRECT_URI}`,
  };

  msalClient
    .getAuthCodeUrl(authCodeUrlPerameters)
    .then(function redirect(response) {
      console.log(authCodeUrlPerameters.redirectUri);
      res.redirect(response);
    })
    .catch(function catchError(err) {
      console.log(JSON.stringify(err));
    });
}

export const authController = {
  getAuth: getAuth,
};

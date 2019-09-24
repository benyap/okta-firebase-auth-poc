import * as functions from "firebase-functions";
// import { auth } from "firebase-admin";

import verifier from "./okta";

export const authenticate = functions
  .region("us-central1")
  .https.onCall(
    async (
      data: { token: string },
      context: functions.https.CallableContext
    ) => {
      console.log(functions.config());

      try {
        // Verify the user's token from Okta.
        // FIXME: this throws an error! Needs investigation.
        const decodedToken = await verifier.verifyAccessToken(
          data.token,
          functions.config().oktafirebasepoc.audience
        );

        // If the token is decoded successfully, do any additional checks here.
        //
        // ... other checks
        //

        console.log(decodedToken);

        // If all is good, get the user's profile from Okta.
        const userInfo = await fetch(
          `${
            functions.config().oktafirebasepoc.oktaurl
          }/oauth2/default/v1/userinfo`,
          {
            headers: {
              Authorization: `Bearer ${data.token}`
            }
          }
        ).then(resp => resp.json());

        console.log(userInfo);

        // Get the user's Firebase auth user.
        return decodedToken;
        // If one doesn't exist, create a new profile.
      } catch (error) {
        console.error(error);
      }
    }
  );

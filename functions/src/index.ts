import * as functions from "firebase-functions";
import fetch from "node-fetch";
import { auth, config } from "./utils";

import verifier from "./okta";

export const authenticate = functions
  .region("us-central1")
  .https.onCall(
    async (
      data: { token: string },
      context: functions.https.CallableContext
    ) => {
      console.log(config());

      try {
        // Verify the user's token from Okta.
        const decodedToken = await verifier.verifyAccessToken(
          data.token,
          config().oktafirebasepoc.audience
        );

        // If the token is decoded successfully, do any additional checks here.
        //
        // ... other checks
        //

        console.log(decodedToken);

        // If all is good, get the user's profile from Okta.
        const userInfo = await fetch(
          `${config().oktafirebasepoc.oktaurl}/oauth2/default/v1/userinfo`,
          {
            headers: {
              Authorization: `Bearer ${data.token}`
            }
          }
        ).then(resp => resp.json());

        console.log(userInfo);

        // Do more checks on Okta profile if necessary
        //
        // ... other checks
        //

        // Get the user's Firebase auth user.
        let user;
        try {
          user = await auth.getUserByEmail(userInfo.email.toLowerCase());
        } catch (error) {
          console.error(error);

          // If one doesn't exist, create a new profile.
          try {
            user = await auth.createUser({
              email: userInfo.email.toLowerCase(),
              displayName: userInfo.name,
              emailVerified: userInfo.email_verified
            });

            console.log("Created new user", user.email);
          } catch (error) {
            console.error(error);
          }
        }

        if (user) {
          const token = auth.createCustomToken(user.uid);
          return token;
        } else {
          throw new Error("Failed to retrieve or create user.");
        }
      } catch (error) {
        console.error(error);
      }

      return null;
    }
  );

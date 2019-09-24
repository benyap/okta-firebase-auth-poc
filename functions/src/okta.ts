import * as functions from "firebase-functions";
import * as OktaJwtVerifier from "@okta/jwt-verifier";

// Create verifier
const oktaVerifier = new OktaJwtVerifier({
  issuer: `${functions.config().oktafirebasepoc.oktaurl}/oauth2/default`
});

export default oktaVerifier;

import React, { useCallback } from "react";
import uuid from "uuid/v4";

import * as c from "../../constants";
import buildURL from "../../utils/URLBuilder";

/**
 * Redirect the user to the Okta login URL.
 */
export const OktaLoginButton: React.FC = () => {
  const login = useCallback(() => {
    // Generate & store nonce
    const nonce = uuid();
    window.localStorage.setItem("nonce", nonce);

    const url = buildURL(`${c.OKTA_URL}/oauth2/${c.AUTH_SERVER}/v1/authorize`, {
      client_id: c.CLIENT_ID,
      redirect_uri: `${window.location.origin}${c.REDIRECT_URI}`,
      response_type: c.RESPONSE_TYPE,
      audience: c.AUDIENCE,
      scope: c.SCOPE,
      state: c.STATE,
      nonce
    });
    window.location.href = url;
  }, []);
  return <button onClick={login}>Log in with Okta</button>;
};

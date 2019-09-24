import React, { useCallback } from "react";

import * as c from "../../constants";
import buildURL from "../../utils/URLBuilder";

/**
 * Redirect the user to the Okta login URL.
 */
export const OktaLoginButton: React.FC = () => {
  const login = useCallback(() => {
    window.location.href = buildURL(`${c.OKTA_URL}/oauth2/v1/authorize`, {
      client_id: c.CLIENT_ID,
      redirect_uri: `${window.location.origin}${c.REDIRECT_URI}`,
      response_type: c.RESPONSE_TYPE,
      scope: c.SCOPE,
      state: c.STATE,
      nonce: c.NONCE
    });
  }, []);
  return <button onClick={login}>Log in with Okta</button>;
};

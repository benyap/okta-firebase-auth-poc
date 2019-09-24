import React, { useCallback } from "react";

import buildURL from "../../utils/URLBuilder";
import * as c from "../../constants";

import { OktaLogoutButtonProps } from "./types";

export const OktaLogoutButton: React.FC<OktaLogoutButtonProps> = ({
  idToken
}) => {
  const logout = useCallback(() => {
    window.location.href = buildURL(`${c.OKTA_URL}/oauth2/default/v1/logout`, {
      id_token_hint: idToken,
      post_logout_redirect_uri: window.location.origin
    });
  }, []);

  return <button onClick={logout}>Log out of Okta</button>;
};

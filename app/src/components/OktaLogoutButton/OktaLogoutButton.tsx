import React, { useCallback } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import buildURL from "../../utils/URLBuilder";
import * as c from "../../constants";

import { OktaLogoutButtonProps } from "./types";

/**
 * WIP: Log the user out by redirecting to the logout URL.
 *
 * FIXME: This is broken at the moment - getting a 400 error
 * (bad request) when redirecting with these parameters.
 * Something wrong with the Id Token apparently.
 */
export const OktaLogoutButton: React.FC<OktaLogoutButtonProps> = ({
  idToken
}) => {
  const logout = useCallback(() => {
    firebase.auth().signOut();
    window.location.href = buildURL(`${c.OKTA_URL}/oauth2/default/v1/logout`, {
      id_token_hint: idToken,
      post_logout_redirect_uri: window.location.origin
    });
  }, [idToken]);

  return <button onClick={logout}>Log out of Okta</button>;
};

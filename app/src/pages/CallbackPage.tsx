import React from "react";
import { parse } from "query-string";
import decode from "jwt-decode";

import ScrollPanel from "../components/ScrollPanel";
import FirebaseLoginButton from "../components/FirebaseLoginButton";
import FirebaseLogoutButton from "../components/FirebaseLogoutButton";
import OktaLogoutButton from "../components/OktaLogoutButton";

/**
 * This page should parse any parameters returned from Okta
 * and use it to log in to Firebase.
 */
const CallbackPage = () => {
  const search = parse(window.location.search);
  const hash = parse(window.location.hash);

  const { id_token, access_token } = hash;

  let idToken, accessToken;

  if (id_token) {
    idToken = decode(id_token as string);
  }

  if (access_token) {
    accessToken = decode(access_token as string);
  }

  return (
    <div className="content">
      <h2>Search parameters</h2>
      <ScrollPanel>
        <pre>{JSON.stringify(search, null, 2)}</pre>
      </ScrollPanel>

      <h2>Hash parameters</h2>
      <ScrollPanel>
        <pre>{JSON.stringify(hash, null, 2)}</pre>
      </ScrollPanel>

      {idToken && (
        <>
          <h2>Decoded Access Token</h2>
          <ScrollPanel>
            <pre>{JSON.stringify(idToken, null, 2)}</pre>
          </ScrollPanel>
        </>
      )}

      {accessToken && (
        <>
          <h2>Decoded Id Token</h2>
          <ScrollPanel>
            <pre>{JSON.stringify(accessToken, null, 2)}</pre>
          </ScrollPanel>
        </>
      )}

      {id_token && idToken && (
        <>
          <h2>
            Nonce{" "}
            {(idToken as any).nonce === window.localStorage.getItem("nonce")
              ? "valid"
              : "invalid"}
          </h2>
          <ScrollPanel>
            <pre>
              {JSON.stringify(
                {
                  received: (idToken as any).nonce,
                  stored: window.localStorage.getItem("nonce")
                },
                null,
                2
              )}
            </pre>
          </ScrollPanel>
          <br />
        </>
      )}

      {access_token && (
        <>
          <h3>If your log in to Okta was successful</h3>
          <p>
            You can use your Access Token from Okta to get a custom auth token
            to log in to Firebase. The access token is sent to a cloud function
            that will verify the access token and mint a new custom auth token.
          </p>
          <br />
          <p>This step would normally be automated.</p>
          <br />
          <div className="buttons">
            <FirebaseLoginButton token={hash.access_token as string} />
            <FirebaseLogoutButton />
            {hash.id_token && (
              <OktaLogoutButton idToken={hash.id_token as string} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CallbackPage;

import React from "react";
import { parse } from "query-string";

import ScrollPanel from "../components/ScrollPanel";
import FirebaseLoginButton from "../components/FirebaseLoginButton";
import OktaLogoutButton from "../components/OktaLogoutButton";

/**
 * This page should parse any parameters returned from Okta
 * and use it to log in to Firebase.
 */
const CallbackPage = () => {
  const search = parse(window.location.search);
  const hash = parse(window.location.hash);

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

      {hash.access_token && (
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
          <FirebaseLoginButton token={hash.access_token as string} />
          <br />
          {hash.id_token && (
            <OktaLogoutButton idToken={hash.id_token as string} />
          )}
        </>
      )}
    </div>
  );
};

export default CallbackPage;

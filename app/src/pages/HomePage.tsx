import React from "react";

import OktaLoginButton from "../components/OktaLoginButton";

/**
 * Log in through Okta from this page.
 */
const HomePage = () => {
  return (
    <div className="content">
      <p>Log in using Okta to get an access token.</p>
      <br />
      <OktaLoginButton />
    </div>
  );
};

export default HomePage;

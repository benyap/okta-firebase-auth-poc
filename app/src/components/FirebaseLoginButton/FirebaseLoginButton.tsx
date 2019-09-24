import React, { useCallback } from "react";

import { FirebaseLoginButtonProps } from "./types";

export const FirebaseLoginButton: React.FC<FirebaseLoginButtonProps> = ({
  token
}) => {
  const login = useCallback(() => {}, []);
  return <button onClick={login}>Log in to Firebase</button>;
};

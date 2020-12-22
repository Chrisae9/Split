import { Button } from "react-bootstrap";
import React from "react";
import { useGoogleLogin } from "react-google-login";

import config from "../config.json";

const clientId = config.GOOGLE_CLIENT_ID;

function LoginHooks({ onSuccess }) {
  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    // alert(`Failed to login.`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <Button
      onClick={signIn}
      variant="outline-dark"
      size="sm"
      className="form-control"
    >
      <img
        src={process.env.PUBLIC_URL + "/google.svg"}
        alt="google login"
        className="icon"
      ></img>
      Sign in with Google
    </Button>
  );
}

export default LoginHooks;

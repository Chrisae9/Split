import React from "react";
import { useGoogleLogout } from "react-google-login";
import { Button } from "react-bootstrap";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function LogoutHooks({ setShowLogout }) {
  const onLogoutSuccess = (res) => {
    console.log("Logged out Success");
    // alert("Logged out Successfully ✌");
    setShowLogout(false);
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <Button
      onClick={signOut}
      variant="outline-dark"
      size="sm"
      className="form-control"
    >
      <img
        src={process.env.PUBLIC_URL + "/google.svg"}
        alt="google login"
        className="icon"
      ></img>
      Sign out
    </Button>
  );
}

export default LogoutHooks;

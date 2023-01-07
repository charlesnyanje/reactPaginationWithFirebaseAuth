import React from "react";
import { ReactComponent as GoogleIcon } from "../assets/svg/googleIcon.svg";
import { useNavigate } from "react-router-dom";

import { GoogleAuthProvider } from "firebase/auth";
import { UserAuth } from "../context/AuthContext";

function GoogleAuth() {
  const { goAuth } = UserAuth();

  const navigate = useNavigate();

  const onClick = async (e) => {
    e.preventDefault();

    try {
      const provider = new GoogleAuthProvider();

      const result = await goAuth(provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      console.log(token);

      const user = result.user;

      if (user && user) {
        navigate("/Dashboard", { replace: true });
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="googleAuth">
        <GoogleIcon height="40px" width="40px" onClick={onClick} />
      </div>
    </>
  );
}

export default GoogleAuth;

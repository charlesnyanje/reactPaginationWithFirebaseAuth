import React, { useState } from "react";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const mySwal = withReactContent(swal);

  const onSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!

        mySwal.fire({
          title: "Email sent",
          text: "Check your email",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#ff6b6b",
          background: "#ffffff",
          width: "400px",
          padding: "2rem",
          customClass: {
            title: "swalTitle",
            content: "swalContent",
            confirmButton: "swalConfirmButton",
          },
        });
        navigate("/", { replace: true });

        // ..
      })
      .catch((error) => {
        mySwal.fire({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#ff6b6b",
          background: "#ffffff",
          width: "400px",
          padding: "2rem",
          customClass: {
            title: "swalTitle",
            content: "swalContent",
            confirmButton: "swalConfirmButton",
          },
        });
        // ..
      });
  };

  const onChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Forgot password</p>
        </header>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="email"
            className="emailInput"
            value={email}
            id="email"
            onChange={onChange}
          />

          <div className="signIn">
            <p className="signInText">Send</p>
          </div>

          <div className="signInBar">
            <button className="signInButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>

          <Link to="/" className="signInLink">
            Sign in
          </Link>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;

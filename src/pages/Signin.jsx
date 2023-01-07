import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import GoogleAuth from "./GoogleAuth";
import { UserAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const mySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signIn(email, password);

      const user = userCredential.user;

      if (user && user) {
        mySwal.fire({
          title: "Welcome",
          text: "Sign in successful",
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

        navigate("/Dashboard", { replace: true });
      }
    } catch (error) {
      mySwal.fire({
        title: "Error",
        text: "Failed",
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
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back</p>
        </header>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          <Link to="/ForgotPassword" className="forgotPasswordLink">
            Forgot password
          </Link>
          <div className="signIn">
            <p className="signInText">Sign In</p>
          </div>

          <div className="signInBar">
            <button className="signInButton">
              <ArrowRightIcon width="34px" height="34px" fill="#ffffff" />
            </button>
          </div>
          <GoogleAuth />
          <Link to="/Signup" className="signUpLink">
            Sign up instead
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signin;

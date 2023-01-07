import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { db, auth } from "../firebaseConfig";
import { UserAuth } from "../context/AuthContext";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { createUser } = UserAuth();

  const { name, email, password } = formData;
  const mySwal = withReactContent(Swal);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      if (user && user) {
        mySwal.fire({
          title: "Email sent",
          text: "Sign up successful",
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
      }

      updateProfile(auth.currentUser, {
        displayName: name,
        email: email,
      });

      const copiedData = { ...formData };
      delete copiedData.password;
      copiedData.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), copiedData);
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
    e.preventDefault();

    setFormData((prevState) => ({
      ...prevState,

      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome</p>
        </header>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Name"
            id="name"
            className="nameInput"
            value={name}
            onChange={onChange}
          />

          <input
            type="email"
            id="email"
            placeholder="Email"
            className="emailInput"
            value={email}
            onChange={onChange}
          />

          <input
            type="password"
            id="password"
            placeholder="password"
            className="passwordInput"
            value={password}
            onChange={onChange}
          />

          <div className="signIn">
            <p className="signInText">Sign up</p>
          </div>
          <div className="signInBar">
            <button type="submit" className="signInButton">
              <ArrowRightIcon width="34px" height="34px" fill="#ffffff" />
            </button>
          </div>

          <Link to="/" className="signInLink">
            Sign in instead
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signup;

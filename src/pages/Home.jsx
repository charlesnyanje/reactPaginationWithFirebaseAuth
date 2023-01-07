import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Home() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const onLogOut = async () => {
    await logOut();
    navigate("/", { replace: true });
  };

  const date = new Date();
  const time = date.getHours();

  return (
    <div>
      <header>
        <h1>My Profile</h1>
      </header>
      <div className="container">
        <div className="profileDetails">
          <div className="time">
            {time < 12 && <p>Good Morning</p>}
            {time >= 12 && time < 17 && <p>Good Afternoon</p>}
            {time >= 17 && <p>Good Evening</p>}
          </div>
          <p className="personalDetailsText">{user && user.displayName}</p>

          <p className="msg">Welcome</p>
        </div>
        <button className="btn-signout" onClick={onLogOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Home;

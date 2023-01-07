import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav>
        <NavLink
          exact="true"
          to="/Dashboard"
          className={({ isActive }) => (isActive ? "active" : "link")}
        >
          <FontAwesomeIcon icon={faHome} />Home
        </NavLink>

        <NavLink
          exact="true"
          to="/About"
          className={({ isActive }) => (isActive ? " active" : "link")}
        >
          <FontAwesomeIcon icon={faUser} />About
        </NavLink>

        <NavLink
          exact="true"
          to="/Users"
          className={({ isActive }) => (isActive ? " active" : "link")}
        >
          <FontAwesomeIcon icon={faUsers} />Users
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;

import React from "react";

function About() {
  return (
    <>
      <header>
        <h1>About Page</h1>
      </header>
      <div className="aboutContainer">
        <p>
          This web application is about react and firebase authentication ,where
          a user is able to sign in and up through the firebase built in
          providers which are 'sign in an existing user,creating a new
          user,signing in a user with google pop up and password reset.
        </p>

        <p>
          there exist a users page which displays a couple users fetched from
          the randomuser api with the help of axios then react paginate to
          implement pagination where one can switch the users.
        </p>
      </div>
    </>
  );
}

export default About;

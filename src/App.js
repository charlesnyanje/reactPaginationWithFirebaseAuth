import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Users from "./pages/Users";
import Dashboard from "./pages/Home";
import Protected from "./components/Protected";
import ForgotPassword from "./pages/ForgotPassword";
import SharedLayout from "./pages/SharedLayout";

import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Protected>
                  <SharedLayout />
                </Protected>
              }
            >
              <Route
                path="/Dashboard"
                element={
                  <Protected>
                    <Dashboard />
                  </Protected>
                }
              />

              <Route
                path="/About"
                element={
                  <Protected>
                    <About />
                  </Protected>
                }
              />

              <Route
                path="/Users"
                element={
                  <Protected>
                    <Users />
                  </Protected>
                }
              />
            </Route>

            <Route index element={<Signin />} />

            <Route path="/Signup" element={<Signup />} />

            <Route path="/ForgotPassword" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;

import { useState } from "react";
import "./AuthStyles.css";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { Container, Paper, Typography, useMediaQuery } from "@mui/material";

import { auth } from "../../firebase/config"
import { useAuthState } from "react-firebase-hooks/auth"

export default function Registration() {
  const mobile = useMediaQuery('(max-width:600px)');
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass = `${mobile
    ?
    `container container-mobile ${type === "signUp" ? "signUp signIn-non right-panel-active" : "signUp-non signIn"}`
    :
    "container container-web " + (type === "signUp" ? "right-panel-active" : "")}`;
  return (
    <Container maxWidth="md" sx={{ mb: 2 }} className="registration">
      <Paper sx={{ textAlign: 'center' }} className={containerClass} id="container">

        {
          mobile ?
            <>
              {type === "signUp" && <SignUpForm {...{ mobile, handleOnClick, auth, useAuthState, type }} />}
              {type === "signIn" && <SignInForm {...{ mobile, handleOnClick, auth, useAuthState, type }} />}
            </>
            :
            <>
              <SignUpForm {...{ mobile, handleOnClick, auth, useAuthState, type }} />
              <SignInForm {...{ mobile, handleOnClick, auth, useAuthState, type }} />
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                      To keep connected with us please login with your personal info
                    </p>
                    <button
                      className="ghost reg-btn"
                      id="signIn"
                      onClick={() => handleOnClick("signIn")}
                      disabled={type === "signIn"}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button
                      className="ghost reg-btn"
                      id="signUp"
                      onClick={() => handleOnClick("signUp")}
                      disabled={type === "signUp"}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </>
        }
      </Paper>
    </Container>
  );
}

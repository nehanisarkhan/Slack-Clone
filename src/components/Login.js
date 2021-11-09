import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Login.css";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg"
          alt="Slack"
          title="Slack"
        />
        <h1>Sign in to your workspace</h1>
        <p>Enter your workspace’s Google ID</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;

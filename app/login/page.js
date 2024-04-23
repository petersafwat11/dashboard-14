import Image from "next/image";
import React from "react";
import LoginForm from "../../../components/loginForm/LoginForm";
import classes from "./login.module.css";

const Login = async() => {
  
  return (
    <div className={classes["login"]}>
      <div className={classes["login-top"]}>
        <div className={classes["logo-wrapper"]}>
          <Image alt="logo" src="/svg/logo-login.svg" width="59" height="38" />
        </div>
        <h1 className={classes["title"]}>Log In</h1>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;

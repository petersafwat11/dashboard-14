import React from "react";
import classes from "./forgetPassword.module.css";
import Image from "next/image";
const ForgetPassword = ({ para, paddingTop, paddingBottom, maxWidth }) => {
  return (
    <div className={classes["forget-password"]}>
      <div className={classes["logo-wrapper"]}>
        <Image alt="logo" src="/svg/logo-login.svg" width="59" height="38" />
      </div>
      <h1
        className={classes["title"]}
        style={{
          paddingBottom: paddingBottom,
          paddingTop: paddingTop,
          maxWidth: maxWidth ? maxWidth : "auto",
        }}
      >
        {para}
      </h1>
      <button className={classes["login-button"]}>Log in</button>
    </div>
  );
};

export default ForgetPassword;

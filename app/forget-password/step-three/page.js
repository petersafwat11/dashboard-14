import Image from "next/image";
import React from "react";
import classes from "./page.module.css";
import MakeNewPassword from "@/app/ui/MakeNewPassword/MakeNewPassword";
const page = () => {
  return (
    <div className={classes["login"]}>
      <div className={classes["login-top"]}>
        <div className={classes["logo-wrapper"]}>
          <Image alt="logo" src="/svg/logo-login.svg" width="59" height="38" />
        </div>
        <h1 className={classes["title"]}>Enter your new password</h1>
      </div>
      <MakeNewPassword />
    </div>
  );
};

export default page;

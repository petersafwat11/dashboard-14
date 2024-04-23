import Image from "next/image";
import React from "react";
import ForgetPasswordStepOne from "../../../../components/forget-password-step-one/forgetPasswordStepOne";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["forget-password"]}>
      <div className={classes["forget-password-top"]}>
        <div className={classes["logo-wrapper"]}>
          <Image alt="logo" src="/svg/logo-login.svg" width="59" height="38" />
        </div>
        <h1 className={classes["title"]}>Forgot your password?</h1>
      </div>
      <ForgetPasswordStepOne />
    </div>
  );
};

export default page;

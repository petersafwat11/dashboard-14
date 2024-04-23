import React from "react";
import ForgetPassword from "../../../../components/forget-password/forgetPassword";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <ForgetPassword
        para={"Check your email for further instructions"}
        paddingTop={"40px"}
        paddingBottom={"56px"}
        maxWidth={"35rem"}
      />
    </div>
  );
};

export default page;

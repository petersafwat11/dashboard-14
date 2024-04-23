import React from "react";
import classes from "./page.module.css";
import ForgetPassword from "@/app/ui/forget-password/forgetPassword";
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

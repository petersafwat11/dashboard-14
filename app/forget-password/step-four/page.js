import React from "react";
import classes from "./page.module.css";
import ForgetPassword from "@/app/ui/forget-password/forgetPassword";
const page = () => {
  return (
    <div className={classes["container"]}>
      <ForgetPassword
        para={"Password Changed Successfully"}
        paddingTop={"49px"}
        paddingBottom={"40px"}
      />
    </div>
  );
};

export default page;

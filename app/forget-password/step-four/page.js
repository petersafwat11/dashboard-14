import React from "react";
import ForgetPassword from "../../../../components/forget-password/forgetPassword";
import classes from "./page.module.css";
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

"use client";
import classes from "./forgetPasswordStepOne.module.css";
import React, { useState } from "react";

const ForgetPasswordStepOne = () => {
  const [email, setEmail] = useState("");
  return (
    <div className={classes["form"]}>
      <div className={classes["input-group"]}>
        <label htmlFor="email" className={classes["label"]}>
          Email
        </label>
        <input
          placeholder="Enter Your Email"
          className={classes["input"]}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <button className={classes["next-button"]}>Next</button>
      <p  className={classes["login-para"]}> log in</p>
    </div>
  );
};

export default ForgetPasswordStepOne;

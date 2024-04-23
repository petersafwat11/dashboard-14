"use client";
import classes from "./makeNewPassword.module.css";
import React, { useState } from "react";
const MakeNewPassword = () => {
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={classes["form"]}>
      <div className={classes["input-group"]}>
        <label htmlFor="email" className={classes["label"]}>
          Password
        </label>
        <input
          placeholder="Enter a new Password"
          className={classes["input"]}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className={classes["input-group"]}>
        <label htmlFor="email" className={classes["label"]}>
          Re-enter password
        </label>
        <input
          placeholder="Re-enter your Password"
          className={classes["input"]}
          value={reEnterPassword}
          onChange={(e) => {
            setReEnterPassword(e.target.value);
          }}
        />
      </div>

      <button className={classes["Change-password-button"]}>
        Change password
      </button>
    </div>
  );
};

export default MakeNewPassword;

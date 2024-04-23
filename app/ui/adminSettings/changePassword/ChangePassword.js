"use client";
import React, { useState } from "react";
import axios from "axios";
import classes from "./changePassword.module.css";
const ChangePassword = () => {
  const [data, setData] = useState({
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChangePassword = (password) => {
    setData(password);
  };
  const submitHandeler = async () => {
    try {
      const response = await axios.patch(
        `${process.env.BACKEND_SERVER}/users/updateMyPassword`,
        password,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      console.log(response);
      setData({
        passwordCurrent: "",
        password: "",
        passwordConfirm: "",
      });
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Change Password</h2>
      <div className={classes["details"]}>
        <input
          value={data.passwordCurrent}
          onChange={(e) => {
            handleChangePassword({
              ...data,
              passwordCurrent: e.target.value,
            });
          }}
          type="password"
          placeholder="Enter old password...."
          className={classes["input"]}
        />
        <input
          value={data.password}
          onChange={(e) => {
            handleChangePassword({
              ...data,
              password: e.target.value,
            });
          }}
          type="password"
          placeholder="Enter password...."
          className={classes["input"]}
        />
        <input
          value={data.passwordConfirm}
          onChange={(e) => {
            handleChangePassword({
              ...data,
              passwordConfirm: e.target.value,
            });
          }}
          type="password"
          placeholder="Re-enter password...."
          className={classes["input"]}
        />
      </div>
      <button onClick={submitHandeler} className={classes["save"]}>
        save changes
      </button>
    </div>
  );
};

export default ChangePassword;

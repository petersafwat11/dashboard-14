"use client";
import axios from "axios";
import React, { useState } from "react";
import classes from "./RNG.module.css";
const RNG = () => {
  const [winner, setWinner] = useState({ fullName: "", email: "" });

  const generateWinner = async () => {
    try {
      const response = await axios.get(
        `${process.env.BACKEND_SERVER}/giveaway/winner`
      );
      const winner = response?.data?.data?.data;
      setWinner({ fullName: winner.fullName, email: winner.email });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className={classes["container"]}>
      <button onClick={generateWinner} className={classes["generate"]}>
        Generate
      </button>
      <div className={classes["form"]}>
        <div className={classes["input-group"]}>
          <label className={classes["label"]} htmlFor="username">
            Full Name
          </label>
          <input
            type="text"
            id="username"
            className={classes["input"]}
            value={winner.fullName}
            readOnly
          />
        </div>
        <div className={classes["input-group"]}>
          <label className={classes["label"]} htmlFor="email">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            className={classes["input"]}
            value={winner.email}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default RNG;

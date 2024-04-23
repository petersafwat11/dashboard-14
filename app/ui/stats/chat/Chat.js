"use client";
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import PieChart from "./PieChart";
import classes from "./chat.module.css";
const Chat = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h3 className={classes["title"]}>Chat </h3>
        <BiDotsHorizontalRounded className={classes["options"]} />
      </div>
      <div className={classes["active-users"]}>
        <p className={classes["active-users-para"]}>Active: </p>
        <p className={classes["active-users-num"]}>12600</p>
      </div>
      <div className={classes["chart"]}>
        <PieChart />
      </div>
      <div className={classes["langs"]}>
        <div className={classes["english"]}>
          <span></span>
          <p className={classes["lang-name"]}>
            English: <span> 2502</span>
          </p>
        </div>
        <div className={classes["arabic"]}>
          <span></span>
          <p className={classes["lang-name"]}>
            Arabic: <span> 2074</span>
          </p>
        </div>
        <div className={classes["spanish"]}>
          <span></span>
          <p className={classes["lang-name"]}>
            Spanish: <span> 510</span>
          </p>
        </div>
        <div className={classes["french"]}>
          <span></span>
          <p className={classes["lang-name"]}>
            French: <span> 2502</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;

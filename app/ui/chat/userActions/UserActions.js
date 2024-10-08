"use client";
import Image from "next/image";
import { useState } from "react";
import classes from "./userActions.module.css";

const UserActions = ({ userData, banIp, muteMember, type }) => {
  console.log("type", type);
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>User actions</h2>
      <div className={classes["user"]}>
        <Image
          className={classes["avatar"]}
          src="/svg/chat/avatars/Avatars/5.svg"
          alt="avatar"
          height="59"
          width="71"
        />
        <div className={classes["user-data"]}>
          <p className={classes["name"]}>{userData.name}</p>
          <p className={classes["id"]}>{userData.ip}</p>
        </div>
      </div>
      <div className={classes["actions"]}>
        {(type === "normal" || type === "muted") && (
          <button onClick={muteMember} className={classes["mute-button"]}>
            {type === "normal" ? "Mute" : "unmute"}
          </button>
        )}
        {(type === "normal" || type === "banned") && (
          <button onClick={banIp} className={classes["ban-button"]}>
            {type === "normal" ? "IP Ban" : "unban"}
          </button>
        )}
      </div>
    </div>
  );
};
export default UserActions;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import classes from "./chatUsers.module.css";
const ChatUsers = () => {
  const [members, setmembers] = useState("active-members");
  const [search, setSearch] = useState("Search user");
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Users in Chat</h2>
      <div className={classes["members"]}>
        <p
          onClick={() => {
            setmembers("active-members");
          }}
          className={
            classes[
              members === "active-members"
                ? "active-members"
                : "selected-members"
            ]
          }
        >
          Active Members
        </p>
        <p
          onClick={() => {
            setmembers("banned-members");
          }}
          className={
            classes[
              members === "banned-members"
                ? "banned-members"
                : "selected-members"
            ]
          }
        >
          Banned Members
        </p>
      </div>
      <div className={classes["search-wrapper"]}>
        <input
          value={search}
          onClick={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          className={classes["search"]}
        />
        <Image
          className={classes["search-icon"]}
          src="/svg/chat/search.svg"
          alt="seacrh"
          width="14"
          height="14"
        />
      </div>
      <p className={classes["num-of-active-users"]}>Active Users: 6520</p>
      <div className={classes["active-users"]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <div key={index} className={classes["user"]}>
            <div className={classes["user-details"]}>
              <Image
                className={classes["avatar"]}
                src="/svg/chat/avatars/Avatars/5.svg"
                alt="avatar"
                height="28"
                width="23"
              />
              <p className={classes["user-name"]}>messiog10</p>
            </div>
            <p className={classes["user-id"]}>15.25.63.0.1</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatUsers;

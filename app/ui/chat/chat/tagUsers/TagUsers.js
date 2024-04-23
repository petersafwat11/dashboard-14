import React from "react";
import classes from "./tagUsers.module.css";
const TagUsers = ({ setMentionSomeone, controlShowingUsers }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}></div>
      <div className={classes["body"]}>
        <h2 className={classes["title"]}>Users</h2>
        <div className={classes["users"]}>
          {[
            "championsleague208championsleague208",
            "championsleagasdihashdue208",
            "championsleague208",
            "championsleague208",
            "championslue208",
            "championsleague20jsjsjjjj8",
            "championsleague208",
            "championslue208",
            "championsleague20jsjsjjjj8",
          ].map((user, index) => (
            <p
              onClick={(e) => {
                setMentionSomeone(user + " ");
                controlShowingUsers();
              }}
              key={index}
              className={classes["user"]}
            >
              {user}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagUsers;

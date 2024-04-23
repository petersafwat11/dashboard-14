import React from "react";
import classes from "./mode.module.css";
const Mode = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Mode</h2>

      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <input
            checked={data === "Visible" ? true : false}
            onChange={(e) => {
              dispatchDetail({ type: "MODE", value: "Visible" });
            }}
            type="checkbox"
          />
          <p>Visible</p>
        </div>
        <div className={classes["input-group"]}>
          <input
            checked={data === "Hidden" ? true : false}
            type="checkbox"
            onChange={() => {
              dispatchDetail({ type: "MODE", value: "Hidden" });
            }}
          />
          <p>Hidden</p>
        </div>
      </div>
    </div>
  );
};

export default Mode;

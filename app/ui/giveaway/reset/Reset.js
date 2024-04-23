import React from "react";
import classes from "./reset.module.css";
const Reset = ({ dispatchPrizeDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Reset</h2>
      <div>
        <span
          onClick={() => {
            dispatchPrizeDetail({ type: "RESET-ALL" });
          }}
          className={classes["upload"]}
        >
          Reset Stats
        </span>
        {/* <input className={classes["input"]} type="file" hidden /> */}
      </div>
    </div>
  );
};

export default Reset;

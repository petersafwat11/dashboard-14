import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import classes from "./feedback.module.css";
const Feedback = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h3 className={classes["title"]}>Feedback</h3>
        <BiDotsHorizontalRounded className={classes["options"]} />
      </div>
      <p className={classes["description"]}>
        The amount of feedback requests received.
      </p>
      <div className={classes["time-ranges"]}>
        {["Today", "Last 7 days", "Past Month"].map((item, index) => (
          <div key={item} className={classes["time-range"]}>
            <div className={classes["top"]}>
              <p className={classes["name"]}>{item}</p>
              <p className={classes["quantity"]}>65,376</p>
            </div>
            <div className={classes["progress-bar"]}>
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;

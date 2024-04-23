import React, { useState } from "react";
import classes from "./feedback.module.css";
const Feedback = () => {
     const [feedback, setFeedback]= useState({today: '', pastSevenDays: '', pastMonth: ''})
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h2 className={classes["title"]}>Feedback</h2>
      </div>
      <p className={classes['amount']}>The amount of feedback requests received.</p>
      <div className={classes['date']}>
        <div className={classes['first']}>
            <p className={classes['day']}>Today</p>
            <p className={classes['num']}>{feedback.today}</p>
        </div>
        <div className={classes['range']}>
            <div className={classes['percent']}></div>
        </div>
      </div>
      <div className={classes['date']}>
        <div className={classes['first']}>
            <p className={classes['day']}>Last 7 days</p>
            <p className={classes['num']}>{feedback.pastSevenDays}</p>
        </div>
        <div className={classes['range']}>
            <div className={classes['percent']}></div>
        </div>
      </div>
      <div className={classes['date']}>
        <div className={classes['first']}>
            <p className={classes['day']}>Past Month</p>
            <p className={classes['num']}>{feedback.pastMonth}</p>
        </div>
        <div className={classes['range']}>
            <div className={classes['percent']}></div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

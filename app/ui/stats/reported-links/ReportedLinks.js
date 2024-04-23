import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import classes from "./reportedLinks.module.css";

const ReportedLinks = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h3 className={classes["title"]}>Reported Links</h3>
        <BiDotsHorizontalRounded className={classes["options"]} />
      </div>
      <p className={classes["description"]}>
        The amount of reports on the website for each sport category today.
      </p>

      <div className={classes["total"]}>
        <p>Total Reports:</p>
        <p>533</p>
      </div>
      <div className={classes["sports"]}>
        {[
          { name: "Football", num: 105 },
          { name: "Basketball", num: 105 },
          { name: "NFL", num: 105 },
          { name: "Boxing", num: 105 },
          { name: "Others", num: 105 },
          { name: "Channels", num: 105 },
        ].map((sport, index) => (
          <div className={classes["sport"]} key={sport.name}>
            <p className={classes["sport-name"]}>{sport.name}</p>
            <p className={classes["reports-num"]}>{sport.num}</p>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ReportedLinks;

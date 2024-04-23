import React from "react";
import classes from "./ReportedLink.module.css";
const ReportedLink = () => {
  const sports = [
    { sport: "Football", reports: "105" },
    { sport: "Basketball", reports: "105" },
    { sport: "NFL", reports: "105" },
    { sport: "Boxing", reports: "105" },
    { sport: "Others", reports: "105" },
    { sport: "Channels", reports: "105" },
  ];
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Reported Links</h2>
      <p className={classes["amount"]}>
        {" "}
        The amount of reports on the website for each sport category today.
      </p>
      <div className={classes["total-reports"]}>
        <p className={classes["para"]}>Total Reports:</p>
        <p className={classes["num"]}>533</p>
      </div>
      <div className={classes["sports"]}>
        {sports.map((item, index) => (
          <div key={index} className={classes["sport"]}>
            <p className={classes["sport-name"]}>{item.sport}</p>
            <p className={classes["num-of-reports"]}>{item.reports}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportedLink;

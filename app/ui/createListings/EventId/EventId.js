import React from "react";
import classes from "./eventId.module.css";
const EventId = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Event ID </h2>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <label className={classes["label"]}>Event ID</label>
          <input
            value={data}
            id="date"
            onChange={(e) => {
              dispatchDetail({
                type: "MATCH-ID",
                value: e.target.value,
              });
            }}
            placeholder="Enter the Match ID"
            className={classes["input"]}
          />
        </div>
      </div>
    </div>
  );
};

export default EventId;

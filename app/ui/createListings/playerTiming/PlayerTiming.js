import React, { useEffect } from "react";
import DatePicker from "../dateAndTimePickers/DateAndTimePickers";
import classes from "./playerTiming.module.css";
import { formatTime } from "@/app/lib/datesFucntions";

const PlayerTiming = ({
  title,
  width,
  data,
  dispatchDetail,
  dispatchActionType,
}) => {
  console.log("data.time", data.time);
  return (
    <div
      style={{ width: width ? width : "14.7rem" }}
      className={classes["container"]}
    >
      <h2 className={classes["title"]}>{title} </h2>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <label className={classes["label"]}>Date</label>
          <DatePicker
            data={data}
            dispatchDetail={dispatchDetail}
            type={dispatchActionType}
            dateAndTime={true}
          />
        </div>

        <div className={classes["input-group"]}>
          <label htmlFor="time" className={classes["label"]}>
            Time
          </label>
          <input
            onKeyUp={(event) => {
              if (event.key === "Backspace" && data.time.length === 3) {
                dispatchDetail({
                  type: dispatchActionType,
                  value: {
                    ...data,
                    time: data.time.slice(0, -1),
                  },
                });
              }
            }}
            value={data.time}
            id="time"
            onChange={(e) => {
              dispatchDetail({
                type: dispatchActionType,
                value: {
                  ...data,
                  time: formatTime(e.target.value),
                },
              });
            }}
            placeholder="hh:mm 24h format"
            className={classes["input"]}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerTiming;

"use client";
import React from "react";
import classes from "./date.module.css";
// import DatePickerr from "../../createListings/dateAndTimePickers/DateAndTimePickers";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";

const Date = ({ data, dispatchPrizeDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}> Time</h2>
      <div className={classes["form"]}>
        <div className={classes["input-group"]}>
          <label className={classes["label"]} htmlFor="start">
            start
          </label>
          <DatePicker
            onChange={(date) =>
              dispatchPrizeDetail({
                type: "START-TIME",
                value: date,
              })
            }
            value={data.startTime}
          />
        </div>
        <div className={classes["input-group"]}>
          <label className={classes["label"]} htmlFor="end">
            end
          </label>
          <DatePicker
            onChange={(date) =>
              dispatchPrizeDetail({
                type: "END-TIME",
                value: date,
              })
            }
            value={data.endTime}
          />
        </div>
      </div>
    </div>
  );
};

export default Date;

"use client";
import React from "react";
import DatePickerr from "../dateAndTimePickers/DateAndTimePickers";
import classes from "./eventsDetails.module.css";
import { formatTime } from "@/app/lib/datesFucntions";

const EventsDetails = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Event details</h2>
      <div className={classes["details-first"]}>
        <div className={classes["left-wrapper"]}>
          <div className={classes["input-group"]}>
            <label htmlFor="date" className={classes["label"]}>
              Date
            </label>
            <DatePickerr
              data={data.eventDate}
              dispatchDetail={dispatchDetail}
              type={"EVENT-DATE"}
            />
          </div>
          <div className={classes["input-group"]}>
            <label htmlFor="match-id" className={classes["label"]}>
              Date text
            </label>
            <input
              value={data.eventDateText}
              id="match-id"
              onChange={(e) => {
                dispatchDetail({
                  type: "EVENT-DATE-TEXT",
                  value: e.target.value,
                });
              }}
              placeholder="Date text"
              className={classes["input"]}
            />
          </div>
        </div>
        <div className={classes["right-wrapper"]}>
          <div className={classes["input-group"]}>
            <label htmlFor="league" className={classes["label"]}>
              League
            </label>
            <input
              value={data.eventLeague}
              id="league"
              onChange={(e) => {
                dispatchDetail({
                  type: "EVENT-LEAGUE",
                  value: e.target.value,
                });
              }}
              placeholder="leugue"
              className={classes["input"]}
            />
          </div>
        </div>
      </div>
      <div className={classes["details-second"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="time" className={classes["label"]}>
            Time
          </label>
          <input
            onKeyUp={(event) => {
              if (event.key === "Backspace" && data.eventTime.length === 3) {
                dispatchDetail({
                  type: "EVENT-TIME",
                  value: data.eventTime.slice(0, -1),
                });
              }
            }}
            value={data.eventTime}
            id="time"
            onChange={(e) => {
              dispatchDetail({
                type: "EVENT-TIME",
                value: formatTime(e.target.value),
              });
            }}
            placeholder="hh:mm 24h format"
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="stadium" className={classes["label"]}>
            Stadium
          </label>
          <input
            value={data.eventStadium}
            id="stadium"
            onChange={(e) => {
              dispatchDetail({
                type: "EVENT-STADIUM",
                value: e.target.value,
              });
            }}
            placeholder="stadium"
            className={classes["input"]}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsDetails;

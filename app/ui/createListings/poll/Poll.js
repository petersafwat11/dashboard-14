import React from "react";
import classes from "./poll.module.css";

const Poll = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h2 className={classes["title"]}>Poll</h2>
        <div className={classes["toggler-wrapper"]}>
          <label className={classes["toggle"]}>
            <input
              checked={data.showsPoll}
              onChange={() => {
                dispatchDetail({
                  type: "SHOWS-POLL",
                  value: !data.showsPoll,
                });
              }}
              className={classes["toggle-checkbox"]}
              type="checkbox"
            />
            <div className={classes["toggle-switch"]}></div>
            <span className={classes["toggle-label"]}>
              {data.shows ? "ON" : "OFF"}
            </span>
          </label>
        </div>
      </div>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="first-team" className={classes["label"]}>
            Team 1
          </label>
          <input
            value={data.firstTeamPoll}
            id="first-team"
            onChange={(e) => {
              dispatchDetail({
                type: "FIRST-TEAM-POLL",
                value: e.target.value,
              });
            }}
            placeholder="team 1"
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="second-team" className={classes["label"]}>
            Team 2
          </label>
          <input
            value={data.secondTeamPoll}
            id="second-team"
            onChange={(e) => {
              dispatchDetail({
                type: "SECOND-TEAM-POLL",
                value: e.target.value,
              });
            }}
            placeholder="team 2"
            className={classes["input"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Poll;

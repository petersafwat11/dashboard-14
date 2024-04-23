"use client";
import React from "react";
import classes from "./makePoll.module.css";
const MakePoll = ({ togglePopup, Newpoll, dispatchAction, confirm }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h3 className={classes["title"]}>Poll</h3>
        <div className={classes["actions"]}>
          <button onClick={confirm} className={classes["apply"]}>
            Apply
          </button>
          <button onClick={togglePopup} className={classes["cancel"]}>
            Cancel
          </button>
        </div>
      </div>
      <form className={classes["form"]}>
        {Newpoll.slice(1).map((item, index) => (
          <div key={index} className={classes["input-group"]}>
            <label className={classes["label"]}>{item.name}</label>
            <input
              className={classes["input"]}
              value={item.value}
              placeholder="the poll question"
              onChange={(e) => {
                dispatchAction({
                  type: "INPUTCHANGE",
                  data: { name: item.name, value: e.target.value },
                });
              }}
            />
          </div>
        ))}
      </form>
      <div className={classes["bottom-actions"]}>
        <button
          onClick={() => {
            dispatchAction({
              type: "ADDINPUT",
            });
          }}
          ADDINPUT
          className={classes["add-button"]}
        >
          Add input
        </button>
        <button
          onClick={() => {
            dispatchAction({
              type: "DELETEINPUT",
            });
          }}
          className={classes["delete-button"]}
        >
          Delets input
        </button>
      </div>
      <div className={classes["input-group"]}>
        <label className={classes["label"]}>Time</label>
        <input
          className={classes["input"]}
          value={Newpoll[0].value}
          placeholder="Enter in minutes"
          onChange={(e) => {
            const numericValue = e.target.value.replace(/[^0-9]/g, "");

            dispatchAction({
              type: "INPUTCHANGE",
              data: { name: Newpoll[0].name, value: numericValue },
            });
          }}
        />
      </div>
    </div>
  );
};

export default MakePoll;

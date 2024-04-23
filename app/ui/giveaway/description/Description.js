"use client";
import React from "react";
import classes from "./description.module.css";
const Description = ({ data, dispatchPrizeDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}> Description</h2>
      <div className={classes["input-group"]}>
        <label className={classes["label"]} htmlFor="description">
          MESSAGE
        </label>
        <textarea
          id="description"
          className={classes["input"]}
          value={data}
          onChange={(e) => {
            dispatchPrizeDetail({ type: "DESCRIPTION", value: e.target.value });
          }}
        />
        {/* <input
          type="text"
          id="description"
          className={classes["input"]}
          value={data}
          onChange={(e) => {
            dispatchPrizeDetail({ type: "DESCRIPTION", value: e.target.value });
          }}
        /> */}
      </div>
    </div>
  );
};

export default Description;

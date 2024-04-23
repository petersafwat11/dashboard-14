"use client";
import React from "react";
import classes from "./title.module.css";
const Title = ({ data, dispatchPrizeDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}> Title</h2>
      <input
        type="text"
        className={classes["input"]}
        value={data}
        onChange={(e) => {
          dispatchPrizeDetail({ type: "TITLE", value: e.target.value });
        }}
      />
    </div>
  );
};

export default Title;

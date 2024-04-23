import React from "react";
import classes from "./title.module.css";
const Title = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Title</h2>
      <input
        value={data || ""}
        onChange={(e) => {
          dispatchDetail({ type: "TITLE", value: e.target.value });
        }}
        placeholder="Title"
        className={classes["input"]}
      />
    </div>
  );
};

export default Title;

import React from "react";
import classes from "./description.module.css";
const Description = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Description</h2>
      <textarea
        value={data || ""}
        onChange={(e) => {
          dispatchDetail({ type: "DESCRIPTION", value: e.target.value });
        }}
        className={classes["text-area"]}
      />
    </div>
  );
};

export default Description;

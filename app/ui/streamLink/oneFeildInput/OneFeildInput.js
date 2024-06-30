import React from "react";
import classes from "./oneFeildInput.module.css";
const OneFeildInput = ({ title, data, dispatchType, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>{title}</h2>
      <input
        value={data}
        onChange={(e) => {
          dispatchDetail({ type: dispatchType, value: e.target.value });
        }}
        placeholder={title.toLowerCase()}
        className={classes["input"]}
      />
    </div>
  );
};

export default OneFeildInput;

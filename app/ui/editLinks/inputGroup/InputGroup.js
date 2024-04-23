import React from "react";
import classes from "./inputGroup.module.css";
const InputGroup = ({ onChange, value, label, width }) => {
  return (
    <div
      style={{ width: width ? width : "20.38rem" }}
      className={classes["input-group"]}
    >
      <label htmlFor={label} className={classes["label"]}>
        {label}
      </label>
      <input
        value={value || ""}
        type="text"
        id={label}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder="Giveaway Retweet"
        className={classes["input"]}
      />
    </div>
  );
};

export default InputGroup;

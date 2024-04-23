import React from "react";
import classes from "./checkbox.module.css";
const Checkbox = ({ selectElement, id }) => {
  return (
    <input
      onClick={() => {
        selectElement(id);
      }}
      type="checkbox"
      className={classes["checkbox"]}
    />
  );
};

export default Checkbox;

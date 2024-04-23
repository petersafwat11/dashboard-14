import React from "react";
import classes from "./popup.module.css";
const Popup = ({ children }) => {
  return <div className={classes["popup-wrapper"]}>{children}</div>;
};

export default Popup;

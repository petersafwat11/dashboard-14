import React from "react";
import classes from "./arrowDown.module.css";
import { IoMdArrowRoundDown } from "react-icons/io";

const ArrowDown = ({scrollDown}) => {
  return (
    <div onClick={scrollDown} className={classes["arrow-down"]}>
      <IoMdArrowRoundDown className={classes["arrow"]} />
    </div>
  );
};

export default ArrowDown;

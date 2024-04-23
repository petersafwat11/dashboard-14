import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classes from "./paginations.module.css";

const PAginations = () => {
  return (
    <div className={classes["paginations"]}>
      <p className={classes['para']}>Page 1 of 9</p>
      <div className={classes["arrows"]}>
        <IoIosArrowBack className={classes["arrow"]} />{" "}
        <IoIosArrowForward className={classes["arrow"]} />
      </div>
    </div>
  );
};

export default PAginations;

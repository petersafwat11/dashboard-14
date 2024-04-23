import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import classes from "./listings.module.css";
const Listings = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h3 className={classes["title"]}>Listings</h3>
        <BiDotsHorizontalRounded className={classes["options"]} />
      </div>
      <p className={classes["description"]}>
        The amount of matches currently listed on the website for each sport
        category.
      </p>
      <div className={classes["sports"]}>
        {["NFL", "Basketball", "Football", "Others"].map((item, index) => (
          <div key={item} className={classes[`sport-${index + 1}`]}>
            <div className={classes["top"]}>
              <p className={classes["name"]}>{item}</p>
              <p className={classes["quantity"]}>65,376</p>
            </div>
            <div className={classes["progress-bar"]}>
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;

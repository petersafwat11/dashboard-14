"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./timeSelection.module.css";
const TimeSelection = () => {
  const times = ["10 seconds"];
  const [selectedTime, setSelectedTime] = useState("10 seconds");
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className={classes["selection"]}>
      <div
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        className={classes["selected"]}
      >
        <p className={classes["selected-sport"]}>{selectedTime}</p>
        <MdKeyboardArrowDown className={classes["arrow"]} />
      </div>

      {showOptions && (
        <div className={classes["options"]}>
          {times.map((item, index) => (
            <p
              onClick={() => {
                setSelectedTime(item);
                setShowOptions(false);
              }}
              className={classes["option"]}
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeSelection;

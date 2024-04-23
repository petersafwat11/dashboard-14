import React, { useEffect, useState } from "react";
import classes from "./pollItem.module.css";
import { getTimeRemainingInMinutes } from "@/app/lib/datesFucntions";
const PollItem = ({ item, onSelect, selectedPolls }) => {
  const { createdAt, time } = item;
  const [remainingTime, setRemainingTime] = useState(
    getTimeRemainingInMinutes(createdAt, time)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const remaining = getTimeRemainingInMinutes(createdAt, time);
      setRemainingTime(remaining);
      console.log(remaining);
    }, 60000);
    return () => clearInterval(intervalId);
  }, [createdAt, time]);

  return (
    <div className={classes["poll-item"]}>
      <label
        onClick={(e) => {
          onSelect(item._id);
          e.preventDefault();
        }}
        className={classes["custom-checkbox"]}
      >
        <input
          type="checkbox"
          checked={
            selectedPolls.find((selected) => selected === item._id) || false
          }
        />
        <span className={classes["checkmark"]}></span>
      </label>
      <p className={classes["question-name"]}> {item?.question}</p>
      <p className={classes["text"]}>
        {remainingTime ? `${remainingTime} mins remaining` : "time finished"}{" "}
      </p>
    </div>
  );
};

export default PollItem;

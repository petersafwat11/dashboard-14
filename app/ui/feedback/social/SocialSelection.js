"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import classes from "./social.module.css";
const FeedbackSelection = () => {
  const [showOptions, setShowOptions] = useState(false);
  const options = ["All Feedback", "Flagged", "Feedback Only"];
  const oldParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const type = oldParams.get("type") || "All Feedback";

  const changeFeedbackType = (val) => {
    const params = new URLSearchParams(oldParams);
    if (val === "All Feedback") {
      params.delete("type");
    } else {
      params.set("type", val);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={classes["selection"]}>
      <div
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        className={classes["selected"]}
      >
        <p className={classes["selected-sport"]}>{type}</p>
        <MdKeyboardArrowDown className={classes["arrow"]} />
      </div>

      {showOptions && (
        <div className={classes["options"]}>
          {options.map((item, index) => (
            <p
              onClick={() => {
                changeFeedbackType(item);
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

export default FeedbackSelection;

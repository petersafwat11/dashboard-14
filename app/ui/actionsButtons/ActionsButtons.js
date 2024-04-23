import React from "react";
import classes from "./actionsButtons.module.css";
const ActionsButtons = ({
  firstButtonFunction,
  secondButtonFunction,
  first,
  second,
}) => {
  return (
    <div className={classes["actions"]}>
      {first && (
        <button
          onClick={firstButtonFunction}
          className={classes["first-button"]}
        >
          {first}
        </button>
      )}
      {second && (
        <button
          onClick={secondButtonFunction}
          className={classes["second-button"]}
        >
          {second}
        </button>
      )}
    </div>
  );
};

export default ActionsButtons;

import React from "react";
import classes from "./netballAPI.module.css";
import Players from "./Players/Players";
const NetballAPI = ({ lineups, dispatchLineups }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>API</h2>
      <div className={classes["toggler"]}>
        <h3 className={classes["toggle-label"]}>Lineups</h3>
        <div className={classes["toggler-wrapper"]}>
          <label className={classes["toggle"]}>
            <input
              checked={lineups.checked}
              onChange={() => {
                dispatchLineups({
                  type: "CHECK",
                });
              }}
              className={classes["toggle-checkbox"]}
              type="checkbox"
            />
            <div className={classes["toggle-switch"]}></div>
          </label>
        </div>
      </div>

      <div className={classes["wrapper"]}>
        <Players players={lineups} dispatchAction={dispatchLineups} />
      </div>
    </div>
  );
};

export default NetballAPI;

import React, { useReducer } from "react";
import PlayersData from "../playersData/PlayersData";
import classes from "./f1API.module.css";
const F1API = ({ dispatchPositions, positions }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>API</h2>
      <div className={classes["wrapper"]}>
        <PlayersData
          togglerLabel={"Formation"}
          label={"Position"}
          items={positions}
          dispatchAction={dispatchPositions}
        />
      </div>
    </div>
  );
};

export default F1API;

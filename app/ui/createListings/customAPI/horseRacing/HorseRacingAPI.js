import React, { useReducer } from "react";
import PlayersData from "../playersData/PlayersData";
import classes from "./horseRacingAPI.module.css";

const HorseRacingAPI = ({horseRiders, dispatchHorseRiders}) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>API</h2>
      <div className={classes["wrapper"]}>
        <PlayersData
          togglerLabel={"Lineups"}
          label={"Horse Rider"}
          items={horseRiders}
          dispatchAction={dispatchHorseRiders}
        />
      </div>
    </div>
  );
};

export default HorseRacingAPI;

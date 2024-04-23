import React from "react";
import PlayersData2 from "../playersData2/PlayersData2";
import classes from "./tennisAPI.module.css";
const TennisAPI = ({ tennisLineups, dispatchTennisLineups }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>API</h2>
      <div className={classes["wrapper"]}>
        <PlayersData2
          togglerLabel={"Lineups"}
          label={"Team"}
          items={tennisLineups}
          dispatchAction={dispatchTennisLineups}
        />
      </div>
    </div>
  );
};

export default TennisAPI;

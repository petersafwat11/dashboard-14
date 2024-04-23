import React from "react";
import PlayersData2 from "../playersData2/PlayersData2";
import classes from "./volleyballAPI.module.css";
const VolleyballAPI = ({ teamPlayers, dispatchTeamPlayers }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>API</h2>
      <div className={classes["wrapper"]}>
        <PlayersData2
          togglerLabel={"Formation"}
          label={"Position"}
          items={teamPlayers}
          dispatchAction={dispatchTeamPlayers}
        />
      </div>
    </div>
  );
};

export default VolleyballAPI;

import React from "react";
import PlayersData from "../playersData/PlayersData";
import classes from "./nascarAPI.module.css";
const NascarAPI = ({ drivers, dispatchDrivers }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>API</h2>
      <div className={classes["wrapper"]}>
        <PlayersData
          togglerLabel={"Formation"}
          label={"Position"}
          items={drivers}
          dispatchAction={dispatchDrivers}
        />
      </div>
    </div>
  );
};

export default NascarAPI;

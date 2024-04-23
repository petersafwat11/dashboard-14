import React from "react";
import PlayersData from "../playersData/PlayersData";
import FeaturedFighters from "./featuredFighters/FeaturedFighters";
import classes from "./wweAPI.module.css";

const WWEAPI = ({
  wweFighters,
  dispatchWweFighters,
  featuredFighters,
  dispatchfeaturedFighters,
}) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>API</h2>
      <div className={classes["wrapper"]}>
        <PlayersData
          togglerLabel={"Venue"}
          label={"Fighter"}
          items={wweFighters}
          dispatchAction={dispatchWweFighters}
        />
        <FeaturedFighters
          featuredFighters={featuredFighters}
          dispatchfeaturedFighters={dispatchfeaturedFighters}
        />
      </div>
    </div>
  );
};

export default WWEAPI;

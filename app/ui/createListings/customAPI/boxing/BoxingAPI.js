import React from "react";
import Fighters from "../fighters/Fighters";
import MainEvent from "../mainEvent/MainEvent";
import classes from "./boxingAPI.module.css";

const BoxingAPI = ({
  booxingfighters,
  dispatchBoxingFighters,
  mainEvent,
  dispatchMainEvent,
}) => {
  return (
    <div className={classes["container"]}>
      <MainEvent mainEvent={mainEvent} dispatchMainEvent={dispatchMainEvent} />
      <Fighters fighters={booxingfighters} dispatchfighters={dispatchBoxingFighters} />
    </div>
  );
};

export default BoxingAPI;

import React from "react";
import { BsFlagFill } from "react-icons/bs";
import classes from "./flag.module.css";
const Flag = ({ reverseFlagProp, id, flagged }) => {
  return (
    <BsFlagFill
      className={classes["flag"]}
      onClick={() => {
        reverseFlagProp(id);
      }}
      style={{ color: flagged ? "#e2a300" : "#e1e1e1" }}
    />
  );
};

export default Flag;

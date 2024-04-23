import React from "react";
import classes from "./channelName.module.css";
const ChannelName = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>ChannelNAme</h2>
      <input
        value={data}
        onChange={(e) => {
          dispatchDetail({type: "CHANNEL-NAME", value: e.target.value});
        }}
        placeholder="channel name"
        className={classes["input"]}
      />
    </div>
  );
};

export default ChannelName;

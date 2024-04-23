import React from "react";
import classes from "./preview.module.css";
import HlcPlayer from "../../hlcPlayer/HlcPlayer";
const Preview = ({ url }) => {
  console.log(url);
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Preview</h2>
      {!url ? (
        <div className={classes["preview"]}></div>
      ) : (
        <HlcPlayer url={url} />
      )}
    </div>
  );
};

export default Preview;

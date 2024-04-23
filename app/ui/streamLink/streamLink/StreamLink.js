import React from "react";
import classes from "./streamLink.module.css";
const StreamLink = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Stream Link</h2>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="url" className={classes["label"]}>
            URL
          </label>
          <input
            value={data.URL}
            id="url"
            onChange={(e) => {
              dispatchDetail({ type: "URL", value: e.target.value });
            }}
            placeholder="URL"
            className={classes["input"]}
          />
        </div>
        {/* <div className={classes["input-group"]}>
          <label htmlFor="RMTPKey" className={classes["label"]}>
            RMTP Key
          </label>
          <input
            value={data.RMTPKey}
            id="RMTPKey"
            onChange={(e) => {
              dispatchDetail({ type: "RMTPKEY", value: e.target.value });
            }}
            className={classes["input"]}
            placeholder="RMTP Key"
          />
        </div> */}
      </div>
    </div>
  );
};
export default StreamLink;

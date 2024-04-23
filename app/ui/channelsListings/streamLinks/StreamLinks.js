"use client";
import React from "react";
import classes from "./streamLinks.module.css";
const StreamLinks = ({
  streamLinkName,
  dispatchDetail,
  streamLinksAvaiable,
}) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Stream Link</h2>
      <input
        readOnly
        value={streamLinkName}
        type="text "
        placeholder="Search for channel..."
        className={classes["input"]}
      />
      {streamLinksAvaiable?.length > 0 && (
        <div className={classes["search-options"]}>
          {streamLinksAvaiable.map((item, index) => (
            <p
              onClick={() => {
                dispatchDetail({
                  type: "STREAM-LINK",
                  streamLinkName: item.streamLinkName,
                  streamLinkUrl: item.streamLinkUrl,
                });
              }}
              style={{
                background: index % 2 === 0 ? "inherit" : "#F5F5F5",
              }}
              key={`${item.streamLinkUrl}-${index}`}
              className={
                classes[streamLinkName === item ? "option" : "selected-option"]
              }
            >
              {item.streamLinkName}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default StreamLinks;

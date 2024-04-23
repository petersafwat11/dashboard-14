import React from "react";
import InputGroup from "../inputGroup/InputGroup";
import classes from "./social.module.css";
const Social = ({ dispachNewLinks, data }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["first"]}>
        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "SOCIAL",
              value: { ...data, facebook: value },
            });
          }}
          label={"Facebook"}
          value={data?.facebook}
        />

        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "SOCIAL",
              value: { ...data, telegram: value },
            });
          }}
          label={"Telegram"}
          value={data?.telegram}
        />
      </div>
      <div className={classes["second"]}>
        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "SOCIAL",
              value: { ...data, twitter: value },
            });
          }}
          label={"Twitter"}
          value={data?.twitter}
        />
        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "SOCIAL",
              value: { ...data, tiktok: value },
            });
          }}
          label={"Tiktok"}
          value={data?.tiktok}
        />
      </div>
      <div className={classes["third"]}>
        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "SOCIAL",
              value: { ...data, discord: value },
            });
          }}
          label={"Discord"}
          value={data?.discord}
        />
      </div>
    </div>
  );
};

export default Social;

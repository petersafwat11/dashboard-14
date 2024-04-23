"use client";
import React from "react";
import InputGroup from "../inputGroup/InputGroup";
import classes from "./giveaway.module.css";

const Giveaway = ({ dispachNewLinks, data }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["first"]}>
        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "GIVEAWAY",
              value: { ...data, giveawayRetweet: value },
            });
          }}
          label={"Giveaway Retweet"}
          value={data?.giveawayRetweet}
        />
        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "GIVEAWAY",
              value: { ...data, giveawayTwitterFollow: value },
            });
          }}
          label={"Giveaway Twitter Follow"}
          value={data?.giveawayTwitterFollow}
        />
      </div>
      <div className={classes["third"]}>
        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "GIVEAWAY",
              value: { ...data, giveawayTelegram: value },
            });
          }}
          label={"Giveaway Telegram"}
          value={data?.giveawayTelegram}
        />
      </div>
    </div>
  );
};

export default Giveaway;

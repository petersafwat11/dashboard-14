"use client";

import React from "react";
import classes from "./domains.module.css";
const Domains = ({ dispachNewLinks, data }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Domains</h2>
      <input
        value={data || ""}
        onChange={(e) => {
          dispachNewLinks({
            type: "DOMAINS",
            value: e.target.value,
          });
        }}
        placeholder="domain"
        className={classes["input"]}
      />
    </div>
  );
};

export default Domains;

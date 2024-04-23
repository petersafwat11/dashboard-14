"use client";
import React from "react";
import InputGroup from "../inputGroup/InputGroup";
import classes from "./wallets.module.css";
const Wallets = ({ dispachNewLinks, data }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["first"]}>
        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "PAYMENT",
              value: { ...data, bitcoinAddress: value },
            });
          }}
          label={"Bitcoin Address"}
          value={data?.bitcoinAddress}
        />
        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "PAYMENT",
              value: { ...data, ethereumAddress: value },
            });
          }}
          label={"Ethereum Address"}
          value={data?.ethereumAddress}
        />
      </div>
      <div className={classes["second"]}>
        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "PAYMENT",
              value: { ...data, payByCardURL: value },
            });
          }}
          label={"Pay By Card URL"}
          value={data?.payByCardURL}
        />

        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "PAYMENT",
              value: { ...data, stripe: value },
            });
          }}
          label={"Stripe"}
          value={data?.stripe}
        />
      </div>
      <div className={classes["third"]}>
        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "PAYMENT",
              value: { ...data, paypal: value },
            });
          }}
          label={"Paypal"}
          value={data?.paypal}
        />
      </div>
    </div>
  );
};

export default Wallets;

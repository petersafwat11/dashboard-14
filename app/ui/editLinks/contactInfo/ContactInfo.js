"use client";
import React from "react";
import InputGroup from "../inputGroup/InputGroup";
import classes from "./contactInfo.module.css";
const ContactInfo = ({ dispachNewLinks, data }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["details"]}>
        <InputGroup
          width={"100%"}
          onChange={(value) => {
            dispachNewLinks({
              type: "CONTACT-US",
              value: { ...data, email: value },
            });
          }}
          label={"Email"}
          value={data?.email}
        />

        <InputGroup
          width={"100%"}
          onChange={(value) => {
            dispachNewLinks({
              type: "CONTACT-US",
              value: { ...data, telephone: value },
            });
          }}
          label={"Telephone"}
          value={data?.telephone}
        />

        <InputGroup
          width={"100%"}
          onChange={(value) => {
            dispachNewLinks({
              type: "CONTACT-US",
              value: { ...data, address: value },
            });
          }}
          label={"Address"}
          value={data?.address}
        />

        {/* <div className={classes["input-group"]}>
          <label htmlFor="Address" className={classes["label"]}>
            Address
          </label>
          <input
            value={contactInfo.Address}
            id="Address"
            onChange={(e) => {
              setContactInfo({ ...contactInfo, Telephone: e.target.value });
            }}
            placeholder="Address"
            className={classes["input"]}
          />
        </div> */}
      </div>
    </div>
  );
};

export default ContactInfo;

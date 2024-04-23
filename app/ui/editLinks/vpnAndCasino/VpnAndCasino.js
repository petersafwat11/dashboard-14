import React from "react";
import InputGroup from "../inputGroup/InputGroup";
import classes from "./vpnAndCasino.module.css";
const VpnAndCasino = ({ dispachNewLinks, data }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["details"]}>
        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "BANNERS",
              value: { ...data, vpn: value },
            });
          }}
          label={"VPN Banner Link"}
          value={data?.vpn}
        />

        <InputGroup
          onChange={(value) => {
            dispachNewLinks({
              type: "BANNERS",
              value: { ...data, casino: value },
            });
          }}
          label={"Casino Banner Link"}
          value={data?.casino}
        />
      </div>
    </div>
  );
};

export default VpnAndCasino;

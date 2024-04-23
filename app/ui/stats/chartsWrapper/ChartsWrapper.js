"use client";
import React from "react";
import Linechart from "../lineChart/LineChart";
import SvgPieChart from "../svgPieChart/SvgPieChart";
import classes from "./chartsWrapper.module.css";
const ChartsWrapper = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["left"]}>
        <div className={classes["chart-wrapper"]}>
          <div className={classes["name"]}>
            <span className={classes["up-span"]}></span>
            <h3>Up Monitors</h3>
          </div>
          <SvgPieChart
            border={true}
            colors={{ inner: "#e2fbd7", border: "rgba(52, 181, 58, 1)" }}
            monitors={"6"}
          />
        </div>
        <div className={classes["chart-wrapper"]}>
          <div className={classes["name"]}>
            <span className={classes["down-span"]}></span>
            <h3>Down Monitors</h3>
          </div>
          <SvgPieChart
            border={false}
            colors={{
              inner: "#ffe5d3",
              border: "rgba(52, 181, 58, 1)",
            }}
            monitors={"0"}
          />
        </div>
      </div>
      <span className={classes['devider']}></span>
      <div className={classes["right"]}>
        <p className={classes['chart-title']}>Website Users</p>
        <Linechart />
      </div>
    </div>
  );
};

export default ChartsWrapper;

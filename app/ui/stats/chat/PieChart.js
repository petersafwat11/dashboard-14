import React, { Component } from "react";
import { VictoryPie } from "victory";
import classes from './pieChart.module.css'
export class PieChart extends Component {
  render() {
    return (
      <div className={classes['container']}>
        <VictoryPie
          colorScale={["#ffb200", "#29ff32", "#ff3a29", "#4339f2"]}
          data={[
            { x: 1, y: 2, label: "" },
            { x: 2, y: 3, label: "" },
            { x: 3, y: 5, label: "" },
            { x: 4, y: 5, label: "" },
          ]}
          labels={["", "", ""]}
        />
      </div>
    );
  }
}

export default PieChart;

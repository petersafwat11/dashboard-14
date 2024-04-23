import React, { Component } from "react";
import { VictoryPie } from "victory";
import classes from "./svgPieChart.module.css";

export class SvgPieChart extends Component {
  constructor(props) {
    super(props);
    this.props.monitors;
    // You can access the props using `this.props` here
  }

  render() {
    return (
      <div className={classes["container"]}>
        <span className={classes["monitors"]}>{this.props.monitors}</span>
        <svg width={210} height={210}>
          <circle cx={105} cy={105} r={62} fill={this.props.colors.inner} />
          <VictoryPie
            className={classes["chart"]}
            standalone={false}
            width={210}
            height={210}
            innerRadius={62}
            colorScale={[this.props.colors.border, this.props.colors.inner]}
            data={[
              {
                x: 1,
                y: this.props.border == true ? 4 : 0,
              },
              { x: 2, y: 2 },
            ]}
            labels={["", ""]}
          />
        </svg>
      </div>
    );
  }
}

export default SvgPieChart;

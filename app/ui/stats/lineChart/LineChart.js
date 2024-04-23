import React, { PureComponent } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "30-6",
    users: 2400,
    amt: 2400,
  },
  {
    name: "31-6",
    users: 1398,
    amt: 2210,
  },
  {
    name: "1-7",
    users: 9800,
    amt: 2290,
  },
  {
    name: "2-7",
    users: 3908,
    amt: 2000,
  },
  {
    name: "3-7",
    users: 4800,
    amt: 2181,
  },
  {
    name: "4-7",
    users: 3800,
    amt: 2500,
  },
  {
    name: "5-7",
    users: 4300,
    amt: 2100,
  },
];

export default class Linechart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          // margin={{
          //   top: 5,
          //   right: 30,
          //   left: 20,
          //   bottom: 5,
          // }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="users" stroke="#4339F2" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

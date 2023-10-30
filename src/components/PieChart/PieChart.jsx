/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./PieChart.css";
import React from 'react'
export default function PieCharts(props) {
  const { partition } = props;
  let data, COLORS;

  if (partition === true) {
    data = [
      { name: "Group B", value: 6 },
      { name: "Group A", value: 94 },
    ];
    COLORS = ["#5c0af5", "#0598fa"];
  } else {
    data = [
      { name: "Group B", value: 49.5 },
      { name: "Group A", value: 50.5 },
    ];
    COLORS = ["#0598fa", "#5c0af5"];
  }

  const CustomTooltip = ({ active, payload,}) => {
    if (active && payload && payload.length) {
      if (payload[0].value === 94)
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value}% in liquidity`}</p>
          </div>
        );
      if (payload[0].value === 6)
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value}% not staked`}</p>
          </div>
        );
      if (payload[0].value === 49.5)
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value}% USDC`}</p>
          </div>
        );
      if (payload[0].value === 50.5)
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value}% ETH`}</p>
          </div>
        );
    }
    return null;
  };

  return (
    <PieChart width={170} height={170}>
      <Pie
        data={data}
        cx={81}
        cy={80}
        innerRadius={72}
        outerRadius={80}
        fill="#8884d8"
        startAngle={90}
        endAngle={450}
        paddingAngle={2}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={CustomTooltip} />
    </PieChart>
  );
}

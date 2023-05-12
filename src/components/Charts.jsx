import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";

const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
const Charts = () => {
  const chartData = useSelector((state) => state.Reducer.chartData);

  return (
    <Box sx={{ ml: 5 }}>
      <LineChart width={800} height={400} data={chartData}>
        <XAxis dataKey="country" />
        <YAxis dataKey="critical" />
        <Legend />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line dataKey="tests" stroke="#8884d8" />
        <Line type="monotone" dataKey="active" stroke="#82ca9d" />
      </LineChart>
    </Box>
  );
};

export default Charts;

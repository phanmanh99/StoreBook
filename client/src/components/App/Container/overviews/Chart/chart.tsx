import { Box } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// import { Container } from './styles';
interface IChart {
  data: any[];
}
const Chart: React.FC<IChart> = (props) => {
  return (
    <Box>
      <BarChart
        width={1000}
        height={400}
        data={props.data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="initialPrice" stackId="a" fill="#8884d8" />
        <Bar dataKey="price" stackId="a" fill="#82ca9d" />
      </BarChart>
    </Box>
  );
};

export default Chart;

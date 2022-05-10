import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import PaidIcon from "@mui/icons-material/Paid";
import { sx } from "./sx";

import Money from "./Money/money";
import Chart from "./Chart/chart";
import PendingOrder from "./PendingOrder/pendingOrder";

// import { Container } from './styles';

const data = [
  {
    id: 1,
    name: "c++",
    initialPrice: "17000",
    price: "20000",
  },
  {
    id: 2,
    name: "manh ngu",
    initialPrice: "5000",
    price: "8000",
  },
  {
    id: 3,
    name: "c++",
    initialPrice: "17000",
    price: "20000",
  },
  {
    id: 4,
    name: "c++",
    initialPrice: "17000",
    price: "20000",
  },
  ,
  {
    id: 5,
    name: "c++",
    initialPrice: "17000",
    price: "20000",
  },
  ,
  {
    id: 6,
    name: "c++",
    initialPrice: "870000",
    price: "20000",
  },
  ,
  {
    id: 7,
    name: "c++",
    initialPrice: "17000",
    price: "20000",
  },
];
const Overviews: React.FC = () => {
  return (
    <Box sx={sx.container}>
      <Box sx={{ display: "flex" }}>
        <Box sx={sx.money}>
          <Money></Money>
        </Box>
        <Box>
          <PendingOrder />
        </Box>
      </Box>
      <Box sx={sx.chart}>
        <Chart data={data}></Chart>
      </Box>
    </Box>
  );
};

export default Overviews;

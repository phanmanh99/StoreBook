import { Box } from "@mui/material";
import React from "react";
import Overviews from "./overviews/overview";
import { sx } from "./sx";

// import { Container } from './styles';

const Container: React.FC = () => {
  return (
    <Box sx={sx.container}>
      <Overviews></Overviews>
    </Box>
  );
};

export default Container;

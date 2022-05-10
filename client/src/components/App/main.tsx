import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Container from "./Container/container";
import Header from "./Header/header";
import Sidebar from "./Sidebar/sidebar";
import { sx } from "./sx";

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <Box sx={sx.form}>
      <Box>
        <Header></Header>
        <Sidebar></Sidebar>
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;

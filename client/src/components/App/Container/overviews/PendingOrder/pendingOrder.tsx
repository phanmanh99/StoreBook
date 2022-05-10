import React from "react";
import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { sx } from "../sx";
import PaidIcon from "@mui/icons-material/Paid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import { Container } from './styles';

const PendingOrder: React.FC = () => {
  return (
    <Box>
      <Box sx={sx.titleOrder}>
        <Box sx={{ p: 4 }}>ĐƠN HÀNG CHỜ XỬ LÝ</Box>
      </Box>
      <Box sx={{ display: "flex", border: "1px solid #E8EAEB" }}>
        <Box sx={sx.listItemOrder}>
          <ListItemButton sx={sx.listItemButton}>
            <ListItemIcon>
              <PaidIcon sx={{ fontSize: "30px", color: "#2097ff" }} />
            </ListItemIcon>
            <Box>
              <ListItemText primary="Chờ thanh toán" />
              <ListItemText primary="1000000" color="#2097ff" />
            </Box>
          </ListItemButton>
        </Box>
      </Box>
    </Box>
  );
};

export default PendingOrder;

import React from "react";
import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { sx } from "../sx";
import PaidIcon from "@mui/icons-material/Paid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import { Container } from './styles';

const Money: React.FC = () => {
  return (
    <Box>
      <Box sx={sx.title}>
        <Box sx={{ p: 4 }}>KẾT QUẢ KINH DOANH TRONG NGÀY</Box>
      </Box>
      <Box
        sx={{ display: "flex", border: "1px solid #E8EAEB", width: "1089px" }}
      >
        <Box sx={sx.listItems}>
          <ListItemButton sx={sx.listItemButton}>
            <ListItemIcon>
              <PaidIcon sx={{ fontSize: "30px", color: "red" }} />
            </ListItemIcon>
            <Box>
              <ListItemText primary="Tiền đầu tư" />
              <ListItemText primary="1000000" color="red" />
            </Box>
          </ListItemButton>
        </Box>
        <Box sx={sx.listItems}>
          <ListItemButton sx={sx.listItemButton}>
            <ListItemIcon>
              <PaidIcon sx={{ fontSize: "30px", color: "#2097ff" }} />
            </ListItemIcon>
            <Box>
              <ListItemText primary="Tiền lời" />
              <ListItemText primary="130000"  color="#2097ff"/>
            </Box>
          </ListItemButton>
        </Box>
        <Box sx={sx.listItems}>
          <ListItemButton sx={sx.listItemButton}>
            <ListItemIcon>
              <ShoppingCartIcon sx={{ fontSize: "30px", color: "#31d797" }} />
            </ListItemIcon>
            <Box>
              <ListItemText primary="Số sách bán ra" />
              <ListItemText primary="15" color="#31d797"/>
            </Box>
          </ListItemButton>
        </Box>
        <Box sx={sx.listItems}>
          <ListItemButton sx={sx.listItemButton}>
            <ListItemIcon>
              <PersonOutlineIcon sx={{ fontSize: "30px", color: "#ffb824" }} />
            </ListItemIcon>
            <Box>
              <ListItemText primary="Số khách mua hàng" />
              <ListItemText primary="13" color="#ffb824"/>
            </Box>
          </ListItemButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Money;

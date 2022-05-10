import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { sx } from "./sx";
// import { Container } from './styles';
const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box sx={sx.container}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "#202d3f" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon sx={{color: "white"}}/>
          </ListItemIcon>
          <ListItemText primary="Tổng quan" />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <MenuBookIcon sx={{color: "white"}}/>
          </ListItemIcon>
          <ListItemText primary="Book" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Danh sách sản phẩm" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Quản lý kho" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Nhập hàng" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Danh sách sản phẩm" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Nhà cung cấp" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
};

export default Sidebar;

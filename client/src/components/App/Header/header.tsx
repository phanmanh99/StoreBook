import {
  Avatar,
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { sx } from "./sx";
import me from "../../../assets/avatar/me.png";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
const member = [
  {
    name: "Nguyễn Quốc Vinh",
    avatar: me,
  },
];
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <Box sx={sx.container}>
        <Box sx={sx.logo}>
          <Box>
            <img
              width="50px"
              height="50px"
              src="https://static.vecteezy.com/system/resources/previews/000/578/684/original/vector-book-reading-logo-and-symbols-template-icons-app.jpg"
              alt="logo"
            />
          </Box>
          <Box sx={{ fontSize: "25px" }}>Book Store</Box>
        </Box>
        {member.map((item) => {
          return (
            <Box>
              <ListItemButton onClick={handleClick}>
                <Box sx={sx.account}>
                  <Avatar
                    alt="Remy Sharp"
                    src={item.avatar}
                    sx={{ width: 40, height: 40, mr: "10px" }}
                  />
                  <Box>{item.name}</Box>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </Box>
              </ListItemButton>
            </Box>
          );
        })}
      </Box>
      <Box sx={sx.itemAccount}>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{
            boxShadow: "0px 2px 4px rgb(168 168 168 / 25%)",
          }}
        >
          <List component="div" disablePadding sx={sx.item}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AccountCircleIcon sx={{ color: "#AAA" }} />
              </ListItemIcon>

              <ListItemText primary="Tài khoản của tôi" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding sx={sx.item}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LogoutIcon sx={{ color: "#AAA" }} />
              </ListItemIcon>
              <ListItemText primary="Đăng xuất" />
            </ListItemButton>
          </List>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Header;

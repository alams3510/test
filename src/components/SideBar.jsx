import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import React from "react";

const SideBar = () => {
  const drawerWidth = "20%";
  return (
    <Box sx={{ width: "20%" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <List>
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "black" }}
            activeClassName="active"
          >
            <ListItemButton>
              <ListItem>Contacts</ListItem>
            </ListItemButton>
          </NavLink>
          <Divider />
          <NavLink
            to="/chart"
            style={{ textDecoration: "none", color: "black" }}
            activeClassName="active"
          >
            <ListItemButton>
              <ListItem>Charts and Map</ListItem>
            </ListItemButton>
          </NavLink>
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;

import React from "react";
import { NavLink } from "react-router-dom";
import { MenuList, MenuItem, ListItemText, ListItemIcon } from "@mui/material";
import { items } from "./NavData";

function NavList() {
  return (
    <MenuList>
      {items.map((item, index) => (
        <NavLink
          style={{
            textDecoration: "none",
            color: "#A3AED0",
          }}
          to={item.to}
        >
          <MenuItem>

            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText color="red">{item.title}</ListItemText>

          </MenuItem>
        </NavLink>
      ))}
    </MenuList>
  );
}

export default NavList;

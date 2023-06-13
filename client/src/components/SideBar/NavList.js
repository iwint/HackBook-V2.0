/** @format */

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MenuList, MenuItem, ListItemText, ListItemIcon } from "@mui/material";
import { items } from "./NavData";

function NavList() {
   const location = useLocation().pathname;
   return (
      <MenuList
         sx={{
            width: "250px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
         }}>
         {items.map((item, index) => (
            <NavLink
               style={{
                  textDecoration: "none",
                  color: "#A3AED0",
               }}
               to={item.to}>
               <MenuItem
                  sx={{
                     width: "250px",
                     height: "50px",
                     borderRadius: "10px",
                     backgroundColor: location === item.to ? "#1C71FF" : "white",
                     color: location === item.to ? "white" : "#A3AED0",
                     "&:hover": {
                        color: location === item.to ? "white" : "#A3AED0",
                        backgroundColor: location === item.to ? "#1C71FF" : "#F4F7FE",
                     },
                  }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText color="red">{item.title}</ListItemText>
               </MenuItem>
            </NavLink>
         ))}
      </MenuList>
   );
}

export default NavList;

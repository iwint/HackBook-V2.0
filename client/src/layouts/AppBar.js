import React from "react";
import { AppBar, Stack, Toolbar } from "@mui/material";
import Breadcum from "../components/AppBar/Breadcum";
import Search from "../components/AppBar/Search";
function CustomAppBar() {
  return (
    <AppBar
      sx={{ backgroundColor: "transparent", boxShadow: "none", marginY: 3 }}
      position="static"
    >
      <Toolbar>
        <Stack
          direction="row"
          sx={{ width: "100%" }}
          justifyContent={"space-between"}
        >
          <Breadcum />
          <Search />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;

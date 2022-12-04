import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import NavList from "../components/SideBar/NavList";

function SideBar() {
  return (
    <Stack sx={{ height: "100%" }} alignItems="center">
      <Box mt={2}>
        <Typography color={"text.cabzpay"} fontWeight="bold" variant="h5">
          HackBook 🔥
        </Typography>
      </Box>
      <Stack
        sx={{ height: "100%" }}
        alignItems="center"
        justifyContent="space-between"
        direction={"column"}
        mt={2}
        p={5}
      >
        <Box>
          <NavList />
        </Box>
        <Box>
          <Typography variant="p">Version 1.0</Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default SideBar;

import React from "react";
import { Breadcrumbs, Link, Typography, Box } from "@mui/material";
function Breadcum() {
  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Pages
        </Link>

        <Typography>Dashboard</Typography>
      </Breadcrumbs>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold" }}
        color="text.cabzpay"
      ></Typography>
    </Box>
  );
}

export default Breadcum;

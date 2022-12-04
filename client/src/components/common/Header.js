import { Card, Grid, Typography } from "@mui/material";
import React from "react";

function Header({ HeaderName }) {
  return (
    <Grid>
      <Typography variant="h4" padding={3} fontWeight={"bold"}>
        {HeaderName}
      </Typography>
    </Grid>
  );
}

export default Header;

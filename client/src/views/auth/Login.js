import {
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import React from "react";
import { Navigate, NavLink } from "react-router-dom";

function Login() {
  return (
    <Grid container columns={12}>
      {/* Form */}
      <Grid
        container
        sx={{ height: "100vh" }}
        lg={6}
        columns={12}
        alignItems="center"
        justifyContent="space-between"
        direction="column"
      >
        <Grid items mt={2}>
          <Grid color="#A3AED0">
            <Link href="https://www.cabzpay.in" underline="none">
              {" "}
              {"<"} Back to Home
            </Link>
          </Grid>
        </Grid>
        <Grid sx={{ width: "50%" }}>
          <Typography variant="h4" color="#2B3674" fontWeight="bold">
            Admin Login
          </Typography>
          <Typography variant="body2" color="#A3AED0">
            Enter your email and password to sign in!
          </Typography>
          <Box component="form" width="100%">
            <Grid direction="column" container fontSize="12px" mt={2}>
              <Grid>
                <Grid>
                  <label htmlFor="email" style={{ color: "#2B3674" }}>
                    Email<span style={{ color: "#4285F4" }}>*</span>
                  </label>
                </Grid>
                <Grid>
                  <TextField
                    fullwidth
                    id="email"
                    placeholder="mail@latrosoft.in  "
                    variant="outlined"
                    sx={{ marginTop: "2px", width: "100%" }}
                  />
                </Grid>
              </Grid>
              <Grid item mt={2}>
                <Grid>
                  <label htmlFor="password" style={{ color: "#2B3674" }}>
                    Password<span style={{ color: "#4285F4" }}>*</span>
                  </label>
                </Grid>

                <TextField
                  fullwidth
                  id="password"
                  placeholder="Min 8 character"
                  variant="outlined"
                  sx={{ marginTop: "2px", width: "100%" }}
                />
              </Grid>
              <Grid
                direction="column"
                justifyContent="space-between"
                mt={2}
                color="#2B3674"
              >
                <FormControlLabel
                  label="Keep me logged in"
                  control={<Checkbox />}
                />

                <NavLink
                  to={"/forgot"}
                  style={{ textDecoration: "none" }}
                  color="#2F80ED"
                >
                  Forgot password ?
                </NavLink>
              </Grid>
              <Grid mt={3}>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    boxShadow: "none",
                    borderRadius: "16px",
                    backgroundColor: "#2F80ED",
                  }}
                  onClick={() => {
                    alert("Ungala laa ulla Anupa Mudiyathu Vroo");
                  }}
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid color="#A3AED0">
          <Typography variant="body2" mb={3}>
            © 2022 Latrosoft. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>

      {/* Logo */}
      <Grid
        container
        lg={6}
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "#4481EB",
          height: "100vh",
          md: { display: "none" },
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold" }} color="white">
          HackBook
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Login;

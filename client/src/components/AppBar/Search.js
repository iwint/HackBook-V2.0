import React from "react";
import { Box, Typography, InputBase, Stack, Avatar } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
export default function Search() {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      alignItems={"center"}
      sx={{
        height: "50%",
        padding: 1,
        backgroundColor: "#fff",
        width: "40%",
        borderRadius: 10,
      }}
    >
      <Box
        sx={{
          paddingX: "10px",
          display: "flex",
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: "#F4F7FE",
        }}
      >
        {" "}
        <SearchTwoToneIcon sx={{ color: "#2B3674" }} />
        <InputBase
          sx={{
            height: "100%",
          }}
          placeholder="Search"
        ></InputBase>
      </Box>
      <NotificationsNoneOutlinedIcon sx={{ color: "#2B3674" }} />
      <NightsStayOutlinedIcon sx={{ color: "#2B3674" }} />
      <InfoOutlinedIcon sx={{ color: "#2B3674" }} />
      <Avatar alt="Balaji Sivasakthi" src="/static/images/avatar/1.jpg" />
    </Stack>
  );
}

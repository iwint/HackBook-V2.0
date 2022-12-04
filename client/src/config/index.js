import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCardMedia: {
      styleOverrides: {
        root: {
          boxShadow: "",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          height: "42px",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
  },

  typography: {
    fontFamily: "DM Sans,sans-serif",
  },
  palette: {
    text: {
      primary: "#2B3674",
      // secondary: "#2B3674",
      cabzpay: "#1C71FF",
    },
  },
});

export { theme };

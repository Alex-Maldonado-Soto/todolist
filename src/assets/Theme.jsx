import createTheme from "@mui/material/styles/createTheme";

import "@fontsource/josefin-sans"; // Defaults to weight 400
import "@fontsource/josefin-sans/400.css"; // Specify weight
import "@fontsource/josefin-sans/400-italic.css"; // Specify weight and style

export const Theme = createTheme({
  typography: {
    fontFamily: "Josefin Sans, sans-serif",
  },
  palette: {
    type: "light",
    primary: {
      main: "hsl(220, 98%, 61%)",
    },
    secondary: {
      main: "hsl(192, 100%, 67%), hsl(280, 87%, 65%)",
    },
    error: {
      main: "hsl(0, 100%, 66%)",
    },
    background: {
      default: "hsl(0, 0%, 98%)",
    },
    text: {
      disabled: "hsl(236, 33%, 92%)",
      hint: "hsl(233, 11%, 84%)",
      secondary: "hsl(236, 9%, 61%)",
      primary: "hsl(235, 19%, 35%)",
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: "hsl(220, 98%, 61%)",
    },
    secondary: {
      main: "hsl(234, 39%, 85%)",
    },
    error: {
      main: "hsl(0, 100%, 66%)",
    },
    background: {
      default: "hsl(235, 21%, 11%)",
      paper: "hsl(235, 24%, 19%)",
    },
    text: {
      primary: "hsl(234, 39%, 85%)",
      secondary: "hsl(236, 33%, 92%)",
      disabled: "hsl(237, 14%, 26%)",
      hint: "hsl(233, 14%, 35%)",
    },
  },
});

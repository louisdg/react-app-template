import { createTheme } from "@mui/material";
import colors from "./colors";
import fonts from "./fonts";

export default createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: ["Barlow", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: "16px",
          background: "linear-gradient(180deg, #FFF3B5 0%, #FFA800 100%)",
          boxShadow: `0px 8px 16px 0px ${colors["neutrals/black/25%"]}, 0px -4px 8px 0px ${colors["yellow/100"]} inset, 0px 4px 8px 0px ${colors["neutrals/white"]} inset`,
          color: colors["yellow/50"],
          textShadow: `0px 2px 4px ${colors["yellow/300"]}`,
          padding: "32px 100px",
          transition: "transform 0.25s ease",
          "&:hover, &:focus-visible": {
            boxShadow: `0px 8px 16px 0px ${colors["neutrals/black/25%"]}, 0px -4px 8px 0px ${colors["yellow/100"]} inset, 0px 4px 8px 0px ${colors["neutrals/white"]} inset, 0px 0px 16px 0px ${colors["neutrals/white/50%"]}`,
          },
          "&:active": {
            transition: "transform 0.1s ease",
            transform: "scale(0.95)",
          },
          ...fonts["button/main"],
        },
      },
    },
  },
});

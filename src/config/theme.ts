import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const baseTheme = createTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 800,
  },
  palette: {
    primary: { main: "#232a3c" },
    secondary: { main: "#b89e63" },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
});

baseTheme.typography.h1 = {
  ...baseTheme.typography.h1,
  [baseTheme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
};

baseTheme.typography.h2 = {
  ...baseTheme.typography.h2,
  [baseTheme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
};

baseTheme.typography.h3 = {
  ...baseTheme.typography.h3,
  fontSize: "1.5rem",
  [baseTheme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
};

baseTheme.typography.body1 = {
  ...baseTheme.typography.body1,
  fontSize: "1.3rem",
  [baseTheme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
};

const responsiveTheme = responsiveFontSizes(baseTheme);

export default responsiveTheme;

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

const responsiveTheme = responsiveFontSizes(baseTheme);

export default responsiveTheme;

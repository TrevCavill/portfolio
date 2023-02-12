import { makeStyles } from "tss-react/mui";

import BackgroundImage from "assets/runway.webp";

export const useStyles = makeStyles()((theme) => ({
  container: {
    display: "grid",
    placeContent: "center",
    height: "100vh",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundColor: theme.palette.primary.main,
    backgroundBlendMode: "overlay",
  },
  heading: {
    color: "#ffffff",
    fontWeight: 700,
    maxWidth: 800,
    textAlign: "center",
  },
}));

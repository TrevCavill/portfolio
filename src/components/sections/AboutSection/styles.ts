import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    display: "flex",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingTop: "20vh",
      height: "100%",
      minHeight: "100vh",
    },
  },
  contentLeft: {
    width: "50%",
    display: "grid",
    placeContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  description: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(16),
    width: 600,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: theme.spacing(4),
      gap: theme.spacing(12),
    },
  },
  text: {
    lineHeight: 2,
    color: "#ffffff",
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1.8,
    },
  },
  contentRight: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: theme.spacing(8),
    },
  },
  profilePicture: {
    width: "100%",
    maxHeight: "90vh",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      width: "60%",
    },
  },
}));

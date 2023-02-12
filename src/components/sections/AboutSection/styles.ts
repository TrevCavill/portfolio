import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    display: "flex",
    height: "100vh",
  },
  contentLeft: {
    width: "50%",
    display: "grid",
    placeContent: "center",
  },
  description: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(16),
    width: 600,
  },
  text: {
    lineHeight: 2,
    color: "#ffffff",
  },
  contentRight: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: theme.palette.primary.main,
  },
  profilePicture: {
    width: "100%",
    maxHeight: "90vh",
    objectFit: "contain",
  },
}));

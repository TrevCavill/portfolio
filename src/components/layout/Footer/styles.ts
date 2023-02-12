import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(8),
    scrollSnapAlign: "center",
    backgroundColor: theme.palette.primary.dark,
    color: "#ffffff",
  },
}));

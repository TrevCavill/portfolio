import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    display: "inline-block",
  },
  heading: {
    display: "inline-block",
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
    paddingBottom: theme.spacing(4),
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(2),
    },
  },
}));

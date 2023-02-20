import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(4),
    padding: theme.spacing(8),
    scrollSnapAlign: "center",
    backgroundColor: theme.palette.primary.dark,
    color: "#ffffff",
    [theme.breakpoints.up("sm")]: {
      scrollSnapAlign: "none",
    },
  },
  socials: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(4),
  },
  socialLink: {
    color: theme.palette.secondary.main,
    cursor: "pointer",
    fontSize: "4rem",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
}));

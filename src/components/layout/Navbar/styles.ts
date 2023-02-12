import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: `${theme.spacing(4)} 5vw`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(8),
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: "1.2rem",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
}));

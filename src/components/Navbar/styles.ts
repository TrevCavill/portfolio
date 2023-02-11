import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: theme.spacing(4, 8),
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
    textDecoration: "none",
    cursor: "pointer",
    fontWeight: 700,
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
}));

import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    display: "grid",
    placeContent: "center",
    placeItems: "center",
    height: "100vh",
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      minHeight: "100vh",
    },
  },
  cards: {
    width: "100vw",
    maxWidth: 1200,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: theme.spacing(4),
    marginTop: theme.spacing(16),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
    },
  },
  card: {
    background: theme.palette.primary.dark,
    padding: theme.spacing(8),
    borderRadius: "5px",
    cursor: "pointer",
    border: "3px solid transparent",
    transition: "border 0.3s ease-in-out",
    "&:hover": {
      border: `3px solid ${theme.palette.secondary.main}`,
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4),
      margin: theme.spacing(4),
    },
  },
  cardHeading: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  cardTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  cardText: {
    color: "#ffffff",
    lineHeight: 2,
  },
  cardIcon: {
    fontSize: "3rem",
  },
}));

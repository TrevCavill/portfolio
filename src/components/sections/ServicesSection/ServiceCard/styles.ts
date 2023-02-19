import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  card: {
    height: "100%",
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
  cardIconContainer: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      fontSize: "3rem",
    },
  },
}));

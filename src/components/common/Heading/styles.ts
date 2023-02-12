import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  heading: {
    textDecoration: "underline",
    textUnderlineOffset: "0.5em",
    textTransform: "uppercase",
  },
}));

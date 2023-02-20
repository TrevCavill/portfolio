import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    height: "100vh",
    overflowY: "scroll",
    scrollBehavior: "smooth",
    scrollSnapType: "y mandatory",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      minHeight: "100vh",
      scrollSnapType: "none",
    },
  },
}));

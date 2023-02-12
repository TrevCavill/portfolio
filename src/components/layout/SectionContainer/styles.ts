import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

function getBackgroundColor(theme: Theme, backgroundColor: string) {
  if (backgroundColor === "primary") return theme.palette.primary.main;
  if (backgroundColor === "secondary") return theme.palette.secondary.main;
  return backgroundColor;
}

function getTextColor(theme: Theme, backgroundColor: string) {
  if (backgroundColor === "primary") return theme.palette.secondary.main;
  if (backgroundColor === "secondary") return theme.palette.primary.main;
  return theme.palette.secondary.main;
}

export const useStyles = makeStyles<{ backgroundColor: string }>()(
  (theme, { backgroundColor }) => ({
    container: {
      minHeight: "100vh",
      scrollSnapAlign: "center",
      backgroundColor: getBackgroundColor(theme, backgroundColor),
      color: getTextColor(theme, backgroundColor),
    },
  })
);

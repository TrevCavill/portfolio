import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles<void, "emailText">()(
  (theme, _params, classes) => ({
    container: {
      display: "flex",
      height: "100vh",
    },
    contentLeft: {
      flex: 1,
      display: "grid",
      placeContent: "center",
    },
    description: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(16),
      width: 600,
    },
    emailContainer: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2),
      cursor: "pointer",
      color: "#ffffff",
      "&:hover": {
        color: theme.palette.secondary.light,
        [`& .${classes.emailText}`]: {
          color: theme.palette.secondary.light,
        },
      },
    },
    emailText: {
      fontWeight: 700,
      textDecoration: "none",
      color: "#ffffff",
    },
    contentRight: {
      flex: 1,
      display: "grid",
      placeContent: "center",
    },
    form: {
      width: 500,
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(4),
    },
    textField: {
      color: theme.palette.secondary.main,
      "& .MuiOutlinedInput-root": {
        color: "#ffffff",
        "& fieldset": {
          borderColor: "#ffffff",
        },
        "&:hover fieldset": {
          borderColor: "#ffffff",
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.secondary.main,
        },
      },
      "& .MuiInputLabel-outlined": {
        color: "#ffffff",
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: theme.palette.secondary.main,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        color: theme.palette.secondary.main,
      },
    },
  })
);

import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles<void, "emailText">()(
  (theme, _params, classes) => ({
    container: {
      display: "flex",
      height: "100vh",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        paddingTop: "10vh",
        paddingBottom: theme.spacing(16),
        height: "100%",
        minHeight: "100vh",
      },
    },
    contentLeft: {
      flex: 1,
      display: "grid",
      placeContent: "center",
      [theme.breakpoints.down("sm")]: {
        display: "block",
        padding: theme.spacing(4),
        flex: "unset",
      },
    },
    description: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(16),
      width: 600,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        gap: theme.spacing(8),
        marginBottom: theme.spacing(8),
      },
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
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
    form: {
      width: 500,
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        width: `calc(100vw - ${theme.spacing(8)})`,
        margin: "0 auto",
      },
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
    submitButton: {
      width: "50%",
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    messageSent: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: theme.spacing(4),
        alignItems: "center",
      },
    },
    messageSentIcon: {
      fontSize: "3rem",
    },
  })
);

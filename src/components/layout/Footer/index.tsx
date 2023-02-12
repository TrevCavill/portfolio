import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";

const Footer = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.container}>
      <Typography variant="body1">
        © 2023 Trev Cavill. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;

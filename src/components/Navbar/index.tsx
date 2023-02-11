import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";

const Navbar = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Typography style={{ fontSize: "1.5rem" }}>Trev Cavill</Typography>
      <div className={classes.links}>
        <Typography className={classes.link}>About</Typography>
        <Typography className={classes.link}>Services</Typography>
        <Typography className={classes.link}>Contact</Typography>
      </div>
    </div>
  );
};

export default Navbar;

import { useStyles } from "./styles";

const Navbar = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <a href="/#home" className={classes.link}>
        Trev Cavill
      </a>
      <div className={classes.links}>
        <a href="/#about" className={classes.link}>
          About
        </a>
        <a href="/#services" className={classes.link}>
          Services
        </a>
        <a href="/#contact" className={classes.link}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;

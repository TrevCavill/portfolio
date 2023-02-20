import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

import { useStyles } from "./styles";

const Footer = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.container}>
      <div className={classes.socials}>
        <a
          href="https://www.linkedin.com/in/trev-cavill-139730a3/"
          target="_blank"
        >
          <LinkedInIcon className={classes.socialLink} />
        </a>
        <a href="https://github.com/TrevCavill" target="_blank">
          <GitHubIcon className={classes.socialLink} />
        </a>
        <a href="https://www.instagram.com/trevcavill/" target="_blank">
          <InstagramIcon className={classes.socialLink} />
        </a>
      </div>
      <Typography variant="body1">
        © 2023 Trev Cavill. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;

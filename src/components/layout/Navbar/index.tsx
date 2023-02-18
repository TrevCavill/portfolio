import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme, SvgIconTypeMap } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import AboutIcon from "@mui/icons-material/Interests";
import ServicesIcon from "@mui/icons-material/LaptopMac";
import ContactIcon from "@mui/icons-material/Call";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useStyles } from "./styles";

const LINKS = [
  { name: "about", icon: <AboutIcon /> },
  { name: "services", icon: <ServicesIcon /> },
  { name: "contact", icon: <ContactIcon /> },
];

const Navbar = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & SvgIconTypeMap) | null
  >(null);
  const menuOpen = Boolean(anchorEl);

  function handleMenu(event: any) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  const desktopLinks = (
    <div className={classes.desktopLinks}>
      {LINKS.map((link) => (
        <a
          href={`/#${link.name}`}
          className={classes.link}
          key={`${link.name}-link`}
        >
          {link.name}
        </a>
      ))}
    </div>
  );

  const mobileLinks = (
    <>
      <MenuIcon aria-label="menu" onClick={(e) => handleMenu(e)} />
      <Drawer anchor="top" open={menuOpen} onClose={handleMenuClose}>
        <List className={classes.mobileLinks}>
          {LINKS.map((link) => (
            <a
              href={`/#${link.name}`}
              key={`${link.name}-link`}
              className={classes.link}
            >
              <ListItem onClick={handleMenuClose}>
                <ListItemIcon className={classes.mobileLinkIcon}>
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.name} />
              </ListItem>
            </a>
          ))}
        </List>
      </Drawer>
    </>
  );

  return (
    <div className={classes.container}>
      <a href="/#home" className={classes.link}>
        {isMobile ? <CodeIcon className={classes.codeIcon} /> : "Trev Cavill"}
      </a>
      {isMobile ? mobileLinks : desktopLinks}
    </div>
  );
};

export default Navbar;

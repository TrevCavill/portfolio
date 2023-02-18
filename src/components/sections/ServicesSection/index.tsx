import Typography from "@mui/material/Typography";
import RocketIcon from "@mui/icons-material/RocketLaunch";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";

import { useStyles } from "./styles";
import SectionContainer from "components/layout/SectionContainer";
import Heading from "components/common/Heading";

const ServicesSection = () => {
  const { classes } = useStyles();

  return (
    <SectionContainer id="services">
      <div className={classes.container}>
        <Heading text="Services" />
        <div className={classes.cards}>
          <div className={classes.card}>
            <div className={classes.cardHeading}>
              <RocketIcon className={classes.cardIcon} />
              <Typography variant="h3" className={classes.cardTitle}>
                Landing pages
              </Typography>
            </div>
            <Typography variant="body1" className={classes.cardText}>
              I can rapidly build a landing page for any company or product.
            </Typography>
          </div>
          <div className={classes.card}>
            <div className={classes.cardHeading}>
              <CodeIcon className={classes.cardIcon} />
              <Typography variant="h3" className={classes.cardTitle}>
                Web applications
              </Typography>
            </div>
            <Typography variant="body1" className={classes.cardText}>
              I build fast, responsive websites using modern frameworks from
              scratch or upgrade existing apps.
            </Typography>
          </div>
          <div className={classes.card}>
            <div className={classes.cardHeading}>
              <SchoolIcon className={classes.cardIcon} />
              <Typography variant="h3" className={classes.cardTitle}>
                Coding tutorials
              </Typography>
            </div>
            <Typography variant="body1" className={classes.cardText}>
              Learn how to build websites using vanilla HTML, CSS and JS, React
              JS and more!
            </Typography>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ServicesSection;

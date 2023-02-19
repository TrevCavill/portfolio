import RocketIcon from "@mui/icons-material/RocketLaunch";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";

import { useStyles } from "./styles";
import SectionContainer from "components/layout/SectionContainer";
import Heading from "components/common/Heading";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const { classes } = useStyles();

  return (
    <SectionContainer id="services">
      <div className={classes.container}>
        <Heading text="Services" />
        <div className={classes.cards}>
          <ServiceCard
            index={0}
            title="Landing pages"
            icon={<RocketIcon />}
            description="I can rapidly build a landing page for any company or product."
          />
          <ServiceCard
            index={1}
            title="Web applications"
            icon={<CodeIcon />}
            description="I build fast, responsive websites using modern frameworks from scratch or upgrade existing apps."
          />
          <ServiceCard
            index={2}
            title="Coding tutorials"
            icon={<SchoolIcon />}
            description="Learn how to build websites using vanilla HTML, CSS and JS, React JS and more!"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default ServicesSection;

import { useStyles } from "./styles";
import SectionContainer from "components/layout/SectionContainer";
import Heading from "components/common/Heading";

const ServicesSection = () => {
  const { classes } = useStyles();

  return (
    <SectionContainer id="services">
      <div className={classes.container}>
        <Heading text="Services" />
      </div>
    </SectionContainer>
  );
};

export default ServicesSection;

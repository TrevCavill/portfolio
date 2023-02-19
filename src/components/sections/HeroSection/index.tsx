import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";
import SectionContainer from "components/layout/SectionContainer";
import ScrollAnimation from "components/common/ScrollAnimation";

const HeroSection = () => {
  const { classes } = useStyles();
  return (
    <SectionContainer id="home">
      <div className={classes.container}>
        <ScrollAnimation>
          <Typography variant="h1" className={classes.heading}>
            First class web development services
          </Typography>
        </ScrollAnimation>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;

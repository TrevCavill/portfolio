import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";
import SectionContainer from "components/layout/SectionContainer";

const HeroSection = () => {
  const { classes } = useStyles();
  return (
    <SectionContainer id="home">
      <div className={classes.container}>
        <Typography variant="h1" className={classes.heading}>
          First class web development services
        </Typography>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;

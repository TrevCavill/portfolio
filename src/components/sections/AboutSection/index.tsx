import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";
import ProfilePicture from "assets/profile_picture.webp";
import SectionContainer from "components/layout/SectionContainer";
import Heading from "components/common/Heading";

const AboutSection = () => {
  const { classes } = useStyles();

  return (
    <SectionContainer id="about">
      <div className={classes.container}>
        <div className={classes.contentLeft}>
          <div className={classes.description}>
            <Heading text="About" />
            <Typography
              variant="body1"
              className={classes.text}
              style={{ fontSize: "1.3rem" }}
            >
              I am an experienced full-stack web developer born in New Zealand.
              My main area of expertise is React JS, but I have worked with a
              wide range of web technologies. In addition to being a web
              developer, I am a composer, piano teacher and qualified commerical
              pilot.
            </Typography>
          </div>
        </div>
        <div className={classes.contentRight}>
          <img
            src={ProfilePicture}
            alt="Profile Picture"
            className={classes.profilePicture}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;

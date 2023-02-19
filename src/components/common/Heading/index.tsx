import { FC } from "react";
import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";
import ScrollAnimation from "components/common/ScrollAnimation";

interface HeadingProps {
  text: string;
}

const Heading: FC<HeadingProps> = ({ text }) => {
  const { classes } = useStyles();
  return (
    <ScrollAnimation>
      <div className={classes.container}>
        <Typography variant="h2" className={classes.heading}>
          {text}
        </Typography>
      </div>
    </ScrollAnimation>
  );
};

export default Heading;

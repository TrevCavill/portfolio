import { FC } from "react";
import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";

interface HeadingProps {
  text: string;
}

const Heading: FC<HeadingProps> = ({ text }) => {
  const { classes } = useStyles();
  return (
    <Typography variant="h2" className={classes.heading}>
      {text}
    </Typography>
  );
};

export default Heading;

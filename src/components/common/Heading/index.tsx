import { FC } from "react";
import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";

interface HeadingProps {
  text: string;
}

const Heading: FC<HeadingProps> = ({ text }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h2" className={classes.heading}>
        {text}
      </Typography>
    </div>
  );
};

export default Heading;

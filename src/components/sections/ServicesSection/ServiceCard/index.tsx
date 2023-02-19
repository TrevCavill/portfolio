import { FC } from "react";
import { Theme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";
import ScrollAnimation from "components/common/ScrollAnimation";

interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const ServiceCard: FC<ServiceCardProps> = ({
  index,
  title,
  description,
  icon,
}) => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <ScrollAnimation
      effectDelay={index * 0.5}
      dropDistance={isMobile ? 25 : 100}
    >
      <div className={classes.card}>
        <div className={classes.cardHeading}>
          <div className={classes.cardIconContainer}>{icon}</div>
          <Typography variant="h3" className={classes.cardTitle}>
            {title}
          </Typography>
        </div>
        <Typography variant="body1" className={classes.cardText}>
          {description}
        </Typography>
      </div>
    </ScrollAnimation>
  );
};

export default ServiceCard;

import { FC, ReactNode } from "react";

import { useStyles } from "./styles";

interface ContentProps {
  children: ReactNode;
}

const Content: FC<ContentProps> = ({ children }) => {
  const { classes } = useStyles();
  return <main className={classes.container}>{children}</main>;
};

export default Content;

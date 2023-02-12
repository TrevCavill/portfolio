import { FC, ReactNode } from "react";

import { useStyles } from "./styles";

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  color?: "primary" | "secondary";
}

const SectionContainer: FC<SectionContainerProps> = ({
  id,
  children,
  color = "primary",
}) => {
  const { classes } = useStyles({ backgroundColor: color });

  return (
    <section id={id} className={classes.container}>
      {children}
    </section>
  );
};

export default SectionContainer;

import { FC, ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollAnimationProps {
  children: ReactNode;
  fadeEffect?: boolean;
  dropEffect?: boolean;
  effectDuration?: number;
  effectDelay?: number;
  dropDistance?: number;
}

const ScrollAnimation: FC<ScrollAnimationProps> = ({
  children,
  fadeEffect = true,
  dropEffect = true,
  effectDuration = 1,
  effectDelay = 0,
  dropDistance = 25,
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: {
      opacity: 1,
      transition: { duration: effectDuration, delay: effectDelay },
      y: 0,
    },
    hidden: {
      opacity: fadeEffect ? 0 : 1,
      y: dropEffect ? dropDistance * -1 : 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;

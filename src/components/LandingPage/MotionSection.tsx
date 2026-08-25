import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  children: ReactNode;
  className?: string;
  /** Extra delay (s)  useful for subtle staggering */
  delay?: number;
  /** Hero block: animate on mount (above the fold) */
  variant?: "default" | "hero";
};

export default function MotionSection({
  children,
  className = "",
  delay = 0,
  variant = "default",
}: Props) {
  const reduceMotion = useReducedMotion();
  const off = reduceMotion === true;
  const dur = off ? 0 : variant === "hero" ? 0.45 : 0.38;
  const d = off ? 0 : delay;

  if (variant === "hero") {
    return (
      <motion.div
        className={className}
        initial={off ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: dur, delay: d, ease }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={off ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px 0px -20px 0px", amount: 0.1 }}
      transition={{ duration: dur, delay: d, ease }}
    >
      {children}
    </motion.div>
  );
}

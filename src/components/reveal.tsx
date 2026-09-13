"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, transform: "translateY(8px)" }}
      whileInView={
        reduceMotion ? undefined : { opacity: 1, transform: "translateY(0)" }
      }
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.24, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

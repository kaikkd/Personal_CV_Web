"use client";

import { motion, useReducedMotion } from "motion/react";

export function SectionMarker({
  index,
  label,
  light = false,
}: {
  index: string;
  label: string;
  light?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`section-id${light ? " section-id--light" : ""}`}
      initial={false}
    >
      <span>{index}</span>
      <p className="eyebrow">{label}</p>
      <motion.i
        aria-hidden="true"
        initial={
          reduceMotion
            ? false
            : { opacity: 0, transform: "scaleX(0.92)" }
        }
        whileInView={
          reduceMotion
            ? undefined
            : { opacity: 1, transform: "scaleX(1)" }
        }
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.28, delay: 0.04, ease: [0.23, 1, 0.32, 1] }}
      />
    </motion.div>
  );
}

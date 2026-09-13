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
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={reduceMotion ? undefined : { scaleX: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

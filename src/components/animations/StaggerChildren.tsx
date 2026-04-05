"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
};

export default function StaggerChildren({ children, staggerDelay = 0.08, className }: Props) {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : staggerDelay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.4 } },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Each direct child needs to use the item variant — wrap with StaggerItem */}
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : 20 },
        show: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.4 } },
      }}
    >
      {children}
    </motion.div>
  );
}

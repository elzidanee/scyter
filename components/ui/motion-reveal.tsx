"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import React from "react";

interface MotionRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

/**
 * Single element smooth scroll reveal with cubic-bezier easing
 */
export function MotionReveal({
  children,
  delay = 0,
  duration = 0.55,
  yOffset = 24,
  className = "",
  ...props
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Container that orchestrates staggered child entrance animations smoothly
 */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Child item inside a StaggerContainer
 */
export function StaggerItem({
  children,
  className = "",
  yOffset = 20,
}: {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

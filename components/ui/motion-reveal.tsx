"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import React from "react";

// Emil Kowalski & Apple Design canonical easing curve for UI
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

interface MotionRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

/**
 * Single element smooth scroll reveal with Emil Kowalski cubic-bezier easing & reduced-motion support
 */
export function MotionReveal({
  children,
  delay = 0,
  duration = 0.45,
  yOffset = 18,
  className = "",
  ...props
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: yOffset, scale: 0.98 }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, scale: 1 }
      }
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: EASE_OUT,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Container that orchestrates staggered child entrance animations smoothly (30-80ms stagger)
 */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.06,
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
  yOffset = 16,
}: {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: yOffset, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: shouldReduceMotion ? 0.2 : 0.38,
            ease: EASE_OUT,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

"use client";
import { cn } from "@/lib/utils";
import { motion, SpringOptions, useInView, useSpring, useTransform, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  as?: React.ElementType;
};

export function AnimatedNumber({
  value,
  className,
  springOptions = { mass: 0.8, stiffness: 75, damping: 15 },
  as = "span",
}: AnimatedNumberProps) {
  const MotionComponent = motion.create(as as any);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const spring = useSpring(0, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      // reduced motion: set instantly, no counting
      spring.jump(value);
    } else {
      spring.set(value);
    }
  }, [spring, value, inView, reduce]);

  return (
    <MotionComponent ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </MotionComponent>
  );
}

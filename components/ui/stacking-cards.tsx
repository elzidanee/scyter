"use client";

import {
  createContext,
  useContext,
  useRef,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
  type UseScrollOptions,
} from "motion/react";

import { cn } from "@/lib/utils";

interface StackingCardsProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  scrollOptions?: UseScrollOptions;
  scaleMultiplier?: number;
  totalCards: number;
}

interface StackingCardItemProps
  extends HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  index: number;
}

export default function StackingCards({
  children,
  className,
  scrollOptions,
  scaleMultiplier = 0.05,
  totalCards,
  ...props
}: StackingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    ...scrollOptions,
  });

  return (
    <StackingCardsContext.Provider
      value={{ progress: scrollYProgress, scaleMultiplier, totalCards }}
    >
      <div
        ref={containerRef}
        className={cn("relative [perspective:1200px]", className)}
        style={{ height: `${totalCards * 90}vh` }}
        {...props}
      >
        {children}
      </div>
    </StackingCardsContext.Provider>
  );
}

const StackingCardItem = ({
  index,
  className,
  children,
  ...props
}: StackingCardItemProps) => {
  const {
    progress,
    scaleMultiplier = 0.05,
    totalCards = 1,
  } = useStackingCardsContext();

  const start = index / totalCards;
  const end = Math.min(1, (index + 1) / totalCards);

  const scaleTo = 1 - (totalCards - 1 - index) * scaleMultiplier;
  const scale = useTransform(progress, [start, 1], [1, Math.max(0.75, scaleTo)]);

  // Subtle 3D tilt and depth recede
  const rotateX = useTransform(progress, [start, end], [0, 4]);
  const y = useTransform(progress, [start, 1], [0, -index * 6]);
  const opacity = useTransform(
    progress,
    [start, 1],
    [1, Math.max(0.65, 1 - (totalCards - 1 - index) * 0.1)]
  );

  const top = `calc(5.5rem + ${index * 1.5}rem)`;

  return (
    <div
      className={cn("sticky", className)}
      style={{ top, zIndex: index + 1 }}
      {...props}
    >
      <motion.div
        className="origin-top w-full will-change-transform"
        style={{
          scale,
          rotateX,
          y,
          opacity,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const StackingCardsContext = createContext<{
  progress: MotionValue<number>;
  scaleMultiplier?: number;
  totalCards?: number;
} | null>(null);

export const useStackingCardsContext = () => {
  const context = useContext(StackingCardsContext);
  if (!context)
    throw new Error("StackingCardItem must be used within StackingCards");
  return context;
};

export { StackingCardItem };

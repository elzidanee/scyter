'use client';

import { CSSProperties, ComponentType, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

export type TextLoopShape = 'wave' | 'circle' | 'infinity' | 'arch' | 'line';
export type TextLoopDirection = 'forward' | 'reverse';

export interface TextLoopItem {
  name: string;
  Icon: ComponentType<{ size?: number | string; className?: string; color?: string }>;
}

export interface TextLoopProps {
  text?: string;
  items?: TextLoopItem[];
  shape?: TextLoopShape;
  path?: string;
  speed?: number;
  direction?: TextLoopDirection;
  separator?: string;
  curviness?: number;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  uppercase?: boolean;
  color?: string;
  ribbon?: boolean;
  ribbonColor?: string;
  ribbonWidth?: number;
  pauseOnHover?: boolean;
  className?: string;
  style?: CSSProperties;
  viewHeight?: number;
  itemSpacing?: number;
}

interface Metrics {
  length: number;
  reps: number;
}

const VIEW_W = 1200;

const buildPath = (shape: TextLoopShape, curviness: number, ribbonWidth: number, viewH: number): string => {
  const c = Math.max(0, curviness);
  const cx = VIEW_W / 2;
  const cy = viewH / 2;
  const edgePad = 6;
  const room = Math.max(16, cy - Math.max(0, ribbonWidth) / 2 - edgePad);

  switch (shape) {
    case 'circle': {
      const r = Math.min(90 + c * 0.95, room);
      return `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy} Z`;
    }
    case 'infinity': {
      const r = 150 + c * 1.4;
      const h = Math.min(60 + c * 0.95, room);
      return [
        `M ${cx} ${cy}`,
        `C ${cx + r * 0.55} ${cy - h} ${cx + r} ${cy - h} ${cx + r} ${cy}`,
        `C ${cx + r} ${cy + h} ${cx + r * 0.55} ${cy + h} ${cx} ${cy}`,
        `C ${cx - r * 0.55} ${cy - h} ${cx - r} ${cy - h} ${cx - r} ${cy}`,
        `C ${cx - r} ${cy + h} ${cx - r * 0.55} ${cy + h} ${cx} ${cy}`,
        'Z'
      ].join(' ');
    }
    case 'arch': {
      const rise = Math.min(60 + c * 0.8, room * 1.4);
      return `M 120 ${cy + rise / 2} Q ${cx} ${cy - rise} ${VIEW_W - 120} ${cy + rise / 2}`;
    }
    case 'line':
      return `M -320 ${cy} L ${VIEW_W + 320} ${cy}`;
    case 'wave':
    default: {
      // Gentle slope so text remains fully legible without extreme angles
      const a = Math.min(c * 1.1, room);
      return `M -320 ${cy} Q -160 ${cy - a} 0 ${cy} T 320 ${cy} T 640 ${cy} T 960 ${cy} T 1280 ${cy} T ${VIEW_W + 320} ${cy}`;
    }
  }
};

// Long wave spanning far off-screen so logo slots never bunch up at the loop seam
const buildItemsWavePath = (totalSlots: number, slotSpacing: number, viewH: number, curviness: number): string => {
  const cx = VIEW_W / 2;
  const cy = viewH / 2;
  const A = Math.min(Math.max(12, curviness), 48);
  const halfW = 360;
  const targetSpan = Math.max(totalSlots * slotSpacing, VIEW_W * 2);
  let n = Math.max(6, Math.ceil(targetSpan / halfW));
  if (n % 2 !== 0) n += 1;
  const x0 = cx - (n / 2) * halfW;
  const x1 = cx + (n / 2) * halfW;
  let d = `M ${x0} ${cy} Q ${x0 + halfW / 2} ${cy - A} ${x0 + halfW} ${cy}`;
  let x = x0 + halfW;
  while (x < x1) {
    x += halfW;
    d += ` T ${x} ${cy}`;
  }
  return d;
};

const TextLoop = ({
  text = 'React ✦ Bits',
  items,
  shape = 'wave',
  path,
  speed = 80,
  direction = 'forward',
  separator = '✦',
  curviness = 28,
  fontSize = 20,
  fontWeight = 750,
  letterSpacing = 1.5,
  uppercase = true,
  color = '#09090B',
  ribbon = true,
  ribbonColor = '#FFD700',
  ribbonWidth = 48,
  pauseOnHover = true,
  className = '',
  style = {},
  viewHeight = 180,
  itemSpacing = 210
}: TextLoopProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const measureRef = useRef<SVGTextElement | null>(null);
  const headRef = useRef<SVGTextPathElement | null>(null);
  const tailRef = useRef<SVGTextPathElement | null>(null);
  const itemRefs = useRef<(SVGGElement | null)[]>([]);

  const [metrics, setMetrics] = useState<Metrics>({ length: 0, reps: 1 });
  const [pathLength, setPathLength] = useState<number>(0);

  const rawId = useId();
  const pathId = `text-loop-${rawId.replace(/:/g, '')}`;

  const viewH = viewHeight;
  const hasItems = !!items && items.length > 0;

  // Two copies of the list = seamless loop with even slot spacing
  const slots = useMemo(() => {
    if (!hasItems || !items) return [];
    const out: (TextLoopItem & { slotKey: string })[] = [];
    for (let r = 0; r < 2; r++) {
      for (let i = 0; i < items.length; i++) {
        out.push({ ...items[i], slotKey: `${r}-${i}-${items[i].name}` });
      }
    }
    return out;
  }, [items, hasItems]);

  const d = useMemo(() => {
    if (path) return path;
    if (hasItems) return buildItemsWavePath(slots.length, itemSpacing, viewH, curviness);
    return buildPath(shape, curviness, ribbonWidth, viewH);
  }, [path, hasItems, slots.length, itemSpacing, viewH, shape, curviness, ribbonWidth]);

  const unit = useMemo(() => {
    const base = uppercase ? String(text).toUpperCase() : String(text);
    const gap = separator ? ` ${separator} ` : '   ';
    return `${base}${gap}`;
  }, [text, separator, uppercase]);

  const textStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: `${fontSize}px`,
      fontWeight,
      letterSpacing: `${letterSpacing}px`,
      fontFamily: 'var(--font-heading), ui-sans-serif, system-ui, sans-serif'
    }),
    [fontSize, fontWeight, letterSpacing]
  );

  useLayoutEffect(() => {
    const pathEl = pathRef.current;
    if (!pathEl) return undefined;
    const measureEl = measureRef.current;

    let cancelled = false;

    const measure = () => {
      if (cancelled) return;
      try {
        const length = pathEl.getTotalLength();
        if (!length) return;
        setPathLength(length);
        if (!hasItems && measureEl) {
          const unitWidth = measureEl.getComputedTextLength();
          const reps = unitWidth > 0 ? Math.max(1, Math.round(length / unitWidth)) : 1;
          setMetrics(prev => (prev.length === length && prev.reps === reps ? prev : { length, reps }));
        }
      } catch {
        return;
      }
    };

    measure();
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    return () => {
      cancelled = true;
    };
  }, [d, unit, fontSize, fontWeight, letterSpacing, hasItems]);

  useEffect(() => {
    const pathEl = pathRef.current;
    if (!pathEl) return undefined;

    let length = pathLength;
    try {
      if (!length) length = pathEl.getTotalLength();
    } catch {
      return undefined;
    }
    if (!length) return undefined;

    const head = headRef.current;
    const tail = tailRef.current;

    const updateItems = (offset: number) => {
      if (slots.length === 0) return;
      const step = length / slots.length;
      for (let i = 0; i < slots.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;
        let pos = (offset + i * step) % length;
        if (pos < 0) pos += length;
        const pt = pathEl.getPointAtLength(pos);
        const p1 = pathEl.getPointAtLength(Math.max(0, pos - 2));
        const p2 = pathEl.getPointAtLength(Math.min(length, pos + 2));
        const ang = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
        el.setAttribute('transform', `translate(${pt.x.toFixed(1)} ${pt.y.toFixed(1)}) rotate(${ang.toFixed(1)})`);
      }
    };

    const updateText = (offset: number) => {
      if (!head || !tail) return;
      const partner = offset >= 0 ? offset - length : offset + length;
      head.setAttribute('startOffset', String(offset));
      tail.setAttribute('startOffset', String(partner));
    };

    if (hasItems) {
      if (slots.length === 0) return undefined;
      updateItems(0);
    } else {
      updateText(0);
    }

    const prefersReduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || speed <= 0) return undefined;

    const state = { offset: 0 };
    const tween = gsap.to(state, {
      offset: direction === 'reverse' ? -length : length,
      duration: length / speed,
      ease: 'none',
      repeat: -1,
      onUpdate: () => {
        if (hasItems) updateItems(state.offset);
        else updateText(state.offset);
      }
    });

    const root = rootRef.current;
    const pause = () => tween.pause();
    const resume = () => tween.resume();

    if (pauseOnHover && root) {
      root.addEventListener('pointerenter', pause);
      root.addEventListener('pointerleave', resume);
    }

    return () => {
      tween.kill();
      if (pauseOnHover && root) {
        root.removeEventListener('pointerenter', pause);
        root.removeEventListener('pointerleave', resume);
      }
    };
  }, [hasItems, slots, pathLength, speed, direction, pauseOnHover]);

  const loopText = unit.repeat(metrics.reps);
  const fitLength = metrics.length || undefined;

  return (
    <div ref={rootRef} className={`relative w-full overflow-hidden ${className}`.trim()} style={style}>
      <svg
        className="block w-full h-auto"
        viewBox={`0 0 ${VIEW_W} ${viewH}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={hasItems ? 'Tech Stack Loop' : text}
      >
        <path
          ref={pathRef}
          id={pathId}
          d={d}
          fill="none"
          stroke={ribbon ? ribbonColor : 'none'}
          strokeWidth={ribbon ? ribbonWidth : 0}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {hasItems ? (
          <g opacity={pathLength > 0 ? 1 : 0}>
            {slots.map((slot, i) => {
              const Icon = slot.Icon;
              const label = uppercase ? slot.name.toUpperCase() : slot.name;
              const textW = label.length * fontSize * 0.65;
              const totalW = 18 + 8 + textW + (separator ? 24 : 0);
              const x0 = -totalW / 2;
              return (
                <g
                  key={slot.slotKey}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="select-none"
                >
                  <g transform={`translate(${x0.toFixed(1)} -9)`}>
                    <Icon size={18} color={color} />
                  </g>
                  <text
                    x={(x0 + 26).toFixed(1)}
                    y="0"
                    fill={color}
                    style={textStyle}
                    dominantBaseline="central"
                    alignmentBaseline="central"
                  >
                    {label}
                  </text>
                  {separator && (
                    <text
                      x={(x0 + 26 + textW + 12).toFixed(1)}
                      y="0"
                      fill={color}
                      style={{ fontSize: `${Math.round(fontSize * 0.85)}px`, opacity: 0.45 }}
                      dominantBaseline="central"
                    >
                      {separator}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        ) : (
          <>
            <text ref={measureRef} className="invisible pointer-events-none" style={textStyle} aria-hidden="true">
              {unit}
            </text>

            <text
              className="select-none"
              style={textStyle}
              fill={color}
              dominantBaseline="central"
              alignmentBaseline="central"
              aria-hidden="true"
              textLength={fitLength}
              lengthAdjust="spacing"
            >
              <textPath ref={headRef} href={`#${pathId}`} startOffset={0}>
                {loopText}
              </textPath>
            </text>

            <text
              className="select-none"
              style={textStyle}
              fill={color}
              dominantBaseline="central"
              alignmentBaseline="central"
              aria-hidden="true"
              textLength={fitLength}
              lengthAdjust="spacing"
            >
              <textPath ref={tailRef} href={`#${pathId}`} startOffset={0}>
                {loopText}
              </textPath>
            </text>
          </>
        )}
      </svg>
    </div>
  );
};

export default TextLoop;

import React from "react";

export interface TestimonialItem {
  id?: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  avatarUrl: string;
}

export interface TestimonialRow {
  id: string;
  speed?: string;
  direction?: "left" | "right";
  testimonials: TestimonialItem[];
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  rows: TestimonialRow[];
}

export const TestimonialCard = ({
  quote,
  authorName,
  authorTitle,
  avatarUrl,
}: {
  quote: string;
  authorName: string;
  authorTitle: string;
  avatarUrl: string;
}) => {
  return (
    <div className="testimonial-card flex flex-col items-start gap-4 p-6 bg-[#141418] border border-white/[0.08] rounded-xl shadow-lg w-96 flex-shrink-0 text-white">
      <p className="text-zinc-300 text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-4 mt-auto">
        <img
          src={avatarUrl}
          alt={authorName}
          className="w-10 h-10 rounded-full bg-zinc-800 object-cover"
        />
        <div>
          <h4 className="text-sm font-bold text-white">{authorName}</h4>
          <p className="text-xs text-zinc-400">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

export const HorizontalScroller = ({
  children,
  speed = "40s",
  direction = "left",
}: {
  children: React.ReactNode;
  speed?: string;
  direction?: "left" | "right";
}) => {
  const animationClass =
    direction === "right" ? "animate-scroll-horizontal-reverse" : "animate-scroll-horizontal";

  return (
    <div className="w-full overflow-hidden group relative mask-fade">
      <div
        className={`flex ${animationClass}`}
        style={{ "--scroll-duration": speed } as React.CSSProperties}
      >
        <div className="flex items-stretch justify-center gap-6 px-3">{children}</div>
        <div className="flex items-stretch justify-center gap-6 px-3" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection({ data }: { data: TestimonialsData }) {
  return (
    <section className="testimonials-section relative flex flex-col items-center gap-10 p-6 sm:p-10 w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-3 text-center z-10 max-w-2xl">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl">{data.subtitle}</p>
      </div>

      <div className="flex flex-col gap-6 z-10 w-full max-w-6xl">
        {data.rows.map((row) => (
          <HorizontalScroller key={row.id} speed={row.speed} direction={row.direction}>
            {row.testimonials.map((t, idx) => (
              <TestimonialCard
                key={t.id ?? idx}
                quote={t.quote}
                authorName={t.authorName}
                authorTitle={t.authorTitle}
                avatarUrl={t.avatarUrl}
              />
            ))}
          </HorizontalScroller>
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 85% 67% at 50% 100%, rgba(255,215,0,0.08) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />
    </section>
  );
}

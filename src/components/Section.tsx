"use client";

import type { ReactNode } from "react";
import { useInView } from "@/lib/useInView";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, label, title, description, children }: SectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div
        ref={ref}
        className={`animate-in ${isInView ? "visible" : ""}`}
      >
        <div className="mb-8 max-w-3xl">
          <p className="font-mono text-sm text-blue-300">{label}</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-base leading-7 text-slate-400">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useCallback, useRef, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    // Return focus to trigger
    setTimeout(() => triggerRef.current?.focus(), 100);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap — keep focus inside the panel when open
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    const panel = panelRef.current;
    const focusableEls = panel.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    firstEl?.focus();

    function trapFocus(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl?.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl?.focus();
        }
      }
    }

    document.addEventListener("keydown", trapFocus);
    return () => document.removeEventListener("keydown", trapFocus);
  }, [isOpen]);

  return (
    <>
      {/* Hamburger button — visible only below md */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-teal-300 transition hover:bg-teal-300/10 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950 md:hidden"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Backdrop + Panel overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            ref={panelRef}
            className="absolute right-0 top-0 h-full w-72 border-l border-slate-700 bg-slate-950 p-6 shadow-2xl shadow-black/40"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Close button */}
            <button
              onClick={close}
              className="mb-8 flex h-10 w-10 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Close navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation links */}
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="rounded-md px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-blue-400/10 hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                onClick={close}
                className="mt-4 rounded-md border border-blue-400/50 px-4 py-3 text-center font-medium text-blue-100 transition hover:border-blue-300 hover:bg-blue-400/10 hover:text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Resume
              </a>
            </nav>

            {/* Terminal decoration */}
            <div className="mt-auto pt-8">
              <p className="font-mono text-xs text-slate-500">
                system status: available
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

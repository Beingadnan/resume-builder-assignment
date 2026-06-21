'use client';
import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface SectionCardProps {
  title: string;
  icon: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function SectionCard({
  title,
  icon,
  children,
  defaultOpen = true,
}: SectionCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(defaultOpen ? undefined : 0);

  // On open/close, animate the height
  useEffect(() => {
    if (!bodyRef.current) return;
    if (open) {
      // Measure the real height and animate to it
      const scrollH = bodyRef.current.scrollHeight;
      setHeight(scrollH);
      // After transition ends, set to undefined so content can grow freely
      const timer = setTimeout(() => setHeight(undefined), 320);
      return () => clearTimeout(timer);
    } else {
      // First snap the current height to a fixed px, then animate to 0
      const scrollH = bodyRef.current.scrollHeight;
      setHeight(scrollH);
      // Force reflow
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      bodyRef.current.offsetHeight;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setHeight(0));
      });
    }
  }, [open]);

  return (
    <div className={`section-card${open ? ' section-card--open' : ''}`}>
      <button
        className={`section-header${open ? ' section-header--open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        type="button"
      >
        <span className="section-icon">{icon}</span>
        <span className="section-title">{title}</span>
        <span className={`section-chevron${open ? ' open' : ''}`}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2.5 5L7 9.5L11.5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        ref={bodyRef}
        className="section-body-wrapper"
        style={{
          height: height === undefined ? 'auto' : `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        aria-hidden={!open}
      >
        <div className="section-body">{children}</div>
      </div>
    </div>
  );
}

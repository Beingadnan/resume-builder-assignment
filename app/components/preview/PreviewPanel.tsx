'use client';
import React, { useRef } from 'react';
import { useResume } from '../../context/ResumeContext';
import ResumeDocument from './ResumeDocument';

export default function PreviewPanel() {
  const { state } = useResume();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="preview-panel" aria-label="Live Resume Preview">

      {/* Toolbar bar — Canva/Overleaf style */}
      <div className="preview-toolbar">
        <div className="preview-toolbar-left">
          <span className="live-badge">
            <span className="live-dot" />
            Live Preview
          </span>
        </div>
        <div className="preview-toolbar-center">
          <span className="preview-page-info">Page 1 of 1 · A4</span>
        </div>
        <div className="preview-toolbar-right">
          <span className="preview-hint">Changes appear instantly</span>
        </div>
      </div>

      {/* Scrollable canvas area */}
      <div className="preview-canvas" ref={scrollRef}>

        <div className="preview-paper-wrap">
          {/* Paper top chrome */}
          <div className="preview-paper-chrome">
            <span className="chrome-dot chrome-dot--red" />
            <span className="chrome-dot chrome-dot--yellow" />
            <span className="chrome-dot chrome-dot--green" />
            <span className="chrome-filename">resume.pdf</span>
          </div>

          {/* The actual resume */}
          <div className="preview-paper">
            <ResumeDocument data={state} />
          </div>

          {/* Paper bottom shadow fade */}
          <div className="preview-paper-footer" aria-hidden="true">
            <span className="paper-page-num">1</span>
          </div>
        </div>

        <div className="preview-bottom-space" />
      </div>
    </section>
  );
}

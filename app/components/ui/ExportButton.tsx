'use client';
import React, { useState } from 'react';

export default function ExportButton() {
  const [printing, setPrinting] = useState(false);

  const handlePrint = () => {
    setPrinting(true);
    // Small delay lets the state update/re-render clear before print dialog opens
    setTimeout(() => {
      window.print();
      // Reset after dialog closes (print/cancel)
      setTimeout(() => setPrinting(false), 500);
    }, 100);
  };

  return (
    <button
      id="export-pdf-btn"
      className={`export-btn${printing ? ' export-btn--printing' : ''}`}
      onClick={handlePrint}
      aria-label="Export resume as PDF"
      disabled={printing}
    >
      {printing ? (
        <>
          <span className="export-icon export-spinner">⟳</span>
          Preparing…
        </>
      ) : (
        <>
          <span className="export-icon">⬇</span>
          Export PDF
        </>
      )}
    </button>
  );
}

'use client';
import React, { ReactNode } from 'react';

interface DynamicEntryProps {
  index: number;
  onRemove: () => void;
  children: ReactNode;
  label?: string;
}

export default function DynamicEntry({
  index,
  onRemove,
  children,
  label = 'Entry',
}: DynamicEntryProps) {
  return (
    <div className="dynamic-entry">
      <div className="dynamic-entry-header">
        <span className="dynamic-entry-label">
          {label} #{index + 1}
        </span>
        <button
          className="remove-btn"
          onClick={onRemove}
          aria-label={`Remove ${label} ${index + 1}`}
        >
          ✕ Remove
        </button>
      </div>
      <div className="dynamic-entry-body">{children}</div>
    </div>
  );
}

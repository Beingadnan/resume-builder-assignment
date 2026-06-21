'use client';
import React from 'react';
import { useResume } from '../../context/ResumeContext';
import SectionCard from '../ui/SectionCard';

export default function SummaryForm() {
  const { state, dispatch } = useResume();
  const charCount = state.summary.length;
  const maxChars = 500;

  return (
    <SectionCard title="Professional Summary" icon="✍️">
      <div className="form-field">
        <label htmlFor="summary">
          Summary
          <span className={`char-count ${charCount > maxChars ? 'over' : ''}`}>
            {charCount}/{maxChars}
          </span>
        </label>
        <textarea
          id="summary"
          rows={5}
          value={state.summary}
          onChange={(e) =>
            dispatch({ type: 'UPDATE_SUMMARY', payload: e.target.value })
          }
          placeholder="Write a compelling 2-3 sentence professional summary highlighting your key skills, experience, and what makes you unique..."
        />
      </div>
    </SectionCard>
  );
}

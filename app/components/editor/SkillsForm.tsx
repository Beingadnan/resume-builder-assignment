'use client';
import React, { useState, KeyboardEvent } from 'react';
import { useResume } from '../../context/ResumeContext';
import SectionCard from '../ui/SectionCard';

export default function SkillsForm() {
  const { state, dispatch } = useResume();
  const [input, setInput] = useState('');

  const addSkill = () => {
    const trimmed = input.trim();
    if (trimmed && !state.skills.includes(trimmed)) {
      dispatch({ type: 'ADD_SKILL', skill: trimmed });
    }
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <SectionCard title="Skills" icon="⚡">
      <div className="skills-chips">
        {state.skills.map((skill) => (
          <span key={skill} className="skill-chip">
            {skill}
            <button
              className="skill-chip-remove"
              onClick={() => dispatch({ type: 'REMOVE_SKILL', skill })}
              aria-label={`Remove skill ${skill}`}
            >
              ✕
            </button>
          </span>
        ))}
      </div>
      <div className="skill-input-row">
        <input
          id="skill-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a skill and press Enter..."
          aria-label="Add a skill"
        />
        <button
          id="add-skill-btn"
          className="add-skill-btn"
          onClick={addSkill}
        >
          Add
        </button>
      </div>
      <p className="field-hint">Press Enter or comma to add quickly</p>
    </SectionCard>
  );
}

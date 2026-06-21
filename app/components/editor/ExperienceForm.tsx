'use client';
import React from 'react';
import { useResume } from '../../context/ResumeContext';
import SectionCard from '../ui/SectionCard';
import DynamicEntry from '../ui/DynamicEntry';

export default function ExperienceForm() {
  const { state, dispatch } = useResume();

  return (
    <SectionCard title="Work Experience" icon="💼">
      {state.experience.map((exp, index) => (
        <DynamicEntry
          key={exp.id}
          index={index}
          label="Experience"
          onRemove={() => dispatch({ type: 'REMOVE_EXPERIENCE', id: exp.id })}
        >
          <div className="form-grid-2">
            <div className="form-field">
              <label htmlFor={`exp-company-${exp.id}`}>Company *</label>
              <input
                id={`exp-company-${exp.id}`}
                type="text"
                value={exp.company}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_EXPERIENCE',
                    id: exp.id,
                    payload: { company: e.target.value },
                  })
                }
                placeholder="Acme Corp"
              />
            </div>
            <div className="form-field">
              <label htmlFor={`exp-role-${exp.id}`}>Job Title *</label>
              <input
                id={`exp-role-${exp.id}`}
                type="text"
                value={exp.role}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_EXPERIENCE',
                    id: exp.id,
                    payload: { role: e.target.value },
                  })
                }
                placeholder="Software Engineer"
              />
            </div>
            <div className="form-field">
              <label htmlFor={`exp-start-${exp.id}`}>Start Date</label>
              <input
                id={`exp-start-${exp.id}`}
                type="month"
                value={exp.startDate}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_EXPERIENCE',
                    id: exp.id,
                    payload: { startDate: e.target.value },
                  })
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor={`exp-end-${exp.id}`}>End Date</label>
              <input
                id={`exp-end-${exp.id}`}
                type="month"
                value={exp.endDate}
                disabled={exp.current}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_EXPERIENCE',
                    id: exp.id,
                    payload: { endDate: e.target.value },
                  })
                }
              />
              <label className="checkbox-label" htmlFor={`exp-current-${exp.id}`}>
                <input
                  id={`exp-current-${exp.id}`}
                  type="checkbox"
                  checked={exp.current}
                  onChange={(e) =>
                    dispatch({
                      type: 'UPDATE_EXPERIENCE',
                      id: exp.id,
                      payload: { current: e.target.checked, endDate: '' },
                    })
                  }
                />
                Currently working here
              </label>
            </div>
            <div className="form-field form-field-full">
              <label htmlFor={`exp-desc-${exp.id}`}>
                Description
                <span className="label-hint">Use • bullet points for impact</span>
              </label>
              <textarea
                id={`exp-desc-${exp.id}`}
                rows={5}
                value={exp.description}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_EXPERIENCE',
                    id: exp.id,
                    payload: { description: e.target.value },
                  })
                }
                placeholder="• Led development of...&#10;• Improved performance by...&#10;• Collaborated with..."
              />
            </div>
          </div>
        </DynamicEntry>
      ))}
      <button
        id="add-experience-btn"
        className="add-btn"
        onClick={() => dispatch({ type: 'ADD_EXPERIENCE' })}
      >
        + Add Experience
      </button>
    </SectionCard>
  );
}

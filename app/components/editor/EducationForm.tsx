'use client';
import React from 'react';
import { useResume } from '../../context/ResumeContext';
import SectionCard from '../ui/SectionCard';
import DynamicEntry from '../ui/DynamicEntry';

export default function EducationForm() {
  const { state, dispatch } = useResume();

  return (
    <SectionCard title="Education" icon="🎓">
      {state.education.map((edu, index) => (
        <DynamicEntry
          key={edu.id}
          index={index}
          label="Education"
          onRemove={() => dispatch({ type: 'REMOVE_EDUCATION', id: edu.id })}
        >
          <div className="form-grid-2">
            <div className="form-field form-field-full">
              <label htmlFor={`edu-inst-${edu.id}`}>Institution *</label>
              <input
                id={`edu-inst-${edu.id}`}
                type="text"
                value={edu.institution}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_EDUCATION',
                    id: edu.id,
                    payload: { institution: e.target.value },
                  })
                }
                placeholder="Stanford University"
              />
            </div>
            <div className="form-field">
              <label htmlFor={`edu-degree-${edu.id}`}>Degree</label>
              <input
                id={`edu-degree-${edu.id}`}
                type="text"
                value={edu.degree}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_EDUCATION',
                    id: edu.id,
                    payload: { degree: e.target.value },
                  })
                }
                placeholder="Bachelor of Science"
              />
            </div>
            <div className="form-field">
              <label htmlFor={`edu-field-${edu.id}`}>Field of Study</label>
              <input
                id={`edu-field-${edu.id}`}
                type="text"
                value={edu.field}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_EDUCATION',
                    id: edu.id,
                    payload: { field: e.target.value },
                  })
                }
                placeholder="Computer Science"
              />
            </div>
            <div className="form-field">
              <label htmlFor={`edu-start-${edu.id}`}>Start Date</label>
              <input
                id={`edu-start-${edu.id}`}
                type="month"
                value={edu.startDate}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_EDUCATION',
                    id: edu.id,
                    payload: { startDate: e.target.value },
                  })
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor={`edu-end-${edu.id}`}>End Date</label>
              <input
                id={`edu-end-${edu.id}`}
                type="month"
                value={edu.endDate}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_EDUCATION',
                    id: edu.id,
                    payload: { endDate: e.target.value },
                  })
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor={`edu-gpa-${edu.id}`}>GPA (optional)</label>
              <input
                id={`edu-gpa-${edu.id}`}
                type="text"
                value={edu.gpa}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_EDUCATION',
                    id: edu.id,
                    payload: { gpa: e.target.value },
                  })
                }
                placeholder="3.9 / 4.0"
              />
            </div>
          </div>
        </DynamicEntry>
      ))}
      <button
        id="add-education-btn"
        className="add-btn"
        onClick={() => dispatch({ type: 'ADD_EDUCATION' })}
      >
        + Add Education
      </button>
    </SectionCard>
  );
}

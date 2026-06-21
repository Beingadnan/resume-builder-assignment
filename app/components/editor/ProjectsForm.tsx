'use client';
import React from 'react';
import { useResume } from '../../context/ResumeContext';
import SectionCard from '../ui/SectionCard';
import DynamicEntry from '../ui/DynamicEntry';

export default function ProjectsForm() {
  const { state, dispatch } = useResume();

  return (
    <SectionCard title="Projects" icon="🚀" defaultOpen={true}>
      {state.projects.map((proj, index) => (
        <DynamicEntry
          key={proj.id}
          index={index}
          label="Project"
          onRemove={() => dispatch({ type: 'REMOVE_PROJECT', id: proj.id })}
        >
          <div className="form-grid-2">
            <div className="form-field form-field-full">
              <label htmlFor={`proj-name-${proj.id}`}>Project Name *</label>
              <input
                id={`proj-name-${proj.id}`}
                type="text"
                value={proj.name}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_PROJECT',
                    id: proj.id,
                    payload: { name: e.target.value },
                  })
                }
                placeholder="My Awesome Project"
              />
            </div>
            <div className="form-field form-field-full">
              <label htmlFor={`proj-desc-${proj.id}`}>Description</label>
              <textarea
                id={`proj-desc-${proj.id}`}
                rows={3}
                value={proj.description}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_PROJECT',
                    id: proj.id,
                    payload: { description: e.target.value },
                  })
                }
                placeholder="Brief description of what the project does and its impact..."
              />
            </div>
            <div className="form-field">
              <label htmlFor={`proj-tech-${proj.id}`}>Technologies</label>
              <input
                id={`proj-tech-${proj.id}`}
                type="text"
                value={proj.technologies}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_PROJECT',
                    id: proj.id,
                    payload: { technologies: e.target.value },
                  })
                }
                placeholder="React, Node.js, PostgreSQL"
              />
            </div>
            <div className="form-field">
              <label htmlFor={`proj-link-${proj.id}`}>Link (optional)</label>
              <input
                id={`proj-link-${proj.id}`}
                type="text"
                value={proj.link}
                onChange={(e) =>
                  dispatch({
                    type: 'UPDATE_PROJECT',
                    id: proj.id,
                    payload: { link: e.target.value },
                  })
                }
                placeholder="github.com/username/project"
              />
            </div>
          </div>
        </DynamicEntry>
      ))}
      <button
        id="add-project-btn"
        className="add-btn"
        onClick={() => dispatch({ type: 'ADD_PROJECT' })}
      >
        + Add Project
      </button>
    </SectionCard>
  );
}

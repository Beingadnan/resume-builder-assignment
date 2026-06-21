'use client';
import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import SummaryForm from './SummaryForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import ProjectsForm from './ProjectsForm';

export default function EditorPanel() {
  return (
    <aside className="editor-panel" aria-label="Resume Editor">
      <div className="editor-scroll">
        <PersonalInfoForm />
        <SummaryForm />
        <ExperienceForm />
        <EducationForm />
        <SkillsForm />
        <ProjectsForm />
        <div className="editor-bottom-space" />
      </div>
    </aside>
  );
}

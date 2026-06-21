'use client';
import React from 'react';
import { ResumeData } from '../../types/resume';

interface Props {
  data: ResumeData;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const [year, month] = dateStr.split('-');
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

export default function ResumeDocument({ data }: Props) {
  const { personal, summary, experience, education, skills, projects } = data;

  return (
    <div className="resume-doc" id="resume-document">
      {/* Header */}
      <header className="resume-header">
        <div className="resume-name-block">
          <h1 className="resume-name">{personal.fullName || 'Your Name'}</h1>
          {personal.title && (
            <p className="resume-title-line">{personal.title}</p>
          )}
        </div>
        <div className="resume-contacts">
          {personal.email && (
            <span className="resume-contact-item">
              <span className="contact-icon">✉</span> {personal.email}
            </span>
          )}
          {personal.phone && (
            <span className="resume-contact-item">
              <span className="contact-icon">☎</span> {personal.phone}
            </span>
          )}
          {personal.location && (
            <span className="resume-contact-item">
              <span className="contact-icon">⌖</span> {personal.location}
            </span>
          )}
          {personal.linkedin && (
            <span className="resume-contact-item">
              <span className="contact-icon">in</span> {personal.linkedin}
            </span>
          )}
          {personal.website && (
            <span className="resume-contact-item">
              <span className="contact-icon">🔗</span> {personal.website}
            </span>
          )}
        </div>
      </header>

      <div className="resume-divider" />

      {/* Summary */}
      {summary && (
        <section className="resume-section">
          <h2 className="resume-section-title">Professional Summary</h2>
          <p className="resume-summary-text">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="resume-section">
          <h2 className="resume-section-title">Work Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="resume-entry">
              <div className="resume-entry-header">
                <div className="resume-entry-left">
                  <span className="resume-entry-role">{exp.role || 'Job Title'}</span>
                  <span className="resume-entry-company">{exp.company || 'Company'}</span>
                </div>
                <div className="resume-entry-right">
                  <span className="resume-entry-dates">
                    {formatDate(exp.startDate)}
                    {exp.startDate && ' – '}
                    {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </span>
                </div>
              </div>
              {exp.description && (
                <div className="resume-entry-desc">
                  {exp.description.split('\n').map((line, i) => (
                    <p key={i} className="resume-desc-line">{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="resume-entry">
              <div className="resume-entry-header">
                <div className="resume-entry-left">
                  <span className="resume-entry-role">
                    {[edu.degree, edu.field].filter(Boolean).join(' in ') || 'Degree'}
                  </span>
                  <span className="resume-entry-company">
                    {edu.institution || 'Institution'}
                  </span>
                </div>
                <div className="resume-entry-right">
                  <span className="resume-entry-dates">
                    {formatDate(edu.startDate)}
                    {edu.startDate && edu.endDate && ' – '}
                    {formatDate(edu.endDate)}
                  </span>
                  {edu.gpa && (
                    <span className="resume-entry-gpa">GPA: {edu.gpa}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="resume-section">
          <h2 className="resume-section-title">Skills</h2>
          <div className="resume-skills">
            {skills.map((skill) => (
              <span key={skill} className="resume-skill-tag">{skill}</span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="resume-section">
          <h2 className="resume-section-title">Projects</h2>
          {projects.map((proj) => (
            <div key={proj.id} className="resume-entry">
              <div className="resume-project-header">
                <span className="resume-entry-role">{proj.name || 'Project Name'}</span>
                {proj.link && (
                  <span className="resume-project-link">{proj.link}</span>
                )}
              </div>
              {proj.technologies && (
                <p className="resume-project-tech">
                  <strong>Tech:</strong> {proj.technologies}
                </p>
              )}
              {proj.description && (
                <p className="resume-desc-line">{proj.description}</p>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

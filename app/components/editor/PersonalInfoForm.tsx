'use client';
import React from 'react';
import { useResume } from '../../context/ResumeContext';
import SectionCard from '../ui/SectionCard';

export default function PersonalInfoForm() {
  const { state, dispatch } = useResume();
  const { personal } = state;

  const update = (key: string, value: string) => {
    dispatch({ type: 'UPDATE_PERSONAL', payload: { [key]: value } });
  };

  return (
    <SectionCard title="Personal Information" icon="👤" defaultOpen={true}>
      <div className="form-grid-2">
        <div className="form-field">
          <label htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            type="text"
            value={personal.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            placeholder="John Doe"
          />
        </div>
        <div className="form-field">
          <label htmlFor="title">Professional Title</label>
          <input
            id="title"
            type="text"
            value={personal.title}
            onChange={(e) => update('title', e.target.value)}
            placeholder="Senior Software Engineer"
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            value={personal.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="john@example.com"
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            value={personal.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div className="form-field">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            value={personal.location}
            onChange={(e) => update('location', e.target.value)}
            placeholder="San Francisco, CA"
          />
        </div>
        <div className="form-field">
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            id="linkedin"
            type="text"
            value={personal.linkedin}
            onChange={(e) => update('linkedin', e.target.value)}
            placeholder="linkedin.com/in/yourname"
          />
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="website">Website / Portfolio</label>
          <input
            id="website"
            type="text"
            value={personal.website}
            onChange={(e) => update('website', e.target.value)}
            placeholder="yoursite.dev"
          />
        </div>
      </div>
    </SectionCard>
  );
}

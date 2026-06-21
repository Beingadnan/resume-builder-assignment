'use client';

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
} from 'react';
import { ResumeData, ResumeAction } from '../types/resume';

let _idCounter = 0;
const generateId = () => `entry-${++_idCounter}`;

const initialState: ResumeData = {
  personal: {
    fullName: 'Adnan Khan',
    email: 'adnankhan@example.com',
    phone: '+1 (555) 000-0000',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/adnankhan',
    website: 'adnankhan.dev',
    title: 'Senior Software Engineer',
  },
  summary:
    'Passionate software engineer with 5+ years of experience building scalable web applications. Specializing in full-stack development with React, Node.js, and cloud infrastructure. Committed to clean code, great UX, and continuous learning.',
  experience: [
    {
      id: generateId(),
      company: 'Tech Corp Inc.',
      role: 'Senior Software Engineer',
      startDate: '2022-01',
      endDate: '',
      current: true,
      description:
        '• Led a team of 5 engineers to deliver a real-time analytics dashboard serving 100K+ users\n• Reduced API response times by 40% through Redis caching and query optimization\n• Architected microservices migration from monolith, improving deployment frequency by 3x',
    },
    {
      id: generateId(),
      company: 'Startup Labs',
      role: 'Frontend Developer',
      startDate: '2020-03',
      endDate: '2021-12',
      current: false,
      description:
        '• Built responsive React applications used by 50K+ monthly active users\n• Implemented CI/CD pipelines reducing release cycles from 2 weeks to daily\n• Collaborated with design team to create a component library adopted across 3 products',
    },
  ],
  education: [
    {
      id: generateId(),
      institution: 'University of California, Berkeley',
      degree: "Bachelor's of Science",
      field: 'Computer Science',
      startDate: '2016-09',
      endDate: '2020-05',
      gpa: '3.8',
    },
  ],
  skills: [
    'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
    'PostgreSQL', 'Redis', 'Docker', 'AWS', 'GraphQL',
    'Git', 'Agile/Scrum',
  ],
  projects: [
    {
      id: generateId(),
      name: 'OpenFlow — Workflow Automation',
      description:
        'A visual drag-and-drop workflow builder with real-time collaboration, supporting 20+ integrations.',
      technologies: 'React, TypeScript, WebSockets, Node.js, PostgreSQL',
      link: 'github.com/adnankhan/openflow',
    },
  ],
};

function resumeReducer(state: ResumeData, action: ResumeAction): ResumeData {
  switch (action.type) {
    case 'UPDATE_PERSONAL':
      return { ...state, personal: { ...state.personal, ...action.payload } };
    case 'UPDATE_SUMMARY':
      return { ...state, summary: action.payload };
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experience: [
          ...state.experience,
          {
            id: generateId(),
            company: '',
            role: '',
            startDate: '',
            endDate: '',
            current: false,
            description: '',
          },
        ],
      };
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.map((e) =>
          e.id === action.id ? { ...e, ...action.payload } : e
        ),
      };
    case 'REMOVE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.filter((e) => e.id !== action.id),
      };
    case 'ADD_EDUCATION':
      return {
        ...state,
        education: [
          ...state.education,
          {
            id: generateId(),
            institution: '',
            degree: '',
            field: '',
            startDate: '',
            endDate: '',
            gpa: '',
          },
        ],
      };
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        education: state.education.map((e) =>
          e.id === action.id ? { ...e, ...action.payload } : e
        ),
      };
    case 'REMOVE_EDUCATION':
      return {
        ...state,
        education: state.education.filter((e) => e.id !== action.id),
      };
    case 'ADD_SKILL':
      if (state.skills.includes(action.skill)) return state;
      return { ...state, skills: [...state.skills, action.skill] };
    case 'REMOVE_SKILL':
      return {
        ...state,
        skills: state.skills.filter((s) => s !== action.skill),
      };
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [
          ...state.projects,
          {
            id: generateId(),
            name: '',
            description: '',
            technologies: '',
            link: '',
          },
        ],
      };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((p) =>
          p.id === action.id ? { ...p, ...action.payload } : p
        ),
      };
    case 'REMOVE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((p) => p.id !== action.id),
      };
    default:
      return state;
  }
}

interface ResumeContextValue {
  state: ResumeData;
  dispatch: React.Dispatch<ResumeAction>;
}

const ResumeContext = createContext<ResumeContextValue | null>(null);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(resumeReducer, initialState);
  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error('useResume must be used within ResumeProvider');
  return ctx;
}

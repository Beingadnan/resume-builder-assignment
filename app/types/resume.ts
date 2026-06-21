export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
  title: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface ProjectEntry {
  id: string;
  name: string;
  description: string;
  technologies: string;
  link: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  summary: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: string[];
  projects: ProjectEntry[];
}

export type ResumeAction =
  | { type: 'UPDATE_PERSONAL'; payload: Partial<PersonalInfo> }
  | { type: 'UPDATE_SUMMARY'; payload: string }
  | { type: 'ADD_EXPERIENCE' }
  | { type: 'UPDATE_EXPERIENCE'; id: string; payload: Partial<ExperienceEntry> }
  | { type: 'REMOVE_EXPERIENCE'; id: string }
  | { type: 'ADD_EDUCATION' }
  | { type: 'UPDATE_EDUCATION'; id: string; payload: Partial<EducationEntry> }
  | { type: 'REMOVE_EDUCATION'; id: string }
  | { type: 'ADD_SKILL'; skill: string }
  | { type: 'REMOVE_SKILL'; skill: string }
  | { type: 'ADD_PROJECT' }
  | { type: 'UPDATE_PROJECT'; id: string; payload: Partial<ProjectEntry> }
  | { type: 'REMOVE_PROJECT'; id: string };

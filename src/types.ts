export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
  summary: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  gpa?: string;
  percentage?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  date: string;
}

export interface SpacingSettings {
  pageMargin: number; // in mm
  sectionSpacing: number; // in mm
  lineSpacing: number; // multiplier
  bulletSpacing: number; // in mm
  headerSpacing: number; // in mm
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  certifications: Certification[];
  projects: Project[];
  spacing?: SpacingSettings;
  sectionOrder?: SectionConfig[];
}

export type TemplateType = 'modern' | 'classic' | 'minimal' | 'professional' | 'executive' | 'technical' | 'ugly';

export interface ATSScore {
  overall: number;
  contactInfo: number;
  workExperience: number;
  education: number;
  skills: number;
  formatting: number;
  keywords: number;
  suggestions: string[];
}

// Constants for customizable resume sections
export type SectionType =
  | 'summary'        
  | 'experience'     
  | 'projects'       
  | 'education'      
  | 'skills'         
  | 'certifications' 
  | 'languages';     

// Display properties for each resume section
export interface SectionConfig {
  type: SectionType;    
  visible: boolean;     
  order: number;       
}

// Standard layout sequence for an uncustomized resume
export const DEFAULT_SECTION_ORDER: SectionConfig[] = [
  { type: 'summary', visible: true, order: 0 },
  { type: 'experience', visible: true, order: 1 },
  { type: 'projects', visible: true, order: 2 },
  { type: 'education', visible: true, order: 3 },
  { type: 'skills', visible: true, order: 4 },
  { type: 'certifications', visible: true, order: 5 },
  { type: 'languages', visible: true, order: 6 },
];

// Styling interfaces for templated section components
export interface SectionStyles {
  container?: React.CSSProperties;       
  header?: React.CSSProperties;          
  headerText?: React.CSSProperties;     
  itemContainer?: React.CSSProperties;   
  itemTitle?: React.CSSProperties;       
  itemSubtitle?: React.CSSProperties;   
  itemDate?: React.CSSProperties;        
  itemDescription?: React.CSSProperties; 
  itemMeta?: React.CSSProperties;        
}
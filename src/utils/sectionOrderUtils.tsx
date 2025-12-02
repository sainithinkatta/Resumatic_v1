import React from 'react';
import {
  SectionType,
  SectionConfig,
  ResumeData,
  DEFAULT_SECTION_ORDER,
  SectionStyles,
} from '../types';
import {
  ExperienceSection,
  ProjectsSection,
  EducationSection,
  SkillsSection,
  CertificationsSection,
  LanguagesSection,
  SummarySection,
} from '../components/resume-sections';

// Options for customizing section rendering behavior
interface RenderOptions {
  showLocation?: boolean;
  showGPA?: boolean;
  showTechnologies?: boolean;
  dateFormat?: 'short' | 'long';
}

// Returns array of visible sections sorted by user-defined order
export function getSortedVisibleSections(
  sectionOrder?: SectionConfig[]
): SectionConfig[] {
  const order = sectionOrder || DEFAULT_SECTION_ORDER;

  return (
    order
      .filter((section) => section.visible)
      .sort((a, b) => a.order - b.order)
  );
}

// Renders the appropriate section component based on section type with injected styles and data
export function renderSection(
  section: SectionConfig,
  data: ResumeData,
  styles: Record<string, SectionStyles>,
  options: RenderOptions = {}
): React.ReactNode {
  const { type } = section;

  const renderOptions = {
    showLocation: options.showLocation ?? true,
    showGPA: options.showGPA ?? true,
    showTechnologies: options.showTechnologies ?? true,
    dateFormat: options.dateFormat ?? 'short' as const,
  };

  switch (type) {
    case 'summary':
      return data.personalInfo.summary ? (
        <SummarySection
          key="summary"
          data={data.personalInfo}
          styles={styles.summary || {}}
        />
      ) : null;

    case 'experience':
      return (
        <ExperienceSection
          key="experience"
          data={data.workExperience}
          styles={styles.experience || {}}
          showLocation={renderOptions.showLocation}
          dateFormat={renderOptions.dateFormat}
        />
      );

    case 'projects':
      return (
        <ProjectsSection
          key="projects"
          data={data.projects}
          styles={styles.projects || {}}
          showTechnologies={renderOptions.showTechnologies}
        />
      );

    case 'education':
      return (
        <EducationSection
          key="education"
          data={data.education}
          styles={styles.education || {}}
          showGPA={renderOptions.showGPA}
        />
      );

    case 'skills':
      return (
        <SkillsSection
          key="skills"
          data={data.skills}
          styles={styles.skills || {}}
        />
      );

    case 'certifications':
      return (
        <CertificationsSection
          key="certifications"
          data={data.certifications}
          styles={styles.certifications || {}}
        />
      );

    case 'languages':
      return (
        <LanguagesSection
          key="languages"
          data={data.languages}
          styles={styles.languages || {}}
        />
      );

    default:
      return null;
  }
}

// Maps internal section type identifiers to human-readable display names
export function getSectionDisplayName(sectionType: SectionType): string {
  const displayNames: Record<SectionType, string> = {
    summary: 'Professional Summary',
    experience: 'Work Experience',
    projects: 'Projects',
    education: 'Education',
    skills: 'Skills',
    certifications: 'Certifications',
    languages: 'Languages',
  };

  return displayNames[sectionType];
}
import { ResumeData } from '../../types';
import { ensureProtocol } from '../../utils/urlHelper';
import { getSortedVisibleSections, renderSection } from '../../utils/sectionOrderUtils';
import { modernStyles } from '../template-styles';

// Props for template components
interface TemplateProps {
  data: ResumeData; // Complete resume data
}

// Modern template component with clean contemporary design, blue accents, and configurable spacing
export default function ModernTemplate({ data }: TemplateProps) {
  const { personalInfo, spacing } = data;

  const defaultSpacing = {
    pageMargin: 20,
    sectionSpacing: 8,
    lineSpacing: 1.2,
    bulletSpacing: 4,
    headerSpacing: 6,
  };

  const spacingSettings = spacing || defaultSpacing;
  const sections = getSortedVisibleSections(data.sectionOrder);

  return (
    <div
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
        padding: `${spacingSettings.pageMargin}px`,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        color: '#1f2937',
        lineHeight: spacingSettings.lineSpacing,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          marginBottom: `${spacingSettings.headerSpacing * 4}px`,
          paddingBottom: `${spacingSettings.headerSpacing * 2}px`,
        }}
      >
        <h1
          style={{
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '8px',
            color: '#1f2937',
            letterSpacing: '-0.5px',
            lineHeight: '1.2',
          }}
        >
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            gap: '4px 12px',
            fontSize: '13px',
            color: '#6b7280',
            lineHeight: '1.4',
          }}
        >
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>•</span>}
          {personalInfo.linkedin && (
            <a
              href={ensureProtocol(personalInfo.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#3b82f6', textDecoration: 'none' }}
            >
              {personalInfo.linkedin}
            </a>
          )}
          {personalInfo.website && <span>•</span>}
          {personalInfo.website && (
            <a
              href={ensureProtocol(personalInfo.website)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#3b82f6', textDecoration: 'none' }}
            >
              {personalInfo.website}
            </a>
          )}
        </div>
      </div>
      {sections.map((section) => renderSection(section, data, modernStyles))}
    </div>
  );
}
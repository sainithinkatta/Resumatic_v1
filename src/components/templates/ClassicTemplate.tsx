import { ResumeData } from '../../types';
import { ensureProtocol } from '../../utils/urlHelper';
import { getSortedVisibleSections, renderSection } from '../../utils/sectionOrderUtils';
import { classicStyles } from '../template-styles';

// Props for template components
interface TemplateProps {
  data: ResumeData; // Complete resume data
}

// Classic template component with traditional serif typography and centered header layout
export default function ClassicTemplate({ data }: TemplateProps) {
  const { personalInfo } = data;
  const sections = getSortedVisibleSections(data.sectionOrder);

  return (
    <div
      style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        padding: '32px',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        color: '#000',
        lineHeight: '1.5',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          marginBottom: '24px',
          paddingBottom: '14px',
          borderBottom: '2px solid #000',
        }}
      >
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '8px',
            color: '#000',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            lineHeight: '1.2',
          }}
        >
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div style={{ fontSize: '12px', color: '#333', lineHeight: '1.6' }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.phone && <span> | </span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {(personalInfo.email || personalInfo.phone) && personalInfo.location && (
            <span> | </span>
          )}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
        {(personalInfo.linkedin || personalInfo.website) && (
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            {personalInfo.linkedin && (
              <a
                href={ensureProtocol(personalInfo.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0066cc', textDecoration: 'none' }}
              >
                {personalInfo.linkedin}
              </a>
            )}
            {personalInfo.linkedin && personalInfo.website && <span> | </span>}
            {personalInfo.website && (
              <a
                href={ensureProtocol(personalInfo.website)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0066cc', textDecoration: 'none' }}
              >
                {personalInfo.website}
              </a>
            )}
          </div>
        )}
      </div>
      {sections.map((section) => renderSection(section, data, classicStyles))}
    </div>
  );
}
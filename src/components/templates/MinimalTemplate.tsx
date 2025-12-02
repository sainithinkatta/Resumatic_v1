import { ResumeData } from '../../types';
import { ensureProtocol } from '../../utils/urlHelper';
import { getSortedVisibleSections, renderSection } from '../../utils/sectionOrderUtils';
import { minimalStyles } from '../template-styles';

// Props for template components
interface TemplateProps {
  data: ResumeData; // Complete resume data
}

// Minimal template component with ultra-clean minimalist design and subtle typography
export default function MinimalTemplate({ data }: TemplateProps) {
  const { personalInfo } = data;
  const sections = getSortedVisibleSections(data.sectionOrder);

  return (
    <div
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
        padding: '32px 40px',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        color: '#000',
        lineHeight: '1.5',
        fontSize: '13px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ marginBottom: '28px' }}>
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '300',
            marginBottom: '8px',
            color: '#000',
            letterSpacing: '-0.5px',
            lineHeight: '1.1',
          }}
        >
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div
          style={{
            fontSize: '12px',
            color: '#666',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2px 10px',
            lineHeight: '1.4',
          }}
        >
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && (
            <a
              href={ensureProtocol(personalInfo.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#000000', textDecoration: 'underline' }}
            >
              {personalInfo.linkedin}
            </a>
          )}
          {personalInfo.website && (
            <a
              href={ensureProtocol(personalInfo.website)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#000000', textDecoration: 'underline' }}
            >
              {personalInfo.website}
            </a>
          )}
        </div>
      </div>
      {sections.map((section) => renderSection(section, data, minimalStyles))}
    </div>
  );
}
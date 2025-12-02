import { ResumeData, SectionConfig } from '../../types';
import { ensureProtocol } from '../../utils/urlHelper';
import { getSortedVisibleSections, renderSection } from '../../utils/sectionOrderUtils';
import { professionalStyles } from '../template-styles';

// Props for template components
interface TemplateProps {
  data: ResumeData; // Complete resume data
}

// Professional template component with two-column layout and structured sidebar design
export default function ProfessionalTemplate({ data }: TemplateProps) {
  const { personalInfo } = data;
  const sections = getSortedVisibleSections(data.sectionOrder);

  const sidebarTypes = ['skills', 'languages', 'certifications'];
  const mainContentTypes = ['summary', 'experience', 'projects', 'education'];

  const sidebarSections = sections.filter((s: SectionConfig) => sidebarTypes.includes(s.type));
  const mainSections = sections.filter((s: SectionConfig) => mainContentTypes.includes(s.type));

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
      display: 'grid',
      gridTemplateColumns: '180px 1fr',
      gap: '0',
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
      lineHeight: '1.5',
      boxSizing: 'border-box'
    }}>
      <div
        style={{
          backgroundColor: '#f8fafc',
          padding: '32px 20px',
          borderRight: '3px solid #e2e8f0',
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <h2
            style={{
              fontSize: '11px',
              fontWeight: '700',
              marginBottom: '10px',
              color: '#1e293b',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
            }}
          >
            Contact
          </h2>
          <div style={{ fontSize: '10.5px', color: '#475569', lineHeight: '1.7' }}>
            {personalInfo.email && (
              <div style={{ marginBottom: '6px', wordBreak: 'break-word' }}>
                {personalInfo.email}
              </div>
            )}
            {personalInfo.phone && <div style={{ marginBottom: '6px' }}>{personalInfo.phone}</div>}
            {personalInfo.location && (
              <div style={{ marginBottom: '6px' }}>{personalInfo.location}</div>
            )}
            {personalInfo.linkedin && (
              <div style={{ marginBottom: '6px', wordBreak: 'break-word' }}>
                <a
                  href={ensureProtocol(personalInfo.linkedin)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#3b82f6', textDecoration: 'none' }}
                >
                  {personalInfo.linkedin}
                </a>
              </div>
            )}
            {personalInfo.website && (
              <div style={{ wordBreak: 'break-word' }}>
                <a
                  href={ensureProtocol(personalInfo.website)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#3b82f6', textDecoration: 'none' }}
                >
                  {personalInfo.website}
                </a>
              </div>
            )}
          </div>
        </div>
        {sidebarSections.map((section) => renderSection(section, data, professionalStyles))}
      </div>
      <div style={{ padding: '32px' }}>
        <div
          style={{
            marginBottom: '24px',
            paddingBottom: '14px',
            borderBottom: '2px solid #e2e8f0',
          }}
        >
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '8px',
              color: '#1e293b',
              letterSpacing: '-0.5px',
              lineHeight: '1.1',
            }}
          >
            {personalInfo.fullName || 'Your Name'}
          </h1>
        </div>
        {mainSections.map((section) => renderSection(section, data, professionalStyles))}
      </div>
    </div>
  );
}
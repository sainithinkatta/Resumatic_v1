import { ResumeData, SectionConfig } from '../../types';
import { ensureProtocol } from '../../utils/urlHelper';
import { getSortedVisibleSections, renderSection } from '../../utils/sectionOrderUtils';
import { executiveStyles } from '../template-styles';

// Props for template components
interface TemplateProps {
  data: ResumeData; // Complete resume data
}

// Executive template component with premium two-column layout and dark navy sidebar
export default function ExecutiveTemplate({ data }: TemplateProps) {
  const { personalInfo } = data;
  const sections = getSortedVisibleSections(data.sectionOrder);

  const sidebarTypes = ['skills', 'languages', 'certifications'];
  const mainContentTypes = ['summary', 'experience', 'projects', 'education'];

  const sidebarSections = sections.filter((s: SectionConfig) => sidebarTypes.includes(s.type));
  const mainSections = sections.filter((s: SectionConfig) => mainContentTypes.includes(s.type));

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      color: '#1a1a1a',
      lineHeight: '1.5',
      boxSizing: 'border-box'
    }}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '35%',
          backgroundColor: '#1e3a5f',
          color: '#ffffff',
          padding: '40px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          minHeight: '100%',
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '13px',
              fontWeight: '700',
              marginBottom: '12px',
              color: '#93c5fd',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
            }}
          >
            Contact
          </h3>
          <div style={{ fontSize: '11.5px', lineHeight: '1.7', color: '#e5e7eb' }}>
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
                  style={{ color: '#93c5fd', textDecoration: 'none' }}
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
                  style={{ color: '#93c5fd', textDecoration: 'none' }}
                >
                  {personalInfo.website}
                </a>
              </div>
            )}
          </div>
        </div>
        {sidebarSections.map((section) => renderSection(section, data, executiveStyles))}
      </div>
      <div
        style={{
          marginLeft: '35%',
          width: '65%',
          padding: '40px 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '8px',
              color: '#1e3a5f',
              letterSpacing: '-0.5px',
              lineHeight: '1.1',
            }}
          >
            {personalInfo.fullName || 'Your Name'}
          </h1>
          <div
            style={{
              fontSize: '15px',
              color: '#64748b',
              fontWeight: '500',
              letterSpacing: '0.3px',
            }}
          >
            Executive Professional
          </div>
        </div>
        {mainSections.map((section) => renderSection(section, data, executiveStyles))}
      </div>
    </div>
  );
}
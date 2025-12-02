import { ResumeData } from '../../types';
import { ensureProtocol } from '../../utils/urlHelper';
import { getSortedVisibleSections, renderSection } from '../../utils/sectionOrderUtils';
import { technicalStyles } from '../template-styles';

// Props for template components
interface TemplateProps {
  data: ResumeData; // Complete resume data
}

// Technical template component with terminal/code-inspired design and monospace typography
export default function TechnicalTemplate({ data }: TemplateProps) {
  const { personalInfo } = data;
  const sections = getSortedVisibleSections(data.sectionOrder);

  return (
    <div
      style={{
        fontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", Monaco, "Courier New", monospace',
        padding: '32px',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        color: '#1f2937',
        lineHeight: '1.5',
        boxSizing: 'border-box',
        fontSize: '12px',
      }}
    >
      <div
        style={{
          marginBottom: '24px',
          padding: '20px',
          backgroundColor: '#0f172a',
          borderRadius: '8px',
          color: '#ffffff',
          border: '2px solid #1e293b',
        }}
      >
        <div
          style={{
            fontSize: '10px',
            color: '#64748b',
            marginBottom: '12px',
            fontFamily: 'monospace',
          }}
        >
          <span style={{ color: '#22c55e' }}>~/portfolio/resume</span>
          <span style={{ color: '#64748b' }}> $ cat personal_info.txt</span>
        </div>
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '8px',
            color: '#10b981',
            letterSpacing: '-0.5px',
            lineHeight: '1.2',
          }}
        >
          {personalInfo.fullName || '> Your_Name'}
        </h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px 16px',
            fontSize: '11.5px',
            color: '#94a3b8',
            lineHeight: '1.6',
          }}
        >
          {personalInfo.email && (
            <div>
              <span style={{ color: '#38bdf8' }}>email:</span> {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div>
              <span style={{ color: '#38bdf8' }}>phone:</span> {personalInfo.phone}
            </div>
          )}
          {personalInfo.location && (
            <div>
              <span style={{ color: '#38bdf8' }}>location:</span> {personalInfo.location}
            </div>
          )}
          {personalInfo.linkedin && (
            <div>
              <span style={{ color: '#38bdf8' }}>linkedin:</span>{' '}
              <a
                href={ensureProtocol(personalInfo.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#60a5fa', textDecoration: 'none' }}
              >
                {personalInfo.linkedin}
              </a>
            </div>
          )}
          {personalInfo.website && (
            <div>
              <span style={{ color: '#38bdf8' }}>website:</span>{' '}
              <a
                href={ensureProtocol(personalInfo.website)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#60a5fa', textDecoration: 'none' }}
              >
                {personalInfo.website}
              </a>
            </div>
          )}
        </div>
      </div>
      {sections.map((section) => renderSection(section, data, technicalStyles))}
    </div>
  );
}
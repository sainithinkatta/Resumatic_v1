import { ResumeData } from '../../types';
import { ensureProtocol } from '../../utils/urlHelper';
import { getSortedVisibleSections, renderSection } from '../../utils/sectionOrderUtils';
import { uglyStyles } from '../template-styles';

// Props for template components
interface TemplateProps {
  data: ResumeData; // Complete resume data
}

// Ugly template component with intentionally garish design for humorous "anti-resume" aesthetic
export default function UglyTemplate({ data }: TemplateProps) {
  const { personalInfo } = data;
  const sections = getSortedVisibleSections(data.sectionOrder);

  return (
    <div style={{ 
      fontFamily: 'Comic Sans MS, cursive',
      padding: '40px',
      width: '100%',
      minHeight: '100%',
      backgroundColor: '#ffffff',
      color: '#000000',
      lineHeight: '1.2',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        textAlign: 'center',
        marginBottom: '30px',
        transform: 'rotate(-2deg)',
        padding: '20px',
        backgroundColor: '#ff69b4',
        border: '5px dashed #00ff00',
        boxShadow: '10px 10px 0px #ff0000'
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: 'bold',
          marginBottom: '10px',
          color: '#0000ff',
          textShadow: '3px 3px #ff0000, 6px 6px #00ff00',
          letterSpacing: '8px',
          textDecoration: 'underline wavy #ff00ff',
          fontFamily: 'Impact, fantasy'
        }}>
          {personalInfo.fullName?.toUpperCase() || 'YOUR NAME HERE'}
        </h1>
        <div style={{ 
          fontSize: '18px', 
          color: '#ff0000',
          fontWeight: 'bold',
          backgroundColor: '#ffff00',
          padding: '10px',
          border: '3px solid #0000ff',
          display: 'inline-block',
          transform: 'rotate(1deg)'
        }}>
          🚫 I DON'T WANT A JOB 🚫
        </div>
      </div>
      <div
        style={{
          marginBottom: '25px',
          backgroundColor: '#00ffff',
          padding: '15px',
          border: '4px double #ff00ff',
          transform: 'rotate(1deg)',
        }}
      >
        <h2
          style={{
            fontSize: '28px',
            color: '#ff0000',
            textDecoration: 'underline',
            fontFamily: 'Courier New, monospace',
            marginBottom: '10px',
          }}
        >
          ~~~ CONTACT ME (OR DON'T) ~~~
        </h2>
        <div style={{ fontSize: '16px', color: '#0000ff', fontWeight: 'bold' }}>
          {personalInfo.email && <div style={{ marginBottom: '5px' }}>📧 {personalInfo.email}</div>}
          {personalInfo.phone && <div style={{ marginBottom: '5px' }}>☎️ {personalInfo.phone}</div>}
          {personalInfo.location && <div style={{ marginBottom: '5px' }}>🌍 {personalInfo.location}</div>}
          {personalInfo.linkedin && (
            <div style={{ marginBottom: '5px' }}>
              💼{' '}
              <a
                href={ensureProtocol(personalInfo.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ff00ff', textDecoration: 'underline' }}
              >
                {personalInfo.linkedin}
              </a>
            </div>
          )}
          {personalInfo.website && (
            <div>
              🌐{' '}
              <a
                href={ensureProtocol(personalInfo.website)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ff00ff', textDecoration: 'underline' }}
              >
                {personalInfo.website}
              </a>
            </div>
          )}
        </div>
      </div>
      {sections.map((section) => renderSection(section, data, uglyStyles))}
      <div style={{ 
        marginTop: '30px',
        textAlign: 'center',
        fontSize: '20px',
        color: '#ff0000',
        fontWeight: 'bold',
        backgroundColor: '#00ff00',
        padding: '15px',
        border: '4px solid #0000ff',
        transform: 'rotate(-2deg)'
      }}>
        🎉 PLEASE DON'T HIRE ME 🎉
      </div>
    </div>
  );
}
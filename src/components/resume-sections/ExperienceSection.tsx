import { WorkExperience, SectionStyles } from '../../types';

// Props for the work experience display section component
interface ExperienceSectionProps {
  data: WorkExperience[];           // Array of work experience entries
  styles: SectionStyles;            // Injected styles from template
  headerText?: string;              // Custom header text (default: "Experience")
  showLocation?: boolean;           // Whether to show location (default: true)
  dateFormat?: 'short' | 'long';    // Date separator format (default: 'short')
}

// Template UI component for rendering work experience entries with dynamic styling
export function ExperienceSection({
  data,
  styles,
  headerText = 'Experience',
  showLocation = true,
  dateFormat = 'short',
}: ExperienceSectionProps) {
  if (data.length === 0) return null;

  const dateSeparator = dateFormat === 'long' ? '–' : '-';

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        <span style={styles.headerText}>{headerText}</span>
      </h2>

      <div>
        {data.map((exp, index) => (
          <div
            key={exp.id}
            style={{
              ...styles.itemContainer,
              marginBottom: index < data.length - 1 ? '16px' : '0',
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}>
              <h3 style={styles.itemTitle}>{exp.position}</h3>
              <span style={styles.itemDate}>
                {exp.startDate} {dateSeparator} {exp.current ? 'Present' : exp.endDate}
              </span>
            </div>
            <div style={styles.itemSubtitle}>
              {exp.company}
              {showLocation && exp.location && ` • ${exp.location}`}
            </div>
            {exp.description.some((d) => d.trim()) && (
              <div style={styles.itemDescription}>
                {exp.description
                  .filter((d) => d.trim())
                  .map((desc, idx) => (
                    <div
                      key={idx}
                      style={{
                        marginBottom: '4px',
                        lineHeight: 'inherit',
                      }}
                    >
                      - {desc}
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
import { Education, SectionStyles } from '../../types';

// Props for the education history display section component
interface EducationSectionProps {
  data: Education[];                // Array of education entries
  styles: SectionStyles;            // Injected styles from template
  headerText?: string;              // Custom header text (default: "Education")
  showGPA?: boolean;                // Whether to show GPA/Percentage (default: true)
}

// Template UI component for rendering education history entries with dynamic styling
export function EducationSection({
  data,
  styles,
  headerText = 'Education',
  showGPA = true,
}: EducationSectionProps) {
  if (data.length === 0) return null;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        <span style={styles.headerText}>{headerText}</span>
      </h2>

      <div>
        {data.map((edu, index) => (
          <div
            key={edu.id}
            style={{
              ...styles.itemContainer,
              marginBottom: index < data.length - 1 ? '14px' : '0',
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}>
              <h3 style={styles.itemTitle}>
                {edu.degree}
                {edu.field && ` in ${edu.field}`}
              </h3>
              <span style={styles.itemDate}>
                {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
              </span>
            </div>
            <div style={styles.itemSubtitle}>
              {edu.school}
              {edu.location && ` • ${edu.location}`}
              {showGPA && edu.gpa && ` • GPA: ${edu.gpa}`}
              {showGPA && edu.percentage && ` • Percentage: ${edu.percentage}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
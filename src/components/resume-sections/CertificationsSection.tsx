import { Certification, SectionStyles } from '../../types';

// Props for the certifications display section component
interface CertificationsSectionProps {
  data: Certification[];            // Array of certification entries
  styles: SectionStyles;            // Injected styles from template
  headerText?: string;              // Custom header text (default: "Certifications")
  showURL?: boolean;                // Whether to show credential URL (default: true)
}

// Template UI component for rendering certification entries with dynamic styling
export function CertificationsSection({
  data,
  styles,
  headerText = 'Certifications',
  showURL = true,
}: CertificationsSectionProps) {
  if (data.length === 0) return null;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        <span style={styles.headerText}>{headerText}</span>
      </h2>

      <div>
        {data.map((cert, index) => (
          <div
            key={cert.id}
            style={{
              ...styles.itemContainer,
              marginBottom: index < data.length - 1 ? '10px' : '0',
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}>
              <div style={{ flex: 1 }}>
                <span style={styles.itemTitle}>{cert.name}</span>
                <span style={styles.itemSubtitle}> • {cert.issuer}</span>
                {showURL && cert.url && (
                  <span style={styles.itemMeta}> • {cert.url}</span>
                )}
              </div>
              <span style={styles.itemDate}>{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
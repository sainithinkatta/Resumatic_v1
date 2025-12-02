import { PersonalInfo, SectionStyles } from '../../types';

// Props for the professional summary/about section component
interface SummarySectionProps {
  data: PersonalInfo;               // Personal info containing summary text
  styles: SectionStyles;            // Injected styles from template
}

// Template UI component for rendering professional summary/about text with dynamic styling
export function SummarySection({ data, styles }: SummarySectionProps) {
  if (!data.summary) return null;

  return (
    <div style={styles.container}>
      <div style={styles.itemDescription}>{data.summary}</div>
    </div>
  );
}
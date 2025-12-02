import { Language, SectionStyles } from '../../types';

// Props for the language proficiency display section component
interface LanguagesSectionProps {
  data: Language[];                 // Array of language entries
  styles: SectionStyles;            // Injected styles from template
  headerText?: string;              // Custom header text (default: "Languages")
  layout?: 'inline' | 'stacked';    // Layout style (default: 'inline')
}

// Template UI component for rendering language proficiency entries with dynamic styling
export function LanguagesSection({
  data,
  styles,
  headerText = 'Languages',
  layout = 'inline',
}: LanguagesSectionProps) {
  if (data.length === 0) return null;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        <span style={styles.headerText}>{headerText}</span>
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: layout === 'inline' ? 'row' : 'column',
          flexWrap: 'wrap',
          gap: layout === 'inline' ? '16px' : '8px',
        }}
      >
        {data.map((lang) => (
          <span key={lang.id} style={styles.itemContainer}>
            <span style={styles.itemTitle}>{lang.name}:</span>{' '}
            <span style={styles.itemDescription}>{lang.proficiency}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
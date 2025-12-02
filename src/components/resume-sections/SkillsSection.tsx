import { Skill, SectionStyles } from '../../types';

// Props for the skills display section component
interface SkillsSectionProps {
  data: Skill[];                    // Array of skill entries
  styles: SectionStyles;            // Injected styles from template
  headerText?: string;              // Custom header text (default: "Skills")
  groupByCategory?: boolean;        // Whether to group by category (default: true)
}

// Template UI component for rendering skills with optional categorization and dynamic styling
export function SkillsSection({
  data,
  styles,
  headerText = 'Skills',
  groupByCategory = true,
}: SkillsSectionProps) {
  if (data.length === 0) return null;

  const groupedSkills = groupByCategory
    ? data.reduce((acc, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = [];
        }
        acc[skill.category].push(skill.name);
        return acc;
      }, {} as Record<string, string[]>)
    : { 'All Skills': data.map((s) => s.name) };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        <span style={styles.headerText}>{headerText}</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {Object.entries(groupedSkills).map(([category, skillList]) => (
          <div key={category} style={styles.itemContainer}>
            <span style={styles.itemTitle}>{category}:</span>{' '}
            <span style={styles.itemDescription}>{skillList.join(' • ')}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
import { Project, SectionStyles } from '../../types';

// Props for the projects portfolio display section component
interface ProjectsSectionProps {
  data: Project[];                  // Array of project entries
  styles: SectionStyles;            // Injected styles from template
  headerText?: string;              // Custom header text (default: "Projects")
  showTechnologies?: boolean;       // Whether to show tech stack (default: true)
}

// Template UI component for rendering project portfolio entries with dynamic styling
export function ProjectsSection({
  data,
  styles,
  headerText = 'Projects',
  showTechnologies = true,
}: ProjectsSectionProps) {
  if (data.length === 0) return null;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        <span style={styles.headerText}>{headerText}</span>
      </h2>

      <div>
        {data.map((project, index) => (
          <div
            key={project.id}
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
              <h3 style={styles.itemTitle}>{project.name}</h3>
              {project.date && (
                <span style={styles.itemDate}>{project.date}</span>
              )}
            </div>
            {project.description && (
              <div style={styles.itemDescription}>{project.description}</div>
            )}
            {(showTechnologies && project.technologies.length > 0) || project.url ? (
              <div style={styles.itemMeta}>
                {showTechnologies && project.technologies.length > 0 && (
                  <span>
                    <span style={{ fontWeight: '600' }}>Tech:</span>{' '}
                    {project.technologies.join(', ')}
                  </span>
                )}
                {project.url &&
                  showTechnologies &&
                  project.technologies.length > 0 && <span> • </span>}
                {project.url && <span>{project.url}</span>}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
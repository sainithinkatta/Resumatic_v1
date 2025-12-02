import { SectionStyles } from '../../types';

// Intentionally garish style definitions for humorous "anti-resume" template
type TemplateStyles = Record<string, SectionStyles>;

// Keeping the intentionally bad styling from the original template
export const uglyStyles: TemplateStyles = {
  summary: {
    container: { marginBottom: '20px' },
    itemDescription: { fontSize: '14px', lineHeight: '1.6', color: '#ff00ff' },
  },
  experience: {
    container: { marginBottom: '20px' },
    header: { fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: '#ff0000', textTransform: 'uppercase' },
    itemTitle: { fontSize: '15px', fontWeight: '600', color: '#00ff00' },
    itemSubtitle: { fontSize: '13px', color: '#0000ff' },
    itemDate: { fontSize: '12px', color: '#ffff00', marginLeft: '12px' },
    itemDescription: { marginTop: '6px', color: '#ff00ff', fontSize: '13px' },
  },
  projects: {
    container: { marginBottom: '20px' },
    header: { fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: '#ff0000', textTransform: 'uppercase' },
    itemTitle: { fontSize: '15px', fontWeight: '600', color: '#00ff00' },
    itemDate: { fontSize: '12px', color: '#ffff00', marginLeft: '12px' },
    itemDescription: { color: '#ff00ff', fontSize: '13px' },
    itemMeta: { fontSize: '12px', color: '#00ffff', marginTop: '4px' },
  },
  education: {
    container: { marginBottom: '20px' },
    header: { fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: '#ff0000', textTransform: 'uppercase' },
    itemTitle: { fontSize: '15px', fontWeight: '600', color: '#00ff00' },
    itemSubtitle: { fontSize: '13px', color: '#0000ff' },
    itemDate: { fontSize: '12px', color: '#ffff00', marginLeft: '12px' },
  },
  skills: {
    container: { marginBottom: '20px' },
    header: { fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: '#ff0000', textTransform: 'uppercase' },
    itemTitle: { fontWeight: '600', color: '#00ff00', fontSize: '13px' },
    itemDescription: { color: '#ff00ff', fontSize: '13px' },
  },
  certifications: {
    container: { marginBottom: '20px' },
    header: { fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: '#ff0000', textTransform: 'uppercase' },
    itemTitle: { fontWeight: '600', color: '#00ff00', fontSize: '14px' },
    itemSubtitle: { color: '#0000ff', fontSize: '13px' },
    itemDate: { fontSize: '12px', color: '#ffff00', marginLeft: '12px' },
  },
  languages: {
    container: { marginBottom: '0' },
    header: { fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: '#ff0000', textTransform: 'uppercase' },
    itemTitle: { fontWeight: '600', color: '#00ff00', fontSize: '13px' },
    itemDescription: { color: '#ff00ff', fontSize: '13px' },
  },
};
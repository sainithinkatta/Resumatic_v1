import { SectionStyles } from '../../types';

// Type definition for all section styles
type TemplateStyles = Record<string, SectionStyles>;

// Executive template style definitions with sophisticated sidebar layout for leadership positions
export const executiveStyles: TemplateStyles = {
  summary: {
    container: { marginBottom: '24px' },
    itemDescription: { fontSize: '13px', lineHeight: '1.6', color: '#475569' },
  },
  experience: {
    container: { marginBottom: '28px' },
    header: { fontSize: '14px', fontWeight: '700', marginBottom: '14px', color: '#1e293b', textTransform: 'uppercase', letterSpacing: '1px' },
    itemTitle: { fontSize: '15px', fontWeight: '600', color: '#1e293b' },
    itemSubtitle: { fontSize: '13px', color: '#64748b', fontWeight: '500' },
    itemDate: { fontSize: '11px', color: '#94a3b8', whiteSpace: 'nowrap', marginLeft: '12px', fontStyle: 'italic' },
    itemDescription: { marginTop: '6px', color: '#475569', fontSize: '12.5px' },
  },
  projects: {
    container: { marginBottom: '28px' },
    header: { fontSize: '14px', fontWeight: '700', marginBottom: '14px', color: '#1e293b', textTransform: 'uppercase', letterSpacing: '1px' },
    itemTitle: { fontSize: '15px', fontWeight: '600', color: '#1e293b' },
    itemDate: { fontSize: '11px', color: '#94a3b8', whiteSpace: 'nowrap', marginLeft: '12px', fontStyle: 'italic' },
    itemDescription: { color: '#475569', marginBottom: '6px', lineHeight: '1.5', fontSize: '12.5px' },
    itemMeta: { fontSize: '11.5px', color: '#64748b', marginTop: '4px' },
  },
  education: {
    container: { marginBottom: '0' },
    header: { fontSize: '14px', fontWeight: '700', marginBottom: '14px', color: '#1e293b', textTransform: 'uppercase', letterSpacing: '1px' },
    itemTitle: { fontSize: '15px', fontWeight: '600', color: '#1e293b' },
    itemSubtitle: { fontSize: '13px', color: '#64748b' },
    itemDate: { fontSize: '11px', color: '#94a3b8', whiteSpace: 'nowrap', marginLeft: '12px', fontStyle: 'italic' },
  },
  skills: {
    container: { marginBottom: '24px' },
    header: { fontSize: '13px', fontWeight: '700', marginBottom: '12px', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '1.2px' },
    itemTitle: { fontSize: '11px', fontWeight: '600', color: '#93c5fd' },
    itemDescription: { fontSize: '11px', color: '#e5e7eb', lineHeight: '1.6' },
  },
  certifications: {
    container: { marginBottom: '0' },
    header: { fontSize: '13px', fontWeight: '700', marginBottom: '12px', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '1.2px' },
    itemTitle: { fontSize: '11px', fontWeight: '600', color: '#e5e7eb' },
    itemSubtitle: { fontSize: '10px', color: '#e5e7eb', opacity: 0.8 },
    itemDate: { fontSize: '10px', color: '#e5e7eb', opacity: 0.7 },
  },
  languages: {
    container: { marginBottom: '24px' },
    header: { fontSize: '13px', fontWeight: '700', marginBottom: '12px', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '1.2px' },
    itemTitle: { fontWeight: '600', color: '#e5e7eb', fontSize: '11.5px' },
    itemDescription: { color: '#e5e7eb', fontSize: '11.5px', opacity: 0.8 },
  },
};
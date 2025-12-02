import { SectionStyles } from '../../types';

// Type definition for all section styles
type TemplateStyles = Record<string, SectionStyles>;

// Minimal template style definitions with ultra-clean design and generous white space
export const minimalStyles: TemplateStyles = {
  summary: {
    container: { marginBottom: '32px' },
    itemDescription: { fontSize: '14px', lineHeight: '1.8', color: '#374151' },
  },
  experience: {
    container: { marginBottom: '32px' },
    header: { fontSize: '12px', fontWeight: '700', marginBottom: '16px', color: '#111827', textTransform: 'uppercase', letterSpacing: '2px' },
    itemTitle: { fontSize: '16px', fontWeight: '600', color: '#111827' },
    itemSubtitle: { fontSize: '14px', color: '#6b7280', marginTop: '2px' },
    itemDate: { fontSize: '13px', color: '#9ca3af', marginLeft: '12px' },
    itemDescription: { marginTop: '8px', color: '#4b5563', fontSize: '13px', lineHeight: '1.7' },
  },
  projects: {
    container: { marginBottom: '32px' },
    header: { fontSize: '12px', fontWeight: '700', marginBottom: '16px', color: '#111827', textTransform: 'uppercase', letterSpacing: '2px' },
    itemTitle: { fontSize: '16px', fontWeight: '600', color: '#111827' },
    itemDate: { fontSize: '13px', color: '#9ca3af', marginLeft: '12px' },
    itemDescription: { color: '#4b5563', lineHeight: '1.7', fontSize: '13px' },
    itemMeta: { fontSize: '12px', color: '#6b7280', marginTop: '6px' },
  },
  education: {
    container: { marginBottom: '32px' },
    header: { fontSize: '12px', fontWeight: '700', marginBottom: '16px', color: '#111827', textTransform: 'uppercase', letterSpacing: '2px' },
    itemTitle: { fontSize: '16px', fontWeight: '600', color: '#111827' },
    itemSubtitle: { fontSize: '14px', color: '#6b7280' },
    itemDate: { fontSize: '13px', color: '#9ca3af', marginLeft: '12px' },
  },
  skills: {
    container: { marginBottom: '32px' },
    header: { fontSize: '12px', fontWeight: '700', marginBottom: '16px', color: '#111827', textTransform: 'uppercase', letterSpacing: '2px' },
    itemTitle: { fontWeight: '600', color: '#111827', fontSize: '13px' },
    itemDescription: { color: '#4b5563', fontSize: '13px' },
  },
  certifications: {
    container: { marginBottom: '32px' },
    header: { fontSize: '12px', fontWeight: '700', marginBottom: '16px', color: '#111827', textTransform: 'uppercase', letterSpacing: '2px' },
    itemTitle: { fontWeight: '600', color: '#111827', fontSize: '14px' },
    itemSubtitle: { color: '#6b7280', fontSize: '13px' },
    itemDate: { fontSize: '13px', color: '#9ca3af', marginLeft: '12px' },
  },
  languages: {
    container: { marginBottom: '0' },
    header: { fontSize: '12px', fontWeight: '700', marginBottom: '16px', color: '#111827', textTransform: 'uppercase', letterSpacing: '2px' },
    itemTitle: { fontWeight: '600', color: '#111827', fontSize: '13px' },
    itemDescription: { color: '#4b5563', fontSize: '13px' },
  },
};
import { SectionStyles } from '../../types';

// Type definition for all section styles
type TemplateStyles = Record<string, SectionStyles>;

// Technical template style definitions with code-inspired design and terminal-style elements
export const technicalStyles: TemplateStyles = {
  summary: {
    container: { marginBottom: '24px' },
    itemDescription: { fontSize: '12px', lineHeight: '1.7', color: '#475569', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' },
  },
  experience: {
    container: { marginBottom: '24px' },
    header: { fontSize: '13px', fontWeight: '700', marginBottom: '14px', color: '#0f172a' },
    itemContainer: { padding: '14px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' },
    itemTitle: { fontSize: '13px', fontWeight: '700', color: '#0f172a' },
    itemSubtitle: { fontSize: '11.5px', color: '#0891b2', fontWeight: '600' },
    itemDate: { fontSize: '10px', color: '#64748b', backgroundColor: '#e2e8f0', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap', marginLeft: '12px' },
    itemDescription: { marginTop: '8px', color: '#475569', fontSize: '11.5px', lineHeight: '1.6' },
  },
  projects: {
    container: { marginBottom: '24px' },
    header: { fontSize: '13px', fontWeight: '700', marginBottom: '14px', color: '#0f172a' },
    itemContainer: { padding: '14px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' },
    itemTitle: { fontSize: '13px', fontWeight: '700', color: '#0f172a' },
    itemDate: { fontSize: '10px', color: '#94a3b8', marginTop: '8px' },
    itemDescription: { fontSize: '11.5px', color: '#475569', lineHeight: '1.6', marginBottom: '8px' },
    itemMeta: { fontSize: '10px', padding: '3px 8px', backgroundColor: '#dbeafe', color: '#0369a1', borderRadius: '4px', fontWeight: '600', border: '1px solid #bfdbfe', display: 'inline-block', marginRight: '6px', marginTop: '8px' },
  },
  education: {
    container: { marginBottom: '24px' },
    header: { fontSize: '13px', fontWeight: '700', marginBottom: '12px', color: '#0f172a' },
    itemContainer: { padding: '12px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' },
    itemTitle: { fontSize: '12.5px', fontWeight: '700', color: '#0f172a' },
    itemSubtitle: { fontSize: '11.5px', color: '#0891b2' },
    itemDate: { fontSize: '10.5px', color: '#64748b' },
  },
  skills: {
    container: { marginBottom: '24px' },
    header: { fontSize: '13px', fontWeight: '700', marginBottom: '12px', color: '#0f172a' },
    itemContainer: { padding: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' },
    itemTitle: { fontSize: '11px', fontWeight: '700', color: '#0f172a' },
    itemDescription: { fontSize: '11px', color: '#475569', paddingLeft: '12px', lineHeight: '1.6' },
  },
  certifications: {
    container: { marginBottom: '24px' },
    header: { fontSize: '13px', fontWeight: '700', marginBottom: '12px', color: '#0f172a' },
    itemContainer: { padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' },
    itemTitle: { fontSize: '11.5px', fontWeight: '700', color: '#0f172a' },
    itemSubtitle: { fontSize: '10.5px', color: '#64748b' },
    itemDate: { fontSize: '10.5px', color: '#64748b' },
  },
  languages: {
    container: { marginBottom: '0' },
    header: { fontSize: '13px', fontWeight: '700', marginBottom: '12px', color: '#0f172a' },
    itemContainer: { fontSize: '11px', padding: '8px 12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' },
    itemTitle: { fontWeight: '700', color: '#0f172a' },
    itemDescription: { color: '#0891b2' },
  },
};
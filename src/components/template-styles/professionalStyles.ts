import { SectionStyles } from '../../types';

// Type definition for all section styles
type TemplateStyles = Record<string, SectionStyles>;

// Professional template color palette definitions
const PROFESSIONAL_COLORS = {
  primary: '#1e293b',
  secondary: '#64748b',
  accent: '#3b82f6',
  text: '#475569',
};

// Professional template style definitions with corporate layout and structured sidebar design
export const professionalStyles: TemplateStyles = {
  summary: {
    container: { marginBottom: '24px' },
    itemDescription: { fontSize: '13px', lineHeight: '1.6', color: PROFESSIONAL_COLORS.text },
  },
  experience: {
    container: { marginBottom: '28px' },
    header: { fontSize: '14px', fontWeight: '700', marginBottom: '14px', color: PROFESSIONAL_COLORS.primary, textTransform: 'uppercase', letterSpacing: '1px' },
    itemTitle: { fontSize: '15px', fontWeight: '600', color: PROFESSIONAL_COLORS.primary },
    itemSubtitle: { fontSize: '13px', color: PROFESSIONAL_COLORS.secondary, fontWeight: '500' },
    itemDate: { fontSize: '11px', color: '#94a3b8', whiteSpace: 'nowrap', marginLeft: '12px', fontStyle: 'italic' },
    itemDescription: { marginTop: '6px', color: PROFESSIONAL_COLORS.text, fontSize: '12.5px' },
  },
  projects: {
    container: { marginBottom: '28px' },
    header: { fontSize: '14px', fontWeight: '700', marginBottom: '14px', color: PROFESSIONAL_COLORS.primary, textTransform: 'uppercase', letterSpacing: '1px' },
    itemTitle: { fontSize: '15px', fontWeight: '600', color: PROFESSIONAL_COLORS.primary },
    itemDate: { fontSize: '11px', color: '#94a3b8', whiteSpace: 'nowrap', marginLeft: '12px', fontStyle: 'italic' },
    itemDescription: { color: PROFESSIONAL_COLORS.text, marginBottom: '6px', lineHeight: '1.5', fontSize: '12.5px' },
    itemMeta: { fontSize: '11.5px', color: PROFESSIONAL_COLORS.secondary, marginTop: '4px' },
  },
  education: {
    container: { marginBottom: '0' },
    header: { fontSize: '14px', fontWeight: '700', marginBottom: '14px', color: PROFESSIONAL_COLORS.primary, textTransform: 'uppercase', letterSpacing: '1px' },
    itemTitle: { fontSize: '15px', fontWeight: '600', color: PROFESSIONAL_COLORS.primary },
    itemSubtitle: { fontSize: '13px', color: PROFESSIONAL_COLORS.secondary },
    itemDate: { fontSize: '11px', color: '#94a3b8', whiteSpace: 'nowrap', marginLeft: '12px', fontStyle: 'italic' },
  },
  skills: {
    container: { marginBottom: '24px' },
    header: { fontSize: '11px', fontWeight: '700', marginBottom: '10px', color: PROFESSIONAL_COLORS.primary, textTransform: 'uppercase', letterSpacing: '1.2px' },
    itemTitle: { fontSize: '11px', fontWeight: '600', color: '#334155' },
    itemDescription: { fontSize: '10px', color: PROFESSIONAL_COLORS.secondary, lineHeight: '1.6' },
  },
  certifications: {
    container: { marginBottom: '0' },
    header: { fontSize: '11px', fontWeight: '700', marginBottom: '10px', color: PROFESSIONAL_COLORS.primary, textTransform: 'uppercase', letterSpacing: '1.2px' },
    itemTitle: { fontSize: '10.5px', fontWeight: '600', color: '#334155' },
    itemSubtitle: { fontSize: '10px', color: PROFESSIONAL_COLORS.secondary },
    itemMeta: { fontSize: '9px', color: PROFESSIONAL_COLORS.accent },
    itemDate: { fontSize: '9.5px', color: '#94a3b8' },
  },
  languages: {
    container: { marginBottom: '24px' },
    header: { fontSize: '11px', fontWeight: '700', marginBottom: '10px', color: PROFESSIONAL_COLORS.primary, textTransform: 'uppercase', letterSpacing: '1.2px' },
    itemTitle: { fontWeight: '600', color: '#334155', fontSize: '10.5px' },
    itemDescription: { color: PROFESSIONAL_COLORS.secondary, fontSize: '10px' },
  },
};
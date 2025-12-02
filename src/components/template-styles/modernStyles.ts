import { SectionStyles } from '../../types';

// Type definition for all section styles
type TemplateStyles = Record<string, SectionStyles>;

// Modern template color palette definitions
const MODERN_COLORS = {
  primary: '#3b82f6',
  textPrimary: '#1f2937',
  textSecondary: '#6b7280',
  textTertiary: '#4b5563',
  textMuted: '#9ca3af',
};

// Modern template style definitions with contemporary design and blue accent color
export const modernStyles: TemplateStyles = {
  summary: {
    container: {
      marginBottom: '24px',
    },
    itemDescription: {
      lineHeight: '1.5',
      color: MODERN_COLORS.textTertiary,
      fontSize: '13.5px',
    },
  },

  experience: {
    container: {
      marginBottom: '24px',
    },
    header: {
      fontSize: '15px',
      fontWeight: '700',
      marginBottom: '12px',
      color: MODERN_COLORS.primary,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    itemTitle: {
      fontSize: '15px',
      fontWeight: '600',
      color: MODERN_COLORS.textPrimary,
    },
    itemSubtitle: {
      fontSize: '13.5px',
      color: MODERN_COLORS.textSecondary,
      marginBottom: '6px',
      fontWeight: '500',
    },
    itemDate: {
      fontSize: '12px',
      color: MODERN_COLORS.textMuted,
      whiteSpace: 'nowrap',
      marginLeft: '12px',
      fontStyle: 'italic',
    },
    itemDescription: {
      marginTop: '4px',
      color: MODERN_COLORS.textTertiary,
      fontSize: '13px',
    },
  },

  projects: {
    container: {
      marginBottom: '24px',
    },
    header: {
      fontSize: '15px',
      fontWeight: '700',
      marginBottom: '12px',
      color: MODERN_COLORS.primary,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    itemTitle: {
      fontSize: '15px',
      fontWeight: '600',
      color: MODERN_COLORS.textPrimary,
    },
    itemDate: {
      fontSize: '12px',
      color: MODERN_COLORS.textMuted,
      whiteSpace: 'nowrap',
      marginLeft: '12px',
      fontStyle: 'italic',
    },
    itemDescription: {
      color: MODERN_COLORS.textTertiary,
      marginBottom: '4px',
      lineHeight: '1.5',
      fontSize: '13px',
    },
    itemMeta: {
      fontSize: '12px',
      color: MODERN_COLORS.textSecondary,
      marginTop: '4px',
    },
  },

  education: {
    container: {
      marginBottom: '24px',
    },
    header: {
      fontSize: '15px',
      fontWeight: '700',
      marginBottom: '12px',
      color: MODERN_COLORS.primary,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    itemTitle: {
      fontSize: '15px',
      fontWeight: '600',
      color: MODERN_COLORS.textPrimary,
    },
    itemSubtitle: {
      fontSize: '13.5px',
      color: MODERN_COLORS.textSecondary,
    },
    itemDate: {
      fontSize: '12px',
      color: MODERN_COLORS.textMuted,
      whiteSpace: 'nowrap',
      marginLeft: '12px',
      fontStyle: 'italic',
    },
  },

  skills: {
    container: {
      marginBottom: '24px',
    },
    header: {
      fontSize: '15px',
      fontWeight: '700',
      marginBottom: '12px',
      color: MODERN_COLORS.primary,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    itemTitle: {
      fontWeight: '600',
      color: MODERN_COLORS.textPrimary,
      marginRight: '8px',
      fontSize: '13px',
    },
    itemDescription: {
      color: MODERN_COLORS.textTertiary,
      fontSize: '13px',
    },
  },

  certifications: {
    container: {
      marginBottom: '24px',
    },
    header: {
      fontSize: '15px',
      fontWeight: '700',
      marginBottom: '12px',
      color: MODERN_COLORS.primary,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    itemTitle: {
      fontSize: '14px',
      fontWeight: '600',
      color: MODERN_COLORS.textPrimary,
    },
    itemSubtitle: {
      fontSize: '13px',
      color: MODERN_COLORS.textSecondary,
      marginLeft: '8px',
    },
    itemMeta: {
      fontSize: '12px',
      color: MODERN_COLORS.primary,
      marginLeft: '8px',
    },
    itemDate: {
      fontSize: '12px',
      color: MODERN_COLORS.textMuted,
      whiteSpace: 'nowrap',
      marginLeft: '12px',
      fontStyle: 'italic',
    },
  },

  languages: {
    container: {
      marginBottom: '0',
    },
    header: {
      fontSize: '15px',
      fontWeight: '700',
      marginBottom: '12px',
      color: MODERN_COLORS.primary,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    itemTitle: {
      fontWeight: '600',
      color: MODERN_COLORS.textPrimary,
      fontSize: '13px',
    },
    itemDescription: {
      color: MODERN_COLORS.textTertiary,
      fontSize: '13px',
    },
  },
};
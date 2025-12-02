import { SectionStyles } from '../../types';

// Type definition for all section styles
type TemplateStyles = Record<string, SectionStyles>;

// Classic template color palette definitions
const CLASSIC_COLORS = {
  primary: '#000',
  textPrimary: '#000',
  textSecondary: '#444',
  textTertiary: '#333',
  textMuted: '#555',
};

// Classic template style definitions with traditional serif font and elegant typography
export const classicStyles: TemplateStyles = {
  summary: {
    container: {
      marginBottom: '24px',
    },
    itemDescription: {
      lineHeight: '1.6',
      color: '#222',
      fontSize: '13px',
      textAlign: 'justify',
    },
  },

  experience: {
    container: {
      marginBottom: '24px',
    },
    header: {
      fontSize: '14px',
      fontWeight: '700',
      marginBottom: '12px',
      color: CLASSIC_COLORS.primary,
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      borderBottom: '1.5px solid #000',
      paddingBottom: '6px',
    },
    itemTitle: {
      fontSize: '14px',
      fontWeight: '700',
      color: CLASSIC_COLORS.primary,
    },
    itemSubtitle: {
      fontSize: '13px',
      color: CLASSIC_COLORS.textSecondary,
      marginBottom: '6px',
      fontStyle: 'italic',
    },
    itemDate: {
      fontSize: '12px',
      color: CLASSIC_COLORS.textMuted,
      fontStyle: 'italic',
      whiteSpace: 'nowrap',
      marginLeft: '12px',
    },
    itemDescription: {
      marginTop: '4px',
      color: CLASSIC_COLORS.textTertiary,
      fontSize: '12.5px',
    },
  },

  projects: {
    container: {
      marginBottom: '24px',
    },
    header: {
      fontSize: '14px',
      fontWeight: '700',
      marginBottom: '12px',
      color: CLASSIC_COLORS.primary,
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      borderBottom: '1.5px solid #000',
      paddingBottom: '6px',
    },
    itemTitle: {
      fontSize: '14px',
      fontWeight: '700',
      color: CLASSIC_COLORS.primary,
    },
    itemDate: {
      fontSize: '12px',
      color: CLASSIC_COLORS.textMuted,
      fontStyle: 'italic',
      whiteSpace: 'nowrap',
      marginLeft: '12px',
    },
    itemDescription: {
      color: CLASSIC_COLORS.textTertiary,
      marginBottom: '4px',
      lineHeight: '1.5',
      fontSize: '12.5px',
    },
    itemMeta: {
      fontSize: '12px',
      color: CLASSIC_COLORS.textMuted,
      marginTop: '4px',
    },
  },

  education: {
    container: {
      marginBottom: '24px',
    },
    header: {
      fontSize: '14px',
      fontWeight: '700',
      marginBottom: '12px',
      color: CLASSIC_COLORS.primary,
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      borderBottom: '1.5px solid #000',
      paddingBottom: '6px',
    },
    itemTitle: {
      fontSize: '14px',
      fontWeight: '700',
      color: CLASSIC_COLORS.primary,
    },
    itemSubtitle: {
      fontSize: '13px',
      color: CLASSIC_COLORS.textSecondary,
      fontStyle: 'italic',
    },
    itemDate: {
      fontSize: '12px',
      color: CLASSIC_COLORS.textMuted,
      fontStyle: 'italic',
      whiteSpace: 'nowrap',
      marginLeft: '12px',
    },
  },

  skills: {
    container: {
      marginBottom: '24px',
    },
    header: {
      fontSize: '14px',
      fontWeight: '700',
      marginBottom: '12px',
      color: CLASSIC_COLORS.primary,
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      borderBottom: '1.5px solid #000',
      paddingBottom: '6px',
    },
    itemTitle: {
      fontWeight: '700',
      color: CLASSIC_COLORS.primary,
      fontSize: '12.5px',
    },
    itemDescription: {
      color: CLASSIC_COLORS.textTertiary,
      fontSize: '12.5px',
    },
  },

  certifications: {
    container: {
      marginBottom: '24px',
    },
    header: {
      fontSize: '14px',
      fontWeight: '700',
      marginBottom: '12px',
      color: CLASSIC_COLORS.primary,
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      borderBottom: '1.5px solid #000',
      paddingBottom: '6px',
    },
    itemTitle: {
      fontWeight: '700',
      color: CLASSIC_COLORS.primary,
      fontSize: '12.5px',
    },
    itemSubtitle: {
      color: CLASSIC_COLORS.textSecondary,
      fontSize: '12.5px',
    },
    itemMeta: {
      color: CLASSIC_COLORS.textMuted,
      fontSize: '11px',
    },
    itemDate: {
      fontSize: '12px',
      color: CLASSIC_COLORS.textMuted,
      fontStyle: 'italic',
      whiteSpace: 'nowrap',
      marginLeft: '12px',
    },
  },

  languages: {
    container: {
      marginBottom: '0',
    },
    header: {
      fontSize: '14px',
      fontWeight: '700',
      marginBottom: '12px',
      color: CLASSIC_COLORS.primary,
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      borderBottom: '1.5px solid #000',
      paddingBottom: '6px',
    },
    itemTitle: {
      fontWeight: '700',
      color: CLASSIC_COLORS.primary,
      fontSize: '12.5px',
    },
    itemDescription: {
      color: CLASSIC_COLORS.textTertiary,
      fontSize: '12.5px',
    },
  },
};
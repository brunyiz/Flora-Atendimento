import { createTheme } from './common.js?v=0.6.3';

export const marromTheme = createTheme({
    label: 'Marrom',
    dot: '#D4A574',

    light: {
        '--bg-start': '#FDF0E0',
        '--bg-mid': '#EFE0C8',
        '--bg-end': '#FFF8F0',
        '--text-body': '#3D2B1A',
        '--input-border': '#DDD0C0',
        '--accent': '#92400E',
        '--accent-hover': '#6B2D08',
        '--accent-glow': 'transparent',
        '--rosa': '#D4A574',
        '--rosa-pastel': '#F0D9BE',
        '--cinza': '#DDD0C0',
        '--cinza-claro': '#FBF5ED',
        '--cinza-escuro': '#5C3D20',
        '--borda': '1px solid rgba(180,130,80,0.3)',
        '--sombra': '0 4px 10px rgba(100,60,20,0.08)',
        '--category-hover': '#FFF0DC',
        '--active-bg': '#F5E6D0',
        '--active-border': '#D4A574',
        '--btn-pa': '#E8C4A0',
        '--btn-pb': '#D4A574',
        '--recent-bg': '#F0D9BE',
        '--recent-color': '#92400E',
        '--recent-hover': '#D4A574',
        '--sc-border': '#DDD0C0',
        '--lilas': '#D4A574',
        '--lilas-claro': '#F5E6D0',
        '--btn-opt-color': '#7C3AED',
        '--btn-opt-border': '#C4B5FD',
        '--btn-opt-sel': '#7C3AED',
        '--scrollbar-thumb': '#D4A574',
        '--copy-btn-bg': '#92400E',
        '--copy-btn-color': '#ffffff',
        '--copy-btn-glow': 'rgba(146,64,14,0.3)'
    },

    dark: {
        '--accent': '#D6A35F',
        '--accent-hover': '#E7C892',
        '--accent-glow': 'rgba(214,163,95,0.12)',

        '--active-border': '#D6A35F',

        '--recent-color': '#D6A35F',

        '--lilas': '#D6A35F',

        '--btn-opt-color': '#D6A35F',
        '--btn-opt-border': '#343640',
        '--btn-opt-sel': '#D6A35F',

        '--scrollbar-thumb': '#D6A35F',

        '--copy-btn-bg': '#D6A35F',
        '--copy-btn-color': '#150B02',
        '--copy-btn-glow': 'rgba(214,163,95,0.12)',

        '--btn-sel-text': '#150B02'
    }
});

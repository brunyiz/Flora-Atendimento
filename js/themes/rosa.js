import { createTheme } from './common.js?v=0.6.3';

export const rosaTheme = createTheme({
    label: 'Rosa',
    dot: '#FFB8D9',

    light: {
        '--bg-start': '#FFD6E7',
        '--bg-mid': '#EDE9FE',
        '--bg-end': '#D1FAFF',
        '--text-body': '#4A5568',
        '--input-border': '#E2E8F0',
        '--accent': '#C7559E',
        '--accent-hover': '#9B2C7A',
        '--accent-glow': 'transparent',
        '--rosa': '#FFB8D9',
        '--rosa-pastel': '#FFD6E7',
        '--cinza': '#E2E8F0',
        '--cinza-claro': '#F7FAFC',
        '--cinza-escuro': '#4A5568',
        '--borda': '1px solid rgba(255,182,217,0.35)',
        '--sombra': '0 4px 10px rgba(0,0,0,0.06)',
        '--category-hover': '#D1FAFF',
        '--active-bg': '#EDE9FE',
        '--active-border': '#D8B4FE',
        '--btn-pa': '#FFB8D9',
        '--btn-pb': '#D8B4FE',
        '--recent-bg': '#FFD6E7',
        '--recent-color': '#C7559E',
        '--recent-hover': '#FFB8D9',
        '--sc-border': '#E2E8F0',
        '--lilas': '#D8B4FE',
        '--lilas-claro': '#EDE9FE',
        '--btn-opt-color': '#7C3AED',
        '--btn-opt-border': '#C4B5FD',
        '--btn-opt-sel': '#7C3AED',
        '--scrollbar-thumb': '#D8B4FE',
        '--copy-btn-bg': '#C7559E',
        '--copy-btn-color': '#ffffff',
        '--copy-btn-glow': 'rgba(199,85,158,0.35)'
    },

    dark: {
        '--accent': '#FF4FA3',
        '--accent-hover': '#FF86C1',
        '--accent-glow': 'rgba(255,79,163,0.08)',

        '--active-border': '#FF4FA3',

        '--recent-color': '#FF4FA3',

        '--lilas': '#FF4FA3',

        '--btn-opt-color': '#FF4FA3',
        '--btn-opt-border': '#343640',
        '--btn-opt-sel': '#FF4FA3',

        '--scrollbar-thumb': '#FF4FA3',

        '--copy-btn-bg': '#FF4FA3',
        '--copy-btn-color': '#16050E',
        '--copy-btn-glow': 'rgba(255,79,163,0.08)',

        '--btn-sel-text': '#16050E'
    }
});

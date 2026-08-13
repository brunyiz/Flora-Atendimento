import { createTheme } from './common.js?v=0.6.3';

export const verdeTheme = createTheme({
    label: 'Verde',
    dot: '#48BB78',

    light: {
        '--bg-start': '#D1FAE5',
        '--bg-mid': '#E6FFFA',
        '--bg-end': '#ECFDF5',
        '--text-body': '#1A3A2A',
        '--input-border': '#B8D8C8',
        '--accent': '#276749',
        '--accent-hover': '#15422E',
        '--accent-glow': 'transparent',
        '--rosa': '#6EE7B7',
        '--rosa-pastel': '#D1FAE5',
        '--cinza': '#B8D8C8',
        '--cinza-claro': '#F0FAF5',
        '--cinza-escuro': '#2D5940',
        '--borda': '1px solid rgba(72,187,120,0.35)',
        '--sombra': '0 4px 10px rgba(20,100,60,0.07)',
        '--category-hover': '#ECFDF5',
        '--active-bg': '#D1FAE5',
        '--active-border': '#48BB78',
        '--btn-pa': '#A7F3D0',
        '--btn-pb': '#6EE7B7',
        '--recent-bg': '#D1FAE5',
        '--recent-color': '#276749',
        '--recent-hover': '#A7F3D0',
        '--sc-border': '#B8D8C8',
        '--lilas': '#6EE7B7',
        '--lilas-claro': '#D1FAE5',
        '--btn-opt-color': '#7C3AED',
        '--btn-opt-border': '#C4B5FD',
        '--btn-opt-sel': '#7C3AED',
        '--scrollbar-thumb': '#6EE7B7',
        '--copy-btn-bg': '#276749',
        '--copy-btn-color': '#ffffff',
        '--copy-btn-glow': 'rgba(39,103,73,0.3)'
    },

    dark: {
        '--accent': '#22C55E',
        '--accent-hover': '#6EE7A0',
        '--accent-glow': 'rgba(34,197,94,0.08)',

        '--active-border': '#22C55E',

        '--recent-color': '#22C55E',

        '--lilas': '#22C55E',

        '--btn-opt-color': '#22C55E',
        '--btn-opt-border': '#343640',
        '--btn-opt-sel': '#22C55E',

        '--scrollbar-thumb': '#22C55E',

        '--copy-btn-bg': '#22C55E',
        '--copy-btn-color': '#03140A',
        '--copy-btn-glow': 'rgba(34,197,94,0.08)',

        '--btn-sel-text': '#03140A'
    }
});

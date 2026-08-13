import { createTheme } from './common.js?v=0.6.3';

export const vermelhoTheme = createTheme({
    label: 'Vermelho',
    dot: '#FCA5A5',

    light: {
        '--bg-start': '#FFE4E6',
        '--bg-mid': '#FECDD3',
        '--bg-end': '#FFF1F2',
        '--text-body': '#3D0010',
        '--input-border': '#FECACA',
        '--accent': '#B91C1C',
        '--accent-hover': '#7F1D1D',
        '--accent-glow': 'transparent',
        '--rosa': '#FCA5A5',
        '--rosa-pastel': '#FFE4E6',
        '--cinza': '#FECACA',
        '--cinza-claro': '#FFF1F2',
        '--cinza-escuro': '#7F1D1D',
        '--borda': '1px solid rgba(252,165,165,0.4)',
        '--sombra': '0 4px 10px rgba(180,30,30,0.07)',
        '--category-hover': '#FFF1F2',
        '--active-bg': '#FFE4E6',
        '--active-border': '#F87171',
        '--btn-pa': '#FECACA',
        '--btn-pb': '#FCA5A5',
        '--recent-bg': '#FFE4E6',
        '--recent-color': '#B91C1C',
        '--recent-hover': '#FECACA',
        '--sc-border': '#FECACA',
        '--lilas': '#FCA5A5',
        '--lilas-claro': '#FFE4E6',
        '--btn-opt-color': '#7C3AED',
        '--btn-opt-border': '#C4B5FD',
        '--btn-opt-sel': '#7C3AED',
        '--scrollbar-thumb': '#FCA5A5',
        '--copy-btn-bg': '#B91C1C',
        '--copy-btn-color': '#ffffff',
        '--copy-btn-glow': 'rgba(185,28,28,0.3)'
    },

    dark: {
        '--accent': '#F87171',
        '--accent-hover': '#FCA5A5',
        '--accent-glow': 'rgba(248,113,113,0.08)',

        '--active-border': '#F87171',

        '--recent-color': '#F87171',

        '--lilas': '#F87171',

        '--btn-opt-color': '#F87171',
        '--btn-opt-border': '#343640',
        '--btn-opt-sel': '#F87171',

        '--scrollbar-thumb': '#F87171',

        '--copy-btn-bg': '#F87171',
        '--copy-btn-color': '#1A0303',
        '--copy-btn-glow': 'rgba(248,113,113,0.08)',

        '--btn-sel-text': '#1A0303'
    }
});

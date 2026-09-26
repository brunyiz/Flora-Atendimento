import { createTheme } from './common.js?v=0.6.3';

export const azulTheme = createTheme({
    label: 'Azul',
    dot: '#60A5FA',

    light: {
        '--bg-start': '#DBEAFE',
        '--bg-mid': '#EFF6FF',
        '--bg-end': '#D1FAFF',
        '--text-body': '#1E3A5F',
        '--input-border': '#BFDBFE',
        '--accent': '#1D4ED8',
        '--accent-hover': '#1234A0',
        '--accent-glow': 'transparent',
        '--rosa': '#93C5FD',
        '--rosa-pastel': '#DBEAFE',
        '--cinza': '#BFDBFE',
        '--cinza-claro': '#EFF6FF',
        '--cinza-escuro': '#1E3A5F',
        '--borda': '1px solid rgba(59,130,246,0.3)',
        '--sombra': '0 4px 10px rgba(30,60,120,0.07)',
        '--category-hover': '#EFF6FF',
        '--active-bg': '#DBEAFE',
        '--active-border': '#60A5FA',
        '--btn-pa': '#BFDBFE',
        '--btn-pb': '#93C5FD',
        '--recent-bg': '#DBEAFE',
        '--recent-color': '#1D4ED8',
        '--recent-hover': '#BFDBFE',
        '--sc-border': '#BFDBFE',
        '--lilas': '#93C5FD',
        '--lilas-claro': '#DBEAFE',
        '--btn-opt-color': '#7C3AED',
        '--btn-opt-border': '#C4B5FD',
        '--btn-opt-sel': '#7C3AED',
        '--scrollbar-thumb': '#93C5FD',
        '--copy-btn-bg': '#1D4ED8',
        '--copy-btn-color': '#ffffff',
        '--copy-btn-glow': 'rgba(29,78,216,0.3)'
    },

    dark: {
        '--accent': '#4EA1FF',
        '--accent-hover': '#8CC4FF',
        '--accent-glow': 'rgba(78,161,255,0.08)',

        '--active-border': '#4EA1FF',

        '--recent-color': '#4EA1FF',

        '--lilas': '#4EA1FF',

        '--btn-opt-color': '#4EA1FF',
        '--btn-opt-border': '#343640',
        '--btn-opt-sel': '#4EA1FF',

        '--scrollbar-thumb': '#4EA1FF',

        '--copy-btn-bg': '#4EA1FF',
        '--copy-btn-color': '#03101D',
        '--copy-btn-glow': 'rgba(78,161,255,0.08)',

        '--btn-sel-text': '#03101D'
    }
});

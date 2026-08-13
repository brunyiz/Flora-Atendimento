import { createTheme } from './common.js?v=0.6.3';

export const roxoTheme = createTheme({
    label: 'Roxo',
    dot: '#A78BFA',

    light: {
        '--bg-start': '#EDE9FE',
        '--bg-mid': '#F3E8FF',
        '--bg-end': '#FAF5FF',
        '--text-body': '#2D1B5E',
        '--input-border': '#DDD6FE',
        '--accent': '#6D28D9',
        '--accent-hover': '#4C1D95',
        '--accent-glow': 'transparent',
        '--rosa': '#C4B5FD',
        '--rosa-pastel': '#EDE9FE',
        '--cinza': '#DDD6FE',
        '--cinza-claro': '#FAF5FF',
        '--cinza-escuro': '#4C1D95',
        '--borda': '1px solid rgba(139,92,246,0.3)',
        '--sombra': '0 4px 10px rgba(100,40,180,0.08)',
        '--category-hover': '#FAF5FF',
        '--active-bg': '#EDE9FE',
        '--active-border': '#A78BFA',
        '--btn-pa': '#DDD6FE',
        '--btn-pb': '#C4B5FD',
        '--recent-bg': '#EDE9FE',
        '--recent-color': '#6D28D9',
        '--recent-hover': '#DDD6FE',
        '--sc-border': '#DDD6FE',
        '--lilas': '#C4B5FD',
        '--lilas-claro': '#EDE9FE',
        '--btn-opt-color': '#6D28D9',
        '--btn-opt-border': '#A78BFA',
        '--btn-opt-sel': '#6D28D9',
        '--scrollbar-thumb': '#C4B5FD',
        '--copy-btn-bg': '#6D28D9',
        '--copy-btn-color': '#ffffff',
        '--copy-btn-glow': 'rgba(109,40,217,0.3)'
    },

    dark: {
        '--accent': '#A78BFA',
        '--accent-hover': '#C4B5FD',
        '--accent-glow': 'rgba(167,139,250,0.08)',

        '--active-border': '#A78BFA',

        '--recent-color': '#A78BFA',

        '--lilas': '#A78BFA',

        '--btn-opt-color': '#A78BFA',
        '--btn-opt-border': '#343640',
        '--btn-opt-sel': '#A78BFA',

        '--scrollbar-thumb': '#A78BFA',

        '--copy-btn-bg': '#A78BFA',
        '--copy-btn-color': '#0F0620',
        '--copy-btn-glow': 'rgba(167,139,250,0.08)',

        '--btn-sel-text': '#0F0620'
    }
});

import { createTheme } from './common.js?v=0.6.3';

export const laranjaTheme = createTheme({
    label: 'Laranja',
    dot: '#FB923C',

    light: {
        '--bg-start': '#FFEDD5',
        '--bg-mid': '#FED7AA',
        '--bg-end': '#FFF7ED',
        '--text-body': '#431407',
        '--input-border': '#FDBA74',
        '--accent': '#C2410C',
        '--accent-hover': '#922006',
        '--accent-glow': 'transparent',
        '--rosa': '#FB923C',
        '--rosa-pastel': '#FFEDD5',
        '--cinza': '#FDBA74',
        '--cinza-claro': '#FFF7ED',
        '--cinza-escuro': '#7C2D12',
        '--borda': '1px solid rgba(251,146,60,0.35)',
        '--sombra': '0 4px 10px rgba(180,80,10,0.08)',
        '--category-hover': '#FFF7ED',
        '--active-bg': '#FFEDD5',
        '--active-border': '#F97316',
        '--btn-pa': '#FDBA74',
        '--btn-pb': '#FB923C',
        '--recent-bg': '#FFEDD5',
        '--recent-color': '#C2410C',
        '--recent-hover': '#FDBA74',
        '--sc-border': '#FDBA74',
        '--lilas': '#FB923C',
        '--lilas-claro': '#FFEDD5',
        '--btn-opt-color': '#7C3AED',
        '--btn-opt-border': '#C4B5FD',
        '--btn-opt-sel': '#7C3AED',
        '--scrollbar-thumb': '#FB923C',
        '--copy-btn-bg': '#C2410C',
        '--copy-btn-color': '#ffffff',
        '--copy-btn-glow': 'rgba(194,65,12,0.3)'
    },

    dark: {
        '--accent': '#FB923C',
        '--accent-hover': '#FDBA74',
        '--accent-glow': 'rgba(251,146,60,0.08)',

        '--active-border': '#FB923C',

        '--recent-color': '#FB923C',

        '--lilas': '#FB923C',

        '--btn-opt-color': '#FB923C',
        '--btn-opt-border': '#343640',
        '--btn-opt-sel': '#FB923C',

        '--scrollbar-thumb': '#FB923C',

        '--copy-btn-bg': '#FB923C',
        '--copy-btn-color': '#1A0900',
        '--copy-btn-glow': 'rgba(251,146,60,0.08)',

        '--btn-sel-text': '#1A0900'
    }
});

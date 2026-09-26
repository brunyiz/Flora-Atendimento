import { createTheme } from './common.js?v=0.6.3';

export const amareloTheme = createTheme({
    label: 'Amarelo',
    dot: '#F59E0B',

    light: {
        '--bg-start': '#FEF9C3',
        '--bg-mid': '#FEF3C7',
        '--bg-end': '#FFFBEB',
        '--text-body': '#3D2A00',
        '--input-border': '#FDE68A',
        '--accent': '#B45309',
        '--accent-hover': '#7C3A05',
        '--accent-glow': 'transparent',
        '--rosa': '#FCD34D',
        '--rosa-pastel': '#FEF9C3',
        '--cinza': '#FDE68A',
        '--cinza-claro': '#FFFBEB',
        '--cinza-escuro': '#78400A',
        '--borda': '1px solid rgba(245,158,11,0.35)',
        '--sombra': '0 4px 10px rgba(180,100,10,0.08)',
        '--category-hover': '#FFFBEB',
        '--active-bg': '#FEF9C3',
        '--active-border': '#F59E0B',
        '--btn-pa': '#FDE68A',
        '--btn-pb': '#FCD34D',
        '--recent-bg': '#FEF9C3',
        '--recent-color': '#B45309',
        '--recent-hover': '#FDE68A',
        '--sc-border': '#FDE68A',
        '--lilas': '#FCD34D',
        '--lilas-claro': '#FEF9C3',
        '--btn-opt-color': '#7C3AED',
        '--btn-opt-border': '#C4B5FD',
        '--btn-opt-sel': '#7C3AED',
        '--scrollbar-thumb': '#FCD34D',
        '--copy-btn-bg': '#B45309',
        '--copy-btn-color': '#ffffff',
        '--copy-btn-glow': 'rgba(180,83,9,0.3)'
    },

    dark: {
        '--accent': '#FACC15',
        '--accent-hover': '#FDE68A',
        '--accent-glow': 'rgba(250,204,21,0.08)',

        '--active-border': '#FACC15',

        '--recent-color': '#FACC15',

        '--lilas': '#FACC15',

        '--btn-opt-color': '#FACC15',
        '--btn-opt-border': '#343640',
        '--btn-opt-sel': '#FACC15',

        '--scrollbar-thumb': '#FACC15',

        '--copy-btn-bg': '#FACC15',
        '--copy-btn-color': '#171200',
        '--copy-btn-glow': 'rgba(250,204,21,0.08)',

        '--btn-sel-text': '#171200'
    }
});

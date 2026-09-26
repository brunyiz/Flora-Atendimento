// Base central dos temas do Flora Atendimento.
// Modo escuro real: fundo quase preto, superfícies neutras e cor do tema só em detalhes.

export const LIGHT_BASE = {
    '--surface': 'rgba(255,255,255,0.97)',
    '--card-bg': '#ffffff',
    '--modal-bg': '#ffffff',

    '--text-muted': '#9CA3AF',

    '--input-bg': '#ffffff',

    '--tab-bg': 'rgba(255,255,255,0.65)',
    '--tab-active-bg': '#ffffff',

    '--copy-ready-bg-start': '#C6F6D5',
    '--copy-ready-bg-end': '#D1FAFF',
    '--copy-ready-color': '#276749',

    '--btn-sel-text': '#ffffff'
};

export const DARK_BASE = {
    '--bg-start': '#000000',
    '--bg-mid': '#000000',
    '--bg-end': '#000000',

    '--surface': '#050506',
    '--card-bg': '#070708',
    '--modal-bg': '#09090B',

    '--text-body': '#E6E6E8',
    '--text-muted': '#85858B',

    '--input-bg': '#0B0B0D',
    '--input-border': '#24242A',

    '--accent': '#E6E6E8',
    '--accent-hover': '#FFFFFF',
    '--accent-glow': 'rgba(255,255,255,0.06)',

    '--rosa': '#E6E6E8',
    '--rosa-pastel': '#0B0B0D',

    '--cinza': '#24242A',
    '--cinza-claro': '#0B0B0D',
    '--cinza-escuro': '#D5D5DA',

    '--borda': '1px solid rgba(255,255,255,0.075)',
    '--sombra': '0 4px 24px rgba(0,0,0,0.85)',

    '--category-hover': '#101013',

    '--active-bg': '#111115',
    '--active-border': '#E6E6E8',

    '--tab-bg': 'rgba(0,0,0,0.72)',
    '--tab-active-bg': '#09090B',

    '--btn-pa': '#24242A',
    '--btn-pb': '#E6E6E8',

    '--recent-bg': '#0B0B0D',
    '--recent-color': '#E6E6E8',
    '--recent-hover': '#111115',

    '--sc-border': '#24242A',

    '--lilas': '#E6E6E8',
    '--lilas-claro': '#0B0B0D',

    '--btn-opt-color': '#D5D5DA',
    '--btn-opt-border': '#34343C',
    '--btn-opt-sel': '#E6E6E8',

    '--copy-ready-bg-start': '#07130C',
    '--copy-ready-bg-end': '#09170F',
    '--copy-ready-color': '#34D399',

    '--scrollbar-thumb': '#34343C',

    '--copy-btn-bg': '#24242A',
    '--copy-btn-color': '#ffffff',
    '--copy-btn-glow': 'rgba(255,255,255,0.06)',

    '--btn-sel-text': '#050506'
};

export function createTheme({ label, dot, light, dark }) {
    return {
        label,
        dot,
        light: {
            ...LIGHT_BASE,
            ...light
        },
        dark: {
            ...DARK_BASE,
            ...dark
        }
    };
}

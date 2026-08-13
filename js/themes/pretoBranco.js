import { createTheme } from './common.js?v=0.6.3';

export const pretoBrancoTheme = createTheme({
    label: 'P&B',
    dot: '#4A5568',

    light: {
        '--bg-start': '#F3F4F6',
        '--bg-mid': '#F9FAFB',
        '--bg-end': '#FFFFFF',
        '--surface': 'rgba(255,255,255,0.97)',
        '--card-bg': '#FFFFFF',
        '--modal-bg': '#FFFFFF',
        '--text-body': '#111827',
        '--text-muted': '#6B7280',
        '--input-bg': '#FFFFFF',
        '--input-border': '#E5E7EB',
        '--accent': '#111827',
        '--accent-hover': '#374151',
        '--accent-glow': 'transparent',
        '--rosa': '#9CA3AF',
        '--rosa-pastel': '#E5E7EB',
        '--cinza': '#E5E7EB',
        '--cinza-claro': '#F3F4F6',
        '--cinza-escuro': '#374151',
        '--borda': '1px solid rgba(0,0,0,0.12)',
        '--sombra': '0 4px 10px rgba(0,0,0,0.06)',
        '--category-hover': '#F3F4F6',
        '--active-bg': '#E5E7EB',
        '--active-border': '#4B5563',
        '--tab-bg': 'rgba(255,255,255,0.65)',
        '--tab-active-bg': '#ffffff',
        '--btn-pa': '#6B7280',
        '--btn-pb': '#374151',
        '--recent-bg': '#F3F4F6',
        '--recent-color': '#111827',
        '--recent-hover': '#E5E7EB',
        '--sc-border': '#E5E7EB',
        '--lilas': '#6B7280',
        '--lilas-claro': '#F3F4F6',
        '--btn-opt-color': '#374151',
        '--btn-opt-border': '#9CA3AF',
        '--btn-opt-sel': '#111827',
        '--copy-ready-bg-start': '#E5E7EB',
        '--copy-ready-bg-end': '#F3F4F6',
        '--copy-ready-color': '#111827',
        '--scrollbar-thumb': '#9CA3AF',
        '--copy-btn-bg': '#374151',
        '--copy-btn-color': '#F9FAFB',
        '--copy-btn-glow': 'rgba(0,0,0,0.3)',
        '--btn-sel-text': '#F9FAFB'
    },

    dark: {
        '--accent': '#F4F4F5',
        '--accent-hover': '#FFFFFF',
        '--accent-glow': 'rgba(255,255,255,0.06)',

        '--active-border': '#F4F4F5',

        '--recent-color': '#F4F4F5',

        '--lilas': '#F4F4F5',

        '--btn-opt-color': '#F4F4F5',
        '--btn-opt-border': '#343640',
        '--btn-opt-sel': '#F4F4F5',

        '--scrollbar-thumb': '#F4F4F5',

        '--copy-btn-bg': '#F4F4F5',
        '--copy-btn-color': '#050506',
        '--copy-btn-glow': 'rgba(255,255,255,0.06)',

        '--btn-sel-text': '#050506'
    }
});

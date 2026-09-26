import { THEME_COLORS } from './config.js?v=0.6.3';

export let themeColor = localStorage.getItem('floraThemeColor') || 'rosa';
export let themeMode = localStorage.getItem('floraThemeMode') || 'light';

export function loadThemeState() {
    themeColor = localStorage.getItem('floraThemeColor') || 'rosa';
    themeMode = localStorage.getItem('floraThemeMode') || 'light';
}

function saveThemeState() {
    localStorage.setItem('floraThemeColor', themeColor);
    localStorage.setItem('floraThemeMode', themeMode);
}

export function applyTheme() {
    if (!THEME_COLORS[themeColor]) {
        themeColor = 'rosa';
    }

    const colorDef = THEME_COLORS[themeColor];
    const vars = themeMode === 'dark' ? colorDef.dark : colorDef.light;
    const root = document.documentElement;
    const body = document.body;

    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));

    body.classList.toggle('dark-theme', themeMode === 'dark');
    body.dataset.themeColor = themeColor;
    body.dataset.themeMode = themeMode;
    root.dataset.themeColor = themeColor;
    root.dataset.themeMode = themeMode;

    root.style.setProperty('--theme-mode', themeMode);

    if (themeMode === 'dark') {
        root.style.setProperty('--bg-start', '#000000');
        root.style.setProperty('--bg-mid', '#000000');
        root.style.setProperty('--bg-end', '#000000');
        body.style.background = '#000000';
    } else {
        body.style.background = '';
    }

    updateModeLabel();
    saveThemeState();
}

export function setThemeColor(colorKey) {
    if (!THEME_COLORS[colorKey]) return;
    themeColor = colorKey;
    applyTheme();
    renderThemePicker();
}

export function toggleThemeMode() {
    themeMode = themeMode === 'light' ? 'dark' : 'light';
    applyTheme();
    renderThemePicker();
}

export function updateModeLabel() {
    const label = document.getElementById('mode-label');
    if (label) label.textContent = themeMode === 'light' ? 'Claro' : 'Escuro';
}

export function renderThemePicker() {
    const grid = document.getElementById('theme-color-grid');
    if (!grid) return;
    grid.innerHTML = '';
    Object.entries(THEME_COLORS).forEach(([key, def]) => {
        const btn = document.createElement('button');
        btn.className = 'theme-color-swatch';
        btn.dataset.color = key;
        btn.onclick = () => setThemeColor(key);
        if (key === themeColor) btn.classList.add('active');
        btn.innerHTML = `
            <div class="theme-color-dot" style="background:${def.dot};${themeMode==='dark'?'box-shadow:0 0 12px '+def.dot+'88;':''}"></div>
            <span>${def.label}</span>
        `;
        grid.appendChild(btn);
    });
    updateModeLabel();
}

export function openThemePicker() {
    document.getElementById('modal-theme').style.display = 'flex';
    renderThemePicker();
}

// Para o backup
export function syncThemeFromBackup(tc, tm) {
    if (tc && THEME_COLORS[tc]) {
        themeColor = tc;
        themeMode = tm || 'light';
        applyTheme();
        renderThemePicker();
    }
}

export function getThemeSettings() {
    return { _themeColor: themeColor, _themeMode: themeMode };
}

console.log('[Flora] theme engine v0.6.3 carregado. Dark bg:', THEME_COLORS.rosa.dark['--bg-start']);
export const db = { 
    categories: [], 
    scripts: [], 
    sectors: [], 
    descriptions: [], 
    favorites: [], 
    scriptOrders: {} 
};

export const recentScripts = [];

export function loadData() {
    const saved = localStorage.getItem('floraAtendimento');
    if (saved) {
        Object.assign(db, { favorites: [], scriptOrders: {} }, JSON.parse(saved));
    }
}

export function saveData() {
    if (db.sectors) db.sectors.sort((a, b) => a.localeCompare(b, 'pt-BR'));
    if (db.descriptions) db.descriptions.sort((a, b) => a.localeCompare(b, 'pt-BR'));
    localStorage.setItem('floraAtendimento', JSON.stringify(db));
}

export function loadRecents() {
    const s = localStorage.getItem('floraRecents');
    if (s) {
        recentScripts.length = 0;
        recentScripts.push(...JSON.parse(s));
    }
}

export function saveRecents() {
    localStorage.setItem('floraRecents', JSON.stringify(recentScripts));
}

export function addToRecents(id) {
    const idx = recentScripts.indexOf(id);
    if (idx !== -1) recentScripts.splice(idx, 1);
    recentScripts.unshift(id);
    if (recentScripts.length > 5) recentScripts.length = 5;
    saveRecents();
}

export function clearData() {
    localStorage.removeItem('floraAtendimento');
    localStorage.removeItem('floraRecents');
    Object.assign(db, { categories: [], scripts: [], sectors: [], descriptions: [], favorites: [], scriptOrders: {} });
    recentScripts.length = 0;
}
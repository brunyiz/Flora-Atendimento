import { db, saveData } from '../storage.js?v=0.6.3';
import { showNotification } from '../utils.js?v=0.6.3';
import { closeModal, openModal } from '../ui.js?v=0.6.3';
import { activeCategory } from './state.js?v=0.6.3';
import { renderCategories } from './categories.js?v=0.6.3';
import { renderScripts } from './render.js?v=0.6.3';

export function openScriptModal() {
    document.getElementById('script-id').value = '';
    document.getElementById('script-title').value = '';
    document.getElementById('script-content').value = '';

    const category = activeCategory !== 'Todas' && activeCategory !== '__favorites__' ? activeCategory : '';

    if (category) document.getElementById('script-category').value = category;

    document.getElementById('modal-script-title').innerHTML = '<i class="fas fa-file-alt"></i> Novo Script';
    openModal('modal-script');
    setTimeout(() => document.getElementById('script-title').focus(), 80);
}

export function editScript(id) {
    const script = db.scripts.find(item => item.id === id);

    if (!script) return;

    document.getElementById('script-id').value = script.id;
    document.getElementById('script-title').value = script.title;
    document.getElementById('script-category').value = script.category;
    document.getElementById('script-content').value = script.content;
    document.getElementById('modal-script-title').innerHTML = '<i class="fas fa-edit"></i> Editar Script';

    openModal('modal-script');
}

export function saveScript() {
    const id = document.getElementById('script-id').value;
    const title = document.getElementById('script-title').value.trim();
    const category = document.getElementById('script-category').value;
    const content = document.getElementById('script-content').value.trim();

    if (!title || !content) {
        alert('Preencha título e conteúdo!');
        return;
    }

    if (id) {
        const index = db.scripts.findIndex(script => script.id == id);

        if (index > -1) {
            db.scripts[index] = {
                id: parseInt(id),
                title,
                category,
                content
            };
        }
    } else {
        db.scripts.push({
            id: Date.now(),
            title,
            category,
            content
        });
    }

    saveData();
    renderScripts();
    renderCategories();
    closeModal('modal-script');
    showNotification('Script salvo com sucesso!');
}

export function deleteScript(id) {
    if (!confirm('Excluir este script?')) return;

    db.scripts = db.scripts.filter(script => script.id !== id);
    db.favorites = (db.favorites || []).filter(favoriteId => favoriteId !== id);

    if (db.scriptOrders) {
        Object.keys(db.scriptOrders).forEach(key => {
            db.scriptOrders[key] = db.scriptOrders[key].filter(orderId => orderId !== id);
        });
    }

    saveData();
    renderScripts();
    renderCategories();
}

export function toggleFavorite(id) {
    if (!db.favorites) db.favorites = [];

    if (db.favorites.includes(id)) {
        db.favorites = db.favorites.filter(favoriteId => favoriteId !== id);
        showNotification('Removido dos favoritos.');
    } else {
        db.favorites.push(id);
        showNotification('⭐ Adicionado aos favoritos!');
    }

    saveData();
    renderCategories();
    renderScripts();
}

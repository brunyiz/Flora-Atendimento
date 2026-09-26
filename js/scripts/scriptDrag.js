import { db, saveData } from '../storage.js?v=0.6.3';
import { showNotification } from '../utils.js?v=0.6.3';
import { activeCategory, draggedScriptId, setDraggedScriptId } from './state.js?v=0.6.3';

export function onScriptDragStart(e) {
    setDraggedScriptId(parseInt(this.dataset.scriptId));
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.scriptId);
    document.getElementById('scripts-grid').classList.add('drag-active');
    setTimeout(() => this.classList.add('script-dragging'), 0);
}

export function onScriptDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    const card = e.currentTarget;

    if (parseInt(card.dataset.scriptId) !== draggedScriptId) {
        document
            .querySelectorAll('.script-card')
            .forEach(item => item.classList.remove('script-drag-over'));

        card.classList.add('script-drag-over');
    }
}

export function onScriptDragLeave() {
    this.classList.remove('script-drag-over');
}

export function onScriptDrop(e) {
    e.preventDefault();

    const targetId = parseInt(this.dataset.scriptId);

    if (!draggedScriptId || draggedScriptId === targetId) return;

    const cards = [...document.querySelectorAll('.script-card[data-script-id]')];
    const currentOrder = cards.map(card => parseInt(card.dataset.scriptId));
    const fromIndex = currentOrder.indexOf(draggedScriptId);
    const toIndex = currentOrder.indexOf(targetId);

    if (fromIndex === -1 || toIndex === -1) return;

    currentOrder.splice(fromIndex, 1);
    currentOrder.splice(toIndex, 0, draggedScriptId);

    if (!db.scriptOrders) db.scriptOrders = {};

    db.scriptOrders[activeCategory] = currentOrder;

    saveData();
    setDraggedScriptId(null);
    window.renderScripts();
    showNotification('Script reordenado!');
}

export function onScriptDragEnd() {
    setDraggedScriptId(null);

    document.getElementById('scripts-grid').classList.remove('drag-active');

    document
        .querySelectorAll('.script-card')
        .forEach(card => card.classList.remove('script-dragging', 'script-drag-over'));
}

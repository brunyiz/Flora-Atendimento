import { db, saveData } from '../storage.js?v=0.6.3';
import { esc, escAttr, escJS, showNotification } from '../utils.js?v=0.6.3';
import { closeModal, openModal } from '../ui.js?v=0.6.3';
import {
    activeCategory,
    editingCategory,
    draggedCat,
    setActiveCategory,
    setEditingCategory,
    setDraggedCat
} from './state.js?v=0.6.3';
import { renderScripts } from './render.js?v=0.6.3';

export function renderCategories() {
    const list = document.getElementById('category-list');
    const select = document.getElementById('script-category');
    const favoriteCount = (db.favorites || []).length;

    let html = `
        <div class="category-item ${activeCategory === 'Todas' ? 'active' : ''}" onclick="filterCategory('Todas')">
            <i class="fas fa-grip-vertical drag-handle" style="visibility:hidden;"></i>
            <i class="fas fa-list-ul" style="opacity:.5;font-size:.8rem;"></i>
            <span class="cat-name" style="flex:1;">Todas</span>
            <span class="count-badge">${db.scripts.length}</span>
        </div>
        ${favoriteCount > 0 ? `
        <div class="category-item ${activeCategory === '__favorites__' ? 'active' : ''}" onclick="filterCategory('__favorites__')">
            <i class="fas fa-grip-vertical drag-handle" style="visibility:hidden;"></i>
            <span class="cat-name" style="flex:1;">⭐ Favoritos</span>
            <span class="count-badge">${favoriteCount}</span>
        </div>` : ''}
    `;

    select.innerHTML = '';

    db.categories.forEach(category => {
        const count = db.scripts.filter(script => script.category === category).length;
        const isActive = activeCategory === category;
        const isEditing = editingCategory === category;
        const jsCategory = escAttr(escJS(category));

        html += `<div class="category-item ${isActive ? 'active' : ''}"
            draggable="true"
            ondragstart="onCatDragStart(event,'${jsCategory}')"
            ondragover="onCatDragOver(event)"
            ondrop="onCatDrop(event,'${jsCategory}')"
            ondragend="onCatDragEnd()"
            onclick="!event.defaultPrevented && filterCategory('${jsCategory}')">
            <i class="fas fa-grip-vertical drag-handle" title="Arrastar para reordenar" onclick="event.preventDefault();event.stopPropagation();"></i>
            ${isEditing
                ? `<input class="cat-edit-input" value="${escAttr(category)}" data-old="${escAttr(category)}" autofocus onclick="event.stopPropagation()" onblur="saveEditCategory(this)" onkeydown="handleCatEditKey(event,this)">`
                : `<span class="cat-name" onclick="event.stopPropagation();filterCategory('${jsCategory}')">${esc(category)}</span>`
            }
            <span class="count-badge">${count}</span>
            <div class="cat-actions" onclick="event.stopPropagation()">
                <button class="btn-icon edit-btn" onclick="startEditCategory('${jsCategory}')" title="Renomear categoria"><i class="fas fa-edit"></i></button>
                <button class="btn-icon" onclick="deleteCategory('${jsCategory}')" title="Excluir"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>`;

        select.innerHTML += `<option value="${escAttr(category)}">${esc(category)}</option>`;
    });

    list.innerHTML = html;

    if (editingCategory) {
        setTimeout(() => {
            const input = list.querySelector('.cat-edit-input');
            if (input) {
                input.focus();
                input.select();
            }
        }, 50);
    }
}

export function filterCategory(category) {
    setActiveCategory(category);
    setEditingCategory(null);

    document.getElementById('current-category-title').textContent =
        category === 'Todas'
            ? 'Todos os Scripts'
            : category === '__favorites__'
                ? '⭐ Favoritos'
                : `Scripts: ${category}`;

    document.getElementById('search-script').value = '';

    renderCategories();
    renderScripts();
}

export function openCategoryModal() {
    document.getElementById('cat-name').value = '';
    openModal('modal-category');
    setTimeout(() => document.getElementById('cat-name').focus(), 80);
}

export function saveCategory() {
    const name = document.getElementById('cat-name').value.trim();

    if (!name) return;

    if (db.categories.includes(name)) {
        showNotification('Essa categoria já existe.', 'error');
        return;
    }

    db.categories.push(name);
    saveData();
    renderCategories();
    closeModal('modal-category');
    showNotification('Categoria adicionada!');
}

export function deleteCategory(category) {
    if (!confirm(`Excluir a categoria "${category}"?\nOs scripts não serão apagados.`)) return;

    db.categories = db.categories.filter(item => item !== category);

    if (activeCategory === category) setActiveCategory('Todas');

    saveData();
    window.renderAll();
}

export function startEditCategory(category) {
    setEditingCategory(category);
    renderCategories();
}

export function saveEditCategory(input) {
    const oldName = input.dataset.old;
    const newName = input.value.trim();

    setEditingCategory(null);

    if (newName && newName !== oldName) renameCategory(oldName, newName);
    else renderCategories();
}

export function handleCatEditKey(e, input) {
    if (e.key === 'Enter') {
        e.preventDefault();
        input.blur();
    }

    if (e.key === 'Escape') {
        setEditingCategory(null);
        renderCategories();
    }
}

function renameCategory(oldName, newName) {
    const cleanName = newName.trim();

    if (!cleanName || cleanName === oldName) return;

    if (db.categories.includes(cleanName)) {
        showNotification('Essa categoria já existe.', 'error');
        return;
    }

    db.categories = db.categories.map(category => category === oldName ? cleanName : category);
    db.scripts = db.scripts.map(script => script.category === oldName ? { ...script, category: cleanName } : script);

    if (activeCategory === oldName) setActiveCategory(cleanName);

    saveData();
    window.renderAll();
    showNotification('Categoria renomeada!');
}

export function onCatDragStart(e, category) {
    setDraggedCat(category);
    e.dataTransfer.effectAllowed = 'move';
    setTimeout(() => e.target.closest('.category-item')?.classList.add('dragging'), 0);
}

export function onCatDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    const item = e.target.closest('.category-item[draggable]');

    if (!item) return;

    document
        .querySelectorAll('.category-item')
        .forEach(element => element.classList.remove('drag-over'));

    item.classList.add('drag-over');
}

export function onCatDrop(e, targetCategory) {
    e.preventDefault();

    if (!draggedCat || draggedCat === targetCategory) return;

    const fromIndex = db.categories.indexOf(draggedCat);
    const toIndex = db.categories.indexOf(targetCategory);

    if (fromIndex === -1 || toIndex === -1) return;

    db.categories.splice(fromIndex, 1);
    db.categories.splice(toIndex, 0, draggedCat);

    setDraggedCat(null);
    saveData();
    renderCategories();
    showNotification('Categoria reordenada!');
}

export function onCatDragEnd() {
    setDraggedCat(null);

    document
        .querySelectorAll('.category-item')
        .forEach(element => element.classList.remove('drag-over', 'dragging'));
}

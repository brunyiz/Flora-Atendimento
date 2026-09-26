export let activeCategory = 'Todas';
export let editingCategory = null;
export let draggedCat = null;
export let draggedScriptId = null;
export let currentScriptToCopy = null;

export const cardStates = {};

export function setActiveCategory(category) {
    activeCategory = category;
}

export function resetScriptCategory() {
    activeCategory = 'Todas';
}

export function setEditingCategory(category) {
    editingCategory = category;
}

export function setDraggedCat(category) {
    draggedCat = category;
}

export function setDraggedScriptId(id) {
    draggedScriptId = id;
}

export function setCurrentScriptToCopy(script) {
    currentScriptToCopy = script;
}

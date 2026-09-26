import {
    APP_CONFIG
} from './config.js?v=0.6.3';

import {
    loadData,
    loadRecents
} from './storage.js?v=0.6.3';

import {
    loadThemeState,
    applyTheme,
    toggleThemeMode,
    openThemePicker,
    setThemeColor
} from './theme.js?v=0.6.3';

import {
    switchTab,
    setupKeyboardShortcuts,
    openManual,
    closeModal,
    addSettingItem,
    deleteSettingItem,
    setupTransferListeners,
    renderSectorTags,
    renderDescTags,
    generateAndCopyTransfer,
    exportBackup,
    importBackup,
    clearAllData
} from './ui.js?v=0.6.3';

import {
    renderCategories,
    renderScripts,
    filterCategory,
    openCategoryModal,
    saveCategory,
    deleteCategory,
    startEditCategory,
    saveEditCategory,
    handleCatEditKey,
    onCatDragStart,
    onCatDragOver,
    onCatDrop,
    onCatDragEnd,
    openScriptModal,
    editScript,
    saveScript,
    deleteScript,
    toggleFavorite,
    initiateCopy,
    finalizeCopyVariables,
    selectButton,
    renderRecents,
    resetScriptCategory
} from './scripts.js?v=0.6.3';

// Função global de renderização
window.renderAll = function() {
    renderCategories();
    renderScripts();
    renderSectorTags();
    renderDescTags();
    import('./ui.js?v=0.6.3').then(UI => {
        UI.renderSettingsList('sectors', 'settings-sector-list');
        UI.renderSettingsList('descriptions', 'settings-desc-list');
    });
    renderRecents();
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('version-display').textContent = `v${APP_CONFIG.version}`;
    document.getElementById('author-display').textContent = APP_CONFIG.author;
    document.getElementById('manual-version-label').textContent = `v${APP_CONFIG.version}`;

    loadData();
    loadRecents();
    loadThemeState();
    applyTheme();
    
    window.renderAll();
    
    setupTransferListeners();
    setupKeyboardShortcuts();
});

// MAPEAMENTO PARA O HTML (Crucial para o ES6 Modules funcionar com onclick inline)
window.toggleThemeMode = toggleThemeMode;
window.openThemePicker = openThemePicker;
window.setThemeColor = setThemeColor;
window.openManual = openManual;
window.closeModal = closeModal;
window.switchTab = switchTab;
window.exportBackup = exportBackup;
window.importBackup = importBackup;
window.clearAllData = clearAllData;

window.addSettingItem = addSettingItem;
window.deleteSettingItem = deleteSettingItem;
window.generateAndCopyTransfer = generateAndCopyTransfer;

window.renderScripts = renderScripts;
window.filterCategory = filterCategory;
window.openCategoryModal = openCategoryModal;
window.saveCategory = saveCategory;
window.deleteCategory = deleteCategory;
window.startEditCategory = startEditCategory;
window.saveEditCategory = saveEditCategory;
window.handleCatEditKey = handleCatEditKey;

window.onCatDragStart = onCatDragStart;
window.onCatDragOver = onCatDragOver;
window.onCatDrop = onCatDrop;
window.onCatDragEnd = onCatDragEnd;

window.openScriptModal = openScriptModal;
window.editScript = editScript;
window.saveScript = saveScript;
window.deleteScript = deleteScript;
window.toggleFavorite = toggleFavorite;
window.initiateCopy = initiateCopy;
window.finalizeCopyVariables = finalizeCopyVariables;
window.selectButton = selectButton;
window.resetScriptCategory = resetScriptCategory;
import { db } from '../storage.js?v=0.6.3';
import { esc, escAttr, escJS } from '../utils.js?v=0.6.3';
import { activeCategory, cardStates } from './state.js?v=0.6.3';
import { areAllButtonsSelected, formatPreview, parseButtons } from './buttons.js?v=0.6.3';
import {
    onScriptDragEnd,
    onScriptDragLeave,
    onScriptDragOver,
    onScriptDragStart,
    onScriptDrop
} from './scriptDrag.js?v=0.6.3';

export function renderScripts() {
    const grid = document.getElementById('scripts-grid');

    if (!grid) return;

    grid.innerHTML = '';

    const query = document.getElementById('search-script').value.toLowerCase().trim();
    let filteredScripts;

    if (activeCategory === '__favorites__') {
        filteredScripts = db.scripts.filter(script => (db.favorites || []).includes(script.id));
    } else if (activeCategory === 'Todas') {
        filteredScripts = [...db.scripts];
    } else {
        filteredScripts = db.scripts.filter(script => script.category === activeCategory);
    }

    if (query) {
        filteredScripts = filteredScripts.filter(script => {
            return script.title.toLowerCase().includes(query) || script.content.toLowerCase().includes(query);
        });
    }

    sortScripts(filteredScripts, query);

    if (!filteredScripts.length) {
        grid.innerHTML = `<p style="color:var(--cinza-escuro);grid-column:1/-1;padding:10px 0;">
            ${query ? `Nenhum resultado para "<strong>${esc(query)}</strong>".` : 'Nenhum script nesta categoria.'}
        </p>`;
        return;
    }

    filteredScripts.forEach(script => {
        grid.appendChild(createScriptCard(script, query));
    });
}

function sortScripts(scripts, query) {
    if (query) {
        scripts.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
        return;
    }

    const savedOrder = (db.scriptOrders || {})[activeCategory];

    if (!savedOrder || !savedOrder.length) {
        scripts.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
        return;
    }

    scripts.sort((a, b) => {
        const indexA = savedOrder.indexOf(a.id);
        const indexB = savedOrder.indexOf(b.id);

        if (indexA === -1 && indexB === -1) return a.title.localeCompare(b.title, 'pt-BR');
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;

        return indexA - indexB;
    });
}

function createScriptCard(script, query) {
    const card = document.createElement('div');
    const isFavorite = (db.favorites || []).includes(script.id);
    const buttons = parseButtons(script.content);
    const allButtonsSelected = areAllButtonsSelected(script.id, script.content);

    card.className = `script-card${isFavorite ? ' favorited' : ''}`;
    card.id = `card-${script.id}`;
    card.draggable = !query;
    card.dataset.scriptId = script.id;

    if (!query) setupScriptDragEvents(card);

    const buttonGroupsHtml = buildButtonGroupsHtml(script, buttons);
    const copyClass = (!buttons.length || allButtonsSelected) ? 'btn-copy-ready' : 'btn-copy';
    const copyIcon = (!buttons.length || allButtonsSelected) ? 'fa-check-circle' : 'fa-copy';
    const dragHandleHtml = !query
        ? `<i class="fas fa-grip-vertical script-drag-handle" title="Arrastar para reordenar" ondragstart="event.stopPropagation()" draggable="false"></i>`
        : '';

    card.innerHTML = `
        <div class="script-title">
            ${dragHandleHtml}
            <span class="script-title-text">${esc(script.title)}</span>
            <div class="script-actions-top">
                <button class="btn-icon fav-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${script.id})" title="${isFavorite ? 'Remover' : 'Adicionar'}">
                    <i class="${isFavorite ? 'fas' : 'far'} fa-star"></i>
                </button>
                <button class="btn-icon" onclick="editScript(${script.id})" title="Editar"><i class="fas fa-edit"></i></button>
                <button class="btn-icon" onclick="deleteScript(${script.id})" title="Excluir"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
        <div class="script-content">${formatPreview(script.content, query)}</div>
        ${buttonGroupsHtml}
        <div class="copy-area">
            <button class="btn ${copyClass} copy-btn-main" onclick="initiateCopy(${script.id})">
                <i class="fas ${copyIcon}"></i> Copiar
            </button>
        </div>`;

    return card;
}

function setupScriptDragEvents(card) {
    card.addEventListener('dragstart', onScriptDragStart);
    card.addEventListener('dragover', onScriptDragOver);
    card.addEventListener('drop', onScriptDrop);
    card.addEventListener('dragend', onScriptDragEnd);
    card.addEventListener('dragleave', onScriptDragLeave);
}

function buildButtonGroupsHtml(script, buttons) {
    if (!buttons.length) return '';

    let html = `
        <div class="btn-groups-container">
            <div class="btn-group-header">
                <i class="fas fa-hand-pointer"></i> Escolha as opções antes de copiar
            </div>`;

    buttons.forEach((button, groupIndex) => {
        const state = cardStates[script.id] || {};

        html += `<div class="btn-group-row" data-group="${groupIndex}">`;

        button.options.forEach(option => {
            const isSelected = state[groupIndex] === option;
            const jsOption = escAttr(escJS(option));

            html += `<button class="btn-option${isSelected ? ' selected' : ''}"
                data-value="${escAttr(option)}"
                onclick="selectButton(${script.id},${groupIndex},'${jsOption}',document.getElementById('card-${script.id}'))">
                ${esc(option)}
            </button>`;
        });

        html += `</div>`;
    });

    html += `</div>`;

    return html;
}

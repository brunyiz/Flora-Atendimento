import { db } from '../storage.js?v=0.6.3';
import { esc } from '../utils.js?v=0.6.3';
import { cardStates } from './state.js?v=0.6.3';

export function parseButtons(content) {
    const re = /\[button:(.*?)\]/gi;
    const res = [];
    let match;

    while ((match = re.exec(content)) !== null) {
        res.push({
            fullMatch: match[0],
            options: match[1].split('/').map(option => option.trim()),
            index: res.length
        });
    }

    return res;
}

export function resolveButtons(content, scriptId) {
    const state = cardStates[scriptId] || {};
    let index = 0;

    return content.replace(/\[button:(.*?)\]/gi, () => {
        const selectedValue = state[index++];
        return selectedValue !== undefined ? selectedValue : '';
    });
}

export function areAllButtonsSelected(scriptId, content) {
    const buttons = parseButtons(content);

    if (!buttons.length) return true;

    const state = cardStates[scriptId] || {};
    return buttons.every((_, index) => state[index] !== undefined);
}

export function selectButton(scriptId, groupIndex, value, cardEl) {
    if (!cardStates[scriptId]) cardStates[scriptId] = {};

    cardStates[scriptId][groupIndex] = value;

    cardEl
        .querySelectorAll('.btn-group-row')
        [groupIndex]
        ?.querySelectorAll('.btn-option')
        .forEach(button => {
            button.classList.toggle('selected', button.dataset.value === value);
        });

    const script = db.scripts.find(item => item.id === scriptId);
    const copyBtn = cardEl.querySelector('.copy-btn-main');

    if (!script || !copyBtn) return;

    const isReady = areAllButtonsSelected(scriptId, script.content);

    copyBtn.className = `btn ${isReady ? 'btn-copy-ready' : 'btn-copy'} copy-btn-main`;
    copyBtn.innerHTML = `<i class="fas ${isReady ? 'fa-check-circle' : 'fa-copy'}"></i> Copiar`;
}

export function formatPreview(text, query = '') {
    let output = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    output = output.replace(/\*(.*?)\*/g, '<span class="bold-preview">*$1*</span>');

    output = output.replace(/\[button:(.*?)\]/gi, (_, inner) => {
        const options = inner
            .split('/')
            .map(option => option.trim())
            .join(' <span style="opacity:.4;">|</span> ');

        return `<span class="button-highlight"><i class="fas fa-hand-pointer" style="font-size:.7em;"></i> ${options}</span>`;
    });

    output = output.replace(/\[(.*?)\]/g, '<span class="variable-highlight">[$1]</span>');

    if (query) {
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        output = output.replace(new RegExp(`(${escapedQuery})`, 'gi'), '<span class="search-highlight">$1</span>');
    }

    return output;
}

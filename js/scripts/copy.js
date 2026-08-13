import { addToRecents, db, recentScripts } from '../storage.js?v=0.6.3';
import { esc, escAttr, showNotification } from '../utils.js?v=0.6.3';
import { closeModal, openModal } from '../ui.js?v=0.6.3';
import { currentScriptToCopy, setCurrentScriptToCopy } from './state.js?v=0.6.3';
import { resolveButtons } from './buttons.js?v=0.6.3';

export function renderRecents() {
    const section = document.getElementById('recent-section');
    const chips = document.getElementById('recent-chips');
    const validRecents = recentScripts.filter(id => db.scripts.find(script => script.id === id));

    if (!validRecents.length) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    chips.innerHTML = '';

    validRecents.forEach(id => {
        const script = db.scripts.find(item => item.id === id);

        if (!script) return;

        const chip = document.createElement('button');
        chip.className = 'recent-chip';
        chip.textContent = script.title;
        chip.title = `Copiar: ${script.title}`;
        chip.onclick = () => initiateCopy(id);

        chips.appendChild(chip);
    });
}

export function initiateCopy(id) {
    const script = db.scripts.find(item => item.id === id);

    if (!script) return;

    let text = resolveButtons(script.content, id);
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite';

    text = text
        .replace(/\[Saudação\]/gi, greeting)
        .replace(/\[Data Atual\]/gi, new Date().toLocaleDateString('pt-BR'));

    setCurrentScriptToCopy({ ...script, content: text });

    const remainingVariables = [...text.matchAll(/\[(?!button:)(.*?)\]/gi)].map(match => match[1]);
    const uniqueVariables = [...new Set(remainingVariables)];

    if (uniqueVariables.length) {
        openVariablesModal(uniqueVariables);
    } else {
        copyToClipboard(text);
    }

    addToRecents(id);
    renderRecents();
}

function openVariablesModal(variables) {
    const container = document.getElementById('variables-container');

    container.innerHTML = '';

    variables.forEach(variable => {
        container.innerHTML += `
            <div class="form-group">
                <label>${esc(variable)}</label>
                <input type="text"
                    class="form-control var-input"
                    data-var="${escAttr(variable)}"
                    placeholder="Digite: ${esc(variable.toLowerCase())}..."
                    onkeydown="if(event.key==='Enter')finalizeCopyVariables()">
            </div>`;
    });

    openModal('modal-variables');

    setTimeout(() => {
        const firstInput = document.querySelector('.var-input');
        if (firstInput) firstInput.focus();
    }, 80);
}

export function finalizeCopyVariables() {
    if (!currentScriptToCopy) return;

    let finalText = currentScriptToCopy.content;

    document.querySelectorAll('.var-input').forEach(input => {
        const name = input.getAttribute('data-var');
        const value = input.value || `[${name}]`;
        const safeName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        finalText = finalText.replace(new RegExp(`\\[${safeName}\\]`, 'g'), value);
    });

    copyToClipboard(finalText);
    closeModal('modal-variables');
}

function copyToClipboard(text) {
    if (navigator.clipboard?.writeText) {
        navigator.clipboard
            .writeText(text)
            .then(() => showNotification('✅ Copiado!'))
            .catch(() => fallbackCopy(text));
        return;
    }

    fallbackCopy(text);
}

function fallbackCopy(text) {
    const textarea = Object.assign(document.createElement('textarea'), {
        value: text,
        style: 'position:fixed;top:-9999px;'
    });

    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        showNotification('✅ Copiado!');
    } catch (error) {
        showNotification('Erro ao copiar.', 'error');
    }

    document.body.removeChild(textarea);
}

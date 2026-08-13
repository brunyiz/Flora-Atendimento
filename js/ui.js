import { db, saveData, clearData } from './storage.js?v=0.6.3';
import { esc, escJS, showNotification } from './utils.js?v=0.6.3';
import { getThemeSettings, syncThemeFromBackup } from './theme.js?v=0.6.3';

export function switchTab(tabId, btn) {
    document.querySelectorAll('.content-area').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.add('active');
    if (btn) btn.classList.add('active');
}

export function setupKeyboardShortcuts() {
    document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const el = document.getElementById('search-script');
            el.focus();
            el.select();
        }
        if (e.key === 'Escape') document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    });
    window.addEventListener('click', e => { 
        if (e.target.classList.contains('modal')) e.target.style.display = 'none'; 
    });
}

export function openModal(id) { document.getElementById(id).style.display = 'flex'; }
export function closeModal(id) { document.getElementById(id).style.display = 'none'; }
export function openManual() { openModal('modal-manual'); }

// ---- CONFIGURAÇÕES ----
export function addSettingItem(arrayName, inputId) {
    const input = document.getElementById(inputId), val = input.value.trim();
    if (!val) return;
    if (db[arrayName].includes(val)) { showNotification('Esse item já existe.', 'error'); return; }
    db[arrayName].push(val);
    saveData();
    input.value = '';
    window.renderAll(); 
    showNotification('Item adicionado!');
}

export function deleteSettingItem(arrayName, item) {
    if (confirm(`Remover "${item}"?`)) {
        db[arrayName] = db[arrayName].filter(i => i !== item);
        saveData();
        window.renderAll();
    }
}

export function renderSettingsList(arrayName, containerId) {
    const c = document.getElementById(containerId);
    c.innerHTML = '';
    [...db[arrayName]].sort((a, b) => a.localeCompare(b, 'pt-BR')).forEach(item => {
        c.innerHTML += `<div class="category-item"><span>${esc(item)}</span>
            <button class="btn-icon" onclick="deleteSettingItem('${arrayName}','${escJS(item)}')" title="Remover">
                <i class="fas fa-trash-alt"></i></button></div>`;
    });
}

// ---- TRANSFERÊNCIA ----
export function setupTransferListeners() {
    ['transf-sector', 'transf-client', 'transf-desc'].forEach(id => {
        document.getElementById(id).addEventListener('input', updateTransferPreview);
    });
}

export function renderSectorTags() {
    const c = document.getElementById('sector-tags');
    c.innerHTML = '';
    [...db.sectors].sort((a, b) => a.localeCompare(b, 'pt-BR')).forEach(sec => {
        const btn = document.createElement('button');
        btn.className = 'tag-btn';
        btn.textContent = sec;
        btn.onclick = () => {
            c.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            document.getElementById('transf-sector').value = sec;
            updateTransferPreview();
        };
        c.appendChild(btn);
    });
}

export function renderDescTags() {
    const c = document.getElementById('desc-tags');
    c.innerHTML = '';
    [...db.descriptions].sort((a, b) => a.localeCompare(b, 'pt-BR')).forEach(desc => {
        const btn = document.createElement('button');
        btn.className = 'tag-btn';
        btn.textContent = desc;
        btn.onclick = () => {
            c.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            document.getElementById('transf-desc').value = desc;
            updateTransferPreview();
        };
        c.appendChild(btn);
    });
}

export function updateTransferPreview() {
    const s = document.getElementById('transf-sector').value || '...';
    const c = document.getElementById('transf-client').value || '...';
    const d = document.getElementById('transf-desc').value || '...';
    document.getElementById('transfer-preview').textContent = 
        `*Atendimento transferido* ✅\n\n*Setor:* ${s}\n*Cliente:* ${c}\n*Descrição:* ${d}`;
}

export function generateAndCopyTransfer() {
    const s = document.getElementById('transf-sector').value;
    const c = document.getElementById('transf-client').value;
    const d = document.getElementById('transf-desc').value;
    if (!s || !d) { alert('Preencha ao menos o Setor e a Descrição!'); return; }
    const text = `*Atendimento transferido* ✅\n\n*Setor:* ${s}\n*Cliente:* ${c||'Não informado'}\n*Descrição:* ${d}`;
    if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text).then(() => showNotification('✅ Copiado!'));
    }
    document.getElementById('transf-client').value = '';
    document.getElementById('transf-desc').value = '';
    document.getElementById('desc-tags').querySelectorAll('.tag-btn').forEach(b => b.classList.remove('selected'));
    updateTransferPreview();
}

// ---- BACKUP & DADOS ----
export async function exportBackup() {
    saveData();
    const d = new Date();
    const dt = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const data = JSON.stringify({ ...db, ...getThemeSettings() }, null, 2);
    const name = `FloraAtendimento_Backup_${dt}.json`;
    try {
        if (window.showSaveFilePicker) {
            const h = await window.showSaveFilePicker({ suggestedName: name, types: [{ description: 'JSON', accept: { 'application/json': ['.json'] } }] });
            const w = await h.createWritable();
            await w.write(data);
            await w.close();
        } else {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
            a.download = name;
            a.click();
        }
        showNotification('Backup exportado com sucesso!');
    } catch (err) { if (err.name !== 'AbortError') showNotification('Falha ao exportar.', 'error'); }
}

export function importBackup(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        try {
            const data = JSON.parse(e.target.result);
            if (data && Array.isArray(data.scripts)) {
                const tc = data._themeColor;
                const tm = data._themeMode;
                delete data._themeColor;
                delete data._themeMode;
                Object.assign(db, { favorites: [] }, data); // sobrescreve
                saveData();
                window.renderAll();
                syncThemeFromBackup(tc, tm);
                showNotification('Backup restaurado com sucesso!');
            } else { alert('Arquivo de backup inválido.'); }
        } catch (err) { alert('Erro ao ler o arquivo: ' + err); }
    };
    reader.readAsText(file);
    event.target.value = '';
}

export function clearAllData() {
    if (confirm('ATENÇÃO: Apagar TODOS os dados?\nFaça um backup antes!')) {
        if (confirm('Último aviso — confirmar exclusão total?')) {
            clearData();
            window.resetScriptCategory();
            document.getElementById('search-script').value = '';
            window.renderAll();
            showNotification('Todos os dados foram apagados.');
        }
    }
}
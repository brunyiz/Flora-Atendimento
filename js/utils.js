export function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function escAttr(s) {
    return String(s).replace(/'/g, '&#39;').replace(/"/g, '&quot;');
}

export function escJS(s) {
    return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

export function showNotification(msg, type = 'success') {
    const el = document.createElement('div');
    el.className = `notification${type==='error'?' error':''}`;
    el.innerHTML = `<i class="fas fa-${type==='error'?'exclamation-circle':'check-circle'}"></i> <span>${msg}</span>`;
    document.body.appendChild(el);
    setTimeout(() => { 
        el.style.animation = 'slideIn .28s ease reverse';
        setTimeout(() => el.remove(), 280); 
    }, 2600);
}
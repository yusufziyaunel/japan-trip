// ============================================
// HARCAMA DAĞILIMI — net tablo + yığılmış çubuk (saf HTML/CSS)
// ============================================
// Veriler 13 günlük günlüklerden derlendi (birim ¥)
const spendingData = [
    { name: 'Alışveriş', icon: '🛍️', color: '#ff8fab', value: 270000,
      desc: 'PS Vita, Seiko saat, Uniqlo, Don Quijote, Loft, figürler, kimono & kumaş' },
    { name: 'Yemek', icon: '🍜', color: '#ffc857', value: 106000,
      desc: 'Sushiro, Coco Curry, Wagyu akşamı, Shibuya Sky, kafeler ve konbini molaları' },
    { name: 'Ulaşım', icon: '🚄', color: '#5ce1e6', value: 90000,
      desc: 'Shinkansen Tokyo ↔ Kyoto, e-SIM, Pasmo/Suica, coin locker' }
];
const TRIP_DAYS = 13;

function initSpending() {
    const root = document.getElementById('spendingTable');
    if (!root) return;

    const fmt = n => '¥' + n.toLocaleString('tr-TR');
    const total = spendingData.reduce((a, c) => a + c.value, 0);
    const pct = v => (v / total * 100);

    const rows = spendingData.map(c => `
        <tr>
            <td>
                <div class="cat">
                    <span class="cat-ic" style="--cc:${c.color}">${c.icon}</span>
                    <div><div class="cat-name">${c.name}</div><div class="cat-desc">${c.desc}</div></div>
                </div>
            </td>
            <td class="num amt">${fmt(c.value)}</td>
            <td class="pct-cell">
                <div class="pct-row">
                    <div class="pct-bar"><i data-w="${pct(c.value).toFixed(1)}" style="--cc:${c.color}"></i></div>
                    <span class="pct-num">%${Math.round(pct(c.value))}</span>
                </div>
            </td>
        </tr>`).join('');

    root.innerHTML = `
        <div class="spend-summary">
            <div class="spend-kpi main"><span class="k-label">Toplam Harcama</span><span class="k-value">${fmt(total)}</span></div>
            <div class="spend-kpi"><span class="k-label">Günlük Ortalama</span><span class="k-value">${fmt(Math.round(total / TRIP_DAYS / 100) * 100)}</span></div>
            <div class="spend-kpi"><span class="k-label">En Büyük Kalem</span><span class="k-value">${spendingData[0].icon} ${spendingData[0].name}</span></div>
        </div>

        <div class="spend-stack" aria-hidden="true">
            ${spendingData.map(c => `<span data-w="${pct(c.value).toFixed(2)}" style="background:${c.color}"></span>`).join('')}
        </div>

        <table class="spend-table">
            <thead><tr><th>Kategori</th><th class="num">Tutar</th><th>Pay</th></tr></thead>
            <tbody>${rows}</tbody>
            <tfoot><tr><td>Toplam</td><td class="num amt">${fmt(total)}</td><td class="pct-cell"><span class="pct-num" style="width:auto">%100</span></td></tr></tfoot>
        </table>

        <p class="spend-note">💡 Alışveriş bütçenin yarısından fazlasını götürdü; en çok Don Quijote ve Akihabara'da kontrolden çıktı.
        Yemek beklediğimden uygundu, konbini ve ara sokak ramencileri cüzdan dostu.</p>`;

    const fill = () => root.querySelectorAll('[data-w]').forEach(el => { el.style.width = el.dataset.w + '%'; });
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(es => {
            if (es.some(e => e.isIntersecting)) { fill(); io.disconnect(); }
        }, { threshold: 0.25 });
        io.observe(root);
    } else fill();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSpending);
} else {
    initSpending();
}

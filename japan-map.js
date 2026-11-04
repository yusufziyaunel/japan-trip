// ============================================
// İLLÜSTRATİF JAPONYA ROTASI — saf SVG (harici kütüphane yok)
// Kullanım: <div id="japanMap"></div> + bu script
// ============================================

const japanCities = [
    {
        id: 'tokyo', name: 'Tokyo', emoji: '🗼',
        lonlat: [139.69, 35.69],
        label: [-62, -58],                // etiket kaydırması (px, svg birimi)
        nights: '7 Gece',
        favorites: ['Shibuya Crossing', 'Senso-ji Tapınağı', 'teamLab Borderless', 'Shinjuku neon sokakları'],
        foods: ['Manbaken ramen', 'Tsukiji sushi', 'Konbini onigiri'],
        dayLink: 'days/day01.html',
        color: '#7c83ff'
    },
    {
        id: 'kyoto', name: 'Kyoto', emoji: '⛩️',
        lonlat: [135.77, 35.01],
        label: [-70, -62],
        nights: '3 Gece',
        favorites: ['Fushimi Inari (10.000 Torii)', 'Kinkaku-ji (Altın Tapınak)', 'Arashiyama Bambu Ormanı', 'Gion & Yasaka Shrine'],
        foods: ['Wagyu (kendin pişir)', 'Hario Cafe matcha & cheesecake', 'Okonomiyaki'],
        dayLink: 'days/day05.html',
        color: '#ff7ba5'
    },
    {
        id: 'osaka', name: 'Osaka', emoji: '🏯',
        lonlat: [135.50, 34.69],
        label: [-78, 44],
        nights: 'Günübirlik',
        favorites: ['Dotonbori & Glico Man', 'Osaka Kalesi (Osaka-jo)', 'Namba Yasaka Tapınağı'],
        foods: ['Coco Curry (Karē)', 'Souffle pancake', 'Sushiro'],
        dayLink: 'days/day08.html',
        color: '#4facfe'
    },
    {
        id: 'nara', name: 'Nara', emoji: '🦌',
        lonlat: [135.80, 34.69],
        label: [26, 50],
        nights: 'Günübirlik',
        favorites: ['Nara Park (kutsal geyikler)', 'Todai-ji & Dev Buda', 'Geyik bisküvisi pazarlığı'],
        foods: ['Shika senbei (geyik krakeri)', 'Yol üstü atıştırmalıklar'],
        dayLink: 'days/day08.html',
        color: '#3fc77a'
    }
];

// --- Projeksiyon: lon/lat → svg (820 x 480) ---
const MAP_W = 820, MAP_H = 480;
const LON0 = 131.5, LAT0 = 37.6, KX = 82, KY = 100;
const proj = ([lon, lat]) => [(lon - LON0) * KX, (LAT0 - lat) * KY];

// --- Kıyı hatları (basitleştirilmiş, Catmull-Rom ile yumuşatılır) ---
const HONSHU = [
    [142.6, 38.6], [139.6, 38.6], [139.2, 37.9], [138.5, 37.4], [137.85, 37.04], [137.3, 36.8],
    [136.95, 37.1], [137.35, 37.52], [136.8, 37.3], [136.7, 37.0], [136.4, 36.5], [136.1, 36.2],
    [136.0, 35.8], [135.75, 35.55], [135.5, 35.58], [135.3, 35.5], [135.22, 35.78], [134.7, 35.65],
    [134.3, 35.6], [133.9, 35.55], [133.3, 35.5], [133.0, 35.57], [132.6, 35.4], [132.0, 35.0],
    [131.4, 34.4], [130.8, 34.0], [131.57, 34.05], [132.2, 34.17], [132.45, 34.35], [133.2, 34.4],
    [133.9, 34.6], [134.5, 34.7], [134.8, 34.75], [135.2, 34.68], [135.4, 34.6], [135.45, 34.5],
    [135.15, 34.2], [135.1, 33.85], [135.35, 33.65], [135.77, 33.43], [136.0, 33.7], [136.2, 34.07],
    [136.5, 34.25], [136.9, 34.27], [136.85, 34.5], [136.55, 34.7], [136.65, 34.97], [136.85, 35.05],
    [137.0, 34.85], [136.98, 34.72], [137.0, 34.6], [137.35, 34.7], [137.8, 34.65], [138.22, 34.6],
    [138.5, 35.0], [138.75, 34.75], [138.85, 34.6], [139.1, 34.97], [139.07, 35.1], [139.15, 35.25],
    [139.5, 35.2], [139.65, 35.13], [139.75, 35.3], [139.65, 35.4], [139.8, 35.6], [140.1, 35.6],
    [139.8, 35.3], [139.88, 34.9], [140.3, 35.1], [140.87, 35.7], [140.7, 36.2], [140.6, 36.6],
    [140.9, 37.0], [141.05, 37.4], [142.0, 38.6]
];
const SHIKOKU = [
    [134.05, 34.35], [134.6, 34.2], [134.6, 33.9], [134.18, 33.25], [133.55, 33.5], [133.0, 32.72],
    [132.55, 33.2], [132.0, 33.35], [132.7, 33.85], [133.0, 34.07], [133.3, 34.0], [133.7, 34.3]
];
const KYUSHU = [
    [129.0, 34.4], [130.9, 33.95], [131.4, 33.6], [131.7, 33.35], [132.0, 33.25], [131.85, 32.9],
    [131.6, 32.6], [131.3, 32.2], [129.0, 32.2]
];
const AWAJI = [
    [135.02, 34.6], [135.03, 34.45], [134.9, 34.27], [134.7, 34.2], [134.65, 34.32], [134.85, 34.5]
];
const BIWA = [
    [136.0, 35.6], [136.2, 35.45], [136.17, 35.25], [135.95, 35.0], [135.85, 35.1], [136.0, 35.3], [135.95, 35.5]
];

// Rota: Tokaido Shinkansen + Nara/Yamatoji (gerçek güzergâh)
const RAIL = [
    [139.77, 35.68], [139.74, 35.63], [139.62, 35.51], [139.16, 35.26], [139.08, 35.1], [138.91, 35.13],
    [138.66, 35.14], [138.39, 34.97], [138.01, 34.77], [137.74, 34.70], [137.38, 34.76], [137.08, 34.96],
    [136.88, 35.17], [136.69, 35.32], [136.29, 35.31], [135.76, 34.99],
    [135.77, 34.92], [135.80, 34.79], [135.80, 34.69],
    [135.63, 34.58], [135.51, 34.65], [135.50, 34.69]
];

// Dağ (Japon Alpleri) ve orman silüetleri [lon, lat, ölçek]
const MOUNTAINS = [
    [137.6, 36.4, 1.15], [137.9, 36.0, 1.0], [138.3, 36.3, 0.9], [137.3, 36.1, 0.85], [138.0, 36.7, 0.8],
    [138.6, 36.0, 0.75], [136.8, 35.9, 0.7], [139.1, 36.5, 0.8], [139.5, 36.9, 0.7], [134.0, 35.2, 0.6],
    [133.0, 35.1, 0.6], [136.4, 34.1, 0.6], [135.6, 34.2, 0.55]
];
const TREES = [
    [138.9, 36.0], [139.3, 36.2], [140.2, 36.4], [140.0, 36.8], [134.9, 35.3], [135.2, 35.2], [133.6, 34.9],
    [132.4, 34.8], [136.0, 34.55], [136.4, 34.45], [137.3, 35.2], [137.6, 35.0], [138.0, 35.2], [139.5, 36.5],
    [134.3, 34.85], [135.1, 35.45]
];

// --- Yardımcılar ---
function smoothPath(pts, closed = true) {
    const p = pts.map(proj);
    const n = p.length;
    const get = i => closed ? p[(i + n) % n] : p[Math.max(0, Math.min(n - 1, i))];
    let d = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
    const segs = closed ? n : n - 1;
    for (let i = 0; i < segs; i++) {
        const p0 = get(i - 1), p1 = get(i), p2 = get(i + 1), p3 = get(i + 2);
        const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
        const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
        d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return d + (closed ? 'Z' : '');
}
const linePath = pts => 'M' + pts.map(proj).map(q => q[0].toFixed(1) + ',' + q[1].toFixed(1)).join(' L');

function mountainSVG([lon, lat, s]) {
    const [x, y] = proj([lon, lat]);
    const w = 26 * s, h = 26 * s;
    return `<g transform="translate(${x.toFixed(1)},${y.toFixed(1)})" class="m-hill">
        <path d="M${-w} 0 L${-w * 0.1} ${-h} L${w * 0.45} ${-h * 0.45} L${w * 0.75} ${-h * 0.8} L${w * 1.3} 0 Z" fill="#6fa987"/>
        <path d="M${-w * 0.1} ${-h} L${-w * 0.42} ${-h * 0.6} L${-w * 0.1} ${-h * 0.7} L${w * 0.18} ${-h * 0.58} Z" fill="#fff" opacity=".92"/>
        <path d="M${-w * 0.1} ${-h} L${w * 0.45} ${-h * 0.45} L${w * 1.3} 0 L${w * 0.2} 0 Z" fill="#000" opacity=".1"/>
    </g>`;
}
function treeSVG([lon, lat]) {
    const [x, y] = proj([lon, lat]);
    return `<g transform="translate(${x.toFixed(1)},${y.toFixed(1)})">
        <path d="M0 -13 L7 0 L-7 0 Z" fill="#5a9e72"/><path d="M0 -20 L5 -9 L-5 -9 Z" fill="#6fb383"/>
        <rect x="-1" y="0" width="2" height="3" fill="#7a5c3a"/></g>`;
}
function fujiSVG() {
    const [x, y] = proj([138.73, 35.36]);
    return `<g transform="translate(${x.toFixed(1)},${y.toFixed(1)})" class="fuji">
        <path d="M-40 0 L-8 -46 L8 -46 L40 0 Z" fill="#5f7fc4"/>
        <path d="M-12 -38 L-8 -46 L8 -46 L12 -38 L6 -34 L1 -39 L-4 -33 Z" fill="#fff"/>
        <path d="M8 -46 L40 0 L14 0 Z" fill="#000" opacity=".12"/>
        <text y="14" text-anchor="middle" class="map-poi">Fuji Dağı</text></g>`;
}

function seaWaves() {
    let out = '';
    const spots = [[600, 60], [700, 140], [560, 420], [740, 330], [640, 250], [80, 60], [180, 120], [60, 190],
                   [330, 40], [470, 70], [350, 440], [470, 400], [690, 440], [770, 70], [250, 205]];
    spots.forEach(([x, y]) => {
        out += `<path d="M${x} ${y} q8 -7 16 0 t16 0 t16 0" class="wave"/>`;
    });
    return out;
}

function cloudSVG(x, y, s, dur, delay) {
    return `<g class="cloud" style="--dur:${dur}s;animation-delay:${delay}s" transform="translate(${x},${y}) scale(${s})">
        <ellipse cx="0" cy="0" rx="26" ry="9" fill="#fff" opacity=".8"/>
        <circle cx="-8" cy="-8" r="10" fill="#fff" opacity=".8"/>
        <circle cx="8" cy="-10" r="12" fill="#fff" opacity=".8"/></g>`;
}

function buildSVG() {
    const honshu = smoothPath(HONSHU);
    const shikoku = smoothPath(SHIKOKU);
    const kyushu = smoothPath(KYUSHU);
    const awaji = smoothPath(AWAJI);
    const biwa = smoothPath(BIWA);
    const rail = linePath(RAIL);
    const land = [honshu, shikoku, kyushu, awaji].join(' ');

    const cityGroups = japanCities.map(c => {
        const [x, y] = proj(c.lonlat);
        const [lx, ly] = c.label;
        const bx = x + lx, by = y + ly;
        return `
        <g class="city" data-id="${c.id}" tabindex="0" role="button" aria-label="${c.name} ayrıntılarını göster" style="--c:${c.color}">
            <line class="leader" x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(bx + 56).toFixed(1)}" y2="${(by + (ly < 0 ? 40 : 0)).toFixed(1)}"/>
            <circle class="pulse" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="9"/>
            <circle class="dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7"/>
            <g class="chip" transform="translate(${bx.toFixed(1)},${by.toFixed(1)})">
                <rect width="112" height="40" rx="20"/>
                <circle cx="20" cy="20" r="15" class="chip-ic"/>
                <text x="20" y="26" text-anchor="middle" class="chip-emoji">${c.emoji}</text>
                <text x="42" y="17" class="chip-name">${c.name}</text>
                <text x="42" y="31" class="chip-sub">${c.nights}</text>
            </g>
        </g>`;
    }).join('');

    return `
    <svg viewBox="0 0 ${MAP_W} ${MAP_H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tokyo, Kyoto, Osaka ve Nara rotasını gösteren illüstrasyon harita">
        <defs>
            <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#2b5f93"/><stop offset="1" stop-color="#1b3f6b"/>
            </linearGradient>
            <linearGradient id="landG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#d9efc2"/><stop offset="1" stop-color="#b6dba0"/>
            </linearGradient>
            <filter id="soft" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#06152b" flood-opacity=".45"/>
            </filter>
            <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#fff" opacity=".07"/>
            </pattern>
            <clipPath id="frame"><rect width="${MAP_W}" height="${MAP_H}" rx="0"/></clipPath>
        </defs>
        <g clip-path="url(#frame)">
            <rect width="${MAP_W}" height="${MAP_H}" fill="url(#sea)"/>
            <rect width="${MAP_W}" height="${MAP_H}" fill="url(#dots)"/>
            ${seaWaves()}

            <!-- kıyı halesi -->
            <path d="${land}" fill="none" stroke="#6fb4e6" stroke-opacity=".28" stroke-width="30" stroke-linejoin="round"/>
            <path d="${land}" fill="none" stroke="#8cc9f0" stroke-opacity=".35" stroke-width="16" stroke-linejoin="round"/>
            <!-- kara -->
            <path d="${land}" fill="url(#landG)" stroke="#f4fbe9" stroke-width="3" stroke-linejoin="round" filter="url(#soft)"/>
            <path d="${biwa}" fill="#7ec0ea" stroke="#f4fbe9" stroke-width="1.5"/>

            ${TREES.map(treeSVG).join('')}
            ${MOUNTAINS.map(mountainSVG).join('')}
            ${fujiSVG()}

            <!-- deniz adları -->
            <text x="215" y="85" class="sea-name" transform="rotate(-8 215 85)">JAPON DENİZİ</text>
            <text x="640" y="420" class="sea-name">PASİFİK OKYANUSU</text>
            <text x="318" y="372" class="sea-name sm">SETO İÇ DENİZİ</text>
            <text x="38" y="440" class="sea-name sm">KYUSHU</text>
            <text x="198" y="440" class="sea-name sm">SHIKOKU</text>

            <!-- tren hattı -->
            <path d="${rail}" class="rail-bed" id="railPath"/>
            <path d="${rail}" class="rail-ties"/>
            <g class="train">
                <circle r="9" fill="#fff" stroke="#ff5e7e" stroke-width="2.5"/>
                <text y="4.5" text-anchor="middle" font-size="11">🚄</text>
                <animateMotion dur="14s" repeatCount="indefinite" rotate="0" keyPoints="0;1;0" keyTimes="0;.5;1" calcMode="linear">
                    <mpath href="#railPath"/>
                </animateMotion>
            </g>

            ${cloudSVG(120, 300, 1.1, 38, 0)}
            ${cloudSVG(560, 90, 0.9, 46, -12)}
            ${cloudSVG(300, 250, 0.8, 52, -22)}

            ${cityGroups}

            <!-- pusula -->
            <g transform="translate(770,56)">
                <circle r="26" fill="#0f2747" fill-opacity=".7" stroke="#fff" stroke-opacity=".35"/>
                <path d="M0 -20 L5 0 L0 20 L-5 0 Z" fill="#fff" fill-opacity=".25"/>
                <path d="M0 -20 L5 0 L-5 0 Z" fill="#ff5e7e"/>
                <text y="-27" text-anchor="middle" class="compass">K</text>
            </g>
        </g>
    </svg>`;
}

function cityCardHTML(c) {
    const fav = c.favorites.map(f => `<li>${f}</li>`).join('');
    const food = c.foods.map(f => `<span class="popup-tag">${f}</span>`).join('');
    const mark = c.name.toUpperCase();
    return `
        <div class="map-popup postcard" style="--accent:${c.color}">
            <div class="pc-top">
                <div class="popup-title"><span class="popup-emoji">${c.emoji}</span> ${c.name} <small>${c.nights}</small></div>
                <div class="stamp-wrap" aria-hidden="true">
                    <div class="stamp" style="--st:${c.color}"><span class="stamp-ic">${c.emoji}</span><span class="stamp-val">JAPONYA</span></div>
                    <svg class="postmark" viewBox="0 0 150 64" aria-hidden="true">
                        <g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                            <circle cx="32" cy="32" r="27"/><circle cx="32" cy="32" r="22" stroke-width="1"/>
                            <path d="M66 18q8-6 16 0t16 0t16 0t16 0"/><path d="M66 32q8-6 16 0t16 0t16 0t16 0"/><path d="M66 46q8-6 16 0t16 0t16 0t16 0"/>
                        </g>
                        <text x="32" y="30" text-anchor="middle" font-size="9" font-weight="800" fill="currentColor">${mark}</text>
                        <text x="32" y="42" text-anchor="middle" font-size="8" font-weight="700" fill="currentColor">03·2026</text>
                    </svg>
                </div>
            </div>
            <div class="popup-section"><strong>📍 Favori Lokasyonlarım</strong><ul>${fav}</ul></div>
            <div class="popup-section"><strong>🍽️ Öne Çıkan Lezzetler</strong><div class="popup-tags">${food}</div></div>
            <a href="${c.dayLink}" class="popup-btn">📖 Günlüğü Oku</a>
        </div>`;
}

function initJapanMap() {
    const mapEl = document.getElementById('japanMap');
    if (!mapEl) return;

    mapEl.innerHTML = `
        <div class="jm-stage">${buildSVG()}</div>
        <aside class="jm-panel" aria-live="polite"></aside>`;

    const panel = mapEl.querySelector('.jm-panel');
    const nodes = mapEl.querySelectorAll('.city');

    function select(id) {
        const c = japanCities.find(x => x.id === id);
        if (!c) return;
        nodes.forEach(n => n.classList.toggle('active', n.dataset.id === id));
        panel.innerHTML = cityCardHTML(c);
        panel.style.setProperty('--accent', c.color);
    }

    nodes.forEach(n => {
        n.addEventListener('click', () => select(n.dataset.id));
        n.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(n.dataset.id); }
        });
    });

    select('tokyo');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initJapanMap);
} else {
    initJapanMap();
}

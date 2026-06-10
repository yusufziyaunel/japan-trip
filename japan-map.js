// ============================================
// İNTERAKTİF JAPONYA ROTASI - Leaflet.js
// ============================================
// Gereksinim: Leaflet CSS + JS CDN (index.html'de yüklenir)
// Kullanım: <div id="japanMap"></div> + bu script
// ============================================

// --- Şehir verileri (kendi içeriğinle düzenle) ---
const japanCities = [
    {
        name: 'Tokyo',
        emoji: '🗼',
        coords: [35.6762, 139.6503],
        nights: '7 Gece',
        favorites: ['Shibuya Crossing', 'Senso-ji Tapınağı', 'teamLab Borderless', 'Shinjuku neon sokakları'],
        foods: ['Manbaken ramen', 'Tsukiji sushi', 'Konbini onigiri'],
        dayLink: 'days/day01.html',
        color: '#667eea'
    },
    {
        name: 'Kyoto',
        emoji: '⛩️',
        coords: [35.0116, 135.7681],
        nights: '3 Gece',
        favorites: ['Fushimi Inari (10.000 Torii)', 'Kinkaku-ji (Altın Tapınak)', 'Arashiyama Bambu Ormanı', 'Gion & Yasaka Shrine'],
        foods: ['Wagyu (kendin pişir)', 'Hario Cafe matcha & cheesecake', 'Okonomiyaki'],
        dayLink: 'days/day05.html',
        color: '#fa709a'
    },
    {
        name: 'Osaka',
        emoji: '🏯',
        coords: [34.6937, 135.5023],
        nights: 'Günübirlik',
        favorites: ['Dotonbori & Glico Man', 'Osaka Kalesi (Osaka-jo)', 'Namba Yasaka Tapınağı'],
        foods: ['Coco Curry (Karē)', 'Souffle pancake', 'Sushiro'],
        dayLink: 'days/day08.html',
        color: '#4facfe'
    },
    {
        name: 'Nara',
        emoji: '🦌',
        coords: [34.6851, 135.8048],
        nights: 'Günübirlik',
        favorites: ['Nara Park (kutsal geyikler)', 'Todai-ji & Dev Buda', 'Geyik bisküvisi pazarlığı'],
        foods: ['Shika senbei (geyik krakeri)', 'Yol üstü atıştırmalıklar'],
        dayLink: 'days/day08.html',
        color: '#38b000'
    }
];

function initJapanMap() {
    const mapEl = document.getElementById('japanMap');
    if (!mapEl) return;

    // Leaflet yüklenemediyse (CDN engellendi / internet yok) görünür mesaj göster
    if (typeof L === 'undefined') {
        console.warn('Leaflet yüklenemedi — CDN engellenmiş veya internet yok olabilir.');
        mapEl.innerHTML =
            '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;' +
            'height:100%;text-align:center;color:rgba(255,255,255,0.6);padding:2rem;">' +
            '<div style="font-size:2.5rem;">🗺️</div>' +
            '<p style="margin-top:0.6rem;">Harita yüklenemedi.<br>' +
            '<small>İnternet bağlantını kontrol et (harita çevrimiçi yüklenir).</small></p></div>';
        return;
    }

    // Haritayı oluştur - Japonya'nın orta noktasına odakla
    const map = L.map('japanMap', {
        center: [35.0, 137.4],
        zoom: 6,
        scrollWheelZoom: false,   // sayfa kaydırmasını bozmasın
        zoomControl: true
    });

    // Karanlık/muted altlık (CartoDB Dark Matter)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    const markerCoords = [];

    japanCities.forEach(city => {
        // Renkli özel pin (DivIcon)
        const icon = L.divIcon({
            className: 'city-pin',
            html: `<span class="pin-dot" style="--pin-color:${city.color}">${city.emoji}</span>`,
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -38]
        });

        const favHTML = city.favorites.map(f => `<li>${f}</li>`).join('');
        const foodHTML = city.foods.map(f => `<span class="popup-tag">${f}</span>`).join('');

        const popupHTML = `
            <div class="map-popup" style="--accent:${city.color}">
                <div class="popup-title">${city.emoji} ${city.name} <small>${city.nights}</small></div>
                <div class="popup-section">
                    <strong>📍 Favori Lokasyonlarım</strong>
                    <ul>${favHTML}</ul>
                </div>
                <div class="popup-section">
                    <strong>🍽️ Öne Çıkan Lezzetler</strong>
                    <div class="popup-tags">${foodHTML}</div>
                </div>
                <a href="${city.dayLink}" class="popup-btn">📖 Günlüğü Oku</a>
            </div>
        `;

        L.marker(city.coords, { icon })
            .addTo(map)
            .bindPopup(popupHTML, { maxWidth: 280, className: 'japan-popup' });

        markerCoords.push(city.coords);
    });

    // GERÇEK TREN HATTI güzergahı (Tokaido Shinkansen + Nara/Yamatoji hattı)
    // Düz çizgi yerine rayların gerçek coğrafi konumlarını takip eder:
    // kıyı boyunca Shizuoka, içeriye Nagoya, sonra Kyoto/Nara/Osaka.
    const railRoute = [
        // Tokaido Shinkansen: Tokyo → Kyoto
        [35.6812, 139.7671], // Tokyo
        [35.6285, 139.7387], // Shinagawa
        [35.5070, 139.6174], // Shin-Yokohama
        [35.2560, 139.1553], // Odawara
        [35.1031, 139.0780], // Atami
        [35.1264, 138.9110], // Mishima
        [35.1420, 138.6630], // Shin-Fuji
        [34.9720, 138.3890], // Shizuoka
        [34.7690, 138.0140], // Kakegawa
        [34.7040, 137.7350], // Hamamatsu
        [34.7630, 137.3820], // Toyohashi
        [34.9620, 137.0830], // Mikawa-Anjo
        [35.1700, 136.8820], // Nagoya
        [35.3160, 136.6860], // Gifu-Hashima
        [35.3140, 136.2900], // Maibara
        [34.9858, 135.7588], // Kyoto
        // Nara hattı: Kyoto → Nara
        [34.9170, 135.7730], // Uji civarı
        [34.7900, 135.8000],
        [34.6851, 135.8048], // Nara
        // Yamatoji hattı: Nara → Osaka
        [34.5800, 135.6300], // Kashiwara
        [34.6460, 135.5140], // Tennoji
        [34.6937, 135.5023]  // Osaka
    ];

    // TREN YOLU (railway) stili çizgi — gerçek güzergah üzerinde iki katman
    // 1) Çelik ray yatağı (kalın alt çizgi)
    L.polyline(railRoute, {
        color: '#7984a8', weight: 5, opacity: 0.9,
        lineJoin: 'round', lineCap: 'round'
    }).addTo(map);
    // 2) Beyaz traversler (railway sleepers)
    L.polyline(railRoute, {
        color: '#ffffff', weight: 5, opacity: 0.85,
        dashArray: '2, 9', lineCap: 'butt'
    }).addTo(map);

    // Tüm pinler ekrana sığsın
    map.fitBounds(markerCoords, { padding: [60, 60] });

    // Tıklayınca scroll-zoom aktifleşsin, dışına çıkınca kapansın (UX)
    map.on('click', () => map.scrollWheelZoom.enable());
    map.on('mouseout', () => map.scrollWheelZoom.disable());

    // Container boyutu sonradan oturursa karoların yarım kalmasını önle
    setTimeout(() => map.invalidateSize(), 200);
    window.addEventListener('load', () => map.invalidateSize());
    window.addEventListener('resize', () => map.invalidateSize());

}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initJapanMap);
} else {
    initJapanMap();
}

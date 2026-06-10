// ============================================
// HARCAMA & BÜTÇE TAKİBİ - Chart.js
// ============================================
// Gereksinim: Chart.js CDN (index.html'de yüklenir)
// Kullanım: <canvas id="spendingChart"></canvas> + bu script
// ============================================

// --- Harcama verileri (13 günlük gerçek loglardan çıkarıldı, birim ¥) ---
// Toplam günlük harcama ≈ ¥465.800 (day01–day13 notlarının toplamı)
// Kategori dağılımı, günlük notlardaki kalemlerden derlendi:
//   ULAŞIM ≈ 90.000  → Shinkansen Tokyo↔Kyoto x2 (~55k) + e-sim 8.800 + günlük IC kart (Pasmo/Suica) + coin locker
//   YEMEK  ≈ 106.000 → Sushiro 4.370, Ginza Tenryu gyoza 3.780, Coco Curry 4.711, Shibuya Sky 7.755,
//                       Wagyu akşamı, burgerler, pancake'ler, matcha kafeler, onigiri molaları...
//   ALIŞVERIŞ ≈ 270.000 → PS Vita, Seiko saat, Uniqlo hauls, Don Quijote x3 (18.425 + 8.839...),
//                          Ginza Loft 7.006, Namba Parks 6.553, figürler, kimono/kumaş, duty-free
const spendingData = {
    labels: ['Ulaşım (IC Kart/Shinkansen)', 'Yemek', 'Alışveriş'],
    values: [90000, 106000, 270000]   // ¥ — gerçek loglardan
};

function initSpendingChart() {
    const canvas = document.getElementById('spendingChart');
    if (!canvas || typeof Chart === 'undefined') {
        console.warn('Chart.js veya #spendingChart bulunamadı.');
        return;
    }

    const total = spendingData.values.reduce((a, b) => a + b, 0);

    // Dark mode uyumlu pastel-neon tonlar
    const palette = ['#7c83ff', '#ff8fab', '#5ce1e6'];   // mor / pembe / turkuaz
    const glow    = ['#a5abff', '#ffb3c6', '#9af0f3'];   // hover için açık tonlar

    new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: spendingData.labels,
            datasets: [{
                data: spendingData.values,
                backgroundColor: palette,
                hoverBackgroundColor: glow,
                borderColor: '#0a0e27',
                borderWidth: 4,
                hoverOffset: 14
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '62%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'rgba(255,255,255,0.85)',
                        font: { family: 'Inter', size: 14 },
                        padding: 18,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(10,14,39,0.95)',
                    titleColor: '#fff',
                    bodyColor: 'rgba(255,255,255,0.9)',
                    borderColor: 'rgba(124,131,255,0.5)',
                    borderWidth: 1,
                    padding: 14,
                    cornerRadius: 10,
                    titleFont: { family: 'Inter', size: 14, weight: '600' },
                    bodyFont: { family: 'Inter', size: 13 },
                    callbacks: {
                        label: function(ctx) {
                            const val = ctx.parsed;
                            const pct = ((val / total) * 100).toFixed(1);
                            return `  ¥${val.toLocaleString('tr-TR')}  •  %${pct}`;
                        }
                    }
                }
            }
        }
    });

    // Ortadaki toplam etiketi (varsa)
    const totalEl = document.getElementById('spendingTotal');
    if (totalEl) totalEl.textContent = '¥' + total.toLocaleString('tr-TR');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSpendingChart);
} else {
    initSpendingChart();
}

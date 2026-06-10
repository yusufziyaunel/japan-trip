// ============================================
// YOLCULUK GRAFİKLERİ — Adım & Puan (Chart.js)
// Gerçek günlük loglardan (day01–day13)
// Gereksinim: Chart.js CDN (index.html'de zaten yüklü)
// ============================================

// Günlük gerçek veriler (day01–day13 notlarından)
const tripDaily = {
    labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13'],
    steps:  [18433, 29738, 25731, 27040, 16085, 29258, 19450, 26544, 18229, 27059, 21747, 19507, 14917],
    rating: [8.5, 9, 10, 9.5, 9, 9.5, 9, 9, 9, 10, 8, 10, 7],
    // şehir renk kodu (tooltip/nokta için): Tokyo, Kyoto, Osaka/Nara
    cityOfDay: ['T','T','T','T','K','K','K','O','O','T','T','T','T']
};

const cityColors = { T: '#667eea', K: '#fa709a', O: '#4facfe' };

function gridTheme() {
    return {
        grid: { color: 'rgba(255,255,255,0.07)' },
        ticks: { color: 'rgba(255,255,255,0.6)', font: { family: 'Inter', size: 11 } }
    };
}

function initStepsChart() {
    const c = document.getElementById('stepsChart');
    if (!c || typeof Chart === 'undefined') return;

    const pointColors = tripDaily.cityOfDay.map(c => cityColors[c]);

    new Chart(c, {
        type: 'line',
        data: {
            labels: tripDaily.labels,
            datasets: [{
                label: 'Adım',
                data: tripDaily.steps,
                borderColor: '#667eea',
                backgroundColor: (ctx) => {
                    const { ctx: g, chartArea } = ctx.chart;
                    if (!chartArea) return 'rgba(102,126,234,0.15)';
                    const grad = g.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    grad.addColorStop(0, 'rgba(102,126,234,0.35)');
                    grad.addColorStop(1, 'rgba(102,126,234,0.02)');
                    return grad;
                },
                fill: true,
                tension: 0.4,
                borderWidth: 3,
                pointBackgroundColor: pointColors,
                pointBorderColor: '#0a0e27',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(10,14,39,0.95)',
                    borderColor: 'rgba(102,126,234,0.5)', borderWidth: 1,
                    padding: 12, cornerRadius: 10,
                    callbacks: {
                        title: (items) => `${items[0].label}. Gün`,
                        label: (ctx) => `  ${ctx.parsed.y.toLocaleString('tr-TR')} adım`
                    }
                }
            },
            scales: {
                x: gridTheme(),
                y: { ...gridTheme(), beginAtZero: true,
                     ticks: { ...gridTheme().ticks,
                              callback: (v) => (v / 1000) + 'k' } }
            }
        }
    });
}

function initRatingChart() {
    const c = document.getElementById('ratingChart');
    if (!c || typeof Chart === 'undefined') return;

    new Chart(c, {
        type: 'bar',
        data: {
            labels: tripDaily.labels,
            datasets: [{
                label: 'Puan',
                data: tripDaily.rating,
                backgroundColor: tripDaily.cityOfDay.map(c => cityColors[c] + 'cc'),
                hoverBackgroundColor: tripDaily.cityOfDay.map(c => cityColors[c]),
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(10,14,39,0.95)',
                    borderColor: 'rgba(250,112,154,0.5)', borderWidth: 1,
                    padding: 12, cornerRadius: 10,
                    callbacks: {
                        title: (items) => `${items[0].label}. Gün`,
                        label: (ctx) => `  ${ctx.parsed.y} / 10 ⭐`
                    }
                }
            },
            scales: {
                x: gridTheme(),
                y: { ...gridTheme(), beginAtZero: true, max: 10,
                     ticks: { ...gridTheme().ticks, stepSize: 2 } }
            }
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { initStepsChart(); initRatingChart(); });
} else {
    initStepsChart(); initRatingChart();
}

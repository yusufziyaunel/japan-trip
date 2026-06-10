// ============================================
// BELGESEL GELİŞTİRMELERİ — Motion & Storytelling
// Scroll progress bar · scroll-reveal · animasyonlu sayaçlar · Ken Burns
// index.html'e <script> ile eklenir (defer)
// ============================================

(function () {
    'use strict';

    // --- 1) Scroll ilerleme çubuğu ---
    function initScrollProgress() {
        const bar = document.createElement('div');
        bar.className = 'scroll-progress';
        document.body.appendChild(bar);

        const update = () => {
            const h = document.documentElement;
            const scrolled = h.scrollTop;
            const max = h.scrollHeight - h.clientHeight;
            bar.style.width = (max > 0 ? (scrolled / max) * 100 : 0) + '%';
        };
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
    }

    // --- 2) Animasyonlu sayaç ---
    // Bir elemanı 0'dan data-target'a sayar. data-suffix / data-decimals destekli.
    function animateCounter(el) {
        const target = parseFloat(el.dataset.target);
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const dur = 1500;
        const start = performance.now();

        function frame(now) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);   // easeOutCubic
            const val = target * eased;
            el.textContent = prefix + val.toLocaleString('tr-TR', {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            }) + suffix;
            if (p < 1) requestAnimationFrame(frame);
            else el.textContent = prefix + target.toLocaleString('tr-TR', {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            }) + suffix;
        }
        requestAnimationFrame(frame);
    }

    // --- 3) Scroll-reveal + sayaç tetikleyici (IntersectionObserver) ---
    function initReveal() {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const revealEls = document.querySelectorAll('.reveal');
        const counters = document.querySelectorAll('.stat-num[data-target]');

        if (reduce) {
            revealEls.forEach(el => el.classList.add('in-view'));
            counters.forEach(el => {
                const t = parseFloat(el.dataset.target);
                const d = parseInt(el.dataset.decimals || '0', 10);
                el.textContent = (el.dataset.prefix || '') +
                    t.toLocaleString('tr-TR', { minimumFractionDigits: d, maximumFractionDigits: d }) +
                    (el.dataset.suffix || '');
            });
            return;
        }

        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('in-view');
                // İçindeki sayaçları başlat
                entry.target.querySelectorAll('.stat-num[data-target]').forEach(animateCounter);
                obs.unobserve(entry.target);
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

        revealEls.forEach(el => io.observe(el));

        // Reveal sarmalayıcısı içinde olmayan bağımsız sayaçlar için ayrı gözlem
        const counterIO = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            });
        }, { threshold: 0.5 });
        counters.forEach(el => {
            if (!el.closest('.reveal')) counterIO.observe(el);
        });
    }

    // --- 4) Ken Burns hero ---
    function initKenBurns() {
        const hero = document.querySelector('.countdown-hero');
        if (hero) hero.classList.add('kenburns-on');
    }

    function init() {
        initScrollProgress();
        initReveal();
        initKenBurns();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

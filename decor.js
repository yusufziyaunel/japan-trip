// ============================================
// SÜS ÖĞELERİ — küçük Japon illüstrasyonları, hanko mühürleri,
// kenar yazıları. Sayfa içeriğine dokunmaz; sadece dekor ekler.
// ============================================
(function () {
    'use strict';

    // Japonca yazı fontu (yoksa ekle)
    if (!document.querySelector('link[data-jp-font]')) {
        const l = document.createElement('link');
        l.rel = 'stylesheet'; l.setAttribute('data-jp-font', '');
        l.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@700;900&display=swap';
        document.head.appendChild(l);
    }

    const S = 'stroke="#22264B" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"';
    const wrap = body => `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g ${S}>${body}</g></svg>`;

    // --- İkon kütüphanesi (64x64) ---
    const ICONS = {
        neko: wrap(`
            <path d="M16 60Q14 40 24 36H40Q50 40 48 60Z" fill="#fff"/>
            <path d="M17 24L19 8L28 16Q32 15 36 16L45 8L47 24Q49 37 32 37Q15 37 17 24Z" fill="#fff"/>
            <path d="M21 13l1 6 5-3z M43 13l-1 6-5-3z" fill="#F9B8C8" stroke-width="1.5"/>
            <path d="M23 25q2-2.5 4 0M37 25q2-2.5 4 0" fill="none" stroke-width="2"/>
            <circle cx="32" cy="29" r="1.8" fill="#E8503A" stroke="none"/>
            <path d="M22 38Q32 45 42 38" fill="none" stroke="#E8503A" stroke-width="4.5"/>
            <circle cx="32" cy="44" r="3.2" fill="#FFC857"/>
            <path d="M44 34Q55 30 53 16Q49 11 46 17Q46 26 40 30Z" fill="#fff"/>
            <ellipse cx="29" cy="53" rx="8" ry="6" fill="#FFC857"/><path d="M29 49v8" stroke-width="1.5"/>`),
        daruma: wrap(`
            <path d="M32 6C15 6 8 20 8 36C8 52 18 60 32 60S56 52 56 36C56 20 49 6 32 6Z" fill="#E8503A"/>
            <ellipse cx="32" cy="29" rx="17" ry="13" fill="#FBF3E4"/>
            <circle cx="25" cy="29" r="4.5" fill="#fff" stroke-width="1.8"/><circle cx="39" cy="29" r="4.5" fill="#fff" stroke-width="1.8"/>
            <circle cx="25" cy="29" r="1.8" fill="#22264B" stroke="none"/><circle cx="39" cy="29" r="1.8" fill="#22264B" stroke="none"/>
            <path d="M18 21Q23 17 28 21M36 21Q41 17 46 21" fill="none"/>
            <path d="M24 37Q32 42 40 37" fill="none" stroke-width="2"/>
            <text x="32" y="55" text-anchor="middle" font-size="14" font-weight="900" fill="#FFC857" stroke="none" font-family="Noto Serif JP, serif">福</text>`),
        chochin: wrap(`
            <path d="M32 2V8" fill="none"/><rect x="22" y="7" width="20" height="6" rx="2" fill="#22264B"/>
            <path d="M32 13C14 13 10 25 10 33S14 53 32 53 54 41 54 33 50 13 32 13Z" fill="#E8503A"/>
            <path d="M11.5 26Q32 32 52.5 26M10 33Q32 39 54 33M11.5 40Q32 46 52.5 40" fill="none" stroke-width="1.6"/>
            <rect x="22" y="52" width="20" height="6" rx="2" fill="#22264B"/><path d="M32 58V63M27 58v4M37 58v4" fill="none" stroke-width="2"/>
            <text x="32" y="37" text-anchor="middle" font-size="14" font-weight="900" fill="#fff" stroke="none" font-family="Noto Serif JP, serif">祭</text>`),
        onigiri: wrap(`
            <path d="M32 7Q40 7 46 19L57 46Q60 56 50 56H14Q4 56 7 46L18 19Q24 7 32 7Z" fill="#fff"/>
            <path d="M20 40H44L49 56H15Z" fill="#22264B"/>
            <circle cx="26" cy="27" r="2" fill="#22264B" stroke="none"/><circle cx="38" cy="27" r="2" fill="#22264B" stroke="none"/>
            <circle cx="22" cy="32" r="2.5" fill="#F9B8C8" stroke="none"/><circle cx="42" cy="32" r="2.5" fill="#F9B8C8" stroke="none"/>
            <path d="M29 31Q32 34 35 31" fill="none" stroke-width="2"/>`),
        sushi: wrap(`
            <rect x="8" y="30" width="48" height="20" rx="10" fill="#fff"/>
            <path d="M5 33Q5 15 32 15T59 33Q32 41 5 33Z" fill="#FF8A5B"/>
            <path d="M17 19Q20 28 15 36M30 16.5Q33 26 28 38M43 18Q46 27 41 37" fill="none" stroke="#fff" stroke-width="2.2" opacity=".85"/>
            <path d="M14 53H50" stroke="#22264B" stroke-width="2" opacity="0" />`),
        koi: wrap(`
            <path d="M6 32Q18 12 40 21Q46 23 50 28L61 17V47L50 36Q46 41 40 43Q18 52 6 32Z" fill="#FF7A59"/>
            <path d="M22 22Q30 20 34 25Q30 32 22 30Z" fill="#fff" stroke="none"/>
            <path d="M38 40Q44 48 34 52" fill="none" stroke-width="2"/>
            <circle cx="15" cy="30" r="2.6" fill="#22264B" stroke="none"/>
            <path d="M50 28L61 17M50 36L61 47" fill="none" stroke-width="1.6"/>`),
        fan: wrap(`
            <path d="M32 58L4 24Q32 2 60 24Z" fill="#fff"/>
            <path d="M32 58L13 14M32 58L23 9M32 58V6M32 58L41 9M32 58L51 14" fill="none" stroke-width="1.5"/>
            <circle cx="32" cy="30" r="8" fill="#E8503A" stroke="none"/>
            <path d="M4 24Q32 2 60 24" fill="none" stroke="#E8503A" stroke-width="4"/>`),
        temari: wrap(`
            <circle cx="32" cy="32" r="24" fill="#F9B8C8"/>
            <path d="M9 32Q32 18 55 32M9 32Q32 46 55 32M32 8Q18 32 32 56M32 8Q46 32 32 56" fill="none" stroke="#FFC857" stroke-width="4"/>
            <path d="M9 32Q32 18 55 32M9 32Q32 46 55 32" fill="none" stroke="#3558D6" stroke-width="1.6"/>
            <circle cx="32" cy="32" r="24" fill="none"/>`),
        sakura: wrap(`
            <g fill="#F9B8C8">
              <path id="p" d="M32 32C22 26 22 12 28 7L32 12L36 7C42 12 42 26 32 32Z"/>
              <path d="M32 32C22 26 22 12 28 7L32 12L36 7C42 12 42 26 32 32Z" transform="rotate(72 32 32)"/>
              <path d="M32 32C22 26 22 12 28 7L32 12L36 7C42 12 42 26 32 32Z" transform="rotate(144 32 32)"/>
              <path d="M32 32C22 26 22 12 28 7L32 12L36 7C42 12 42 26 32 32Z" transform="rotate(216 32 32)"/>
              <path d="M32 32C22 26 22 12 28 7L32 12L36 7C42 12 42 26 32 32Z" transform="rotate(288 32 32)"/>
            </g>
            <circle cx="32" cy="32" r="4.5" fill="#FFC857"/>`),
        ramen: wrap(`
            <path d="M44 3L56 26M50 2L60 22" fill="none" stroke="#7A4B2A" stroke-width="2.6"/>
            <path d="M5 30H59Q58 55 32 58Q6 55 5 30Z" fill="#fff"/>
            <path d="M8 41H56" fill="none" stroke="#E8503A" stroke-width="3.5"/>
            <path d="M9 30Q13 18 20 24T31 21 43 24 55 30Z" fill="#FFD27A"/>
            <circle cx="22" cy="23" r="5.5" fill="#F9B8C8"/><path d="M19 23q3-3 6 0" fill="none" stroke-width="1.5"/>
            <ellipse cx="40" cy="22" rx="7.5" ry="6" fill="#fff"/><circle cx="40" cy="22" r="3.2" fill="#FFB02E" stroke="none"/>
            <path d="M26 14q-3-4 0-8M33 15q-3-4 0-9" fill="none" stroke-width="1.8" opacity=".6"/>`),
        kokeshi: wrap(`
            <path d="M22 29H42L40 58Q32 62 24 58Z" fill="#E8503A"/>
            <circle cx="32" cy="16" r="12" fill="#FFE0C8"/>
            <path d="M20 16Q20 3 32 3T44 16Q40 9 32 9T20 16Z" fill="#22264B"/>
            <circle cx="28" cy="18" r="1.4" fill="#22264B" stroke="none"/><circle cx="36" cy="18" r="1.4" fill="#22264B" stroke="none"/>
            <circle cx="32" cy="22" r="1.5" fill="#E8503A" stroke="none"/>
            <circle cx="32" cy="42" r="5" fill="#FFC857"/><circle cx="32" cy="42" r="1.6" fill="#E8503A" stroke="none"/>
            <path d="M23 52H41" fill="none" stroke="#FFC857" stroke-width="3"/>`),
        omamori: wrap(`
            <path d="M32 14V7M32 7q-9-5-11 4M32 7q9-5 11 4" fill="none" stroke="#E8503A" stroke-width="3"/>
            <rect x="15" y="14" width="34" height="46" rx="6" fill="#3558D6"/>
            <path d="M15 24H49" fill="none"/><path d="M19 56H45" fill="none" stroke="#FFC857" stroke-width="3"/>
            <text x="32" y="45" text-anchor="middle" font-size="19" font-weight="900" fill="#fff" stroke="none" font-family="Noto Serif JP, serif">守</text>`),
        torii: wrap(`
            <rect x="14" y="22" width="6" height="38" fill="#E8503A"/><rect x="44" y="22" width="6" height="38" fill="#E8503A"/>
            <rect x="12" y="33" width="40" height="5" fill="#E8503A"/>
            <path d="M4 20Q32 11 60 20L57 28Q32 21 7 28Z" fill="#E8503A"/><path d="M10 12H54" fill="none" stroke-width="0"/>`),
        deer: wrap(`
            <rect x="19" y="42" width="5" height="16" fill="#D69A5B"/><rect x="27" y="42" width="5" height="16" fill="#D69A5B"/>
            <rect x="38" y="42" width="5" height="16" fill="#D69A5B"/><rect x="46" y="42" width="5" height="16" fill="#D69A5B"/>
            <path d="M16 36Q16 27 28 27H42Q53 27 53 36V41Q53 45 49 45H20Q16 45 16 41Z" fill="#D69A5B"/>
            <path d="M18 34L11 20Q9 13 15 13L23 16Q26 22 24 29Z" fill="#D69A5B"/>
            <path d="M14 13L11 5M14 9L8 8M19 14L21 5M20 9L25 7" fill="none"/>
            <circle cx="15" cy="19" r="1.5" fill="#22264B" stroke="none"/>
            <circle cx="33" cy="33" r="1.8" fill="#fff" stroke="none"/><circle cx="41" cy="35" r="1.8" fill="#fff" stroke="none"/><circle cx="27" cy="38" r="1.6" fill="#fff" stroke="none"/>`),
        bamboo: wrap(`
            <rect x="10" y="4" width="10" height="58" rx="4" fill="#7BCB8A"/><rect x="27" y="2" width="10" height="60" rx="4" fill="#5DB972"/><rect x="44" y="6" width="10" height="56" rx="4" fill="#7BCB8A"/>
            <path d="M10 20H20M10 40H20M27 16H37M27 36H37M27 52H37M44 22H54M44 44H54" fill="none" stroke-width="2"/>
            <path d="M20 26Q30 20 34 8M37 44Q48 40 56 30" fill="#9BDDA6" stroke-width="2"/>`),
        tower: wrap(`
            <path d="M32 2V14" fill="none"/>
            <path d="M32 14L24 34L14 60H50L40 34Z" fill="#E8503A"/>
            <path d="M25 30H39L41 38H23Z" fill="#fff"/><rect x="20" y="30" width="24" height="4" fill="#fff"/>
            <path d="M20 50H44M26 40L38 56M38 40L26 56" fill="none" stroke="#fff" stroke-width="1.8"/>`),
        castle: wrap(`
            <path d="M10 60V46H54V60Z" fill="#B8B1A0"/>
            <rect x="16" y="32" width="32" height="14" fill="#fff"/><path d="M10 34L32 26L54 34Z" fill="#3E8E74"/>
            <rect x="21" y="18" width="22" height="10" fill="#fff"/><path d="M15 20L32 13L49 20Z" fill="#3E8E74"/>
            <rect x="26" y="8" width="12" height="6" fill="#fff"/><path d="M22 9L32 3L42 9Z" fill="#3E8E74"/>
            <path d="M28 60V52H36V60" fill="#22264B"/>`),
        fuji: wrap(`
            <circle cx="46" cy="16" r="8" fill="#E8503A"/>
            <path d="M4 58L26 14H38L60 58Z" fill="#6F7FD6"/>
            <path d="M20 26L26 14H38L44 26L38 30L32 25L26 31Z" fill="#fff"/>`),
        shinkansen: wrap(`
            <path d="M3 44Q3 30 24 28H61V47H8Q3 47 3 44Z" fill="#fff"/>
            <rect x="3" y="40" width="58" height="4" fill="#3558D6" stroke="none"/>
            <rect x="26" y="33" width="6" height="5" fill="#BFE3F2" stroke-width="1.5"/><rect x="36" y="33" width="6" height="5" fill="#BFE3F2" stroke-width="1.5"/><rect x="46" y="33" width="6" height="5" fill="#BFE3F2" stroke-width="1.5"/>
            <path d="M10 34Q14 31 20 31" fill="none" stroke-width="2"/>
            <circle cx="16" cy="50" r="3" fill="#22264B"/><circle cx="32" cy="50" r="3" fill="#22264B"/><circle cx="48" cy="50" r="3" fill="#22264B"/>
            <path d="M6 54H58" fill="none" stroke-width="2"/>`),
        plane: wrap(`
            <path d="M4 30L60 6L44 58L32 38Z" fill="#fff"/><path d="M32 38L60 6" fill="none"/><path d="M32 38L30 50L36 44" fill="#BFE3F2"/>`),
        pagoda: wrap(`
            <path d="M32 2V8" fill="none"/>
            <path d="M18 14L32 8L46 14L50 20H14Z" fill="#3A3F6B"/><rect x="18" y="20" width="28" height="10" fill="#FFC857"/>
            <path d="M12 32L32 24L52 32L56 38H8Z" fill="#3A3F6B"/><rect x="14" y="38" width="36" height="12" fill="#FFC857"/>
            <path d="M6 52H58L54 58H10Z" fill="#7BA7D6"/>
            <path d="M24 24V30M40 24V30M22 40V48M32 40V48M42 40V48" fill="none" stroke-width="1.8"/>`),
        wave: wrap(`
            <rect x="4" y="8" width="56" height="48" rx="6" fill="#F6EBD0"/>
            <path d="M4 50Q14 28 30 30Q34 20 46 22Q42 28 38 30Q48 28 60 34V56H4Z" fill="#3558D6"/>
            <path d="M30 30Q34 20 46 22Q40 24 40 28Q36 30 30 30Z" fill="#fff"/>
            <path d="M10 46Q16 40 22 44M26 50Q32 44 38 48M44 48Q50 42 56 46" fill="none" stroke="#fff" stroke-width="2"/>
            <circle cx="48" cy="16" r="4" fill="#E8503A" stroke="none"/>`),
        matcha: wrap(`
            <path d="M8 28H56Q56 56 32 58Q8 56 8 28Z" fill="#fff"/>
            <ellipse cx="32" cy="28" rx="24" ry="6" fill="#8ED1B0"/>
            <path d="M18 27q4-3 8 0t8 0t8 0" fill="none" stroke="#5DB972" stroke-width="1.6"/>
            <path d="M12 42H52" fill="none" stroke="#F9B8C8" stroke-width="4"/>
            <path d="M50 6L58 20" fill="none" stroke="#C99A5B" stroke-width="3"/><path d="M52 18Q58 24 62 18" fill="none" stroke="#C99A5B" stroke-width="2"/>`),
        gamepad: wrap(`
            <path d="M12 22H52Q60 22 60 34Q60 48 52 48Q46 48 42 42H22Q18 48 12 48Q4 48 4 34Q4 22 12 22Z" fill="#8E5BFF"/>
            <path d="M18 29V39M13 34H23" fill="none" stroke="#fff" stroke-width="3.5"/>
            <circle cx="44" cy="30" r="3" fill="#FFC857" stroke-width="1.8"/><circle cx="50" cy="36" r="3" fill="#E8503A" stroke-width="1.8"/>
            <circle cx="38" cy="36" r="2.5" fill="#8ED1B0" stroke-width="1.8"/>`),
        curry: wrap(`
            <ellipse cx="32" cy="42" rx="28" ry="14" fill="#fff"/>
            <path d="M8 40Q10 24 28 24Q40 24 44 32Q52 34 56 40Q50 48 32 48Q14 48 8 40Z" fill="#B8742A"/>
            <path d="M26 40Q28 28 40 30Q46 34 42 42Q34 46 26 40Z" fill="#fff" stroke-width="2"/>
            <circle cx="18" cy="36" r="3" fill="#F28C28" stroke="none"/><circle cx="46" cy="40" r="2.5" fill="#7BCB8A" stroke="none"/>
            <path d="M52 8L44 26" fill="none" stroke="#C9CED6" stroke-width="3"/>`)
    };

    const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

    function addIcon(host, name, style, size, rot, extra) {
        const d = el('span', 'deco ' + (extra || ''), ICONS[name]);
        d.style.cssText = `${style};width:${size}px;height:${size}px;--rot:${rot || 0}deg`;
        host.appendChild(d);
    }
    function addHanko(host, kanji, tip, style) {
        const h = el('span', 'hanko', kanji.split('').map(c => `<i>${c}</i>`).join(''));
        h.title = tip; h.style.cssText = style;
        host.appendChild(h);
    }
    function addSide(host, text, tip, side) {
        const t = el('span', 'side-jp side-' + side, text);
        t.title = tip; t.setAttribute('aria-hidden', 'true');
        host.appendChild(t);
    }
    function prep(host) { if (host && getComputedStyle(host).position === 'static') host.style.position = 'relative'; return host; }

    // ============ ANA SAYFA ============
    function home() {
        // Hero: asılı fener dizisi
        const art = document.querySelector('.hero-art');
        if (art) {
            const lantern = ICONS.chochin.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
            let g = '<path d="M0 36Q360 78 720 40T1440 34" fill="none" stroke="#22264B" stroke-width="3"/>';
            [90, 250, 430, 640, 860, 1060, 1250, 1380].forEach((x, i) => {
                const y = 36 + Math.sin(i * 0.9) * 12 + 18;
                const s = 0.95 + (i % 3) * 0.12;
                g += `<g transform="translate(${x},${y})"><g class="h-lantern" style="--d:${-i * 0.7}s"><g transform="scale(${s}) translate(-32,0)">${lantern}</g></g></g>`;
            });
            art.insertAdjacentHTML('beforeend', `<g>${g}</g>`);
        }

        const cfg = [
            ['.journal-featured', { hanko: ['日記', 'Nikki — günlük', 'left:20px;top:20px'],
                icons: [['neko', 'right:28px;top:20px', 78, 6], ['daruma', 'left:28px;bottom:16px', 70, -8]] }],
            ['#rota', { hanko: ['地図', 'Chizu — harita', 'left:28px;top:-20px'], side: ['東京から大阪へ', 'Tokyo’dan Osaka’ya', 'right'],
                icons: [['chochin', 'right:46px;top:-40px', 62, 0, 'swing'], ['chochin', 'right:112px;top:-30px', 48, 0, 'swing d2']] }],
            ['.gastro-cta', { hanko: ['美味', 'Oishii — lezzetli', 'left:26px;top:-20px'],
                icons: [['onigiri', 'right:96px;top:-38px', 64, 8], ['sushi', 'right:28px;top:-30px', 62, -10]] }],
            ['.highlights-section', { hanko: ['体験', 'Taiken — deneyim', 'left:0;top:-30px'], side: ['日本の魅力', 'Japonya’nın cazibesi', 'left'],
                icons: [['kokeshi', 'right:0;top:-36px', 70, 6, 'wide'], ['temari', 'right:80px;top:-20px', 46, -8, 'wide']] }],
            ['.city-overview', { hanko: ['街', 'Machi — şehir', 'left:0;top:-30px'], side: ['四つの街', 'Dört şehir', 'right'],
                icons: [['koi', 'right:0;top:-34px', 76, -6, 'wide'], ['fan', 'right:88px;top:-20px', 50, 8, 'wide']] }],
            ['#rakamlar', { hanko: ['数字', 'Sūji — rakamlar', 'left:28px;top:-20px'], side: ['数字で見る旅', 'Rakamlarla yolculuk', 'left'],
                icons: [['temari', 'right:44px;top:-34px', 58, 8], ['sakura', 'right:112px;top:-22px', 42, -10]] }],
            ['#butce', { hanko: ['円', 'En — yen', 'left:28px;top:-20px'], side: ['お買い物', 'Alışveriş', 'right'],
                icons: [['omamori', 'right:44px;top:-38px', 60, 6], ['sakura', 'right:112px;top:-22px', 42, 12]] }],
            ['.travel-tips', { hanko: ['知恵', 'Chie — bilgelik', 'left:0;top:-30px'], side: ['旅のヒント', 'Seyahat ipuçları', 'left'],
                icons: [['daruma', 'right:0;top:-34px', 68, 6, 'wide'], ['chochin', 'right:84px;top:-26px', 44, 0, 'wide swing']] }]
        ];
        cfg.forEach(([sel, c]) => {
            const host = prep(document.querySelector(sel));
            if (!host) return;
            if (c.hanko) addHanko(host, ...c.hanko);
            (c.icons || []).forEach(i => addIcon(host, i[0], i[1], i[2], i[3], i[4]));
            if (c.side) addSide(host, c.side[0], c.side[1], c.side[2]);
        });

        // Alt bilgi: ikon şeridi
        const fc = document.querySelector('.footer-content');
        if (fc) {
            const row = el('div', 'footer-deco');
            ['daruma', 'onigiri', 'neko', 'sakura', 'kokeshi', 'fan', 'chochin'].forEach(n => row.appendChild(el('span', 'fd', ICONS[n])));
            fc.insertBefore(row, fc.firstChild);
            fc.appendChild(el('p', 'footer-jp', 'ありがとう · また会いましょう'));
        }
    }

    // ============ GASTRONOMİ ============
    function gastro() {
        const host = prep(document.querySelector('.gastro-hero'));
        if (!host) return;
        addIcon(host, 'onigiri', 'left:30px;top:22px', 64, -10, 'wide');
        addIcon(host, 'ramen', 'left:26px;bottom:20px', 70, 6, 'wide');
        addIcon(host, 'sushi', 'right:34px;top:20px', 66, 10, 'wide');
        addIcon(host, 'temari', 'right:40px;bottom:22px', 54, -8, 'wide');
        addSide(document.body, 'いただきます', 'Afiyet olsun', 'right');
    }

    // ============ GÜN SAYFALARI ============
    // Her günün renk paleti (hero 1-2, vurgu, açık zemin) ve konu sembolleri
    const DAYS = {
        1:  { c: ['#FFB36B', '#FF7A59', '#E8503A', '#FFF0DC'], k: '東京', items: [['plane', '到着', 'Varış'], ['tower', '新宿', 'Shinjuku'], ['ramen', 'ラーメン', 'Ramen'], ['neko', '福', 'Şans'], ['lantern', '夜', 'Gece']] },
        2:  { c: ['#FF8FA3', '#FFC857', '#E8503A', '#FFE8EC'], k: '東京', items: [['torii', '浅草', 'Asakusa'], ['gamepad', 'アキバ', 'Akihabara'], ['sushi', '寿司', 'Sushi'], ['sakura', '上野', 'Ueno'], ['lantern', '雷門', 'Kaminarimon']] },
        3:  { c: ['#B388FF', '#FF8FD0', '#8E5BFF', '#F1E8FF'], k: '東京', items: [['torii', '明治神宮', 'Meiji Jingu'], ['temari', '原宿', 'Harajuku'], ['fan', '渋谷', 'Shibuya'], ['sakura', '桜', 'Sakura'], ['neko', '福', 'Şans']] },
        4:  { c: ['#6C8CFF', '#B388FF', '#4C6BFF', '#E6ECFF'], k: '東京', items: [['castle', '皇居', 'İmparatorluk Sarayı'], ['fan', '銀座', 'Ginza'], ['lantern', '光', 'Işık (teamLab)'], ['shinkansen', '東京駅', 'Tokyo İstasyonu'], ['sakura', '庭園', 'Bahçe']] },
        5:  { c: ['#FF7B9C', '#FFB199', '#E8503A', '#FFE6EC'], k: '京都', items: [['shinkansen', '新幹線', 'Shinkansen'], ['pagoda', '京都', 'Kyoto'], ['lantern', '祇園', 'Gion'], ['fan', '八坂', 'Yasaka'], ['sakura', 'ようこそ', 'Hoş geldin']] },
        6:  { c: ['#FFC857', '#7BCB8A', '#2F9E6E', '#E8F7EC'], k: '京都', items: [['pagoda', '金閣寺', 'Altın Tapınak'], ['bamboo', '竹林', 'Bambu ormanı'], ['matcha', '抹茶', 'Matcha'], ['shinkansen', '嵐電', 'Randen tramvayı'], ['koi', '池', 'Gölet']] },
        7:  { c: ['#FF6B4A', '#FFB26B', '#E8503A', '#FFEADC'], k: '京都', items: [['torii', '伏見稲荷', 'Fushimi Inari'], ['lantern', '祇園', 'Gion'], ['matcha', '喫茶', 'Kafe'], ['fan', '清水', 'Kiyomizu'], ['kokeshi', '京人形', 'Kyoto bebeği']] },
        8:  { c: ['#7ED6A5', '#4FB5E8', '#1F9D6B', '#E2F6EC'], k: '奈良', items: [['deer', '鹿', 'Geyik'], ['pagoda', '大仏', 'Dev Buda'], ['castle', '大阪', 'Osaka'], ['sushi', '寿司', 'Sushi'], ['gamepad', 'グリコ', 'Glico']] },
        9:  { c: ['#4FB5E8', '#6C8CFF', '#2D7FD6', '#DDF0FB'], k: '大阪', items: [['castle', '大阪城', 'Osaka Kalesi'], ['curry', 'カレー', 'Köri'], ['koi', '堀', 'Hendek'], ['lantern', '道頓堀', 'Dotonbori'], ['sakura', '桜', 'Sakura']] },
        10: { c: ['#8FA8FF', '#F9B8C8', '#4C6BFF', '#E8EDFF'], k: '富士山', items: [['fuji', '富士山', 'Fuji Dağı'], ['shinkansen', '新幹線', 'Shinkansen'], ['lantern', '浅草', 'Asakusa'], ['matcha', '抹茶', 'Matcha'], ['sakura', '桜', 'Sakura']] },
        11: { c: ['#3FC1C9', '#6C8CFF', '#1AA6B0', '#DDF6F7'], k: '東京', items: [['wave', '北斎', 'Hokusai'], ['tower', 'スカイツリー', 'Skytree'], ['ramen', 'バーガー', 'Burger'], ['sakura', '桜', 'Sakura'], ['temari', '未来', 'Gelecek']] },
        12: { c: ['#FF9A5B', '#B388FF', '#E8503A', '#FFEADB'], k: '東京', items: [['tower', '渋谷', 'Shibuya Sky'], ['castle', '侍', 'Samuray'], ['gamepad', '秋葉原', 'Akihabara'], ['sakura', '上野', 'Ueno'], ['fuji', '絶景', 'Muhteşem manzara']] },
        13: { c: ['#8FA8FF', '#FFB199', '#4C6BFF', '#E8EDFF'], k: '帰国', items: [['plane', '帰国', 'Eve dönüş'], ['sakura', 'さようなら', 'Sayonara'], ['tower', '東京', 'Tokyo'], ['omamori', 'お土産', 'Hediyelik'], ['neko', '福', 'Şans']] }
    };
    const SECTION_SEAL = {
        '.day-summary': ['物語', 'Monogatari — hikâye'],
        '.timeline-detailed': ['日程', 'Nittei — program'],
        '.day-notes': ['記録', 'Kiroku — kayıt'],
        '.next-day-preview': ['明日', 'Ashita — yarın']
    };

    function day() {
        const hero = prep(document.querySelector('.day-hero'));
        if (!hero) return;
        const m = (location.pathname.match(/day(\d+)/) || document.title.match(/^(\d+)\./) || [])[1];
        const n = parseInt(m, 10) || 1;
        const cfg = DAYS[n] || DAYS[1];

        // Renk paleti (CSS değişkenleri)
        const root = document.body.style;
        root.setProperty('--d1', cfg.c[0]); root.setProperty('--d2', cfg.c[1]);
        root.setProperty('--acc', cfg.c[2]); root.setProperty('--tint', cfg.c[3]);


        // Fotoğraf sayısı: galeriden otomatik (elle yazılan sayıların yerine)
        const key = 'day' + String(n).padStart(2, '0');
        const list = window.PHOTO_MANIFEST && window.PHOTO_MANIFEST[key];
        const stats = hero.querySelector('.day-stats');
        if (stats) {
            [...stats.querySelectorAll('.stat')].filter(x => /📸/.test(x.textContent) && /Fotoğraf/.test(x.textContent)).forEach(x => x.remove());
            if (list && list.length) {
                const st = el('span', 'stat', '📸 ' + list.length + ' Fotoğraf');
                const first = stats.querySelector('.stat');
                if (first && first.nextSibling) stats.insertBefore(st, first.nextSibling); else stats.appendChild(st);
            }
        }

        // Hero: şehir kanjisi + sakura
        hero.appendChild(el('div', 'hero-kanji', cfg.k));
        addIcon(hero, cfg.items[0][0], 'right:9%;bottom:44px', 52, 8, 'wide');
        addIcon(hero, 'sakura', 'left:6%;bottom:36px', 44, -14, 'wide');
        addIcon(hero, 'sakura', 'right:22%;bottom:62px', 28, 20, 'wide');

        // Bölüm mühürleri
        Object.keys(SECTION_SEAL).forEach(sel => {
            const sec = prep(document.querySelector(sel));
            if (sec) addHanko(sec, SECTION_SEAL[sel][0], SECTION_SEAL[sel][1], 'left:max(.8rem, calc((100% - 1200px) / 2 + .8rem));top:.5rem');
        });

        // Kenar süsleri: sayfa boyunca sağ/sol dönüşümlü, konuya göre
        const anchors = [];
        const sum = document.querySelector('.day-summary .container'); if (sum) anchors.push(sum);
        document.querySelectorAll('.timeline-detailed .time-block').forEach(b => anchors.push(b));
        const notes = document.querySelector('.day-notes .container'); if (notes) anchors.push(notes);
        anchors.forEach((a, i) => {
            const it = cfg.items[i % cfg.items.length];
            const side = i % 2 === 0 ? 'r' : 'l';
            prep(a);
            const e = el('div', 'edge-deco e-' + side,
                `<span class="e-ico">${ICONS[it[0]]}</span><span class="e-word" title="${it[2]}">${it[1]}</span>`);
            e.style.top = (i === 0 ? 120 : 30) + 'px';
            a.appendChild(e);
        });

        // Dar ekranda: zaman başlıklarının sağ ucuna küçük konu ikonu
        document.querySelectorAll('.time-header').forEach((h, i) => {
            const it = cfg.items[(i + 1) % cfg.items.length];
            h.appendChild(el('span', 'deco-inline', ICONS[it[0]]));
        });
    }


    // ============ ANA SAYFA: GÜN KARTLARI ============
    const FLIGHT = { k: '空港', items: [['plane', '空港', 'Havalimanı'], ['omamori', '旅立ち', 'Yola çıkış'], ['sakura', '夢', 'Hayal'], ['neko', '福', 'Şans']] };
    function decorateCards() {
        const box = document.getElementById('daysContainer');
        if (!box) return;
        const apply = () => box.querySelectorAll('.day-card:not([data-decor])').forEach(card => {
            card.setAttribute('data-decor', '1');
            const t = (card.querySelector('.day-title') || {}).textContent || '';
            const m = t.match(/(\d+)\s*\./);
            const cfg = m ? (DAYS[parseInt(m[1], 10)] || FLIGHT) : FLIGHT;
            const hdr = card.querySelector('.day-header');
            if (hdr) {
                hdr.appendChild(el('div', 'dc-kanji', cfg.k));
                hdr.appendChild(el('span', 'dc-icon', ICONS[cfg.items[0][0]]));
                hdr.appendChild(el('span', 'dc-icon dc-icon2', ICONS['sakura']));
            }
            const rib = el('div', 'dc-ribbon');
            cfg.items.slice(1, 4).forEach(it => rib.appendChild(
                el('span', 'dc-chip', `<i>${ICONS[it[0]]}</i><b title="${it[2]}">${it[1]}</b>`)));
            card.appendChild(rib);
        });
        apply();
        new MutationObserver(apply).observe(box, { childList: true });
    }

    function run() {
        const b = document.body;
        if (b.classList.contains('home')) { home(); decorateCards(); }
        else if (b.classList.contains('gastro-page')) gastro();
        else if (b.classList.contains('day-detail-page')) day();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();

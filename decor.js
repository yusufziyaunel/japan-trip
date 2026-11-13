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


    // ============ GÜN SAHNELERİ (hero'da kısa, sevimli animasyon) ============
    // Ortak "Japon sokağı" kiti + poz verebilen karakterler + gün sahneleri.
    function rnd(seed) { const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }

    // ---------- Sokak kiti ----------
    const FACADE = ['#EAE3D6', '#D8D3DE', '#F3EFE7', '#CDBDAA', '#BCC6CF', '#E8D6C8', '#DCD6C8', '#C9C2B4'];
    const BASE = 172;   // kaldırımın üst çizgisi (binaların zemini)
    const vtext = (x, y, txt, size, fill) => [...txt].map((ch, i) =>
        `<text x="${x}" y="${y + i * (size + 2)}" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="${size}" fill="${fill}">${ch}</text>`).join('');

    // Çok katlı, dar Japon sokak binası: pencereler, klima üniteleri, dükkân katı, tabelalar
    function bld(x, w, h, o = {}) {
        const top = BASE - h, c = o.c || FACADE[0], sd = o.seed || x * 1.7;
        const shopH = 24, fh = 17, nF = Math.max(1, Math.floor((h - shopH - 8) / fh));
        let g = `<rect x="${x}" y="${top}" width="${w}" height="${h + 60}" fill="${c}"/>`
              + `<rect x="${x - 1}" y="${top}" width="${w + 2}" height="4" fill="#000" opacity=".12"/>`;
        if (o.roofBox) g += `<rect x="${x + w * .25}" y="${top - 9}" width="${w * .3}" height="9" fill="${c}"/><rect x="${x + w * .6}" y="${top - 5}" width="8" height="5" fill="#A8A4B6"/>`;
        for (let f = 0; f < nF; f++) {
            const y = top + 9 + f * fh;
            for (let wx = x + 6; wx + 10 <= x + w - 6; wx += 14) {
                const lit = o.lit && rnd(sd + f * 7.3 + wx * .31) < o.lit;
                g += lit ? `<rect class="sc-win" style="--d:${(1.4 + rnd(wx + f * 3) * 4.2).toFixed(2)}s" x="${wx}" y="${y}" width="10" height="9" rx="1" fill="#FFD76A"/>`
                         : `<rect x="${wx}" y="${y}" width="10" height="9" rx="1" fill="${o.glass || '#8C9BB8'}"/><rect x="${wx}" y="${y}" width="3" height="9" fill="#fff" opacity=".28"/>`;
            }
            if (o.balcony) g += `<path d="M${x + 3} ${y + 11.5}H${x + w - 3}" stroke="#9AA0B2" stroke-width="1.5"/>`;
            if (rnd(sd + f * 13.1) > .5) {
                const ax = x + 5 + Math.floor(rnd(sd + f * 5.7) * (w - 19));
                g += `<rect x="${ax}" y="${y + 9.5}" width="10" height="6.5" fill="#D4D6DE" stroke="#9AA0B2" stroke-width=".8"/><circle cx="${ax + 4}" cy="${y + 12.8}" r="2.1" fill="none" stroke="#9AA0B2" stroke-width=".8"/>`;
            }
        }
        // zemin kat dükkânı
        const sy = BASE - shopH;
        g += `<rect x="${x + 3}" y="${sy}" width="${w - 6}" height="${shopH}" fill="${o.shop || '#CFE6F2'}"/>`
           + `<path d="M${x + w / 2} ${sy + 3}V${BASE}" stroke="${c}" stroke-width="1.5"/>`
           + `<rect x="${x + 3}" y="${sy}" width="${w - 6}" height="3" fill="#000" opacity=".15"/>`;
        if (o.noren) {
            const nw = Math.min(32, w - 14), nx = x + (w - nw) / 2;
            g += `<rect x="${nx}" y="${sy + 3}" width="${nw}" height="12" fill="${o.noren}"/>`
               + [1, 2].map(k => `<path d="M${nx + nw * k / 3} ${sy + 6}V${sy + 15}" stroke="${o.shop || '#CFE6F2'}" stroke-width="1.4"/>`).join('');
        }
        if (o.awning) g += `<path d="M${x + 1} ${sy}h${w - 2}l-4 8h${-(w - 10)}z" fill="${o.awning}"/>`;
        if (o.chochin) g += [x + 8, x + w - 8].map(cx => `<ellipse cx="${cx}" cy="${sy + 10}" rx="4.5" ry="6" fill="#E8503A"/><path d="M${cx - 3} ${sy + 4}h6M${cx - 3} ${sy + 16}h6" stroke="#2A2438" stroke-width="1.2"/>`).join('');
        if (o.hs) g += `<rect x="${x + 5}" y="${sy - 12}" width="${w - 10}" height="10" rx="1.5" fill="${o.hsBg || '#fff'}"/>`
                     + `<text x="${x + w / 2}" y="${sy - 4}" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="7.5" fill="${o.hsFg || '#E8503A'}">${o.hs}</text>`;
        if (o.vs) {
            const n = [...o.vs].length, sh = n * 11 + 7, vx = o.vsLeft ? x - 7 : x + w - 7, vy = top + 10;
            g += `<g ${o.neon ? `class="sc-neon" style="--d:${o.neonD || 2}s"` : ''}><rect x="${vx}" y="${vy}" width="14" height="${sh}" rx="2" fill="${o.vsBg || '#E8503A'}" stroke="#fff" stroke-width="1"/>${vtext(vx + 7, vy + 12, o.vs, 9, o.vsFg || '#fff')}</g>`;
        }
        return g;
    }
    // Elektrik direği (+ trafo) ve aralarında sarkan kablolar
    const pole = (x, top = 34) => `<rect x="${x - 2.5}" y="${top}" width="5" height="${BASE - top + 60}" fill="#8E8A9C"/>`
        + `<rect x="${x - 15}" y="${top + 6}" width="30" height="3" fill="#77738A"/><rect x="${x - 10}" y="${top + 16}" width="20" height="2.5" fill="#77738A"/>`
        + `<rect x="${x + 3}" y="${top + 24}" width="8" height="13" rx="3" fill="#A8A4B6"/><path d="M${x} ${top + 52}h-6v14h6" fill="none" stroke="#FFC857" stroke-width="2"/>`;
    function wires(xs, top = 34) {
        let g = '';
        for (let i = 0; i < xs.length - 1; i++) {
            const a = xs[i], b = xs[i + 1], m = (a + b) / 2;
            [[-13, 7, 10], [13, 7, 14], [-8, 17, 18], [8, 17, 12]].forEach(([dx, dy, sag]) =>
                g += `<path d="M${a + dx} ${top + dy}Q${m} ${top + dy + sag} ${b + dx} ${top + dy}" fill="none" stroke="#4E4A63" stroke-width="1" opacity=".7"/>`);
        }
        return g;
    }
    // İçecek otomatı
    const vending = (x, c = '#E8503A') => `<rect x="${x}" y="${BASE - 34}" width="20" height="34" rx="2" fill="${c}"/>`
        + `<rect x="${x + 2.5}" y="${BASE - 31}" width="15" height="17" fill="#EEF4FA"/>`
        + [0, 1, 2].map(r => [0, 1, 2, 3].map(k => `<rect x="${x + 4 + k * 3.4}" y="${BASE - 29 + r * 5.5}" width="2.2" height="4" rx="1" fill="${['#3558D6', '#8ED1B0', '#FFC857', '#F58FAA'][(r + k) % 4]}"/>`).join('')).join('')
        + `<rect x="${x + 4}" y="${BASE - 10}" width="12" height="4" fill="#22264B" opacity=".6"/>`;
    // Kaldırım
    const sidewalk = (W, col = '#D9D5E0') => `<rect x="-20" y="${BASE}" width="${W + 40}" height="60" fill="${col}"/>`
        + `<path d="M-20 ${BASE}H${W + 20}" stroke="#B8B3C6" stroke-width="2"/>`
        + Array.from({ length: Math.ceil(W / 40) + 1 }, (_, i) => `<path d="M${i * 40} ${BASE + 2}V${BASE + 50}" stroke="#C9C4D6" stroke-width="1"/>`).join('');


    // Kyoto machiya evi (koyu ahşap, kafes cephe, kiremit saçak, inuyarai çiti)
    const machiyaK = (x, w, h, nr, lamp) => {
        const top = BASE - h;
        let g = `<rect x="${x}" y="${top}" width="${w}" height="${h + 60}" fill="#6B4430"/>`
            + `<rect x="${x + 4}" y="${top + 8}" width="${w - 8}" height="16" fill="#F1E6D2"/>`
            + Array.from({ length: Math.floor((w - 14) / 7) }, (_, k) => `<rect x="${x + 8 + k * 7}" y="${top + 10}" width="3" height="12" rx="1" fill="#6B4430"/>`).join('')
            + `<path d="M${x - 6} ${top + 32}L${x + 2} ${top + 24}H${x + w - 2}L${x + w + 6} ${top + 32}Z" fill="#3A3F6B"/>`
            + `<path d="M${x - 4} ${top + 2}L${x + 4} ${top - 6}H${x + w - 4}L${x + w + 4} ${top + 2}Z" fill="#3A3F6B"/>`
            + `<rect x="${x + 4}" y="${top + 34}" width="${w - 8}" height="${BASE - top - 34}" fill="#8A5C3A"/>`
            + Array.from({ length: Math.floor((w - 10) / 5) }, (_, k) => `<path d="M${x + 7 + k * 5} ${top + 36}V${BASE - 10}" stroke="#5A3826" stroke-width="2"/>`).join('')
            + `<rect x="${x + w / 2 - 12}" y="${top + 34}" width="24" height="12" fill="${nr}"/><path d="M${x + w / 2 - 4} ${top + 36}v10M${x + w / 2 + 4} ${top + 36}v10" stroke="#8A5C3A" stroke-width="1.3"/>`
            + `<path d="M${x + 2} ${BASE}Q${x + 4} ${BASE - 14} ${x + 14} ${BASE - 14}H${x + w - 14}Q${x + w - 4} ${BASE - 14} ${x + w - 2} ${BASE}" fill="#C9A06A" opacity=".9"/>`;
        if (lamp) g += `<g class="sc-glow" style="--d:${lamp}s"><ellipse cx="${x + 10}" cy="${top + 44}" rx="5" ry="7" fill="#FFF4D6"/><path d="M${x + 7} ${top + 37}h6M${x + 7} ${top + 51}h6" stroke="#2A2438" stroke-width="1.3"/></g>`;
        return g;
    };
    // Kırmızı torii (x,y = taban ortası, s = ölçek)
    const toriiK = (x, y, s, c = '#E8503A') => `<g transform="translate(${x},${y}) scale(${s})">
        <rect x="-27" y="-62" width="7" height="62" fill="${c}"/><rect x="20" y="-62" width="7" height="62" fill="${c}"/>
        <rect x="-32" y="-50" width="64" height="5" fill="${c}"/><rect x="-34" y="-64" width="68" height="5" fill="${c}"/>
        <path d="M-40 -64Q0 -71 40 -64L38 -58Q0 -64 -38 -58Z" fill="#2A2438"/>
        <rect x="-27" y="-6" width="7" height="6" fill="#2A2438"/><rect x="20" y="-6" width="7" height="6" fill="#2A2438"/></g>`;
    // Taş fener (tōrō)
    const toro = (x, y = BASE) => `<g transform="translate(${x},${y})" fill="#B8B1A2">
        <rect x="-10" y="-6" width="20" height="6"/><rect x="-3" y="-30" width="6" height="24"/><rect x="-9" y="-34" width="18" height="5"/>
        <rect x="-7" y="-46" width="14" height="12"/><rect x="-4" y="-43" width="8" height="7" fill="#FFF4D6"/>
        <path d="M-13 -46L0 -56L13 -46Z" fill="#A39C8C"/><circle cx="0" cy="-58" r="2.6" fill="#A39C8C"/></g>`;
    // Geyik (Nara): ayak tabanı orijin; flip=1 sola bakar; headCls ile baş eğilir
    const deer = (x, y, flip, headCls = '', bodyCls = '') => `<g transform="translate(${x},${y}) scale(${flip ? -1 : 1},1)"><g class="${bodyCls}">
        <path d="M-15 -22V0M-9 -22V-1M10 -22V0M16 -22V-1" stroke="#9C6B42" stroke-width="3.6" stroke-linecap="round"/>
        <ellipse cx="0" cy="-28" rx="22" ry="12" fill="#C08A5A"/><ellipse cx="0" cy="-23" rx="17" ry="6" fill="#E3C3A0"/>
        ${[[-8, -33], [0, -36], [8, -32], [-2, -29]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="1.8" fill="#fff" opacity=".85"/>`).join('')}
        <path d="M-21 -34q-6 -2 -4 4" fill="#fff"/>
        <g class="${headCls}"><path d="M13 -34L19 -50" stroke="#C08A5A" stroke-width="8" stroke-linecap="round"/>
            <ellipse cx="24" cy="-54" rx="9.5" ry="6.5" fill="#C08A5A"/><ellipse cx="17" cy="-61" rx="3" ry="5" fill="#B07A4A" transform="rotate(-25 17 -61)"/>
            <ellipse cx="22" cy="-62" rx="3" ry="5" fill="#B07A4A" transform="rotate(10 22 -62)"/>
            <circle cx="26" cy="-56" r="1.6" fill="#22264B"/><circle cx="33" cy="-53" r="2.2" fill="#22264B"/></g>
    </g></g>`;
    // Tek karakteri yerleştir (flip: sola baksın)
    const solo = (svg, x, flip, y = 176, s = 1.1) => `<g transform="translate(${x},${y}) scale(${flip ? -s : s},${s})"><g class="sc-pair" ${PEOPLE_ATTR}><g>${svg}</g></g></g>`;

    // ---------- Karakterler: Yusuf & Merve ----------
    // Görünüm Shibuya Sky fotoğrafından: Yusuf haki ceket + bej tişört + gözlük,
    // Merve kına kızılı uzun saç + kot ceket + uzun krem etek.
    // pose: 'down' | 'photo' | 'point' | 'reach' | 'fan'; late: poz yürüyüşten sonra kalkar
    function couple(bags, opt = {}) {
        const walk = opt.walk !== false;
        const SKIN = '#FFE0C8';
        const arms = (o, pose, late) => {
            const c = o.arm || o.coat, line = (d) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/>`;
            const hand = (x, y) => `<circle cx="${x}" cy="${y}" r="3" fill="${SKIN}" stroke="none"/>`;
            const back = bags ? line('M-9 -38L-27 -24') : line('M-10 -38L-15 -22') + hand(-15.5, -21);
            const down = line('M10 -38L15 -22') + hand(15.5, -21);
            const wrap = (inner) => late ? `<g class="sc-down">${down}</g><g class="sc-pose late">${inner}</g>` : `<g class="sc-pose">${inner}</g>`;
            switch (pose) {
                case 'photo': return back + wrap(line('M10 -38L17 -56') + `<rect x="11.5" y="-73" width="11" height="17" rx="2" fill="#22264B" stroke="#fff" stroke-width="1.4"/><circle class="sc-flash" cx="17" cy="-69" r="5" fill="#fff" stroke="none"/>`);
                case 'point': return back + wrap(line('M10 -38L24 -63') + hand(25, -65));
                case 'reach': return back + wrap(line('M10 -38L15 -80') + hand(15.5, -82));
                case 'grab':  return back + wrap(line('M10 -38L24 -46') + hand(25.5, -47));
                case 'clap': {
                    const ol = (d) => `<path d="${d}" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/>` + line(d);
                    const h2 = (x, y) => `<circle cx="${x}" cy="${y}" r="3.6" fill="${SKIN}" stroke="#fff" stroke-width="1.4"/>`;
                    return `<g class="sc-clap b">${ol('M-12 -40L-5 -35')}${h2(-2.8, -36)}</g><g class="sc-clap">${ol('M12 -40L5 -35')}${h2(2.8, -36)}</g>`
                         + `<g class="sc-spark" stroke="#FFE07A" stroke-width="2" stroke-linecap="round"><path d="M-8 -60l-4 -4M0 -64v-6M8 -60l4 -4"/></g>`;
                }
                case 'pointDown': return back + wrap(line('M10 -38L25 -27') + hand(26.5, -26));
                case 'offer': return back + wrap(line('M10 -38L26 -40') + hand(27.5, -40) + (o.item || ''));
                case 'eat': {
                    const ol = (d) => `<path d="${d}" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/>` + line(d);
                    return `<g class="sc-eat">${ol('M-10 -38L2 -50')}${hand(2.5, -51)}<path d="M3 -52l8 -3" stroke="#C9CED6" stroke-width="2.6" stroke-linecap="round"/></g>`
                         + `<g class="sc-pose">${line('M10 -38L24 -37')}${hand(25.5, -37)}${o.item || ''}</g>`;
                }
                case 'selfie': return back + wrap(line('M10 -38L30 -68') + hand(31, -70)
                    + `<rect x="25" y="-89" width="12" height="18" rx="2" fill="#22264B" stroke="#fff" stroke-width="1.4"/><circle class="sc-flash" cx="31" cy="-80" r="5" fill="#fff" stroke="none"/>`);
                case 'surprise': {
                    const up = line('M-10 -38L-21 -61') + hand(-22, -63) + line('M10 -38L21 -61') + hand(22, -63);
                    return late ? `<g class="sc-down">${back + down}</g><g class="sc-pop">${up}</g>` : up;
                }
                case 'push': {
                    const ol = (d) => `<path d="${d}" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/>` + line(d);
                    return ol('M-10 -36L22 -31') + hand(23, -31) + line('M10 -36L25 -30') + hand(26, -30);
                }
                case 'wave': return back + `<g class="sc-wave">${line('M10 -38L18 -78')}${hand(18.5, -80)}</g>`;
                case 'fan':   return `<g class="sc-fan b">${line('M-10 -38L-21 -47')}${hand(-22.5, -48)}</g><g class="sc-fan">${line('M10 -38L23 -50')}${hand(24.5, -51)}</g>`;
                default:      return back + down;
            }
        };
        const person = (o) => `
            <g ${o.scale ? `transform="scale(${o.scale})"` : ''}><g class="${walk ? 'sc-person' : 'sc-still'} ${o.act || ''}">
                <g class="sc-leg ${walk ? o.l1 : ''}"><rect x="-9" y="-22" width="7" height="22" rx="3.5" fill="${o.legs}"/></g>
                <g class="sc-leg ${walk ? o.l2 : ''}"><rect x="2" y="-22" width="7" height="22" rx="3.5" fill="${o.legs}"/></g>
                ${o.back || ''}${o.skirt || ''}
                <rect x="-12" y="-46" width="24" height="28" rx="10" fill="${o.coat}"/>
                ${o.inner || ''}
                ${arms(o, o.pose, o.late)}
                <circle cx="0" cy="-58" r="13" fill="${SKIN}"/>
                ${o.hair}
                <g stroke="none"><circle cx="4.5" cy="-58" r="1.8" fill="#22264B"/><circle cx="-1.5" cy="-58" r="1.8" fill="#22264B"/>
                <circle cx="8" cy="-54" r="2.2" fill="#F9B8C8"/><circle cx="-5" cy="-54" r="2.2" fill="#F9B8C8"/></g>
                ${o.fx || ''}
                ${o.extra || ''}
            </g></g>
            ${bags ? `<g class="${walk ? 'sc-case' : ''}"><path d="M-27 -24L-41 -34" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
                <rect x="-62" y="-36" width="24" height="31" rx="6" fill="${o.bag}"/>
                <path d="M-50 -36V-5" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="2.4"/>
                <circle cx="-57" cy="-3" r="2.6" fill="#22264B"/><circle cx="-43" cy="-3" r="2.6" fill="#22264B"/></g>` : ''}`;
        return {
            yusuf: person({
                l1: 'la', l2: 'lb', scale: 1.08, legs: '#2B3150', bag: '#FF7A59', pose: opt.yPose, late: opt.late, item: opt.yItem, act: opt.yAct, fx: opt.yFx,
                coat: '#7E8758',
                inner: '<rect x="-4.5" y="-46" width="9" height="26" rx="3" fill="#EADCC6" stroke="none"/><path d="M-5 -46L-9 -40M5 -46L9 -40" fill="none" stroke="#5F6842" stroke-width="2"/>',
                hair: '<path d="M-13.5 -59Q-15 -75 -2 -76Q13 -78 13.5 -61Q10 -69 1 -68Q-7 -69 -13.5 -59Z" fill="#6B4430"/>',
                extra: '<g fill="none" stroke="#22264B" stroke-width="1.5"><circle cx="5" cy="-58" r="4.2"/><circle cx="-2" cy="-58" r="4.2"/><path d="M2.2 -58h-1M9.2 -58.5l3.2 -1"/></g>'
            }),
            merve: person({
                l1: 'lb', l2: 'la', legs: '#E9D9C8', bag: '#FFC857', pose: opt.mPose, late: opt.late, item: opt.mItem, act: opt.mAct, fx: opt.mFx,
                coat: '#5D86BE',
                back: '<path d="M-14 -62Q-18 -42 -15 -30H15Q18 -42 14 -62Z" fill="#A8452B"/>',
                skirt: '<path d="M-12 -24L-16 -3H16L12 -24Z" fill="#F5EEE2"/>',
                inner: '<path d="M-6 -46L0 -38L6 -46Z" fill="#6B3A33" stroke="none"/><path d="M-7 -46L0 -36L7 -46" fill="none" stroke="#3F6596" stroke-width="2"/>',
                hair: '<path d="M-14 -57Q-15 -74 0 -74Q14 -74 14 -58Q9 -67 -1 -65Q-9 -63 -14 -57Z" fill="#A8452B"/>'
                    + '<path d="M-13.5 -58Q-15 -48 -14 -36M13.5 -59Q15 -48 14 -38" fill="none" stroke="#A8452B" stroke-width="5" stroke-linecap="round"/>'
            })
        };
    }
    const PEOPLE_ATTR = 'stroke="#fff" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"';
    // İkisi yan yana (walk: yürüyerek girer; style: --wfrom/--wto/--wd/--wdl/--steps ile özelleştirilir)
    const pair = (p, gap, o = {}) => `<g class="${o.walk === false ? 'sc-pair' : 'sc-walkers'}" style="${o.style || ''}" ${PEOPLE_ATTR}>
                        ${o.extra || ''}<g>${p.yusuf}</g><g transform="translate(${gap},0)${o.flipM ? ' scale(-1,1)' : ''}">${p.merve}</g></g>`;
    const heart = (x, y, delay) => `<g transform="translate(${x},${y})"><path class="sc-heart" ${delay ? `style="animation-delay:${delay}s"` : ''} d="M0 0c-6 -9 -18 -2 -10 7l10 9l10 -9c8 -9 -4 -16 -10 -7z" fill="#E8503A" stroke="#fff" stroke-width="2"/></g>`;
    function sceneBox(cls, inner, W, H, mobileVB) {
        const box = el('div', 'hero-scene ' + cls, inner);
        box.setAttribute('aria-hidden', 'true');
        const city = box.querySelector('.sc-city');
        const fit = () => city.setAttribute('viewBox', innerWidth < 700 ? mobileVB : `0 0 ${W} ${H}`);
        fit(); addEventListener('resize', fit);
        return box;
    }
    const svgOpen = (W, H) => `<svg class="sc-city" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" aria-hidden="true">`;
    const godzilla = (x, y) => `
        <g transform="translate(${x},${y})"><g class="sc-god-in">
            <path d="M-22 4l-6-20 14 8zM-6 -4l-2-22 12 12zM12 -2l4-22 8 14z" fill="#5DB972" stroke="#22264B" stroke-width="2.5" stroke-linejoin="round"/>
            <ellipse cx="0" cy="14" rx="34" ry="28" fill="#7BCB8A" stroke="#22264B" stroke-width="2.5"/>
            <circle cx="-14" cy="8" r="6.5" fill="#fff" stroke="#22264B" stroke-width="2"/><circle cx="12" cy="8" r="6.5" fill="#fff" stroke="#22264B" stroke-width="2"/>
            <circle class="sc-eye" cx="-13" cy="9" r="3" fill="#22264B"/><circle class="sc-eye" cx="13" cy="9" r="3" fill="#22264B"/>
            <circle cx="-24" cy="20" r="5" fill="#F9B8C8" opacity=".9"/><circle cx="24" cy="20" r="5" fill="#F9B8C8" opacity=".9"/>
            <path class="sc-mouth" d="M-8 24q8 8 16 0" fill="#22264B" stroke="#22264B" stroke-width="2.5" stroke-linecap="round"/>
            <g class="sc-roar"><path d="M-98 -40h66a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8h-4l10 12-20-12h-52a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8z" fill="#fff" stroke="#22264B" stroke-width="2"/>
                <text x="-65" y="-19" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="15" fill="#E8503A">ガオー!</text></g>
        </g></g>`;

    // ===== Gün 1 — Shinjuku, gün batımı: valizlerle varış, Godzilla'nın fotoğrafını çekmek =====
    function sceneDay1() {
        const W = 1200, H = 220, G = 176;
        // uzakta Shinjuku'nun simgeleri (altın saatin puslu tonunda)
        const tower = x => `M${x} ${H}V74H${x + 6}V58H${x + 12}V44H${x + 28}V58H${x + 34}V74H${x + 40}V${H}Z`;
        const far = `<g fill="#8A5C86" opacity=".58">
            <path d="${tower(230)}"/><path d="${tower(302)}"/><rect x="268" y="120" width="36" height="100"/>
            <path d="M820 ${H}V108H826V66L836 14L846 66V108H852V${H}Z"/><path d="M836 14V2" stroke="#8A5C86" stroke-width="2.5"/>
            <path d="M930 ${H}C930 130 946 78 972 44C998 78 1014 130 1014 ${H}Z"/>
            ${Array.from({ length: 16 }, (_, i) => `<rect x="${i * 76 - 10}" y="${70 + rnd(i + 900) * 50}" width="${44 + rnd(i + 910) * 26}" height="160" rx="2"/>`).join('')}
        </g>`;
        // Kabukicho benzeri sokak
        const row = [
            [-6, 64, 104, { c: FACADE[1], vs: '居酒屋', neon: 1, neonD: 2.2, chochin: 1, shop: '#F6D9A8', lit: .5 }],
            [60, 56, 128, { c: FACADE[0], vs: 'カラオケ', vsBg: '#3558D6', neon: 1, neonD: 2.8, hs: 'ラーメン', hsFg: '#22264B', noren: '#E8503A', lit: .55 }],
            [118, 74, 92, { c: FACADE[3], balcony: 1, awning: '#3E8E6E', hs: 'コンビニ', hsBg: '#3E8E6E', hsFg: '#fff', lit: .5 }],
            [194, 50, 116, { c: FACADE[4], vs: '新宿', vsBg: '#FFC857', vsFg: '#E8503A', neon: 1, neonD: 3.1, lit: .6 }],
            [246, 98, 112, { c: '#E6E0D4', vs: '映画館', vsBg: '#22264B', vsLeft: 1, neon: 1, neonD: 2.9, awning: '#3558D6', lit: .5 }],   // Godzilla'lı sinema binası
            [346, 30, 92, { c: FACADE[2], lit: .55 }],
            [376, 70, 96, { c: FACADE[6], balcony: 1, hs: 'ドラッグ', hsBg: '#FFC857', hsFg: '#22264B', lit: .5 }],
            [448, 64, 120, { c: FACADE[1], vs: '焼肉', neon: 1, neonD: 3.4, chochin: 1, shop: '#F6D9A8', lit: .55 }],
            [514, 104, 128, { c: FACADE[5], roofBox: 1, vs: 'ホテル', vsBg: '#F58FAA', neon: 1, neonD: 2.5, noren: '#22264B', hs: '寿司', lit: .5 }],
            [620, 60, 92, { c: FACADE[3], noren: '#3E8E6E', hs: 'うどん', lit: .5 }],
            [682, 72, 112, { c: FACADE[4], balcony: 1, vs: 'パチンコ', vsBg: '#E8503A', neon: 1, neonD: 3.6, lit: .55 }],
            [756, 58, 84, { c: FACADE[0], awning: '#F58FAA', hs: 'カフェ', lit: .5 }],
            [816, 68, 118, { c: FACADE[7], vs: '居酒屋', vsBg: '#FFC857', vsFg: '#22264B', neon: 1, neonD: 2.4, chochin: 1, shop: '#F6D9A8', lit: .55 }],
            [886, 62, 98, { c: FACADE[2], roofBox: 1, hs: '本屋', lit: .5 }],
            [950, 76, 124, { c: FACADE[1], balcony: 1, vs: 'ゲーム', vsBg: '#8E5BFF', neon: 1, neonD: 3.2, lit: .55 }],
            [1028, 60, 90, { c: FACADE[5], noren: '#E8503A', hs: 'そば', lit: .5 }],
            [1090, 70, 112, { c: FACADE[4], vs: 'バー', neon: 1, neonD: 2.7, chochin: 1, shop: '#F6D9A8', lit: .55 }],
            [1162, 60, 96, { c: FACADE[0], awning: '#3E8E6E', lit: .5 }]
        ].map(([x, w, h, o]) => bld(x, w, h, o)).join('');
        const poles = [40, 300, 590, 880, 1150];
        const p = couple(true, { yPose: 'photo', mPose: 'point', late: true });
        return sceneBox('scene-d1', `
            <span class="sc-plane"><i>${ICONS.plane}</i></span>
            ${svgOpen(W, H)}
                <g class="sc-sun"><circle cx="600" cy="90" r="118" fill="#fff" opacity=".16"/><circle cx="600" cy="90" r="82" fill="#fff" opacity=".22"/><circle cx="600" cy="90" r="54" fill="#FFE9A8"/></g>
                ${far}
                <g class="sc-god">${godzilla(296, BASE - 112 - 20)}</g>
                ${row}
                ${vending(212, '#3558D6')}${vending(232, '#E8503A')}${vending(838, '#E8503A')}
                ${sidewalk(W)}
                ${poles.map(x => pole(x)).join('')}${wires(poles)}
                <g transform="translate(130,${G}) scale(1.1)">${pair(p, 74)}${heart(37, -100, 6.6)}</g>
            </svg>`, W, H, `0 0 660 ${H}`);
    }

    // ===== Gün 2 — Asakusa sabahı: Senso-ji'nin tütsü kazanında dumanı üzerine yelpazelemek =====
    function sceneDay2() {
        const W = 1200, H = 220, G = 176;
        const skytree = `<g fill="#fff" opacity=".6"><path d="M748 ${H}L759 44H767L778 ${H}Z"/><rect x="750" y="100" width="26" height="10" rx="4"/><rect x="754" y="62" width="18" height="8" rx="3"/><path d="M763 44V4" stroke="#fff" stroke-width="3"/></g>`;
        const far = `<g fill="#fff" opacity=".28">${Array.from({ length: 14 }, (_, i) => `<rect x="${340 + i * 62}" y="${80 + rnd(i + 950) * 40}" width="${40 + rnd(i + 960) * 20}" height="160" rx="2"/>`).join('')}</g>`;
        // Senso-ji beş katlı pagoda (sağda, arkada)
        let pagoda = `<rect x="1084" y="${BASE - 4}" width="76" height="60" fill="#3A3F6B"/>`;
        for (let k = 0; k < 5; k++) {
            const yb = BASE - 4 - k * 24, w = 88 - k * 9, cx = 1122;
            pagoda += `<rect x="${cx - (w - 26) / 2}" y="${yb - 14}" width="${w - 26}" height="14" fill="#E8503A"/>`
                + `<path d="M${cx - w / 2 - 6} ${yb - 12}Q${cx} ${yb - 22} ${cx + w / 2 + 6} ${yb - 12}L${cx + w / 2 - 6} ${yb - 20}H${cx - w / 2 + 6}Z" fill="#3A3F6B"/>`;
        }
        pagoda += `<path d="M1122 ${BASE - 126}V${BASE - 158}" stroke="#FFC857" stroke-width="3.5"/><circle cx="1122" cy="${BASE - 160}" r="3.5" fill="#FFC857"/>`;
        // Nakamise: kiremit çatılı iki katlı geleneksel dükkânlar
        const signs = ['人形焼', '雷おこし', '和菓子', '扇子', '煎餅', '土産', '団子', '手拭'];
        let shops = '';
        for (let i = 0, x = 336; x < 900; i++, x += 70) {
            const nr = ['#22264B', '#E8503A', '#3E8E6E', '#3558D6'][i % 4];
            shops += `<rect x="${x}" y="${BASE - 78}" width="66" height="140" fill="#F3EADB"/>`
                + `<rect x="${x + 6}" y="${BASE - 70}" width="54" height="22" fill="#B98B5E"/>`
                + Array.from({ length: 9 }, (_, k) => `<path d="M${x + 9 + k * 6} ${BASE - 70}V${BASE - 48}" stroke="#8A5C3A" stroke-width="1.6"/>`).join('')
                + `<path d="M${x - 5} ${BASE - 42}L${x + 4} ${BASE - 54}H${x + 62}L${x + 71} ${BASE - 42}Z" fill="#4A4E6A"/>`
                + Array.from({ length: 7 }, (_, k) => `<path d="M${x + 4 + k * 10} ${BASE - 53}L${x + k * 10} ${BASE - 43}" stroke="#6B6F8C" stroke-width="1.2"/>`).join('')
                + `<path d="M${x - 4} ${BASE - 82}L${x + 6} ${BASE - 92}H${x + 60}L${x + 70} ${BASE - 82}Z" fill="#4A4E6A"/>`
                + `<rect x="${x + 4}" y="${BASE - 40}" width="58" height="40" fill="#FFE9C9"/>`
                + `<rect x="${x + 12}" y="${BASE - 40}" width="42" height="13" fill="${nr}"/>`
                + `<path d="M${x + 26} ${BASE - 37}V${BASE - 27}M${x + 40} ${BASE - 37}V${BASE - 27}" stroke="#FFE9C9" stroke-width="1.5"/>`
                + `<rect x="${x + 14}" y="${BASE - 24}" width="38" height="16" fill="#E7C79A"/>`
                + `<rect x="${x + 8}" y="${BASE - 102}" width="50" height="12" rx="2" fill="#fff"/><text x="${x + 33}" y="${BASE - 93}" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="8.5" fill="#E8503A">${signs[i % signs.length]}</text>`
                + `<ellipse cx="${x + 64}" cy="${BASE - 32}" rx="4.5" ry="6" fill="#E8503A"/>`;
        }
        // Kaminarimon + dev fener
        const gate = `
            <rect x="166" y="70" width="16" height="${H - 70}" fill="#E8503A"/><rect x="308" y="70" width="16" height="${H - 70}" fill="#E8503A"/>
            <rect x="186" y="96" width="20" height="74" fill="#C9402E"/><rect x="284" y="96" width="20" height="74" fill="#C9402E"/>
            <rect x="156" y="64" width="178" height="12" fill="#C9402E"/>
            <rect x="172" y="40" width="146" height="14" fill="#E8503A"/>
            <path d="M134 66Q245 46 356 66L344 50Q245 32 146 50Z" fill="#3A3F6B"/>
            <path d="M158 42Q245 26 332 42L322 30Q245 16 168 30Z" fill="#3A3F6B"/>
            <g transform="translate(245,76)"><g class="sc-lantern">
                <rect x="-19" y="0" width="38" height="7" rx="2" fill="#2A2438"/>
                <path d="M-27 7C-32 30 -32 52 -27 70H27C32 52 32 30 27 7Z" fill="#E8503A" stroke="#2A2438" stroke-width="2.5"/>
                <path d="M-30 20H30M-31 58H31" stroke="#2A2438" stroke-width="2"/>
                <text x="0" y="46" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="17" fill="#fff">雷門</text>
                <rect x="-19" y="70" width="38" height="7" rx="2" fill="#2A2438"/>
                <path d="M-6 77V86M0 77V88M6 77V86" stroke="#2A2438" stroke-width="2"/>
            </g></g>`;
        // Sakura ağacı + yapraklar
        const tree = `<path d="M70 ${H}C72 160 66 130 58 108M66 140C80 126 96 120 108 112" fill="none" stroke="#7A4B3A" stroke-width="10" stroke-linecap="round"/>
            <g fill="#F9B8C8"><circle cx="30" cy="92" r="34"/><circle cx="72" cy="78" r="40"/><circle cx="108" cy="98" r="30"/></g>
            <g fill="#FFD4DE"><circle cx="50" cy="114" r="26"/><circle cx="92" cy="112" r="22"/></g>`;
        let petals = '';
        for (let i = 0; i < 9; i++) petals += `<ellipse class="sc-petal" style="--d:${(-rnd(i + 3) * 6).toFixed(2)}s;--x:${(rnd(i + 11) * 260).toFixed(0)}px" cx="${30 + rnd(i + 7) * 90}" cy="${80 + rnd(i + 5) * 30}" rx="4" ry="2.6" fill="#F58FAA"/>`;
        // Jōkōro: bronz tütsü kazanı + yükselen duman
        const jx = 1004;
        const jokoro = `
            <path d="M${jx - 30} ${BASE + 2}L${jx - 24} ${BASE - 16}M${jx + 30} ${BASE + 2}L${jx + 24} ${BASE - 16}M${jx} ${BASE + 4}V${BASE - 14}" stroke="#6B5236" stroke-width="5" stroke-linecap="round"/>
            <path d="M${jx - 34} ${BASE - 40}H${jx + 34}Q${jx + 30} ${BASE - 12} ${jx} ${BASE - 12}Q${jx - 30} ${BASE - 12} ${jx - 34} ${BASE - 40}Z" fill="#8B6B4A"/>
            <path d="M${jx - 36} ${BASE - 40}H${jx + 36}" stroke="#6B5236" stroke-width="4" stroke-linecap="round"/>
            <rect x="${jx - 4}" y="${BASE - 66}" width="8" height="26" fill="#8B6B4A"/>
            <path d="M${jx - 26} ${BASE - 64}Q${jx} ${BASE - 82} ${jx + 26} ${BASE - 64}L${jx + 20} ${BASE - 70}Q${jx} ${BASE - 86} ${jx - 20} ${BASE - 70}Z" fill="#6B5236"/>
            <circle cx="${jx}" cy="${BASE - 86}" r="4" fill="#C9A15A"/>
            ${[0, 1, 2, 3, 4].map(i => `<path class="sc-smoke" style="--d:${(i * .9).toFixed(1)}s" d="M${jx - 14 + i * 7} ${BASE - 42}c-8 -10 8 -16 0 -26c-8 -10 8 -16 0 -26" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"/>`).join('')}`;
        const p = couple(false, { walk: false, yPose: 'fan', mPose: 'fan' });
        return sceneBox('scene-d2', `
            ${svgOpen(W, H)}
                <g class="sc-rise"><circle cx="890" cy="70" r="92" fill="#fff" opacity=".2"/><circle cx="890" cy="70" r="40" fill="#FFF4D6"/></g>
                ${far}${skytree}${pagoda}
                ${shops}
                ${tree}${gate}
                ${sidewalk(W, '#E4DCCB')}
                ${jokoro}
                <g transform="translate(${jx - 52},${G}) scale(1.1)">
                    <g class="sc-pair" ${PEOPLE_ATTR}><g>${p.yusuf}</g></g>
                </g>
                <g transform="translate(${jx + 52},${G}) scale(-1.1,1.1)">
                    <g class="sc-pair" ${PEOPLE_ATTR}><g>${p.merve}</g></g>
                </g>
                <g transform="translate(${jx},${G}) scale(1.1)">${heart(0, -112, 2.6)}</g>
                ${petals}
            </svg>`, W, H, `600 0 620 ${H}`);
    }

    // ===== Gün 3 — Yağmurda Shibuya Scramble: şemsiye altında yeşil ışıkta karşıya geçmek =====
    function sceneDay3() {
        const W = 1200, H = 220, G = 176;
        const clouds = `<g class="sc-clouds" fill="#fff" opacity=".5">
            <path d="M80 40h120a22 22 0 0 0-8-42 30 30 0 0 0-56-6 26 26 0 0 0-56 48z"/>
            <path d="M560 28h150a26 26 0 0 0-10-50 36 36 0 0 0-66-6 30 30 0 0 0-74 56z"/>
            <path d="M980 46h130a24 24 0 0 0-9-46 32 32 0 0 0-60-6 28 28 0 0 0-61 52z"/></g>`;
        const far = `<g fill="#fff" opacity=".22">${Array.from({ length: 18 }, (_, i) => `<rect x="${i * 70 - 10}" y="${50 + rnd(i + 970) * 50}" width="${44 + rnd(i + 980) * 22}" height="180" rx="2"/>`).join('')}</g>`;
        // Shibuya 109 kulesi
        const t109 = `<rect x="40" y="38" width="62" height="${H}" rx="31" fill="#E9E6F5"/>
            <rect x="40" y="52" width="62" height="24" fill="#2B2F5E"/>
            <text x="71" y="70" text-anchor="middle" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="17" fill="#fff">109</text>
            ${[0, 1, 2, 3, 4].map(r => `<path d="M44 ${92 + r * 16}H98" stroke="#C9C3D9" stroke-width="2"/>`).join('')}`;
        // dev ekranlı binalar (Q-Front benzeri)
        const screens = `
            <rect x="500" y="62" width="150" height="${H}" fill="#3A3F6B"/>
            <rect class="sc-screen" x="510" y="72" width="130" height="46" rx="3"/>
            <rect class="sc-screen s2" x="510" y="124" width="62" height="22" rx="2"/><rect class="sc-screen s3" x="578" y="124" width="62" height="22" rx="2"/>
            <rect x="900" y="40" width="110" height="${H}" fill="#2B2F5E"/>
            <rect class="sc-screen s3" x="910" y="52" width="90" height="46" rx="3"/>`;
        const row = [
            [108, 66, 112, { c: FACADE[1], vs: 'カラオケ', vsBg: '#3558D6', hs: 'ショップ', lit: .3 }],
            [176, 60, 96, { c: FACADE[2], awning: '#F58FAA', hs: 'カフェ', lit: .3 }],
            [238, 74, 126, { c: FACADE[4], balcony: 1, vs: '渋谷', vsBg: '#FFC857', vsFg: '#E8503A', lit: .3 }],
            [314, 62, 104, { c: FACADE[0], noren: '#3E8E6E', hs: 'ラーメン', lit: .3 }],
            [378, 64, 134, { c: FACADE[6], vs: 'ドラッグ', vsBg: '#FFC857', vsFg: '#22264B', lit: .3 }],
            [444, 54, 98, { c: FACADE[3], awning: '#3E8E6E', lit: .3 }],
            [652, 70, 118, { c: FACADE[2], vs: 'ゲーム', vsBg: '#8E5BFF', lit: .3 }],
            [724, 60, 96, { c: FACADE[5], hs: '本屋', lit: .3 }],
            [786, 112, 138, { c: FACADE[1], balcony: 1, vs: '居酒屋', chochin: 1, shop: '#F6D9A8', lit: .3 }],
            [1012, 70, 120, { c: FACADE[4], vs: 'ホテル', vsBg: '#F58FAA', lit: .3 }],
            [1084, 60, 92, { c: FACADE[0], awning: '#E8503A', hs: 'ピザ', lit: .3 }],
            [1146, 70, 116, { c: FACADE[3], vs: '焼肉', lit: .3 }]
        ].map(([x, w, h, o]) => bld(x, w, h, o)).join('');
        // asfalt + yaya geçidi şeritleri
        const road = `<rect x="-20" y="${BASE}" width="${W + 40}" height="60" fill="#5A5D78"/>`
            + Array.from({ length: 40 }, (_, i) => `<rect x="${i * 32 - 8}" y="${BASE + 3}" width="18" height="12" fill="#fff" opacity=".85"/>`).join('');
        // yaya trafik ışığı (kırmızı -> yeşil)
        const signal = `<rect x="296" y="96" width="4" height="${H}" fill="#8E8A9C"/>
            <rect x="286" y="78" width="24" height="34" rx="3" fill="#2A2438"/>
            <circle class="sc-red" cx="298" cy="87" r="5.5" fill="#E8503A"/><circle class="sc-green" cx="298" cy="103" r="5.5" fill="#5CE18A"/>`;
        // yağmurluk/şemsiyeli yayalar
        const peds = [[400, 1], [470, -1], [560, 1], [640, -1], [720, 1], [820, -1], [940, 1], [1040, -1]].map(([x, dir], i) => {
            const uc = ['#3558D6', '#F58FAA', '#FFC857', '#3E8E6E', '#E8503A', '#8E5BFF', '#5CE1E6', '#FF7A59'][i];
            const bc = ['#22264B', '#4A4E6A', '#6B4430', '#2B3150'][i % 4];
            return `<g class="sc-ped" style="--dx:${dir * 150}px;--d:${(1.6 + rnd(i + 990) * .5).toFixed(2)}s"><g transform="translate(${x},${G}) scale(.78)">
                <rect x="-6" y="-22" width="5" height="22" rx="2.5" fill="${bc}"/><rect x="1" y="-22" width="5" height="22" rx="2.5" fill="${bc}"/>
                <rect x="-10" y="-44" width="20" height="26" rx="8" fill="${bc}"/><circle cx="0" cy="-53" r="9" fill="#F3D2B8"/>
                <path d="M0 -44V-70" stroke="#4A4E6A" stroke-width="1.6"/>
                <path d="M-26 -68Q0 -98 26 -68Z" fill="${uc}"/></g></g>`;
        }).join('');
        let rain = '';
        for (let i = 0; i < 46; i++) {
            const x = Math.round(rnd(i + 200) * 1240 - 20), d = (-rnd(i + 300) * 1.2).toFixed(2), l = 10 + Math.round(rnd(i + 400) * 8);
            rain += `<path class="sc-drop" style="--d:${d}s" d="M${x} -20l-4 ${l}"/>`;
        }
        let ripples = '';
        [[60, 0], [250, .6], [430, 1.1], [700, .3], [980, .9]].forEach(([x, d]) => ripples += `<ellipse class="sc-ripple" style="--d:${d}s" cx="${x}" cy="${G + 18}" rx="10" ry="3" fill="none" stroke="#fff" stroke-width="1.6"/>`);
        // ortak şeffaf şemsiye
        const gap = 66, ux = gap / 2;
        const umbrella = `<g><path d="M12 -30L${ux} -96" stroke="#fff" stroke-width="2.6"/>
            <path d="M${ux - 58} -94Q${ux} -152 ${ux + 58} -94Q${ux + 44} -100 ${ux + 29} -94Q${ux + 14} -100 ${ux} -94Q${ux - 14} -100 ${ux - 29} -94Q${ux - 44} -100 ${ux - 58} -94Z" fill="rgba(255,255,255,.38)" stroke="#fff" stroke-width="2.4"/>
            <path d="M${ux} -123V-94M${ux - 30} -116L${ux - 29} -94M${ux + 30} -116L${ux + 29} -94" stroke="#fff" stroke-width="1.6" opacity=".9"/>
            <circle cx="${ux}" cy="-125" r="2.5" fill="#fff"/></g>`;
        const p = couple(false);
        return sceneBox('scene-d3', `
            ${svgOpen(W, H)}
                ${clouds}${far}
                ${t109}${screens}${row}
                ${road}
                ${signal}
                ${peds}
                ${ripples}
                <g transform="translate(30,${G}) scale(1.1)">${pair(p, gap, { extra: umbrella, style: '--wfrom:0px;--wto:150px;--wd:3.4s;--wdl:1.8s;--steps:7' })}${heart(ux + 150, -142, 5.4)}</g>
                <g class="sc-rain" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".75">${rain}</g>
            </svg>`, W, H, `0 0 640 ${H}`);
    }

    // ===== Gün 4 — Saray surları, Ginza ve teamLab: lamba ormanında ışığa dokunmak =====
    function sceneDay4() {
        const W = 1200, H = 220, G = 176;
        const far = `<g fill="#fff" opacity=".22">${Array.from({ length: 10 }, (_, i) => `<rect x="${330 + i * 56}" y="${60 + rnd(i + 500) * 40}" width="${40 + rnd(i + 520) * 14}" height="180" rx="2"/>`).join('')}</g>`;
        // İmparatorluk Sarayı: hendek, taş sur, yagura, Nijubashi, kuğu, kara çam
        let stones = '';
        for (let r = 0; r < 4; r++) for (let x = 150 + (r % 2) * 12; x < 340; x += 24) stones += `<rect x="${x}" y="${96 + r * 12}" width="22" height="11" rx="4" fill="${['#C9C3D9', '#B8B1CC', '#D6D0E3'][(r + x) % 3]}"/>`;
        const palace = `<rect x="-10" y="140" width="360" height="40" fill="#7FB8E8"/>
            <path d="M10 156q14 -5 28 0t28 0M140 166q14 -5 28 0t28 0M250 152q14 -5 28 0t28 0" fill="none" stroke="#fff" stroke-width="2" opacity=".7"/>
            <path d="M140 146L156 92H340V146Z" fill="#A8A1BF"/>${stones}
            <rect x="204" y="66" width="90" height="26" fill="#fff"/><path d="M190 70L212 54H286L308 70Z" fill="#3A3F6B"/>
            <rect x="222" y="40" width="54" height="16" fill="#fff"/><path d="M212 44L230 30H268L286 44Z" fill="#3A3F6B"/>
            <rect x="216" y="74" width="10" height="12" fill="#3A3F6B"/><rect x="244" y="74" width="10" height="12" fill="#3A3F6B"/><rect x="272" y="74" width="10" height="12" fill="#3A3F6B"/>
            <path d="M0 132H150V142Q132 142 120 160Q108 142 90 142Q72 142 60 160Q48 142 30 142Q12 142 0 160Z" fill="#D6D0E3"/>
            <path d="M0 128H150" stroke="#B8B1CC" stroke-width="4"/>
            ${[10, 40, 70, 100, 130].map(x => `<rect x="${x}" y="118" width="4" height="12" fill="#B8B1CC"/>`).join('')}
            <g class="sc-swan"><g transform="translate(0,154)"><path d="M-14 0Q-12 -10 4 -8Q12 -7 14 0Z" fill="#fff"/>
                <path d="M8 -6Q12 -22 4 -22Q0 -22 2 -18" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><path d="M2 -21L-3 -19" stroke="#FF7A59" stroke-width="2.5" stroke-linecap="round"/></g></g>
            <path d="M346 ${BASE}C344 150 352 130 342 112" fill="none" stroke="#6B4430" stroke-width="7" stroke-linecap="round"/>
            <g fill="#3E8E6E"><ellipse cx="326" cy="114" rx="26" ry="10"/><ellipse cx="358" cy="100" rx="24" ry="9"/><ellipse cx="336" cy="88" rx="18" ry="8"/></g>`;
        // Ginza: Wako saat kulesi + şık mağaza cepheleri + sokak lambaları
        const ginzaFace = (x, w, h, c, sign) => `<rect x="${x}" y="${BASE - h}" width="${w}" height="${h + 60}" fill="${c}"/>`
            + Array.from({ length: Math.floor((h - 34) / 20) }, (_, r) => Array.from({ length: Math.floor((w - 8) / 16) }, (_, k) =>
                `<path d="M${x + 8 + k * 16} ${BASE - h + 26 + r * 20}v-6a5 5 0 0 1 10 0v6z" fill="#9FB0CC"/>`).join('')).join('')
            + `<rect x="${x + 4}" y="${BASE - 26}" width="${w - 8}" height="26" fill="#E9F1F8"/><rect x="${x + 4}" y="${BASE - 30}" width="${w - 8}" height="4" fill="#C9A15A"/>`
            + `<text x="${x + w / 2}" y="${BASE - 34}" text-anchor="middle" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="8" letter-spacing="2" fill="#6B6F8C">${sign}</text>`;
        const ginza = ginzaFace(380, 80, 104, '#EFEAE0', 'GINZA') + ginzaFace(462, 86, 120, '#E2DCD0', 'MODE')
            + `<rect x="556" y="86" width="108" height="${H}" rx="10" fill="#F3EEE4"/>
            ${[0, 1, 2, 3].map(r => [0, 1, 2, 3, 4].map(c => `<rect x="${566 + c * 19}" y="${100 + r * 18}" width="11" height="10" rx="2" fill="#B8B1CC"/>`).join('')).join('')}
            <rect x="590" y="44" width="40" height="44" fill="#F3EEE4"/><path d="M584 46L610 22L636 46Z" fill="#7E8758"/><path d="M610 22V10" stroke="#7E8758" stroke-width="2.5"/>
            <circle cx="610" cy="64" r="15" fill="#fff" stroke="#3A3F6B" stroke-width="2.5"/>
            <g class="sc-hand-h"><path d="M610 64V56" stroke="#22264B" stroke-width="2.8" stroke-linecap="round"/></g>
            <g class="sc-hand-m"><path d="M610 64V52" stroke="#22264B" stroke-width="2" stroke-linecap="round"/></g><circle cx="610" cy="64" r="2" fill="#22264B"/>`
            + ginzaFace(668, 90, 112, '#E8E2D6', 'LOFT') + ginzaFace(760, 90, 96, '#F1ECE3', 'CAFE')
            + [372, 552, 760].map(x => `<path d="M${x} ${BASE}V${BASE - 64}" stroke="#3A3F6B" stroke-width="3"/><path d="M${x - 9} ${BASE - 64}h18" stroke="#3A3F6B" stroke-width="2.5"/>
                <circle cx="${x - 9}" cy="${BASE - 58}" r="5" fill="#FFF4D6" stroke="#3A3F6B" stroke-width="1.5"/><circle cx="${x + 9}" cy="${BASE - 58}" r="5" fill="#FFF4D6" stroke="#3A3F6B" stroke-width="1.5"/>`).join('');
        // teamLab "Rezonans Lambaları Ormanı": karanlık oda + asılı lambalar, dokununca renk dalgası yayılır
        const touchX = 1050, touchY = 70;
        let lamps = '';
        const L = [[900, 46], [930, 82], [960, 34], [990, 110], [1020, 54], [1050, 70], [1080, 30], [1110, 96], [1140, 50], [1170, 84], [1196, 40], [916, 126], [1070, 128], [1160, 132]];
        L.forEach(([x, y], i) => {
            const dist = Math.hypot(x - touchX, y - touchY);
            lamps += `<path d="M${x} 16V${y - 10}" stroke="#fff" stroke-width=".8" opacity=".35"/>
                <g class="sc-lamp" style="--d:${(1.9 + dist * .006).toFixed(2)}s"><ellipse cx="${x}" cy="${y + 1}" rx="17" ry="20" opacity=".22"/><path d="M${x - 8} ${y - 8}Q${x - 11} ${y + 8} ${x} ${y + 12}Q${x + 11} ${y + 8} ${x + 8} ${y - 8}Z"/></g>`;
        });
        const room = `<rect x="868" y="10" width="360" height="${H}" rx="22" fill="#1B1E3F"/>
            <rect x="868" y="${BASE}" width="360" height="60" fill="#262A52"/>
            <rect x="868" y="10" width="360" height="${H}" rx="22" fill="none" stroke="#fff" stroke-width="2.5" opacity=".7"/>
            ${lamps}`;
        const p = couple(false, { walk: false, yPose: 'photo', mPose: 'reach' });
        return sceneBox('scene-d4', `
            ${svgOpen(W, H)}
                ${far}
                ${palace}
                ${ginza}
                ${sidewalk(W, '#E4DFEA')}
                ${room}
                <g transform="translate(958,${G}) scale(1.1)"><g class="sc-pair" ${PEOPLE_ATTR}><g>${p.yusuf}</g></g></g>
                <g transform="translate(1035,${G}) scale(1.1)"><g class="sc-pair" ${PEOPLE_ATTR}><g>${p.merve}</g></g></g>
                <g transform="translate(1000,${G}) scale(1.1)">${heart(0, -104, 3.4)}</g>
            </svg>`, W, H, `600 0 620 ${H}`);
    }

    // ===== Gün 5 — Shinkansen ile Kyoto; akşam Yasaka Tapınağı'nda çan çalıp dua etmek =====
    function sceneDay5() {
        const W = 1200, H = 220, G = 176;
        // Higashiyama tepeleri
        const hills = `<path d="M-20 120Q120 60 260 104T560 92T860 70T1220 96V230H-20Z" fill="#7FBF9A" opacity=".55"/>
            <path d="M-20 136Q180 92 380 126T780 110T1220 124V230H-20Z" fill="#5FA882" opacity=".6"/>`;
        // Yükseltilmiş Shinkansen hattı + tren (sağdan sola, Kyoto'ya doğru)
        const viaduct = `<rect x="-20" y="96" width="${W + 40}" height="7" fill="#B8B1CC"/>`
            + Array.from({ length: 13 }, (_, i) => `<rect x="${i * 100 + 20}" y="103" width="10" height="80" fill="#C9C3D9"/>`).join('');
        const car = (x, nose) => nose
            ? `<path d="M${x} 94Q${x + 6} 74 ${x + 46} 72H${x + 92}V94Z" fill="#fff"/><path d="M${x + 14} 80Q${x + 22} 74 ${x + 40} 74V81Z" fill="#22264B"/>`
            : `<rect x="${x}" y="72" width="92" height="22" rx="3" fill="#fff"/>`;
        let train = '';
        for (let k = 0; k < 4; k++) {
            const x = k * 94;
            train += car(x, k === 0) + `<rect x="${x + (k ? 2 : 30)}" y="86" width="${k ? 88 : 60}" height="3" fill="#3558D6"/>`
                + Array.from({ length: 6 }, (_, j) => (k || j > 2) ? `<rect x="${x + 8 + j * 14}" y="77" width="8" height="5" rx="1" fill="#9FB0CC"/>` : '').join('');
        }
        train = `<g class="sc-train"><g transform="translate(1260,0)">${train}<path d="M376 78h40M370 86h60M380 92h30" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/></g></g>`;
        // Yasaka pagodası (Hokan-ji), geride solda
        let pagoda = '';
        for (let k = 0; k < 5; k++) {
            const yb = 150 - k * 22, w = 70 - k * 7, cx = 262;
            pagoda += `<rect x="${cx - (w - 22) / 2}" y="${yb - 12}" width="${w - 22}" height="12" fill="#8A5C3A"/>`
                + `<path d="M${cx - w / 2 - 6} ${yb - 10}Q${cx} ${yb - 19} ${cx + w / 2 + 6} ${yb - 10}L${cx + w / 2 - 5} ${yb - 17}H${cx - w / 2 + 5}Z" fill="#3A3F6B"/>`;
        }
        pagoda += `<path d="M262 40V14" stroke="#C9A15A" stroke-width="3"/><rect x="246" y="150" width="32" height="40" fill="#8A5C3A"/>`;
        // Gion machiya evleri: koyu ahşap, kafes (koshi), üst katta mushiko pencereler, kiremit saçak, inuyarai çiti
        const machiya = (x, w, h, nr, lamp) => {
            const top = BASE - h;
            let g = `<rect x="${x}" y="${top}" width="${w}" height="${h + 60}" fill="#6B4430"/>`
                + `<rect x="${x + 4}" y="${top + 8}" width="${w - 8}" height="16" fill="#F1E6D2"/>`
                + Array.from({ length: Math.floor((w - 14) / 7) }, (_, k) => `<rect x="${x + 8 + k * 7}" y="${top + 10}" width="3" height="12" rx="1" fill="#6B4430"/>`).join('')
                + `<path d="M${x - 6} ${top + 32}L${x + 2} ${top + 24}H${x + w - 2}L${x + w + 6} ${top + 32}Z" fill="#3A3F6B"/>`
                + `<path d="M${x - 4} ${top + 2}L${x + 4} ${top - 6}H${x + w - 4}L${x + w + 4} ${top + 2}Z" fill="#3A3F6B"/>`
                + `<rect x="${x + 4}" y="${top + 34}" width="${w - 8}" height="${BASE - top - 34}" fill="#8A5C3A"/>`
                + Array.from({ length: Math.floor((w - 10) / 5) }, (_, k) => `<path d="M${x + 7 + k * 5} ${top + 36}V${BASE - 10}" stroke="#5A3826" stroke-width="2"/>`).join('')
                + `<rect x="${x + w / 2 - 12}" y="${top + 34}" width="24" height="12" fill="${nr}"/><path d="M${x + w / 2 - 4} ${top + 36}v10M${x + w / 2 + 4} ${top + 36}v10" stroke="#8A5C3A" stroke-width="1.3"/>`
                + `<path d="M${x + 2} ${BASE}Q${x + 4} ${BASE - 14} ${x + 14} ${BASE - 14}H${x + w - 14}Q${x + w - 4} ${BASE - 14} ${x + w - 2} ${BASE}" fill="#C9A06A" opacity=".9"/>`;
            if (lamp) g += `<g class="sc-glow" style="--d:${lamp}s"><ellipse cx="${x + 10}" cy="${top + 44}" rx="5" ry="7" fill="#FFF4D6"/><path d="M${x + 7} ${top + 37}h6M${x + 7} ${top + 51}h6" stroke="#2A2438" stroke-width="1.3"/></g>`;
            return g;
        };
        const gion = machiya(-4, 84, 74, '#22264B', 1.6) + machiya(84, 78, 70, '#E8503A', 2.2) + machiya(166, 90, 78, '#3E8E6E', 2.8) + machiya(260, 80, 68, '#22264B', 3.2);
        // Yasaka'nın kırmızı Romon kapısı (ortada)
        const romon = `<rect x="548" y="96" width="140" height="${H}" fill="#E8503A"/>
            <rect x="560" y="100" width="22" height="70" fill="#fff"/><rect x="654" y="100" width="22" height="70" fill="#fff"/><rect x="594" y="104" width="48" height="80" fill="#3A2438"/>
            <path d="M530 98L548 82H688L706 98Z" fill="#3A3F6B"/>
            <rect x="562" y="56" width="112" height="28" fill="#E8503A"/><rect x="574" y="62" width="88" height="14" fill="#fff"/>
            <path d="M540 58L560 40H676L696 58Z" fill="#3A3F6B"/><path d="M596 40L618 30L640 40" fill="#3A3F6B"/>`;
        // Tapınak ibadet salonu (haiden) + büyük çan + ip + bağış kutusu + fener sırası
        const haiden = `<rect x="886" y="66" width="330" height="${H}" fill="#F3EADB"/>
            ${[902, 984, 1066, 1148].map(x => `<rect x="${x}" y="70" width="12" height="${H}" fill="#E8503A"/>`).join('')}
            <rect x="886" y="66" width="330" height="10" fill="#E8503A"/>
            <path d="M862 70L894 34H1210L1240 70Z" fill="#4A4E6A"/><path d="M880 40L900 22H1206L1226 40Z" fill="#3A3F6B"/>
            ${Array.from({ length: 9 }, (_, i) => `<g class="sc-glow" style="--d:${(2 + i * .25).toFixed(2)}s"><ellipse cx="${900 + i * 36}" cy="86" rx="7" ry="9" fill="#FFF4D6"/><path d="M${896 + i * 36} 77h8M${896 + i * 36} 95h8" stroke="#2A2438" stroke-width="1.4"/><text x="${900 + i * 36}" y="89" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="7" fill="#E8503A">祭</text></g>`).join('')}
            <rect x="1010" y="${BASE - 26}" width="88" height="26" fill="#8A5C3A"/><path d="M1010 ${BASE - 26}h88" stroke="#5A3826" stroke-width="3"/>
            ${Array.from({ length: 8 }, (_, k) => `<path d="M${1016 + k * 11} ${BASE - 23}V${BASE - 14}" stroke="#5A3826" stroke-width="2"/>`).join('')}
            <text x="1054" y="${BASE - 4}" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="9" fill="#FFE9C9">奉納</text>`;
        // çan + kırmızı-beyaz örgü ip (Yusuf'un eline iner; çalınınca sallanır)
        const yx = 978, rx = yx + 25.5 * 1.188;            // ip, Yusuf'un tuttuğu yerden geçer
        const bell = `<g class="sc-bell"><path d="M${rx} 80V156" stroke="#E8503A" stroke-width="6" stroke-linecap="round"/>
            <path d="M${rx} 80V156" stroke="#fff" stroke-width="6" stroke-dasharray="4 6"/>
            <path d="M${rx - 4} 156l-3 10M${rx} 156v12M${rx + 4} 156l3 10" stroke="#E8503A" stroke-width="2.4" stroke-linecap="round"/>
            <path d="M${rx} 66V72" stroke="#5A3826" stroke-width="2"/>
            <circle cx="${rx}" cy="78" r="9" fill="#E2B04A" stroke="#8A5C3A" stroke-width="2"/><path d="M${rx - 6} 81h12" stroke="#8A5C3A" stroke-width="2"/></g>`;
        const ishidatami = `<rect x="-20" y="${BASE}" width="${W + 40}" height="60" fill="#D8CFC0"/><path d="M-20 ${BASE}H${W + 20}" stroke="#B7AA94" stroke-width="2"/>`
            + Array.from({ length: 30 }, (_, i) => `<path d="M${i * 44 + (i % 2) * 10} ${BASE + 2}v14M${i * 44 + 22} ${BASE + 16}v30" stroke="#C2B6A1" stroke-width="1.2"/>`).join('')
            + `<path d="M-20 ${BASE + 16}H${W + 20}" stroke="#C2B6A1" stroke-width="1.2"/>`;
        const p = couple(false, { walk: false, yPose: 'grab', mPose: 'clap' });
        return sceneBox('scene-d5', `
            ${svgOpen(W, H)}
                <g class="sc-moon"><circle cx="760" cy="34" r="16" fill="#FFF4D6"/><circle cx="768" cy="30" r="14" fill="#FFB199" opacity=".9"/></g>
                ${hills}
                ${viaduct}${train}
                ${pagoda}
                ${romon}
                ${gion}
                ${haiden}
                ${ishidatami}
                <g transform="translate(${yx},${G}) scale(1.1)"><g class="sc-pair" ${PEOPLE_ATTR}><g>${p.yusuf}</g></g></g>
                ${bell}
                <g transform="translate(1110,${G}) scale(-1.1,1.1)"><g class="sc-pair" ${PEOPLE_ATTR}><g>${p.merve}</g></g></g>
                <g transform="translate(1052,${G}) scale(1.1)">${heart(0, -112, 4.6)}</g>
            </svg>`, W, H, `600 0 620 ${H}`);
    }

    // ===== Gün 6 — Arashiyama: Randen tramvayı durur, beyaz eldivenli kondüktör eğilir, biz de eğiliriz =====
    function sceneDay6() {
        const W = 1200, H = 220, G = 176;
        const hills = `<path d="M-20 110Q100 40 230 90T470 70T760 96T1000 60T1220 90V230H-20Z" fill="#5FA882" opacity=".7"/>
            <path d="M-20 132Q160 92 340 122T720 112T1220 122V230H-20Z" fill="#4E9A73" opacity=".75"/>`;
        // Bambu ormanı (solda)
        let bamboo = `<g class="sc-rays" fill="#fff" opacity=".16"><path d="M40 -30H90L20 230H-20Z"/><path d="M150 -30H185L120 230H90Z"/><path d="M250 -30H280L230 230H200Z"/></g>`;
        for (let i = 0; i < 17; i++) {
            const x = -8 + i * 21 + rnd(i + 1300) * 8, w = 7 + rnd(i + 1310) * 4, c = ['#7BCB8A', '#5DB972', '#8ED1B0'][i % 3];
            bamboo += `<rect x="${x}" y="-30" width="${w}" height="${H + 60}" rx="3" fill="${c}"/>`
                + Array.from({ length: 8 }, (_, k) => `<path d="M${x} ${4 + k * 26 + (i % 3) * 7}h${w}" stroke="#3E8E6E" stroke-width="1.6"/>`).join('');
        }
        bamboo += `<g fill="#6FBF86">${Array.from({ length: 22 }, (_, i) => `<ellipse cx="${rnd(i + 1400) * 360}" cy="${rnd(i + 1410) * 50 - 6}" rx="14" ry="4" transform="rotate(${(rnd(i + 1420) * 60 - 30).toFixed(0)} ${(rnd(i + 1400) * 360).toFixed(0)} ${(rnd(i + 1410) * 50 - 6).toFixed(0)})"/>`).join('')}</g>`;
        // Kinkaku-ji (ortada): altın köşk + gölet
        const kinkaku = `<g>
            <ellipse cx="620" cy="${BASE + 6}" rx="150" ry="22" fill="#7FB8E8"/>
            <path d="M470 150Q500 120 530 150ZM700 150Q735 116 770 150Z" fill="#3E8E6E"/>
            <rect x="560" y="120" width="120" height="${BASE - 120}" fill="#F3EADB"/>${[566, 590, 614, 638, 662].map(x => `<rect x="${x}" y="122" width="4" height="${BASE - 122}" fill="#8A5C3A"/>`).join('')}
            <path d="M544 122L566 106H674L696 122Z" fill="#3A3F6B"/>
            <rect x="570" y="82" width="100" height="26" fill="#E8B83A"/>${[580, 600, 620, 640, 660].map(x => `<rect x="${x}" y="86" width="2" height="20" fill="#B88A1E"/>`).join('')}
            <path d="M554 86L576 70H664L686 86Z" fill="#3A3F6B"/>
            <rect x="592" y="52" width="56" height="20" fill="#F2C94C"/>
            <path d="M578 56L604 38H636L662 56Z" fill="#3A3F6B"/>
            <path d="M620 38l-5 -12 6 4 5 -7 -1 15z" fill="#F2C94C"/>
            <path d="M560 ${BASE + 2}h120" stroke="#F2C94C" stroke-width="4" opacity=".5"/></g>`;
        // Sazdan çatılı matcha kafesi (sağda) + kırmızı şemsiye + kırmızı keçeli bank
        const cafe = `<g>
            <rect x="926" y="104" width="214" height="${H}" fill="#EFE3CB"/>
            ${[932, 990, 1048, 1106].map(x => `<rect x="${x}" y="104" width="6" height="${H}" fill="#6B4430"/>`).join('')}
            <rect x="944" y="118" width="40" height="34" fill="#F8F2E6"/><rect x="1060" y="118" width="40" height="34" fill="#F8F2E6"/>
            ${[952, 960, 968, 976, 1068, 1076, 1084, 1092].map(x => `<path d="M${x} 118v34" stroke="#C9B48E" stroke-width="1"/>`).join('')}
            <rect x="1000" y="124" width="42" height="14" fill="#3E8E6E"/><path d="M1014 126v12M1028 126v12" stroke="#EFE3CB" stroke-width="1.4"/>
            <path d="M896 112Q1033 22 1170 112Z" fill="#B88A4A"/>
            ${Array.from({ length: 12 }, (_, k) => `<path d="M${912 + k * 21} 110Q${1000 + k * 6} ${60 + Math.abs(6 - k) * 5} ${1033} 40" fill="none" stroke="#9C7038" stroke-width="1.2" opacity=".6"/>`).join('')}
            <path d="M896 112H1170" stroke="#8A5C3A" stroke-width="5"/>
            <rect x="1004" y="88" width="34" height="14" rx="2" fill="#fff"/><text x="1021" y="99" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="10" fill="#3E8E6E">抹茶</text>
            <path d="M1170 ${BASE}V96" stroke="#6B4430" stroke-width="3"/><path d="M1130 104Q1170 70 1210 104Z" fill="#E8503A"/>
            <rect x="1128" y="${BASE - 22}" width="70" height="7" fill="#E8503A"/><path d="M1134 ${BASE - 15}V${BASE}M1192 ${BASE - 15}V${BASE}" stroke="#6B4430" stroke-width="3"/>
            <path d="M1146 ${BASE - 26}h10l-1 4h-8z" fill="#8ED1B0" stroke="#fff" stroke-width="1"/><path d="M1168 ${BASE - 26}h10l-1 4h-8z" fill="#8ED1B0" stroke="#fff" stroke-width="1"/></g>`;
        // Ray
        const rails = `<rect x="-20" y="${BASE - 4}" width="${W + 40}" height="4" fill="#8E8A9C"/>`
            + Array.from({ length: 50 }, (_, i) => `<rect x="${i * 26 - 10}" y="${BASE - 2}" width="12" height="3" fill="#6B6F8C"/>`).join('');
        // Randen tramvayı (Kyoto moru), önü sağda; içinde beyaz eldivenli kondüktör
        const tram = `<g class="sc-tram"><g transform="translate(156,0)">
            <path d="M144 ${BASE - 8}V124Q144 112 132 112H0V${BASE - 8}Z" fill="#6B3A7A" stroke="#fff" stroke-width="2"/>
            <rect x="0" y="140" width="144" height="7" fill="#F3E3C0"/>
            ${[8, 34, 60, 86].map(x => `<rect x="${x}" y="118" width="20" height="16" rx="2" fill="#BFE3F2"/>`).join('')}
            <rect x="114" y="117" width="24" height="18" rx="3" fill="#BFE3F2"/>
            <g class="sc-cond">
                <circle cx="124" cy="128" r="5.5" fill="#FFE0C8"/><path d="M118 125q6 -7 12 0z" fill="#22264B"/><rect x="117" y="124" width="14" height="2" fill="#22264B"/>
                <circle cx="126" cy="128" r=".9" fill="#22264B"/>
            </g>
            <circle class="sc-glove" cx="134" cy="128" r="3.4" fill="#fff" stroke="#22264B" stroke-width=".8"/>
            <path d="M40 112L56 98L72 112M48 104h16" fill="none" stroke="#3A3F6B" stroke-width="2"/>
            <rect x="10" y="${BASE - 10}" width="34" height="6" rx="3" fill="#2A2438"/><rect x="100" y="${BASE - 10}" width="34" height="6" rx="3" fill="#2A2438"/>
            <text x="60" y="155" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="8" fill="#F3E3C0">嵐電</text>
        </g></g>`;
        const crane = `<g class="sc-crane"><g transform="translate(210,118)"><g class="sc-crane-flap">
            <path d="M0 0L-10 -12L4 -4L14 -14L8 2L18 4L4 6Z" fill="#F9B8C8" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></g></g></g>`;
        const y = couple(false, { walk: false, yAct: 'sc-bowing' }), m = couple(false, { walk: false, mAct: 'sc-bowing' });
        return sceneBox('scene-d6', `
            ${svgOpen(W, H)}
                ${hills}
                ${kinkaku}
                ${cafe}
                ${bamboo}
                ${rails}
                ${tram}
                ${sidewalk(W, '#DCD3BF')}
                ${solo(y.yusuf, 108)}${solo(m.merve, 178)}
                <g transform="translate(144,${G}) scale(1.1)">${heart(0, -104, 5.6)}</g>
                ${crane}
            </svg>`, W, H, `0 0 640 ${H}`);
    }

    // ===== Gün 7 — Fushimi Inari sabahı: torii tüneli, tilkiler ve kanalda zıplayan renkli balıklar =====
    function sceneDay7() {
        const W = 1200, H = 220, G = 150;
        const mount = `<path d="M-20 120Q200 10 420 70T820 50T1220 80V230H-20Z" fill="#4E9A73" opacity=".8"/>
            ${Array.from({ length: 26 }, (_, i) => `<rect x="${120 + i * 26}" y="${70 - Math.sin(i / 4) * 24 + i * .6}" width="4" height="6" fill="#E8503A" opacity=".8"/>`).join('')}`;
        const sunrise = `<g class="sc-rise"><circle cx="640" cy="60" r="96" fill="#fff" opacity=".18"/><circle cx="640" cy="60" r="38" fill="#FFF4D6"/></g>`;
        // Senbon torii: içe doğru küçülen kapı sırası (perspektif)
        let tunnel = '';
        for (let k = 9; k >= 0; k--) {
            const s = .6 + k * .1, x = 200 - k * 13, yb = G - 14 + k * 4;
            tunnel += toriiK(x, yb, s, k % 2 ? '#E8503A' : '#F0623E');
        }
        tunnel += `<g class="sc-rays" fill="#FFF4D6" opacity=".22"><path d="M280 0H330L200 ${G}H170Z"/><path d="M350 0H380L240 ${G}H220Z"/></g>`;
        // Tilki heykelleri (kırmızı önlüklü)
        const fox = (x, flip) => `<g transform="translate(${x},${G}) scale(${flip ? -1 : 1},1)">
            <rect x="-14" y="-10" width="28" height="10" fill="#B8B1A2"/><rect x="-11" y="-30" width="22" height="20" fill="#C9C3B4"/>
            <path d="M-8 -30Q-10 -52 0 -56Q10 -52 8 -30Z" fill="#E9E4D8"/><path d="M-6 -54l-3 -10 7 6zM6 -54l3 -10 -7 6z" fill="#E9E4D8"/>
            <path d="M0 -50l8 4 -8 2z" fill="#E9E4D8"/><path d="M-8 -40h16l-8 9z" fill="#E8503A"/>
            <path d="M8 -34q12 -6 8 -20" fill="none" stroke="#E9E4D8" stroke-width="5" stroke-linecap="round"/></g>`;
        // Sannenzaka (sağda): machiya + taş basamaklar + Hario kafe tabelası
        const right = machiyaK(880, 80, 80, '#3558D6', 1.2) + machiyaK(964, 84, 74, '#E8503A', 1.6) + machiyaK(1052, 80, 84, '#3E8E6E', 2)
            + `<rect x="1136" y="${BASE - 70}" width="70" height="120" fill="#F3EADB"/><rect x="1146" y="${BASE - 60}" width="50" height="14" rx="2" fill="#fff"/>
               <text x="1171" y="${BASE - 50}" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="8" fill="#6B4430">珈琲・抹茶</text>
               <path d="M1132 ${BASE - 74}L1140 ${BASE - 82}H1202L1210 ${BASE - 74}Z" fill="#3A3F6B"/>`;
        const mid = `<g fill="#fff" opacity=".2">${Array.from({ length: 9 }, (_, i) => `<rect x="${360 + i * 56}" y="${90 + rnd(i + 1500) * 30}" width="44" height="120"/>`).join('')}</g>`
            + toriiK(660, BASE - 22, 1.5) + toro(560) + toro(760);
        // Taş korkuluklu kanal + koiler
        const canal = `<rect x="-20" y="${G}" width="${W + 40}" height="8" fill="#B8B1A2"/>
            <rect x="-20" y="${G + 8}" width="${W + 40}" height="70" fill="#5FA8D6"/>
            <path d="M0 ${G + 22}q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0" fill="none" stroke="#fff" stroke-width="1.6" opacity=".5"/>`;
        const koi = (x, y, c, dur, d, jump) => `<g class="${jump ? 'sc-koijump' : 'sc-koi'}" style="--dur:${dur}s;--d:${d}s"><g transform="translate(${x},${y})">
            <path d="M-12 0Q0 -7 12 0Q0 7 -12 0Z" fill="${c}"/><path d="M-12 0l-7 -5v10z" fill="${c}"/><circle cx="-2" cy="-1" r="2.4" fill="#fff" opacity=".9"/><circle cx="8" cy="-1" r="1" fill="#22264B"/></g></g>`;
        const fish = koi(60, G + 30, '#FF7A59', 7, 0) + koi(300, G + 40, '#fff', 9, -3) + koi(520, G + 34, '#FFC857', 8, -5) + koi(800, G + 42, '#E8503A', 10, -2)
            + koi(420, G + 26, '#FF7A59', 4, 2.6, 1) + koi(500, G + 28, '#FFC857', 4, 4.8, 1);
        const splash = `<g class="sc-splash" style="--d:2.6s"><path d="M444 ${G + 10}l-6 -8M452 ${G + 8}v-9M460 ${G + 10}l6 -8" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></g>`;
        const p = couple(false, { walk: false, yPose: 'photo', mPose: 'pointDown' });
        return sceneBox('scene-d7', `
            ${svgOpen(W, H)}
                ${sunrise}${mount}${mid}${right}
                ${tunnel}${fox(268, 1)}${fox(560, 0)}
                ${canal}${fish}${splash}
                ${solo(p.yusuf, 334, 0, G)}${solo(p.merve, 408, 0, G)}
                <g transform="translate(372,${G}) scale(1.1)">${heart(0, -104, 5)}</g>
            </svg>`, W, H, `100 0 620 ${H}`);
    }

    // ===== Gün 8 — Nara: bisküvi için eğilen geyik, arkadan dürten "bisküvi canavarı" ve Todai-ji =====
    function sceneDay8() {
        const W = 1200, H = 220, G = 176;
        const hills = `<path d="M-20 116Q160 46 360 96T760 82T1220 100V230H-20Z" fill="#7FBF9A" opacity=".75"/>`;
        // Todai-ji Daibutsuden (ortada, geride)
        const todaiji = `<g>
            <rect x="452" y="96" width="336" height="${H}" fill="#F3EADB"/>
            ${Array.from({ length: 9 }, (_, i) => `<rect x="${462 + i * 38}" y="104" width="8" height="${H}" fill="#8A5C3A"/>`).join('')}
            <rect x="452" y="96" width="336" height="10" fill="#8A5C3A"/>
            <path d="M420 100L466 70H774L820 100Z" fill="#3A3F6B"/>
            <rect x="480" y="50" width="280" height="22" fill="#8A5C3A"/>
            <path d="M440 54L496 18H744L800 54Z" fill="#3A3F6B"/>
            <path d="M494 20l-6 -14 10 6zM746 20l6 -14 -10 6z" fill="#E2B04A"/>
            <path d="M596 72Q620 58 644 72" fill="#3A3F6B"/></g>`;
        // taş fenerler + geyik bisküvisi tezgâhı (sağda)
        const lanterns = [24, 330, 880, 960].map(x => toro(x)).join('');
        const stand = `<g><rect x="1040" y="${BASE - 44}" width="110" height="44" fill="#8A5C3A"/>
            <rect x="1036" y="${BASE - 52}" width="118" height="10" fill="#E8503A"/>
            <rect x="1056" y="${BASE - 82}" width="78" height="22" rx="3" fill="#fff"/>
            <text x="1095" y="${BASE - 66}" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="12" fill="#6B4430">鹿せんべい</text>
            ${[0, 1, 2].map(r => [0, 1, 2, 3, 4].map(k => `<circle cx="${1056 + k * 20}" cy="${BASE - 32 + r * 9}" r="7" fill="#E7C27A" stroke="#C9A15A" stroke-width="1"/>`).join('')).join('')}
            <text x="1095" y="${BASE - 4}" text-anchor="middle" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="9" fill="#FFE9C9">¥200</text></g>`;
        // uzaktaki otlayan geyikler
        const farDeer = `<g opacity=".9">${deer(800, BASE, 0, 'sc-graze', '')}${deer(1180, BASE, 1, 'sc-graze', '')}</g>`;
        // Merve'nin elindeki geyik bisküvisi (kapılınca kaybolur)
        const senbei = `<circle class="sc-senbei" cx="31" cy="-41" r="6.5" fill="#E7C27A" stroke="#fff" stroke-width="1.4"/>`;
        const y = couple(false, { walk: false, yPose: 'surprise', late: true });
        const m = couple(false, { walk: false, mPose: 'offer', mItem: senbei });
        const ex = `<g class="sc-ex"><text x="262" y="78" text-anchor="middle" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="22" fill="#fff" stroke="#E8503A" stroke-width="1">!</text></g>`;
        return sceneBox('scene-d8', `
            ${svgOpen(W, H)}
                ${hills}${todaiji}
                ${sidewalk(W, '#DDD3B6')}
                ${lanterns}${stand}${farDeer}
                ${deer(98, G, 0, 'sc-bowhead', 'sc-lunge')}
                ${solo(m.merve, 168, 1)}
                <g class="sc-bump">${solo(y.yusuf, 262, 1)}</g>
                ${deer(330, G, 1, 'sc-nudgehead', 'sc-nudge')}
                ${ex}
                <g transform="translate(214,${G}) scale(1.1)">${heart(0, -106, 6.6)}</g>
            </svg>`, W, H, `0 0 640 ${H}`);
    }

    // ===== Gün 9 — "Köri Ateşi": Osaka Kalesi önünde acı köri, alev alev yanan ağız, Merve'den su =====
    function sceneDay9() {
        const W = 1200, H = 220, G = 176;
        const far = `<g fill="#fff" opacity=".22">${Array.from({ length: 16 }, (_, i) => `<rect x="${i * 76 - 10}" y="${70 + rnd(i + 1600) * 40}" width="${46 + rnd(i + 1610) * 20}" height="160" rx="2"/>`).join('')}</g>`;
        // Osaka Kalesi (sağda): taş kaide + beyaz duvarlar + yeşil çatılar + altın süslemeler
        let keep = `<path d="M880 ${H}L900 120H1150L1170 ${H}Z" fill="#B8B1CC"/>`;
        for (let r = 0; r < 5; r++) for (let x = 900 + (r % 2) * 12; x < 1150; x += 24) keep += `<rect x="${x}" y="${124 + r * 11}" width="22" height="10" rx="3.5" fill="${['#C9C3D9', '#D6D0E3', '#B8B1CC'][(r + x) % 3]}"/>`;
        const tiers = [[920, 98, 210, 26], [944, 70, 162, 24], [966, 46, 118, 22], [986, 24, 78, 20]];
        tiers.forEach(([x, y, w, h]) => {
            keep += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#F7F4EC"/>`
                + Array.from({ length: Math.floor(w / 18) }, (_, k) => `<rect x="${x + 6 + k * 18}" y="${y + 6}" width="8" height="${h - 12}" fill="#5D7FA6"/>`).join('')
                + `<path d="M${x - 14} ${y + 2}L${x + 6} ${y - 10}H${x + w - 6}L${x + w + 14} ${y + 2}Z" fill="#4FA77F"/>`
                + `<path d="M${x - 14} ${y + 2}h${w + 28}" stroke="#E2B04A" stroke-width="2"/>`;
        });
        keep += `<path d="M1012 14l-7 -10 3 10zM1038 14l7 -10 -3 10z" fill="#E2B04A"/><path d="M1000 16L1012 6H1038L1050 16Z" fill="#4FA77F"/>`
            + `<rect x="860" y="${BASE - 8}" width="340" height="40" fill="#7FB8E8"/>`;
        // Köri dükkânı (ortada, sarı tabela) + acılık ölçeği
        const shop = bld(420, 120, 110, { c: '#F3E7C9', awning: '#E8B83A', hs: 'カレー', hsBg: '#E8B83A', hsFg: '#6B4430', vs: '辛さ一番', vsBg: '#E8503A', shop: '#FFE9C9' })
            + bld(544, 70, 92, { c: FACADE[1], noren: '#22264B', hs: 'たこ焼き' }) + bld(618, 78, 120, { c: FACADE[4], vs: '道頓堀', vsBg: '#FFC857', vsFg: '#E8503A', balcony: 1 })
            + bld(700, 64, 98, { c: FACADE[0], hs: 'コンビニ', hsBg: '#3E8E6E', hsFg: '#fff', awning: '#3E8E6E' })
            + bld(340, 76, 96, { c: FACADE[3], chochin: 1, shop: '#F6D9A8', vs: '串カツ' });
        const pines = `<g fill="#3E8E6E"><ellipse cx="830" cy="120" rx="30" ry="12"/><ellipse cx="846" cy="104" rx="22" ry="9"/></g><path d="M836 ${BASE}V118" stroke="#6B4430" stroke-width="6"/>`;
        // küçük açık hava masası
        const table = `<rect x="150" y="${BASE - 30}" width="74" height="6" rx="2" fill="#8A5C3A"/><path d="M158 ${BASE - 24}V${BASE}M216 ${BASE - 24}V${BASE}" stroke="#6B4430" stroke-width="4"/>
            <rect x="166" y="${BASE - 40}" width="20" height="10" rx="2" fill="#fff" stroke="#3558D6" stroke-width="1.5"/><text x="176" y="${BASE - 32}" text-anchor="middle" font-size="6" font-family="sans-serif" fill="#3558D6">L</text>`;
        // Yusuf'un elinde köri tabağı, yüz kızarması, ağızdan alev
        const plate = `<ellipse cx="30" cy="-37" rx="11" ry="4.5" fill="#fff" stroke="#C9CED6" stroke-width="1.2"/><path d="M21 -38q9 -7 18 0z" fill="#B8742A"/><circle cx="25" cy="-39" r="2.4" fill="#fff"/>`;
        const flush = `<g class="sc-flush"><ellipse cx="2" cy="-55" rx="11" ry="7" fill="#E8503A" opacity=".55" stroke="none"/></g>`
            + `<g class="sc-fire" stroke="none"><path d="M13 -52q12 -6 18 -2q-6 2 -2 6q-8 2 -16 -4z" fill="#FF7A59"/><path d="M14 -52q8 -4 12 -1q-4 2 -1 4q-5 1 -11 -3z" fill="#FFC857"/></g>`
            + `<g class="sc-sweat" stroke="none"><path d="M-14 -66q-3 5 0 7q3 -2 0 -7z" fill="#BFE3F2"/><path d="M14 -70q-3 5 0 7q3 -2 0 -7z" fill="#BFE3F2"/></g>`;
        const glass = `<rect x="27" y="-50" width="9" height="13" rx="1.5" fill="#BFE3F2" stroke="#fff" stroke-width="1.4"/><rect x="28" y="-45" width="7" height="7" fill="#5CE1E6" opacity=".7"/>`;
        const y = couple(false, { walk: false, yPose: 'eat', yItem: plate, yFx: flush });
        const m = couple(false, { walk: false, mPose: 'offer', mItem: glass, late: true });
        return sceneBox('scene-d9', `
            ${svgOpen(W, H)}
                ${far}${keep}${pines}${shop}
                ${sidewalk(W)}
                ${table}
                ${solo(y.yusuf, 120, 0)}${solo(m.merve, 252, 1)}
                <g transform="translate(186,${G}) scale(1.1)">${heart(0, -106, 6.2)}</g>
            </svg>`, W, H, `0 0 640 ${H}`);
    }

    // ===== Gün 10 — Shinkansen'in içi: E koltukları, pencereden akan manzara ve bulutların üstünde Fuji =====
    function sceneDay10() {
        const W = 1200, H = 220;
        const wins = [[30, 260], [330, 560], [630, 860], [930, 1160]];
        const clip = `<clipPath id="scWin10">${wins.map(([a, b]) => `<rect x="${a}" y="36" width="${b - a}" height="92" rx="22"/>`).join('')}</clipPath>`;
        // pencere dışı: gökyüzü, uzak Fuji (yavaş), akan tarlalar/evler/direkler (hızlı, döngü)
        let land = '';
        for (let rep = 0; rep < 2; rep++) {
            const o = rep * 1200;
            land += `<rect x="${o}" y="104" width="1200" height="30" fill="#8ED1B0"/>`
                + Array.from({ length: 10 }, (_, i) => `<rect x="${o + i * 120 + 10}" y="${108 + (i % 3) * 4}" width="70" height="6" fill="#7BCB8A"/>`).join('')
                + Array.from({ length: 7 }, (_, i) => `<g transform="translate(${o + 60 + i * 170},104)"><rect x="0" y="-14" width="22" height="14" fill="#F3EADB"/><path d="M-3 -14L11 -24L25 -14Z" fill="#4A4E6A"/></g>`).join('')
                + Array.from({ length: 12 }, (_, i) => `<path d="M${o + i * 100 + 40} 132V60" stroke="#8E8A9C" stroke-width="3"/><path d="M${o + i * 100 + 30} 66h20" stroke="#8E8A9C" stroke-width="2"/>`).join('');
        }
        const outside = `<g clip-path="url(#scWin10)">
            <rect x="0" y="30" width="${W}" height="110" fill="#CFE6F7"/>
            <g class="sc-clouds2" fill="#fff" opacity=".9"><ellipse cx="200" cy="96" rx="120" ry="12"/><ellipse cx="700" cy="92" rx="160" ry="14"/><ellipse cx="1100" cy="98" rx="120" ry="10"/></g>
            <g class="sc-fujimove"><g transform="translate(150,0)">
                <path d="M-130 104L-28 30H28L130 104Z" fill="#6F7FD6"/><path d="M-46 44L-28 30H28L46 44L30 52L14 42L0 54L-14 42L-30 52Z" fill="#fff"/>
                <ellipse cx="0" cy="96" rx="140" ry="10" fill="#fff" opacity=".95"/></g></g>
            <g class="sc-land">${land}</g></g>`;
        // vagon içi: krem duvar, pencere çerçeveleri, bagaj rafı, mavi koltuk sırtları
        const interior = `
            <rect x="-20" y="0" width="${W + 40}" height="${H}" fill="#F3EEE4"/>
            <rect x="-20" y="0" width="${W + 40}" height="22" fill="#E2DCD0"/><path d="M-20 22H${W + 20}" stroke="#C9C3B4" stroke-width="3"/>
            ${Array.from({ length: 30 }, (_, i) => `<path d="M${i * 42} 6v14" stroke="#C9C3B4" stroke-width="1.5"/>`).join('')}`;
        const frames = wins.map(([a, b]) => `<rect x="${a}" y="36" width="${b - a}" height="92" rx="22" fill="none" stroke="#C9C3B4" stroke-width="6"/>
            <path d="M${a + 4} 132H${b - 4}" stroke="#B8B1A2" stroke-width="5"/>`).join('');
        const seat = (x) => `<rect x="${x}" y="132" width="86" height="120" rx="18" fill="#3558D6"/><rect x="${x + 14}" y="126" width="58" height="24" rx="6" fill="#fff"/>
            <rect x="${x + 4}" y="150" width="78" height="4" fill="#2A47B8"/>`;
        const seatsBack = [10, 220, 330, 440, 560, 680, 800, 920, 1040].map(seat).join('');
        // biz: koltuk sırtlarının arkasında, pencereye dönük
        const p = couple(false, { walk: false, yPose: 'photo', mPose: 'point', late: true });
        const seatsFront = [100, 200].map(x => `<rect x="${x - 6}" y="160" width="92" height="90" rx="16" fill="#3558D6"/><path d="M${x} 166h80" stroke="#5B7BE8" stroke-width="3"/>`).join('');
        return sceneBox('scene-d10', `
            ${svgOpen(W, H)}
                <defs>${clip}</defs>
                ${interior}
                ${outside}
                ${frames}
                ${seatsBack}
                ${solo(p.yusuf, 132, 0, 196)}${solo(p.merve, 216, 0, 196)}
                ${seatsFront}
                <g transform="translate(174,196) scale(1.1)">${heart(0, -104, 5.8)}</g>
            </svg>`, W, H, `0 0 640 ${H}`);
    }

    // ===== Gün 11 — Hokusai Müzesi: kımıldayan balmumu heykel Merve'yi zıplatır, Büyük Dalga canlanır =====
    function sceneDay11() {
        const W = 1200, H = 220, G = 176;
        const wall = `<rect x="-20" y="0" width="${W + 40}" height="${H}" fill="#F2F0EE"/>
            <rect x="-20" y="0" width="${W + 40}" height="14" fill="#DCDDE6"/>
            ${Array.from({ length: 12 }, (_, i) => `<g><path d="M${60 + i * 100} 14l-10 18h20z" fill="#FFF4D6" opacity=".7"/></g>`).join('')}`;
        // Büyük Dalga (Kanagawa) — çerçeveli, dalga hafifçe kıvrılır
        const wave = (x, y, w, h) => `<g><rect x="${x - 8}" y="${y - 8}" width="${w + 16}" height="${h + 16}" fill="#8A5C3A"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#F3E7C9"/>
            <g clip-path="url(#scWave)"><g class="sc-wavecurl">
                <path d="M${x} ${y + h}V${y + h * .62}Q${x + w * .18} ${y + h * .2} ${x + w * .42} ${y + h * .3}Q${x + w * .55} ${y + h * .36} ${x + w * .5} ${y + h * .52}Q${x + w * .44} ${y + h * .44} ${x + w * .38} ${y + h * .5}Q${x + w * .6} ${y + h * .62} ${x + w} ${y + h * .55}V${y + h}Z" fill="#2D4E9A"/>
                <path d="M${x + w * .3} ${y + h * .32}q6 -6 10 0q6 -6 10 0q6 -6 10 0" fill="none" stroke="#fff" stroke-width="2.4"/></g></g>
            <path d="M${x + w * .72} ${y + h * .55}L${x + w * .8} ${y + h * .4}L${x + w * .88} ${y + h * .55}Z" fill="#fff" opacity=".9"/>
            <circle cx="${x + w * .85}" cy="${y + h * .18}" r="5" fill="#E8503A" opacity=".8"/></g>`;
        const redFuji = (x, y, w, h) => `<rect x="${x - 8}" y="${y - 8}" width="${w + 16}" height="${h + 16}" fill="#8A5C3A"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#BFE3F2"/>
            <path d="M${x} ${y + h}L${x + w * .5} ${y + h * .2}L${x + w} ${y + h}Z" fill="#C9402E"/><path d="M${x + w * .42} ${y + h * .3}L${x + w * .5} ${y + h * .2}L${x + w * .58} ${y + h * .3}Z" fill="#fff"/>
            <path d="M${x} ${y + h}h${w}v-6q-${w / 2} -10 -${w} 0z" fill="#3E8E6E"/>`;
        const art = wave(520, 26, 200, 64) + redFuji(420, 40, 60, 46) + redFuji(760, 40, 60, 46) + redFuji(940, 34, 90, 64) + wave(1070, 40, 110, 50);
        const ropes = `<path d="M340 ${BASE - 30}H1180" stroke="#C9A15A" stroke-width="2"/>${[340, 560, 780, 1000, 1180].map(x => `<rect x="${x - 3}" y="${BASE - 34}" width="6" height="34" fill="#8E8A9C"/>`).join('')}`;
        // Mozaik Fuji zemini
        const floor = `<rect x="-20" y="${BASE}" width="${W + 40}" height="60" fill="#D7DDE8"/>`
            + Array.from({ length: 60 }, (_, i) => `<rect x="${i * 20}" y="${BASE + 2}" width="9" height="9" fill="${i % 7 === 3 ? '#fff' : ['#7FB8E8', '#5D86BE', '#9FC5EA'][i % 3]}"/><rect x="${i * 20 + 10}" y="${BASE + 12}" width="9" height="9" fill="${['#5D86BE', '#9FC5EA', '#7FB8E8'][i % 3]}"/>`).join('');
        // Balmumu Hokusai: alçak masada diz çökmüş yaşlı ressam; kafa döner, fırça kıpırdar
        const hokusai = `<g transform="translate(300,${G})">
            <rect x="-30" y="-16" width="66" height="16" fill="#8A5C3A"/><rect x="-26" y="-20" width="58" height="5" fill="#F8F2E6"/>
            <path d="M-46 0Q-50 -30 -40 -40Q-26 -50 -16 -38Q-8 -20 -10 0Z" fill="#5A6E8C"/>
            <path d="M-40 -40Q-28 -46 -18 -38L-22 -24L-40 -26Z" fill="#7E8EA8"/>
            <g class="sc-hokhead"><circle cx="-28" cy="-52" r="10" fill="#F0D2B4"/><path d="M-36 -46q8 8 16 0q-2 8 -8 9q-6 -1 -8 -9z" fill="#fff"/>
                <circle cx="-24" cy="-54" r="1.4" fill="#22264B"/><path d="M-36 -58q8 -8 16 0" fill="none" stroke="#fff" stroke-width="2"/></g>
            <g class="sc-brush"><path d="M-18 -34L-2 -24" stroke="#7E8EA8" stroke-width="5" stroke-linecap="round"/><path d="M-2 -24l8 -12" stroke="#6B4430" stroke-width="2"/><circle cx="6" cy="-36" r="2" fill="#22264B"/></g>
            <path d="M-6 -20q6 -3 12 0" stroke="#22264B" stroke-width="1.5" fill="none" class="sc-ink"/></g>`;
        const shock = `<g class="sc-ex"><text x="214" y="86" text-anchor="middle" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="24" fill="#fff" stroke="#E8503A" stroke-width="1.2">!</text>
            <path d="M230 86q-4 6 0 9q4 -3 0 -9z" fill="#BFE3F2"/></g>`;
        const haha = `<g class="sc-haha"><text x="112" y="88" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="12" fill="#E8503A">ハハ!</text></g>`;
        const y = couple(false, { walk: false, yAct: 'sc-laugh' });
        const m = couple(false, { walk: false, mAct: 'sc-jump' });
        return sceneBox('scene-d11', `
            ${svgOpen(W, H)}
                <defs><clipPath id="scWave"><rect x="520" y="26" width="200" height="64"/><rect x="1070" y="40" width="110" height="50"/></clipPath></defs>
                ${wall}${art}${ropes}
                ${floor}
                ${hokusai}
                ${solo(y.yusuf, 112)}${solo(m.merve, 216, 0)}
                ${shock}${haha}
                <g transform="translate(164,${G}) scale(1.1)">${heart(0, -104, 5.4)}</g>
            </svg>`, W, H, `0 0 640 ${H}`);
    }

    // ===== Gün 12 — Shibuya Sky: gün batımından geceye, şehir ışıkları ve havada süzülen polaroid =====
    function sceneDay12() {
        const W = 1200, H = 220, G = 176;
        const night = `<defs><linearGradient id="scNightG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1E2250" stop-opacity="0"/><stop offset=".55" stop-color="#1E2250" stop-opacity=".85"/><stop offset="1" stop-color="#1E2250"/></linearGradient></defs>
            <rect class="sc-night" x="-20" y="-260" width="${W + 40}" height="${H + 260}" fill="url(#scNightG)"/>`;
        const stars = `<g class="sc-stars" fill="#fff">${Array.from({ length: 26 }, (_, i) => `<circle cx="${rnd(i + 1700) * W}" cy="${rnd(i + 1710) * 70 - 10}" r="${(rnd(i + 1720) * 1.3 + .6).toFixed(1)}"/>`).join('')}</g>`;
        const sun = `<g class="scene-sun12"><circle cx="560" cy="86" r="70" fill="#fff" opacity=".18"/><circle cx="560" cy="86" r="30" fill="#FFE9A8"/></g>`;
        const fuji = `<path d="M440 104L540 52H580L680 104Z" fill="#6B5A9C" opacity=".55"/><path d="M528 58L540 52H580L592 58L576 62L560 56L544 62Z" fill="#fff" opacity=".7"/>`;
        // uzak şehir: yoğun bloklar, Tokyo Tower ve Skytree
        let city = '';
        for (let i = 0; i < 70; i++) {
            const x = i * 18 - 10, h = 18 + rnd(i + 1800) * 46, w = 14 + rnd(i + 1810) * 8;
            city += `<rect x="${x}" y="${150 - h}" width="${w}" height="${h + 80}" fill="${['#4A4E86', '#3D4176', '#56598F'][i % 3]}"/>`;
            for (let k = 0; k < 4; k++) if (rnd(i * 7 + k) > .45) city += `<rect class="sc-win" style="--d:${(2 + rnd(i + k * 3) * 3.6).toFixed(2)}s" x="${x + 3 + (k % 2) * 6}" y="${150 - h + 5 + Math.floor(k / 2) * 9}" width="3" height="4" fill="#FFD76A"/>`;
        }
        city += `<g fill="#E8503A"><path d="M960 150L972 76H978L990 150Z"/><path d="M975 76V56" stroke="#E8503A" stroke-width="2"/></g>`
            + `<g fill="#C9C3D9"><path d="M182 150L189 40H193L200 150Z"/><rect x="183" y="80" width="16" height="6" rx="2"/><path d="M191 40V20" stroke="#C9C3D9" stroke-width="2"/></g>`;
        // çatı: cam korkuluk + ahşap güverte
        const roof = `<rect x="-20" y="118" width="${W + 40}" height="58" fill="#BFE3F2" opacity=".28"/>
            <path d="M-20 118H${W + 20}" stroke="#fff" stroke-width="3" opacity=".9"/>
            ${Array.from({ length: 16 }, (_, i) => `<path d="M${i * 80} 118V${BASE}" stroke="#fff" stroke-width="2" opacity=".6"/>`).join('')}
            <rect x="-20" y="${BASE}" width="${W + 40}" height="60" fill="#8A6A52"/>
            ${Array.from({ length: 40 }, (_, i) => `<path d="M${i * 32} ${BASE}V${BASE + 50}" stroke="#76583F" stroke-width="1.4"/>`).join('')}
            <path d="M-20 ${BASE}H${W + 20}" stroke="#5A4230" stroke-width="2"/>`;
        // polaroid: flaştan sonra yukarı süzülür
        const pola = `<g class="sc-pola"><g transform="translate(250,70) rotate(-8)">
            <rect x="-16" y="-20" width="32" height="38" rx="1.5" fill="#fff" stroke="#22264B" stroke-width="1"/>
            <rect x="-12" y="-16" width="24" height="24" fill="#2B2F5E"/><circle cx="-4" cy="-4" r="3.4" fill="#F0D2B4"/><circle cx="5" cy="-4" r="3.4" fill="#F0D2B4"/>
            <path d="M-8 -7q4 -5 8 0" fill="#6B4430"/><path d="M1 -7q4 -5 8 0" fill="#A8452B"/><rect x="-12" y="2" width="24" height="6" fill="#FFB199"/></g></g>`;
        const p = couple(false, { walk: false, yPose: 'selfie' });
        return sceneBox('scene-d12', `
            ${svgOpen(W, H)}
                ${sun}${fuji}${night}${stars}
                ${city}
                ${roof}
                ${solo(p.merve, 120, 0)}${solo(p.yusuf, 190, 0)}
                <g transform="translate(155,${G}) scale(1.1)">${heart(0, -104, 6)}</g>
                ${pola}
            </svg>`, W, H, `0 0 640 ${H}`);
    }

    // ===== Gün 13 — Havalimanı: hediyelik dolu bagaj arabası, kalkış panosunda İstanbul, kalkan uçağa el sallamak =====
    function sceneDay13() {
        const W = 1200, H = 220, G = 176;
        // dev cam cephe + pist + kalkan uçak
        const glass = `<rect x="-20" y="10" width="${W + 40}" height="${BASE - 10}" fill="#CFE6F7" opacity=".55"/>
            <rect x="-20" y="128" width="${W + 40}" height="50" fill="#8E8A9C" opacity=".6"/>
            ${Array.from({ length: 30 }, (_, i) => `<rect x="${i * 44}" y="148" width="22" height="3" fill="#fff" opacity=".8"/>`).join('')}`;
        const plane = `<g class="sc-takeoff"><g transform="translate(1250,132)">
            <path d="M0 0H86Q100 0 104 -6Q100 -12 86 -12H18L6 -26H-4L2 -12H0Z" fill="#fff" stroke="#22264B" stroke-width="1.4"/>
            <path d="M40 -6L22 10H32L58 -6Z" fill="#E8503A"/><path d="M-2 -12L-6 -26H4L14 -12Z" fill="#E8503A"/>
            ${[50, 58, 66, 74, 82].map(x => `<circle cx="${x}" cy="-7" r="1.6" fill="#5D86BE"/>`).join('')}</g></g>`;
        const mullions = Array.from({ length: 14 }, (_, i) => `<rect x="${i * 90 - 6}" y="10" width="8" height="${BASE - 10}" fill="#E6E2EE"/>`).join('')
            + `<rect x="-20" y="4" width="${W + 40}" height="10" fill="#E6E2EE"/><rect x="-20" y="84" width="${W + 40}" height="5" fill="#E6E2EE"/>`;
        // kalkış panosu
        const rows = [['ISTANBUL', '13:45', '搭乗中', 1], ['GUANGZHOU', '14:20', '定刻', 0], ['SEOUL', '15:05', '定刻', 0]];
        const board = `<g><rect x="520" y="18" width="210" height="62" rx="4" fill="#1B1E3F" stroke="#E6E2EE" stroke-width="3"/>
            <text x="532" y="30" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="8" fill="#FFC857">出発 DEPARTURES</text>
            ${rows.map(([c, t, st, hot], i) => `<g class="${hot ? 'sc-blink' : ''}"><text x="532" y="${45 + i * 13}" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="9" fill="${hot ? '#5CE18A' : '#fff'}">${c}</text>
                <text x="640" y="${45 + i * 13}" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="9" fill="#fff">${t}</text>
                <text x="718" y="${45 + i * 13}" text-anchor="end" font-family="Noto Serif JP, serif" font-weight="900" font-size="8" fill="${hot ? '#5CE18A' : '#C9C3D9'}">${st}</text></g>`).join('')}</g>`;
        const floor = `<rect x="-20" y="${BASE}" width="${W + 40}" height="60" fill="#E6E2EE"/>${Array.from({ length: 30 }, (_, i) => `<path d="M${i * 44} ${BASE}V${BASE + 50}" stroke="#D2CDDD" stroke-width="1.4"/>`).join('')}`;
        // hediyelik dolu bagaj arabası (karakterlerle birlikte hareket eder)
        const cart = `<g transform="translate(38,0)">
            <path d="M0 -6H54L60 -40" fill="none" stroke="#8E8A9C" stroke-width="3" stroke-linecap="round"/><path d="M2 -6V-30" stroke="#8E8A9C" stroke-width="3"/>
            <circle cx="8" cy="-2" r="4" fill="#22264B"/><circle cx="48" cy="-2" r="4" fill="#22264B"/>
            <rect x="2" y="-30" width="34" height="24" rx="4" fill="#FF7A59"/><rect x="34" y="-28" width="22" height="22" rx="4" fill="#5D86BE"/>
            <rect x="6" y="-44" width="24" height="14" fill="#E8503A"/><text x="18" y="-34" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="7" fill="#fff">抹茶</text>
            <rect x="30" y="-46" width="18" height="18" fill="#FFC857"/><path d="M39 -46v18" stroke="#fff" stroke-width="2"/>
            <rect x="12" y="-60" width="7" height="16" rx="2" fill="#3E8E6E"/><rect x="13.5" y="-64" width="4" height="5" fill="#3E8E6E"/>
            <g class="sc-topbox"><rect x="20" y="-58" width="22" height="13" fill="#F58FAA"/><text x="31" y="-49" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="6.5" fill="#fff">土産</text></g></g>`;
        const bye = `<g class="sc-bye"><path d="M300 34h96a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8h-64l-12 10 2-10h-22a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8z" fill="#fff" stroke="#22264B" stroke-width="2"/>
            <text x="348" y="56" text-anchor="middle" font-family="Noto Serif JP, serif" font-weight="900" font-size="13" fill="#E8503A">さようなら!</text></g>`;
        const y = couple(false, { yPose: 'push' }), m = couple(false, { mPose: 'wave' });
        const people = { yusuf: y.yusuf, merve: m.merve };
        return sceneBox('scene-d13', `
            ${svgOpen(W, H)}
                ${glass}${plane}${mullions}${board}
                ${floor}
                <g transform="translate(70,${G}) scale(1.1)">${pair(people, 132, { extra: cart, style: '--wfrom:-460px;--wto:0px;--wd:3.4s;--wdl:.4s;--steps:7' })}</g>
                ${bye}
                <g transform="translate(150,${G}) scale(1.1)">${heart(0, -104, 6.4)}</g>
            </svg>`, W, H, `0 0 640 ${H}`);
    }

    const SCENES = { 1: sceneDay1, 2: sceneDay2, 3: sceneDay3, 4: sceneDay4, 5: sceneDay5, 6: sceneDay6, 7: sceneDay7,
                     8: sceneDay8, 9: sceneDay9, 10: sceneDay10, 11: sceneDay11, 12: sceneDay12, 13: sceneDay13 };

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

        // Günün ikonik anı (kısa animasyon)
        if (SCENES[n]) { hero.insertBefore(SCENES[n](), hero.firstChild); hero.classList.add('has-scene'); }

        // Hero: şehir kanjisi + sakura
        hero.appendChild(el('div', 'hero-kanji', cfg.k));
        if (!SCENES[n]) addIcon(hero, cfg.items[0][0], 'right:9%;bottom:44px', 52, 8, 'wide');
        if (!SCENES[n]) {
            addIcon(hero, 'sakura', 'left:6%;bottom:36px', 44, -14, 'wide');
            addIcon(hero, 'sakura', 'right:22%;bottom:62px', 28, 20, 'wide');
        }

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

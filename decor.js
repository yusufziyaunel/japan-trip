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


    // ============ GÜN SAHNELERİ (hero'da kısa, sevimli animasyon) — v2 ============
    // Ortak "Japon sokağı" kiti + poz verebilen karakterler + 13 gün sahnesi.
    function rnd(seed) { const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }

    // ---------- Sokak kiti ----------
    const FACADE = ['#EAE3D6', '#D8D3DE', '#F3EFE7', '#CDBDAA', '#BCC6CF', '#E8D6C8', '#DCD6C8', '#C9C2B4'];
    const BASE = 172;   // kaldırımın üst çizgisi (binaların zemini)
    const JP = 'Noto Serif JP, serif', LAT = 'Bricolage Grotesque, sans-serif';
    const tx = (x, y, s, size, fill, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || 'middle'}" font-family="${o.f || JP}" font-weight="${o.w || 900}" font-size="${size}" fill="${fill}"${o.ls ? ` letter-spacing="${o.ls}"` : ''}${o.x || ''}>${s}</text>`;
    const vtext = (x, y, txt, size, fill) => [...txt].map((ch, i) => tx(x, y + i * (size + 2), ch, size, fill)).join('');

    // Çok katlı, dar Japon sokak binası: pencereler, klima üniteleri, çamaşırlı balkon, dükkân katı, tabelalar
    function bld(x, w, h, o = {}) {
        const top = BASE - h, c = o.c || FACADE[0], sd = o.seed || x * 1.7;
        const shopH = 24, fh = 17, nF = Math.max(1, Math.floor((h - shopH - 8) / fh));
        let g = `<rect x="${x}" y="${top}" width="${w}" height="${h + 60}" fill="${c}"/>`
              + `<rect x="${x + w - 5}" y="${top}" width="5" height="${h + 60}" fill="#000" opacity=".07"/>`
              + `<rect x="${x - 1}" y="${top}" width="${w + 2}" height="4" fill="#000" opacity=".14"/>`;
        if (o.roof === 'tank') g += `<rect x="${x + w * .2}" y="${top - 12}" width="${w * .34}" height="12" rx="2" fill="#C9CCD6"/><path d="M${x + w * .2} ${top - 8}h${w * .34}" stroke="#9AA0B2" stroke-width="1"/><path d="M${x + w * .7} ${top}v-16M${x + w * .7 - 5} ${top - 12}h10" stroke="#77738A" stroke-width="1.4"/>`;
        if (o.roof === 'box') g += `<rect x="${x + w * .25}" y="${top - 9}" width="${w * .3}" height="9" fill="${c}"/><rect x="${x + w * .6}" y="${top - 5}" width="8" height="5" fill="#A8A4B6"/>`;
        if (o.roof === 'rail') g += Array.from({ length: Math.floor(w / 6) }, (_, k) => `<path d="M${x + 3 + k * 6} ${top}v-6" stroke="#9AA0B2" stroke-width="1"/>`).join('') + `<path d="M${x + 2} ${top - 6}h${w - 4}" stroke="#9AA0B2" stroke-width="1.2"/>`;
        for (let f = 0; f < nF; f++) {
            const y = top + 9 + f * fh;
            for (let wx = x + 6; wx + 10 <= x + w - 7; wx += 14) {
                const lit = o.lit && rnd(sd + f * 7.3 + wx * .31) < o.lit;
                g += lit ? `<rect class="sc-win" style="--d:${(1.4 + rnd(wx + f * 3) * 4.2).toFixed(2)}s" x="${wx}" y="${y}" width="10" height="9" rx="1" fill="#FFD76A"/>`
                         : `<rect x="${wx}" y="${y}" width="10" height="9" rx="1" fill="${o.glass || '#8C9BB8'}"/><rect x="${wx}" y="${y}" width="3" height="9" fill="#fff" opacity=".28"/>`;
                g += `<path d="M${wx - 1} ${y + 9.6}h12" stroke="#000" stroke-width="1" opacity=".12"/>`;
            }
            if (o.balcony) {
                g += `<path d="M${x + 3} ${y + 11.5}H${x + w - 6}" stroke="#9AA0B2" stroke-width="1.5"/>`;
                if (rnd(sd + f * 3.9) > .55) { const lx = x + 8 + rnd(sd + f) * (w - 30); g += `<rect x="${lx}" y="${y + 3}" width="7" height="8" fill="${['#F58FAA', '#fff', '#8ED1B0', '#FFC857'][f % 4]}" opacity=".95"/><rect x="${lx + 8}" y="${y + 4}" width="5" height="7" fill="#fff" opacity=".95"/>`; }
            }
            if (rnd(sd + f * 13.1) > .5) {
                const ax = x + 5 + Math.floor(rnd(sd + f * 5.7) * (w - 20));
                g += `<rect x="${ax}" y="${y + 9.5}" width="10" height="6.5" fill="#D4D6DE" stroke="#9AA0B2" stroke-width=".8"/><circle cx="${ax + 4}" cy="${y + 12.8}" r="2.1" fill="none" stroke="#9AA0B2" stroke-width=".8"/>`;
            }
        }
        const sy = BASE - shopH;
        g += `<rect x="${x + 3}" y="${sy}" width="${w - 8}" height="${shopH}" fill="${o.shop || '#CFE6F2'}"/>`
           + `<path d="M${x + w / 2} ${sy + 3}V${BASE}" stroke="${c}" stroke-width="1.5"/>`
           + `<rect x="${x + 3}" y="${sy}" width="${w - 8}" height="3" fill="#000" opacity=".15"/>`;
        if (o.noren) {
            const nw = Math.min(32, w - 14), nx = x + (w - nw) / 2;
            g += `<g class="sc-noren"><rect x="${nx}" y="${sy + 3}" width="${nw}" height="12" fill="${o.noren}"/>`
               + [1, 2].map(k => `<path d="M${nx + nw * k / 3} ${sy + 6}V${sy + 15}" stroke="${o.shop || '#CFE6F2'}" stroke-width="1.4"/>`).join('') + `</g>`;
        }
        if (o.awning) g += `<path d="M${x + 1} ${sy}h${w - 2}l-4 8h${-(w - 10)}z" fill="${o.awning}"/>` + Array.from({ length: Math.floor((w - 10) / 12) }, (_, k) => `<path d="M${x + 8 + k * 12} ${sy}l-2 8" stroke="#fff" stroke-width="2" opacity=".5"/>`).join('');
        if (o.chochin) g += [x + 8, x + w - 10].map((cx, k) => `<g class="sc-twink" style="--d:${k * .7}s"><ellipse cx="${cx}" cy="${sy + 10}" rx="4.5" ry="6" fill="#E8503A"/><path d="M${cx - 3} ${sy + 4}h6M${cx - 3} ${sy + 16}h6" stroke="#2A2438" stroke-width="1.2"/></g>`).join('');
        if (o.steam) g += [0, 1, 2].map(i => `<path class="sc-smoke" style="--d:${(i * 1.3).toFixed(1)}s" d="M${x + w / 2 - 6 + i * 6} ${sy + 2}c-4 -5 4 -8 0 -13c-4 -5 4 -8 0 -13" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>`).join('');
        if (o.hs) g += `<rect x="${x + 5}" y="${sy - 12}" width="${w - 12}" height="10" rx="1.5" fill="${o.hsBg || '#fff'}"/>` + tx(x + w / 2 - 1, sy - 4, o.hs, 7.5, o.hsFg || '#E8503A');
        if (o.vs) {
            const n = [...o.vs].length, sh = n * 11 + 7, vx = o.vsLeft ? x - 7 : x + w - 8, vy = top + 10;
            g += `<g ${o.neon ? `class="sc-neon" style="--d:${o.neonD || 2}s"` : ''}><rect x="${vx}" y="${vy}" width="14" height="${sh}" rx="2" fill="${o.vsBg || '#E8503A'}" stroke="#fff" stroke-width="1"/>${vtext(vx + 7, vy + 12, o.vs, 9, o.vsFg || '#fff')}</g>`;
        }
        if (o.box) g += `<g ${o.neon ? `class="sc-neon" style="--d:${(o.neonD || 2) + .4}s"` : ''}><circle cx="${x + (o.vsLeft ? w - 2 : 0)}" cy="${top + 22}" r="9" fill="${o.boxBg || '#fff'}" stroke="${o.boxFg || '#E8503A'}" stroke-width="2"/>${tx(x + (o.vsLeft ? w - 2 : 0), top + 26, o.box, 10, o.boxFg || '#E8503A')}</g>`;
        return g;
    }
    // Elektrik direği (+ trafo, uyarı şeridi) ve aralarında sarkan kablolar; tellere konmuş kuşlar
    const pole = (x, top = 34) => `<rect x="${x - 2.5}" y="${top}" width="5" height="${BASE - top + 60}" fill="#8E8A9C"/>`
        + `<rect x="${x - 15}" y="${top + 6}" width="30" height="3" fill="#77738A"/><rect x="${x - 10}" y="${top + 16}" width="20" height="2.5" fill="#77738A"/>`
        + `<rect x="${x + 3}" y="${top + 24}" width="8" height="13" rx="3" fill="#A8A4B6"/><path d="M${x - 2.5} ${BASE - 26}h5M${x - 2.5} ${BASE - 20}h5M${x - 2.5} ${BASE - 14}h5" stroke="#FFC857" stroke-width="2.4"/>`
        + `<path d="M${x - 15} ${top + 6}v-3M${x + 15} ${top + 6}v-3M${x} ${top}v-3" stroke="#77738A" stroke-width="2"/>`;
    function wires(xs, top = 34, withBirds = true) {
        let g = '';
        for (let i = 0; i < xs.length - 1; i++) {
            const a = xs[i], b = xs[i + 1], m = (a + b) / 2;
            [[-13, 7, 10], [13, 7, 14], [-8, 17, 18], [8, 17, 12]].forEach(([dx, dy, sag]) =>
                g += `<path d="M${a + dx} ${top + dy}Q${m} ${top + dy + sag} ${b + dx} ${top + dy}" fill="none" stroke="#4E4A63" stroke-width="1" opacity=".7"/>`);
            if (withBirds && i % 2 === 0) g += [0, 9].map(k => `<g class="sc-perch" style="--d:${(i * .8 + k * .1).toFixed(1)}s"><path d="M${m - 20 + k} ${top + 12.5}q3 -6 7 -2l3 1l-3 1q-3 3 -7 0z" fill="#3A3F6B"/></g>`).join('');
        }
        return g;
    }
    const vending = (x, c = '#E8503A') => `<rect x="${x}" y="${BASE - 34}" width="20" height="34" rx="2" fill="${c}"/>`
        + `<rect x="${x + 2.5}" y="${BASE - 31}" width="15" height="17" fill="#EEF4FA"/>`
        + [0, 1, 2].map(r => [0, 1, 2, 3].map(k => `<rect x="${x + 4 + k * 3.4}" y="${BASE - 29 + r * 5.5}" width="2.2" height="4" rx="1" fill="${['#3558D6', '#8ED1B0', '#FFC857', '#F58FAA'][(r + k) % 4]}"/>`).join('')).join('')
        + `<rect x="${x + 4}" y="${BASE - 10}" width="12" height="4" fill="#22264B" opacity=".6"/><circle class="sc-twink" cx="${x + 16}" cy="${BASE - 12.5}" r="1" fill="#5CE18A"/>`;
    const sidewalk = (W, col = '#D9D5E0') => `<rect x="-20" y="${BASE}" width="${W + 40}" height="60" fill="${col}"/>`
        + `<path d="M-20 ${BASE}H${W + 20}" stroke="#000" stroke-opacity=".16" stroke-width="2"/>`
        + Array.from({ length: Math.ceil(W / 40) + 1 }, (_, i) => `<path d="M${i * 40} ${BASE + 2}V${BASE + 50}" stroke="#000" stroke-opacity=".07" stroke-width="1"/>`).join('');
    // Ortam canlılığı: süzülen bulut, uçan kuş sürüsü
    const cloud = (x, y, s = 1, op = .85, cls = 'sc-drift') => `<g class="${cls}" style="--dx:${(20 + rnd(x) * 30).toFixed(0)}px;--dur:${(16 + rnd(x + 3) * 14).toFixed(0)}s"><g transform="translate(${x},${y}) scale(${s})" fill="#fff" opacity="${op}">
        <path d="M0 0h78a14 14 0 0 0-5-27 19 19 0 0 0-36-4 16 16 0 0 0-37 31z"/></g></g>`;
    const birds = (y, d = 0, n = 3) => `<g class="sc-birds" style="--d:${d}s">${Array.from({ length: n }, (_, i) => `<g transform="translate(${-i * 26},${y + (i % 2) * 9})"><path class="sc-bflap" style="--d:${(i * .13).toFixed(2)}s" d="M-7 0q3.5 -6 7 0q3.5 -6 7 0" fill="none" stroke="#3A3F6B" stroke-width="2" stroke-linecap="round"/></g>`).join('')}</g>`;

    // Kyoto machiya evi (koyu ahşap, kafes cephe, kiremit saçak, inuyarai çiti)
    const machiyaK = (x, w, h, nr, lamp) => {
        const top = BASE - h;
        let g = `<rect x="${x}" y="${top}" width="${w}" height="${h + 60}" fill="#6B4430"/>`
            + `<rect x="${x + 4}" y="${top + 8}" width="${w - 8}" height="16" fill="#F1E6D2"/>`
            + Array.from({ length: Math.floor((w - 14) / 7) }, (_, k) => `<rect x="${x + 8 + k * 7}" y="${top + 10}" width="3" height="12" rx="1" fill="#6B4430"/>`).join('')
            + `<path d="M${x - 6} ${top + 32}L${x + 2} ${top + 24}H${x + w - 2}L${x + w + 6} ${top + 32}Z" fill="#3A3F6B"/>`
            + Array.from({ length: Math.floor(w / 8) }, (_, k) => `<path d="M${x + 4 + k * 8} ${top + 25}l-3 6" stroke="#565B86" stroke-width="1"/>`).join('')
            + `<path d="M${x - 4} ${top + 2}L${x + 4} ${top - 6}H${x + w - 4}L${x + w + 4} ${top + 2}Z" fill="#3A3F6B"/>`
            + `<rect x="${x + 4}" y="${top + 34}" width="${w - 8}" height="${BASE - top - 34}" fill="#8A5C3A"/>`
            + Array.from({ length: Math.floor((w - 10) / 5) }, (_, k) => `<path d="M${x + 7 + k * 5} ${top + 36}V${BASE - 10}" stroke="#5A3826" stroke-width="2"/>`).join('')
            + `<g class="sc-noren"><rect x="${x + w / 2 - 12}" y="${top + 34}" width="24" height="12" fill="${nr}"/><path d="M${x + w / 2 - 4} ${top + 36}v10M${x + w / 2 + 4} ${top + 36}v10" stroke="#8A5C3A" stroke-width="1.3"/></g>`
            + `<path d="M${x + 2} ${BASE}Q${x + 4} ${BASE - 14} ${x + 14} ${BASE - 14}H${x + w - 14}Q${x + w - 4} ${BASE - 14} ${x + w - 2} ${BASE}" fill="#C9A06A" opacity=".9"/>`
            + Array.from({ length: Math.floor((w - 20) / 5) }, (_, k) => `<path d="M${x + 12 + k * 5} ${BASE - 13}V${BASE}" stroke="#A8824E" stroke-width=".8"/>`).join('');
        if (lamp) g += `<g class="sc-glow" style="--d:${lamp}s"><ellipse cx="${x + 10}" cy="${top + 44}" rx="5" ry="7" fill="#FFF4D6"/><path d="M${x + 7} ${top + 37}h6M${x + 7} ${top + 51}h6" stroke="#2A2438" stroke-width="1.3"/></g>`;
        return g;
    };
    // Kırmızı torii (x,y = taban ortası, s = ölçek): siyah kasagi, siyah taban, yazılı direkler
    const toriiK = (x, y, s, c = '#E8503A') => `<g transform="translate(${x},${y}) scale(${s})">
        <path d="M-28 0L-25 -62H-19L-20 0Z" fill="${c}"/><path d="M28 0L25 -62H19L20 0Z" fill="${c}"/>
        <rect x="-33" y="-50" width="66" height="5.5" fill="${c}"/><rect x="-35" y="-65" width="70" height="5" fill="${c}"/>
        <path d="M-42 -65Q0 -73 42 -65L40 -59Q0 -66 -40 -59Z" fill="#2A2438"/>
        <rect x="-2.5" y="-60" width="5" height="10" fill="${c}"/>
        <path d="M-28.5 0L-28 -8H-20L-20.5 0ZM28.5 0L28 -8H20L20.5 0Z" fill="#2A2438"/>
        <path d="M-23.5 -40v22M23.5 -40v22" stroke="#2A2438" stroke-width="1.6" stroke-dasharray="3 2.5" opacity=".7"/></g>`;
    // Taş fener (tōrō)
    const toro = (x, y = BASE) => `<g transform="translate(${x},${y})" fill="#B8B1A2">
        <rect x="-10" y="-6" width="20" height="6"/><rect x="-3" y="-30" width="6" height="24"/><rect x="-9" y="-34" width="18" height="5"/>
        <rect x="-7" y="-46" width="14" height="12"/><rect class="sc-twink" x="-4" y="-43" width="8" height="7" fill="#FFF4D6"/>
        <path d="M-13 -46L0 -56L13 -46Z" fill="#A39C8C"/><circle cx="0" cy="-58" r="2.6" fill="#A39C8C"/></g>`;
    // Geyik (Nara): ayak tabanı orijin; flip=1 sola bakar; headCls ile baş eğilir; antler: boynuzlu erkek
    const deer = (x, y, flip, headCls = '', bodyCls = '', antler = false) => `<g transform="translate(${x},${y}) scale(${flip ? -1 : 1},1)">
        <ellipse cx="0" cy="1" rx="22" ry="3" fill="#22264B" opacity=".14"/><g class="${bodyCls}">
        <path d="M-15 -22V0M-9 -22V-1M10 -22V0M16 -22V-1" stroke="#9C6B42" stroke-width="3.6" stroke-linecap="round"/>
        <path d="M-15 0h-2M-9 -1h-2M10 0h2M16 -1h2" stroke="#3A2A1E" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="0" cy="-28" rx="22" ry="12" fill="#C08A5A"/><ellipse cx="0" cy="-23" rx="17" ry="6" fill="#E3C3A0"/>
        ${[[-9, -33], [-1, -36], [8, -32], [-3, -29], [4, -27]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="1.8" fill="#fff" opacity=".85"/>`).join('')}
        <g class="sc-tail"><path d="M-21 -34q-7 -3 -5 5q3 2 5 -5z" fill="#fff" stroke="#C08A5A" stroke-width="1"/></g>
        <g class="${headCls}"><path d="M13 -34L19 -50" stroke="#C08A5A" stroke-width="8" stroke-linecap="round"/>
            ${antler ? `<path d="M19 -60q-4 -10 2 -16M20 -66l-6 -3M22 -60q4 -9 9 -11M25 -66l5 2" fill="none" stroke="#E9DCC4" stroke-width="2.2" stroke-linecap="round"/>` : ''}
            <ellipse cx="24" cy="-54" rx="9.5" ry="6.5" fill="#C08A5A"/><ellipse cx="31" cy="-52.5" rx="4" ry="3.6" fill="#D9AE84"/>
            <ellipse cx="17" cy="-61" rx="3" ry="5.2" fill="#B07A4A" transform="rotate(-25 17 -61)"/><ellipse cx="22" cy="-62" rx="3" ry="5.2" fill="#B07A4A" transform="rotate(10 22 -62)"/>
            <circle cx="26" cy="-56" r="1.7" fill="#22264B"/><circle cx="26.5" cy="-56.6" r=".6" fill="#fff"/><ellipse cx="33.6" cy="-53" rx="1.8" ry="1.4" fill="#22264B"/></g>
    </g></g>`;

    // ---------- Karakterler: Yusuf & Merve (v2) ----------
    // Görünüm Shibuya Sky fotoğrafından: Yusuf haki ceket + bej tişört + gözlük + kahverengi saç,
    // Merve kına kızılı uzun saç + kot ceket + uzun krem etek. Yüzleri sağa dönük çizilir.
    // pose: 'down' | 'photo' | 'point' | 'pointDown' | 'reach' | 'grab' | 'offer' | 'eat' | 'selfie' | 'surprise' | 'push' | 'wave' | 'fan' | 'clap'
    // late: poz yürüyüşten sonra kalkar (--raise); mouth: 'smile' | 'o' | 'grin'
    function couple(bags, opt = {}) {
        const walk = opt.walk !== false;
        const SKIN = '#FFDFC4', SKIN2 = '#F0C3A2';
        const arms = (o, pose, late) => {
            const c = o.arm || o.coat;
            const line = (d) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="6.4" stroke-linecap="round"/>`;
            const ol = (d) => `<path d="${d}" fill="none" stroke="#fff" stroke-width="9.4" stroke-linecap="round"/>` + line(d);
            const hand = (x, y) => `<circle cx="${x}" cy="${y}" r="3.3" fill="${SKIN}" stroke="none"/>`;
            const backArm = bags ? line('M-9 -38L-27 -24') : `<g class="${walk ? 'sc-swing b' : ''}">${line('M-10 -38L-15 -22')}${hand(-15.5, -20.6)}</g>`;
            const down = `<g class="${walk ? 'sc-swing' : ''}">${line('M10 -38L15 -22')}${hand(15.5, -20.6)}</g>`;
            const wrap = (inner) => late ? `<g class="sc-down">${down}</g><g class="sc-pose late">${inner}</g>` : `<g class="sc-pose">${inner}</g>`;
            const phone = (x, y) => `<rect x="${x}" y="${y}" width="11" height="17.5" rx="2.2" fill="#22264B" stroke="#fff" stroke-width="1.4"/><rect x="${x + 1.6}" y="${y + 1.8}" width="7.8" height="11" rx="1" fill="#5D86BE" stroke="none"/><circle class="sc-flash" cx="${x + 5.5}" cy="${y + 4}" r="6" fill="#fff" stroke="none"/>`;
            switch (pose) {
                case 'photo': return backArm + wrap(line('M10 -38L21 -57') + phone(16, -77));
                case 'point': return backArm + wrap(line('M10 -38L24 -63') + hand(25, -65));
                case 'pointDown': return backArm + wrap(line('M10 -38L25 -27') + hand(26.5, -26));
                case 'reach': return backArm + wrap(line('M10 -38L15 -80') + hand(15.5, -82));
                case 'grab':  return backArm + wrap(line('M10 -38L24 -46') + hand(25.5, -47));
                case 'offer': return backArm + wrap(line('M10 -38L26 -40') + hand(27.5, -40) + (o.item || ''));
                case 'eat': return `<g class="sc-eat">${ol('M-10 -38L2 -50')}${hand(2.5, -51)}<path d="M3 -52l8 -3" stroke="#C9CED6" stroke-width="2.6" stroke-linecap="round"/><ellipse cx="11.5" cy="-55.4" rx="2.6" ry="1.6" fill="#B8742A" stroke="none"/></g>`
                         + `<g class="sc-pose">${line('M10 -38L24 -37')}${hand(25.5, -37)}${o.item || ''}</g>`;
                case 'selfie': return backArm + wrap(line('M10 -38L30 -68') + hand(31, -70) + phone(25, -90));
                case 'surprise': {
                    const up = line('M-10 -38L-21 -61') + hand(-22, -63) + line('M10 -38L21 -61') + hand(22, -63);
                    return late ? `<g class="sc-down">${backArm + down}</g><g class="sc-pop">${up}</g>` : up;
                }
                case 'push': return ol('M-10 -36L22 -31') + hand(23, -31) + line('M10 -36L25 -30') + hand(26, -30);
                case 'wave': return backArm + `<g class="sc-wave">${line('M10 -38L18 -78')}${hand(18.5, -80)}</g>`;
                case 'fan':  return `<g class="sc-fan b">${line('M-10 -38L-21 -47')}${hand(-22.5, -48)}</g><g class="sc-fan">${line('M10 -38L23 -50')}${hand(24.5, -51)}</g>`;
                case 'clap': {
                    const h2 = (x, y) => `<circle cx="${x}" cy="${y}" r="3.7" fill="${SKIN}" stroke="#fff" stroke-width="1.4"/>`;
                    return `<g class="sc-clap b">${ol('M-12 -40L-5 -35')}${h2(-2.8, -36)}</g><g class="sc-clap">${ol('M12 -40L5 -35')}${h2(2.8, -36)}</g>`
                         + `<g class="sc-spark" stroke="#FFE07A" stroke-width="2" stroke-linecap="round"><path d="M-9 -47l-4 -4M0 -50v-6M9 -47l4 -4"/></g>`;
                }
                default: return backArm + down;
            }
        };
        const mouths = {
            smile: `<path d="M.8 -52.4q2.6 2.8 5.2 0" fill="none" stroke="#8A4A3A" stroke-width="1.5" stroke-linecap="round"/>`,
            o: `<ellipse cx="3.4" cy="-51.6" rx="2" ry="2.6" fill="#8A4A3A" stroke="none"/>`,
            grin: `<path d="M-.2 -53.4h7.2q-.6 4.6 -3.6 4.6t-3.6 -4.6z" fill="#8A4A3A" stroke="none"/><path d="M.6 -53.2h5.6v1.3h-5.6z" fill="#fff" stroke="none"/>`
        };
        const person = (o) => `
            <ellipse cx="0" cy="1.5" rx="17" ry="3.6" fill="#22264B" opacity=".16" stroke="none"/>
            <g ${o.scale ? `transform="scale(${o.scale})"` : ''}><g class="${walk ? 'sc-person' : 'sc-still'} ${o.act || ''}">
                <g class="sc-leg ${walk ? o.l1 : ''}"><rect x="-9.2" y="-23" width="7.6" height="21" rx="3.6" fill="${o.legs}"/><path d="M-10 -1.2q0 -4 4.4 -4h1.6q4 0 4.6 4z" fill="${o.shoe}"/></g>
                <g class="sc-leg ${walk ? o.l2 : ''}"><rect x="1.8" y="-23" width="7.6" height="21" rx="3.6" fill="${o.legs}"/><path d="M1 -1.2q0 -4 4.4 -4h1.6q4 0 4.6 4z" fill="${o.shoe}"/></g>
                ${o.skirt || ''}<g class="sc-upper">${o.back || ''}
                <rect x="-12.6" y="-47" width="25.2" height="29.5" rx="10" fill="${o.coat}"/>
                ${o.inner || ''}
                <rect x="-3.4" y="-50.5" width="6.8" height="6" fill="${SKIN2}" stroke="none"/>
                ${arms(o, o.pose, o.late)}
                <circle cx="-12" cy="-57.5" r="3" fill="${SKIN2}"/>
                <circle cx="0" cy="-59" r="13.4" fill="${SKIN}"/>
                ${o.hair}
                <g stroke="none">
                    <g class="sc-blink" style="--bd:${o.bd || 0}s"><ellipse cx="5" cy="-59" rx="1.9" ry="2.2" fill="#22264B"/><ellipse cx="-2" cy="-59" rx="1.9" ry="2.2" fill="#22264B"/>
                        <circle cx="5.6" cy="-59.8" r=".7" fill="#fff"/><circle cx="-1.4" cy="-59.8" r=".7" fill="#fff"/></g>
                    <circle cx="9" cy="-54.4" r="2.5" fill="#F9B0BE" opacity=".9"/><circle cx="-5.4" cy="-54.4" r="2.5" fill="#F9B0BE" opacity=".9"/>
                </g>
                <path d="M2.8 -63.4q2.2 -1.4 4.4 0M-4.2 -63.4q2.2 -1.4 4.4 0" fill="none" stroke="${o.brow}" stroke-width="1.3" stroke-linecap="round"/>
                ${mouths[o.mouth || 'smile']}
                ${o.fx || ''}
                ${o.extra || ''}</g>
            </g></g>
            ${bags ? `<g class="${walk ? 'sc-case' : ''}"><path d="M-27 -24L-40 -35M-33 -29l-4 4" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><path d="M-27 -24L-40 -35" fill="none" stroke="#8E8A9C" stroke-width="1.4" stroke-linecap="round"/>
                <rect x="-62" y="-37" width="25" height="32" rx="6" fill="${o.bag}"/>
                <path d="M-56 -34V-8M-49.5 -34V-8M-43 -34V-8" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2"/>
                <rect x="-54" y="-40" width="9" height="3.4" rx="1.5" fill="#22264B" stroke="none"/><rect x="-47" y="-22" width="6" height="5" rx="1" fill="#fff" stroke="none" opacity=".9"/>
                <circle cx="-57" cy="-3" r="2.8" fill="#22264B"/><circle cx="-42" cy="-3" r="2.8" fill="#22264B"/></g>` : ''}`;
        return {
            yusuf: person({
                l1: 'la', l2: 'lb', scale: 1.08, legs: '#2B3150', shoe: '#F7F5F0', bag: '#FF7A59', brow: '#5A3826', bd: 0.6,
                pose: opt.yPose, late: opt.late, item: opt.yItem, act: opt.yAct, fx: opt.yFx, mouth: opt.yMouth,
                coat: '#7E8758',
                inner: '<path d="M-5 -47h10v27.5h-10z" fill="#EADCC6" stroke="none"/><path d="M-5 -47L-9.5 -39.5L-5 -36M5 -47L9.5 -39.5L5 -36" fill="#6C7449" stroke="none"/>'
                     + '<path d="M-5 -36V-19.5M5 -36V-19.5" fill="none" stroke="#5F6842" stroke-width="1.2"/><path d="M-11 -29h4.5M6.5 -29h4.5" fill="none" stroke="#5F6842" stroke-width="1.4"/>',
                hair: '<path d="M-13.9 -60Q-16.5 -77.5 -3 -79Q11.5 -80.5 14 -66.5Q14.6 -62.5 13.6 -60.2Q11.5 -70.5 2.5 -70Q-4.5 -72.5 -9.6 -66.5Q-12.4 -63.5 -13.9 -60Z" fill="#6B4430"/>'
                    + '<path d="M-8 -73q4 -4 10 -3M-1 -76.5q5 -2 10 1" fill="none" stroke="#8A5A3E" stroke-width="1.2" stroke-linecap="round"/>',
                extra: '<g fill="rgba(255,255,255,.28)" stroke="#2A2438" stroke-width="1.35"><rect x="1" y="-62.6" width="8" height="6.6" rx="2.4"/><rect x="-6.4" y="-62.6" width="7" height="6.6" rx="2.4"/></g>'
                     + '<path d="M9 -60l4 -1.2" fill="none" stroke="#2A2438" stroke-width="1.3" stroke-linecap="round"/>'
            }),
            merve: person({
                l1: 'lb', l2: 'la', legs: '#E9D9C8', shoe: '#2A2438', bag: '#FFC857', brow: '#8E3520', bd: 1.9,
                pose: opt.mPose, late: opt.late, item: opt.mItem, act: opt.mAct, fx: opt.mFx, mouth: opt.mMouth,
                coat: '#5D86BE',
                back: '<g class="sc-hair"><path d="M-14.4 -62Q-19 -44 -16.5 -27Q-8 -23 0 -24.5Q9 -23 16 -28Q18.5 -44 14.4 -62Z" fill="#A8452B"/>'
                    + '<path d="M-10 -40v12M-3 -38v12M5 -38v12M11 -40v11" fill="none" stroke="#8E3520" stroke-width="1.1" stroke-linecap="round" opacity=".8"/></g>',
                skirt: '<g class="sc-skirt"><path d="M-12.4 -24.5L-17 -3.5Q0 -.5 17 -3.5L12.4 -24.5Z" fill="#F5EEE2"/><path d="M-6 -22l-3 18M0 -22v19M6 -22l3 18" fill="none" stroke="#DCCFB8" stroke-width="1.1"/></g>',
                inner: '<path d="M-6 -47L0 -39L6 -47Z" fill="#6B3A33" stroke="none"/><path d="M-6.4 -47L0 -37.5L6.4 -47" fill="none" stroke="#3F6596" stroke-width="2"/>'
                     + '<path d="M0 -37.5V-18" fill="none" stroke="#3F6596" stroke-width="1.3"/><path d="M-9.5 -34h5v4h-5zM4.5 -34h5v4h-5z" fill="none" stroke="#3F6596" stroke-width="1.1"/>'
                     + '<circle cx="0" cy="-31" r=".9" fill="#E9DCC4" stroke="none"/><circle cx="0" cy="-25" r=".9" fill="#E9DCC4" stroke="none"/>',
                hair: '<path d="M-14.2 -57.5Q-15.6 -75 0 -75.4Q14.6 -75 14.2 -58.5Q9.5 -68 -.5 -66Q-9 -64 -14.2 -57.5Z" fill="#A8452B"/>'
                    + '<path d="M-6 -70q5 -3 12 -1" fill="none" stroke="#C25A3A" stroke-width="1.2" stroke-linecap="round"/>'
                    + '<path d="M-13.6 -58.5Q-15.6 -48 -14.6 -36M13.6 -59.5Q15.6 -48 14.6 -38" fill="none" stroke="#A8452B" stroke-width="5" stroke-linecap="round"/>'
            })
        };
    }
    const PEOPLE_ATTR = 'stroke="#fff" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"';
    // İkisi yan yana (walk: yürüyerek girer; style: --wfrom/--wto/--wd/--wdl/--steps/--raise/--flash ile özelleştirilir)
    const pair = (p, gap, o = {}) => `<g class="${o.walk === false ? 'sc-pair' : 'sc-walkers'}" style="${o.style || ''}" ${PEOPLE_ATTR}>
                        ${o.extra || ''}<g>${p.yusuf}</g><g transform="translate(${gap},0)${o.flipM ? ' scale(-1,1)' : ''}">${p.merve}</g></g>`;
    // Tek karakteri yerleştir (flip: sola baksın)
    const solo = (svg, x, flip, y = 176, s = 1.1, style = '') => `<g transform="translate(${x},${y}) scale(${flip ? -s : s},${s})" style="${style}"><g class="sc-pair" ${PEOPLE_ATTR}><g>${svg}</g></g></g>`;
    const heart = (x, y, delay) => `<g transform="translate(${x},${y})"><g class="sc-heart" ${delay ? `style="--hd:${delay}s"` : ''}><path class="sc-heartbeat" d="M0 0c-6 -9 -18 -2 -10 7l10 9l10 -9c8 -9 -4 -16 -10 -7z" fill="#E8503A" stroke="#fff" stroke-width="2"/></g></g>`;
    const bubble = (x, y, w, s, cls, tail = 'l') => `<g class="${cls}"><path d="M${x} ${y}h${w}a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8h${tail === 'l' ? -(w - 26) : -10}l${tail === 'l' ? '-14 11 3-11' : '12 11-21-11'}h${tail === 'l' ? -15 : -(w - 19)}a8 8 0 0 1-8-8v-14a8 8 0 0 1 8-8z" fill="#fff" stroke="#22264B" stroke-width="2"/>${tx(x + w / 2, y + 21, s, 13, '#E8503A')}</g>`;
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
        <g transform="translate(${x},${y})"><g class="sc-god-in"><g class="sc-godshake">
            <path d="M-24 6l-7 -19 8 3 1 -9 8 8zM-8 -3l-4 -21 8 6 4 -8 5 13zM12 -1l2 -21 7 7 5 -6 1 15z" fill="#3C5446" stroke="#22264B" stroke-width="2.2" stroke-linejoin="round"/>
            <path d="M-34 16Q-36 -10 0 -12Q36 -10 34 16Q34 40 0 42Q-34 40 -34 16Z" fill="#587A66" stroke="#22264B" stroke-width="2.5"/>
            <path d="M-30 22Q0 30 30 22Q30 40 0 41Q-30 40 -30 22Z" fill="#6E927C" stroke="none"/>
            <path d="M-24 -1l10 4M24 -1l-10 4" fill="none" stroke="#22264B" stroke-width="3" stroke-linecap="round"/>
            <circle cx="-14" cy="9" r="6.2" fill="#FFF4D6" stroke="#22264B" stroke-width="2"/><circle cx="13" cy="9" r="6.2" fill="#FFF4D6" stroke="#22264B" stroke-width="2"/>
            <circle class="sc-eye" cx="-13" cy="10" r="2.8" fill="#22264B"/><circle class="sc-eye" cx="14" cy="10" r="2.8" fill="#22264B"/>
            <path d="M-3 17h2M3 17h2" stroke="#22264B" stroke-width="2" stroke-linecap="round"/>
            <g class="sc-mouth"><path d="M-14 24Q0 30 14 24Q12 34 0 34Q-12 34 -14 24Z" fill="#7A2E2E" stroke="#22264B" stroke-width="2"/>
                <path d="M-11 25.6l3 4 3 -3 3 3.4 3 -3.4 3 3 3 -4" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/></g>
            <circle cx="-25" cy="21" r="4.6" fill="#F9B8C8" opacity=".85"/><circle cx="25" cy="21" r="4.6" fill="#F9B8C8" opacity=".85"/>
            <g class="sc-roar"><path d="M-102 -44h70a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8h-4l10 12-20-12h-56a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8z" fill="#fff" stroke="#22264B" stroke-width="2"/>
                ${tx(-67, -23, 'ガオー!', 15, '#E8503A')}</g>
        </g></g></g>`;

    // ===== Gün 1 — Shinjuku, gün batımı: valizlerle varış, Kabukichō kapısı, Godzilla'nın fotoğrafı =====
    function sceneDay1() {
        const W = 1200, H = 220, G = 176;
        // uzakta Nishi-Shinjuku silueti: Tochō (çatallı ikiz kule), Docomo Yoyogi, Cocoon Tower, Park Hyatt
        let dots = '';
        for (let i = 0; i < 90; i++) dots += `<rect class="sc-win" style="--d:${(1 + rnd(i + 21) * 4.5).toFixed(2)}s" x="${(rnd(i + 31) * W).toFixed(0)}" y="${(70 + rnd(i + 41) * 70).toFixed(0)}" width="2.4" height="3" fill="#FFE6A0"/>`;
        const far = `<g fill="#8A5C86" opacity=".72">
            ${Array.from({ length: 17 }, (_, i) => `<rect x="${i * 74 - 12}" y="${78 + rnd(i + 900) * 44}" width="${42 + rnd(i + 910) * 26}" height="160" rx="2"/>`).join('')}
            <rect x="640" y="126" width="118" height="100"/><rect x="646" y="66" width="44" height="160"/><rect x="708" y="66" width="44" height="160"/>
            <rect x="650" y="40" width="15" height="28"/><rect x="671" y="40" width="15" height="28"/><rect x="712" y="40" width="15" height="28"/><rect x="733" y="40" width="15" height="28"/>
            <rect x="690" y="98" width="18" height="130"/><path d="M657 40v-9M740 40v-9" stroke="#8A5C86" stroke-width="2"/>
            <rect x="842" y="110" width="40" height="120"/><rect x="847" y="84" width="30" height="28"/><rect x="852" y="60" width="20" height="26"/><path d="M852 60L862 34L872 60Z"/><path d="M862 34V8" stroke="#8A5C86" stroke-width="2.5"/>
            <path d="M968 ${H}C966 130 980 74 1004 40C1028 74 1042 130 1040 ${H}Z"/>
            <rect x="1090" y="92" width="34" height="140"/><path d="M1090 92L1107 72L1124 92Z"/><rect x="1128" y="70" width="34" height="160"/><path d="M1128 70L1145 50L1162 70Z"/><rect x="1166" y="50" width="34" height="180"/><path d="M1166 50L1183 30L1200 50Z"/>
        </g>
        <g opacity=".55"><circle cx="862" cy="73" r="5" fill="#FFE9A8"/>
            <path d="M980 ${H}Q1010 120 1030 70M1030 ${H}Q1000 120 978 70M996 ${H}Q1016 130 1020 60M1014 ${H}Q994 130 990 60" fill="none" stroke="#B994B4" stroke-width="1.2"/>
            ${Array.from({ length: 7 }, (_, k) => `<path d="M648 ${78 + k * 12}h40M710 ${78 + k * 12}h40" stroke="#B994B4" stroke-width="1"/>`).join('')}</g>${dots}`;
        // Kabukichō benzeri sokak
        const row = [
            [-6, 64, 104, { c: FACADE[1], vs: '居酒屋', neon: 1, neonD: 2.2, chochin: 1, shop: '#F6D9A8', lit: .5, roof: 'tank' }],
            [60, 56, 128, { c: FACADE[0], vs: 'カラオケ', vsBg: '#3558D6', neon: 1, neonD: 2.8, hs: 'ラーメン', hsFg: '#22264B', noren: '#E8503A', steam: 1, lit: .55, roof: 'rail' }],
            [118, 74, 92, { c: FACADE[3], balcony: 1, awning: '#3E8E6E', hs: 'コンビニ', hsBg: '#3E8E6E', hsFg: '#fff', lit: .5 }],
            [194, 50, 116, { c: FACADE[4], vs: '新宿', vsBg: '#FFC857', vsFg: '#E8503A', neon: 1, neonD: 3.1, lit: .6, box: '酒', roof: 'box' }],
            [246, 98, 112, { c: '#E6E0D4', vs: '映画館', vsBg: '#22264B', vsLeft: 1, neon: 1, neonD: 2.9, awning: '#3558D6', hs: 'シネマ', hsBg: '#22264B', hsFg: '#FFC857', lit: .5 }],
            [346, 46, 92, { c: FACADE[2], lit: .55, box: '薬', boxFg: '#3E8E6E', neon: 1, neonD: 3.3 }],
            [564, 70, 96, { c: FACADE[6], balcony: 1, hs: 'ドラッグ', hsBg: '#FFC857', hsFg: '#22264B', lit: .5, roof: 'tank' }],
            [636, 64, 90, { c: FACADE[1], vs: '焼肉', neon: 1, neonD: 3.4, chochin: 1, shop: '#F6D9A8', lit: .55 }],
            [702, 74, 100, { c: FACADE[5], roof: 'box', vs: 'ホテル', vsBg: '#F58FAA', neon: 1, neonD: 2.5, noren: '#22264B', hs: '寿司', lit: .5 }],
            [778, 60, 80, { c: FACADE[3], noren: '#3E8E6E', hs: 'うどん', steam: 1, lit: .5 }],
            [840, 72, 96, { c: FACADE[4], balcony: 1, vs: 'パチンコ', vsBg: '#E8503A', neon: 1, neonD: 3.6, lit: .55, roof: 'rail' }],
            [914, 58, 84, { c: FACADE[0], awning: '#F58FAA', hs: 'カフェ', lit: .5 }],
            [974, 68, 100, { c: FACADE[7], vs: '居酒屋', vsBg: '#FFC857', vsFg: '#22264B', neon: 1, neonD: 2.4, chochin: 1, shop: '#F6D9A8', lit: .55, roof: 'tank' }],
            [1044, 62, 98, { c: FACADE[2], roof: 'box', hs: '本屋', lit: .5 }],
            [1108, 76, 124, { c: FACADE[1], balcony: 1, vs: 'ゲーム', vsBg: '#8E5BFF', neon: 1, neonD: 3.2, lit: .55 }],
            [1186, 60, 90, { c: FACADE[5], noren: '#E8503A', hs: 'そば', lit: .5 }]
        ].map(([x, w, h, o]) => bld(x, w, h, o)).join('');
        // Kabukichō Ichibangai kapısı: kırmızı neon kemer + ampuller
        const arc = (t, dy) => [404 * (1 - t) ** 2 + 2 * 480 * t * (1 - t) + 556 * t ** 2, (104 + dy) * (1 - t) ** 2 + 2 * (78 + dy) * t * (1 - t) + (104 + dy) * t ** 2];
        const gate = `<g>
            <rect x="396" y="66" width="168" height="${H}" fill="#3A2F4A" opacity=".5"/>
            <rect x="412" y="104" width="9" height="${H}" fill="#C9402E"/><rect x="539" y="104" width="9" height="${H}" fill="#C9402E"/>
            <g class="sc-neon" style="--d:1.6s"><path d="M404 104Q480 78 556 104V120Q480 98 404 120Z" fill="#E8503A" stroke="#fff" stroke-width="1.5"/>
            ${tx(480, 104.5, '歌舞伎町一番街', 9.5, '#fff')}</g>
            ${Array.from({ length: 13 }, (_, i) => { const [bx, by] = arc(.04 + i * .0767, -3); return `<circle class="sc-bulb" style="--d:${(i * .12).toFixed(2)}s" cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="2.1" fill="#FFE07A"/>`; }).join('')}
            ${[430, 456, 482, 508, 534].map((x, i) => `<g class="sc-twink" style="--d:${i * .4}s"><ellipse cx="${x}" cy="${128 + (i % 2) * 3}" rx="4" ry="5.4" fill="#E8503A"/><path d="M${x} ${118 + (i % 2) * 3}v4.6" stroke="#2A2438" stroke-width="1"/></g>`).join('')}</g>`;
        const poles = [40, 380, 580, 880, 1150];
        const p = couple(true, { yPose: 'photo', mPose: 'point', late: true });
        return sceneBox('scene-d1', `
            <span class="sc-plane"><i>${ICONS.plane}</i></span>
            ${svgOpen(W, H)}
                <g class="sc-sun"><circle cx="560" cy="86" r="126" fill="#fff" opacity=".14"/><circle cx="560" cy="86" r="86" fill="#fff" opacity=".2"/><circle cx="560" cy="86" r="54" fill="#FFE9A8"/></g>
                ${cloud(80, 44, .8, .5)}${cloud(900, 30, 1, .45)}
                ${far}
                <g class="sc-god">${godzilla(296, BASE - 112 - 33)}</g>
                ${row}${gate}
                ${vending(212, '#3558D6')}${vending(232, '#E8503A')}${vending(1000, '#E8503A')}
                ${sidewalk(W)}
                ${poles.map(x => pole(x)).join('')}${wires(poles)}
                <g transform="translate(130,${G}) scale(1.1)">${pair(p, 74, { style: '--raise:5.6s;--flash:6.3s' })}${heart(37, -100, 6.8)}</g>
            </svg>`, W, H, `0 0 660 ${H}`);
    }

    // ===== Gün 2 — Asakusa sabahı: Kaminarimon, Nakamise, Senso-ji'nin tütsü kazanında duman yelpazelemek =====
    function sceneDay2() {
        const W = 1200, H = 220, G = 176;
        const TILE = '#5E6A72';
        // Tokyo Skytree: kafes gövde, iki seyir katı, anten
        const skytree = `<g opacity=".75"><path d="M596 ${H}L608 60H618L630 ${H}Z" fill="#E8EEF6"/>
            ${Array.from({ length: 9 }, (_, k) => `<path d="M${600 + k * .9} ${200 - k * 16}L${626 - k * .9} ${184 - k * 16}M${626 - k * .9} ${200 - k * 16}L${600 + k * .9} ${184 - k * 16}" stroke="#9FB4D4" stroke-width="1"/>`).join('')}
            <path d="M602 96H624L627 106H599Z" fill="#fff"/><rect x="606" y="72" width="14" height="8" rx="2" fill="#fff"/><path d="M613 60V6" stroke="#E8EEF6" stroke-width="3"/><path d="M613 30h-3M613 22h3" stroke="#E8EEF6" stroke-width="2"/></g>`;
        const far = `<g fill="#fff" opacity=".26">${Array.from({ length: 12 }, (_, i) => `<rect x="${380 + i * 44}" y="${84 + rnd(i + 950) * 36}" width="${30 + rnd(i + 960) * 16}" height="160" rx="2"/>`).join('')}</g>`;
        // Beş katlı pagoda
        let pagoda = `<rect x="826" y="${BASE - 6}" width="64" height="60" fill="#8E3A2E"/>`;
        for (let k = 0; k < 5; k++) {
            const yb = BASE - 6 - k * 25, w = 84 - k * 8, cx = 858;
            pagoda += `<rect x="${cx - (w - 28) / 2}" y="${yb - 15}" width="${w - 28}" height="15" fill="#E8503A"/><path d="M${cx - (w - 28) / 2} ${yb - 8}h${w - 28}" stroke="#fff" stroke-width="1.2" opacity=".7"/>`
                + `<path d="M${cx - w / 2 - 8} ${yb - 12}Q${cx - w / 2} ${yb - 15} ${cx - w / 2 + 6} ${yb - 21}H${cx + w / 2 - 6}Q${cx + w / 2} ${yb - 15} ${cx + w / 2 + 8} ${yb - 12}Q${cx} ${yb - 17} ${cx - w / 2 - 8} ${yb - 12}Z" fill="${TILE}"/>`;
        }
        pagoda += `<path d="M858 ${BASE - 128}V${BASE - 166}" stroke="#C9A15A" stroke-width="3"/>${[0, 1, 2, 3].map(k => `<ellipse cx="858" cy="${BASE - 134 - k * 7}" rx="${5 - k * .7}" ry="1.8" fill="#C9A15A"/>`).join('')}<circle cx="858" cy="${BASE - 168}" r="3" fill="#E2B04A"/>`;
        // Nakamise: kiremit çatılı iki katlı geleneksel dükkânlar
        const signs = ['人形焼', '雷おこし', '和菓子', '扇子', '煎餅', '土産', '団子'];
        let shops = '';
        for (let i = 0, x = 372; x < 800; i++, x += 62) {
            const nr = ['#22264B', '#E8503A', '#3E8E6E', '#3558D6'][i % 4];
            shops += `<rect x="${x}" y="${BASE - 74}" width="58" height="140" fill="#F3EADB"/>`
                + `<rect x="${x + 5}" y="${BASE - 66}" width="48" height="20" fill="#B98B5E"/>`
                + Array.from({ length: 8 }, (_, k) => `<path d="M${x + 8 + k * 6} ${BASE - 66}V${BASE - 46}" stroke="#8A5C3A" stroke-width="1.6"/>`).join('')
                + `<path d="M${x - 5} ${BASE - 40}L${x + 3} ${BASE - 51}H${x + 55}L${x + 63} ${BASE - 40}Z" fill="${TILE}"/>`
                + Array.from({ length: 7 }, (_, k) => `<path d="M${x + 4 + k * 8.4} ${BASE - 50}L${x + k * 8.4} ${BASE - 41}" stroke="#7E8A92" stroke-width="1.1"/>`).join('')
                + `<path d="M${x - 4} ${BASE - 78}L${x + 5} ${BASE - 88}H${x + 53}L${x + 62} ${BASE - 78}Z" fill="${TILE}"/>`
                + `<rect x="${x + 4}" y="${BASE - 38}" width="50" height="38" fill="#FFE9C9"/>`
                + `<g class="sc-noren"><rect x="${x + 10}" y="${BASE - 38}" width="38" height="12" fill="${nr}"/><path d="M${x + 23} ${BASE - 35}V${BASE - 26}M${x + 35} ${BASE - 35}V${BASE - 26}" stroke="#FFE9C9" stroke-width="1.5"/></g>`
                + `<rect x="${x + 11}" y="${BASE - 22}" width="36" height="14" fill="#E7C79A"/>${[0, 1, 2].map(k => `<circle cx="${x + 18 + k * 11}" cy="${BASE - 15}" r="3.4" fill="${['#F58FAA', '#FFE9C9', '#8ED1B0'][k]}"/>`).join('')}`
                + `<rect x="${x + 6}" y="${BASE - 100}" width="46" height="12" rx="2" fill="#fff"/>${tx(x + 29, BASE - 91, signs[i % signs.length], 8.5, '#E8503A')}`
                + `<g class="sc-twink" style="--d:${(i * .5).toFixed(1)}s"><ellipse cx="${x + 57}" cy="${BASE - 30}" rx="4.2" ry="5.6" fill="#E8503A"/></g>`;
        }
        // Kaminarimon: dört direk, yan bölmelerde Fūjin & Raijin, kiremit çatı, dev kırmızı fener
        const statue = (x, c) => `<rect x="${x}" y="100" width="34" height="${H}" fill="#3A2A2A"/>
            <path d="M${x + 17} 112q-9 4 -7 16l-5 12h24l-5 -12q2 -12 -7 -16z" fill="${c}"/><circle cx="${x + 17}" cy="112" r="6" fill="${c}"/>
            <path d="M${x + 6} 118q11 -14 22 0" fill="none" stroke="#E9DCC4" stroke-width="2"/>
            ${[0, 1, 2, 3].map(k => `<path d="M${x + 5 + k * 8} 100v80" stroke="#E8503A" stroke-width="1.4" opacity=".8"/>`).join('')}`;
        const gate = `<g>
            ${statue(170, '#6FA58A')}${statue(298, '#C9705A')}
            ${[158, 204, 286, 332].map(x => `<rect x="${x}" y="84" width="12" height="${H}" fill="#E8503A"/><rect x="${x}" y="84" width="12" height="5" fill="#2A2438"/>`).join('')}
            <rect x="150" y="76" width="202" height="11" fill="#C9402E"/>
            <rect x="158" y="58" width="186" height="18" fill="#F3EADB"/>${Array.from({ length: 12 }, (_, k) => `<rect x="${162 + k * 16}" y="58" width="4" height="18" fill="#E8503A"/>`).join('')}
            <rect x="231" y="60" width="40" height="14" fill="#2A2438"/>${tx(251, 71, '金龍山', 8.5, '#E2B04A')}
            <path d="M126 64Q133 60 140 50H362Q369 60 376 64Q251 50 126 64Z" fill="${TILE}"/>
            ${Array.from({ length: 22 }, (_, k) => `<path d="M${146 + k * 10} 51l-3 9" stroke="#7E8A92" stroke-width="1"/>`).join('')}
            <path d="M140 50L172 22H330L362 50Z" fill="${TILE}"/>${Array.from({ length: 19 }, (_, k) => `<path d="M${178 + k * 8.2} 24L${150 + k * 11.2} 49" stroke="#7E8A92" stroke-width="1"/>`).join('')}
            <path d="M168 22H334" stroke="#3A3F6B" stroke-width="5"/><path d="M168 22l-7 -7M334 22l7 -7" stroke="#3A3F6B" stroke-width="4" stroke-linecap="round"/>
            <g transform="translate(251,88) scale(.7)"><g class="sc-lantern" style="--amp:1.6deg">
                <rect x="-24" y="0" width="48" height="8" rx="2" fill="#2A2438"/><rect x="-24" y="6" width="48" height="2" fill="#E2B04A"/>
                <path d="M-32 8C-38 32 -38 54 -32 76H32C38 54 38 32 32 8Z" fill="#E8503A" stroke="#2A2438" stroke-width="2.4"/>
                ${[-20, -10, 0, 10, 20].map(a => `<path d="M${a} 9Q${a * 1.16} 42 ${a} 75" fill="none" stroke="#C9402E" stroke-width="1"/>`).join('')}
                <path d="M-35 20H35M-36 64H36" stroke="#2A2438" stroke-width="3"/>
                ${tx(0, 50, '雷門', 21, '#2A2438')}
                <rect x="-24" y="76" width="48" height="8" rx="2" fill="#2A2438"/><rect x="-18" y="84" width="36" height="4" fill="#E2B04A"/>
            </g></g></g>`;
        // Senso-ji ana salonu (Hondō): dik kiremit çatı, kırmızı sütunlar
        const hondo = `<g>
            <rect x="908" y="96" width="300" height="${H}" fill="#F3EADB"/>
            ${[908, 962, 1016, 1070, 1124, 1178].map(x => `<rect x="${x}" y="96" width="12" height="${H}" fill="#E8503A"/>`).join('')}
            <rect x="900" y="92" width="316" height="10" fill="#C9402E"/>
            <path d="M868 96Q884 88 900 70L960 24H1160L1220 70V96Z" fill="${TILE}"/>
            ${Array.from({ length: 30 }, (_, k) => `<path d="M${892 + k * 11} ${92}L${916 + k * 9} 30" stroke="#7E8A92" stroke-width="1" opacity=".8"/>`).join('')}
            <path d="M954 24H1166" stroke="#3A3F6B" stroke-width="5"/><path d="M954 24l-8 -8M1166 24l8 -8" stroke="#E2B04A" stroke-width="3.4" stroke-linecap="round"/></g>`;
        // Sakura ağacı + yapraklar
        const tree = `<path d="M70 ${H}C72 160 66 130 58 108M66 140C80 126 96 120 108 112M64 150C50 138 38 134 26 130" fill="none" stroke="#7A4B3A" stroke-width="9" stroke-linecap="round"/>
            <g class="sc-sway"><g fill="#F9B8C8"><circle cx="26" cy="96" r="34"/><circle cx="72" cy="78" r="40"/><circle cx="110" cy="98" r="30"/></g>
            <g fill="#FFD4DE"><circle cx="48" cy="114" r="26"/><circle cx="92" cy="112" r="22"/><circle cx="66" cy="62" r="18"/></g>
            <g fill="#F58FAA" opacity=".8">${Array.from({ length: 16 }, (_, i) => `<circle cx="${20 + rnd(i + 70) * 100}" cy="${60 + rnd(i + 80) * 60}" r="2.4"/>`).join('')}</g></g>`;
        let petals = '';
        for (let i = 0; i < 12; i++) petals += `<ellipse class="sc-petal" style="--d:${(-rnd(i + 3) * 7).toFixed(2)}s;--x:${(120 + rnd(i + 11) * 520).toFixed(0)}px" cx="${20 + rnd(i + 7) * 100}" cy="${70 + rnd(i + 5) * 40}" rx="4" ry="2.6" fill="#F58FAA"/>`;
        // Jōkōro: çatılı bronz tütsü kazanı + kıvrılarak yükselen duman
        const jx = 1046;
        const jokoro = `<g>
            <path d="M${jx - 30} ${BASE + 2}L${jx - 24} ${BASE - 14}M${jx + 30} ${BASE + 2}L${jx + 24} ${BASE - 14}M${jx} ${BASE + 4}V${BASE - 12}" stroke="#5E4A32" stroke-width="5" stroke-linecap="round"/>
            <path d="M${jx - 36} ${BASE - 38}H${jx + 36}Q${jx + 32} ${BASE - 10} ${jx} ${BASE - 10}Q${jx - 32} ${BASE - 10} ${jx - 36} ${BASE - 38}Z" fill="#8B6B4A"/>
            <path d="M${jx - 24} ${BASE - 26}q24 10 48 0" fill="none" stroke="#6B5236" stroke-width="2"/>
            <path d="M${jx - 39} ${BASE - 38}H${jx + 39}" stroke="#6B5236" stroke-width="5" stroke-linecap="round"/>
            <path d="M${jx - 30} ${BASE - 40}V${BASE - 72}M${jx + 30} ${BASE - 40}V${BASE - 72}" stroke="#6B5236" stroke-width="4"/>
            <path d="M${jx - 46} ${BASE - 70}Q${jx} ${BASE - 96} ${jx + 46} ${BASE - 70}L${jx + 38} ${BASE - 76}Q${jx} ${BASE - 100} ${jx - 38} ${BASE - 76}Z" fill="#5E4A32"/>
            <circle cx="${jx}" cy="${BASE - 100}" r="4" fill="#C9A15A"/>
            ${[0, 1, 2, 3, 4, 5].map(i => `<path class="sc-smoke" style="--d:${(i * .75).toFixed(2)}s" d="M${jx - 18 + i * 7} ${BASE - 40}c-8 -9 8 -15 0 -24c-8 -9 8 -15 0 -24" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"/>`).join('')}</g>`;
        const pigeon = (x, d) => `<g class="sc-peck" style="--d:${d}s"><g transform="translate(${x},${G})"><ellipse cx="0" cy="-6" rx="7" ry="4.6" fill="#9AA0B2"/><circle cx="6" cy="-10" r="3.2" fill="#8087A0"/><path d="M9 -10l4 1l-4 1z" fill="#E2B04A"/><path d="M-7 -6l-5 -3v5z" fill="#8087A0"/><path d="M-1 -2v3M3 -2v3" stroke="#E8503A" stroke-width="1.2"/></g></g>`;
        const p = couple(false, { walk: false, yPose: 'fan', mPose: 'fan' });
        return sceneBox('scene-d2', `
            ${svgOpen(W, H)}
                <g class="sc-rise"><circle cx="720" cy="74" r="96" fill="#fff" opacity=".2"/><circle cx="720" cy="74" r="40" fill="#FFF4D6"/></g>
                ${cloud(420, 30, .9, .6)}${cloud(1000, 12, .7, .5)}${birds(26, 1.5)}
                ${far}${skytree}${pagoda}
                ${shops}${hondo}
                ${tree}${gate}
                ${sidewalk(W, '#E4DCCB')}
                ${pigeon(930, 0)}${pigeon(952, .7)}${pigeon(1160, 1.3)}
                ${jokoro}
                ${solo(p.yusuf, jx - 58, 0)}${solo(p.merve, jx + 58, 1)}
                <g transform="translate(${jx},${G}) scale(1.1)">${heart(0, -120, 2.8)}</g>
                ${petals}
            </svg>`, W, H, `580 0 640 ${H}`);
    }

    // ===== Gün 3 — Yağmurda Shibuya Scramble: Hachikō, QFRONT, 109; şemsiye altında yeşil ışıkta karşıya geçmek =====
    function sceneDay3() {
        const W = 1200, H = 220, G = 176;
        const far = `<g fill="#fff" opacity=".2">${Array.from({ length: 18 }, (_, i) => `<rect x="${i * 70 - 10}" y="${56 + rnd(i + 970) * 50}" width="${44 + rnd(i + 980) * 22}" height="180" rx="2"/>`).join('')}</g>
            <g opacity=".5"><path d="M1046 ${H}V8L1112 -6V${H}Z" fill="#C9D6EE"/>${Array.from({ length: 14 }, (_, k) => `<path d="M1046 ${20 + k * 14}L1112 ${8 + k * 14}" stroke="#fff" stroke-width="1"/>`).join('')}</g>`;
        // Shibuya 109: gümüş silindir kule
        const t109 = `<g><rect x="34" y="34" width="66" height="${H}" rx="33" fill="#E4E2EE"/><rect x="34" y="60" width="18" height="${H}" fill="#fff" opacity=".45"/><rect x="84" y="60" width="16" height="${H}" fill="#000" opacity=".08"/>
            ${[0, 1, 2, 3, 4, 5].map(r => `<path d="M36 ${96 + r * 14}H98" stroke="#BDBACE" stroke-width="1.6"/>`).join('')}
            <rect x="34" y="50" width="66" height="30" fill="#2B2F5E"/>${tx(67, 64, 'SHIBUYA', 6.5, '#fff', { f: LAT, w: 800, ls: 1 })}${tx(67, 77, '109', 14, '#fff', { f: LAT, w: 800 })}</g>`;
        // QFRONT: cam cephe + dev ekran
        const qfront = `<g><rect x="470" y="30" width="168" height="${H}" fill="#3F5C6E"/>
            ${Array.from({ length: 11 }, (_, k) => `<path d="M${470 + k * 16.8} 30V${H}" stroke="#5F8296" stroke-width="1"/>`).join('')}${Array.from({ length: 9 }, (_, k) => `<path d="M470 ${46 + k * 16}h168" stroke="#5F8296" stroke-width="1"/>`).join('')}
            <rect x="482" y="52" width="144" height="66" rx="3" fill="#161A3A"/><rect class="sc-screen" x="486" y="56" width="136" height="58" rx="2"/>
            <g class="sc-scrbar" fill="#fff" opacity=".85"><rect x="496" y="66" width="60" height="6" rx="3"/><rect x="496" y="78" width="96" height="6" rx="3"/><circle cx="600" cy="98" r="9"/></g>
            ${tx(554, 45, 'Q FRONT', 10, '#fff', { f: LAT, w: 800, ls: 2 })}
            <rect x="470" y="${BASE - 30}" width="168" height="30" fill="#CFE6F2"/><rect x="470" y="${BASE - 36}" width="168" height="7" fill="#3E8E6E"/>${tx(554, BASE - 30.5, 'CAFE', 5.5, '#fff', { f: LAT, w: 800, ls: 1.5 })}</g>`;
        const screens = `<rect x="880" y="44" width="118" height="${H}" fill="#2B2F5E"/><rect class="sc-screen s3" x="890" y="56" width="98" height="46" rx="3"/><rect class="sc-screen s2" x="890" y="108" width="46" height="24" rx="2"/><rect class="sc-screen" x="942" y="108" width="46" height="24" rx="2"/>`;
        const row = [
            [104, 62, 112, { c: FACADE[1], vs: 'カラオケ', vsBg: '#3558D6', hs: 'ショップ', lit: .3, roof: 'tank' }],
            [296, 64, 126, { c: FACADE[4], balcony: 1, vs: '渋谷', vsBg: '#FFC857', vsFg: '#E8503A', lit: .3, box: '本' }],
            [362, 56, 104, { c: FACADE[0], noren: '#3E8E6E', hs: 'ラーメン', steam: 1, lit: .3 }],
            [420, 50, 134, { c: FACADE[6], vs: 'ドラッグ', vsBg: '#FFC857', vsFg: '#22264B', lit: .3, roof: 'rail' }],
            [640, 70, 118, { c: FACADE[2], vs: 'ゲーム', vsBg: '#8E5BFF', lit: .3 }],
            [712, 60, 96, { c: FACADE[5], hs: '本屋', awning: '#E8503A', lit: .3 }],
            [774, 104, 138, { c: FACADE[1], balcony: 1, vs: '居酒屋', chochin: 1, shop: '#F6D9A8', lit: .3, roof: 'tank' }],
            [1000, 46, 120, { c: FACADE[4], vs: 'ホテル', vsBg: '#F58FAA', lit: .3 }],
            [1114, 60, 92, { c: FACADE[0], awning: '#E8503A', hs: 'ピザ', lit: .3 }],
            [1176, 70, 116, { c: FACADE[3], vs: '焼肉', lit: .3 }]
        ].map(([x, w, h, o]) => bld(x, w, h, o)).join('');
        // Hachikō: kaide üstünde oturan bronz köpek + arkasında ağaçlar
        const hachiko = `<g><circle cx="182" cy="${BASE - 50}" r="30" fill="#4FA77F"/><circle cx="222" cy="${BASE - 60}" r="34" fill="#3E8E6E"/><circle cx="262" cy="${BASE - 48}" r="28" fill="#4FA77F"/>
            <path d="M200 ${BASE}V${BASE - 40}M244 ${BASE}V${BASE - 44}" stroke="#6B4430" stroke-width="5"/>
            <rect x="196" y="${BASE - 30}" width="52" height="30" fill="#B8B1A2"/><rect x="192" y="${BASE - 34}" width="60" height="6" fill="#A39C8C"/>${tx(222, BASE - 12, 'ハチ公', 8.5, '#5E584C')}
            <g fill="#8B6B4A"><path d="M212 ${BASE - 34}q-2 -18 8 -26q10 -2 14 6l2 20z"/><circle cx="231" cy="${BASE - 66}" r="9"/><path d="M225 ${BASE - 72}l-2 -9 7 4zM236 ${BASE - 73}l4 -8 2 9z"/>
                <path d="M238 ${BASE - 64}h7q2 4 -2 5h-5z"/><path d="M212 ${BASE - 40}q-9 -2 -8 -10" fill="none" stroke="#8B6B4A" stroke-width="4" stroke-linecap="round"/></g>
            <circle cx="234" cy="${BASE - 67}" r="1.3" fill="#22264B"/></g>`;
        // asfalt + scramble yaya geçidi
        const road = `<rect x="-20" y="${BASE}" width="${W + 40}" height="60" fill="#5A5D78"/>`
            + Array.from({ length: 40 }, (_, i) => `<rect x="${i * 32 - 8}" y="${BASE + 3}" width="18" height="11" fill="#fff" opacity=".88"/>`).join('')
            + `<rect x="-20" y="${BASE}" width="${W + 40}" height="60" fill="#8FA8FF" opacity=".12"/>`;
        // trafik ışıkları: araçlar için yatay (kırmızı), yayalar için kırmızı -> yeşil
        const signal = `<path d="M330 ${H}V70H392" fill="none" stroke="#8E8A9C" stroke-width="4"/>
            <rect x="366" y="62" width="40" height="15" rx="7" fill="#2A2438"/><circle cx="374" cy="69.5" r="4" fill="#3F6B5A"/><circle cx="386" cy="69.5" r="4" fill="#6B5A2E"/><circle cx="398" cy="69.5" r="4.4" fill="#E8503A"/>
            <rect x="318" y="96" width="22" height="36" rx="3" fill="#2A2438"/>
            <g class="sc-red"><rect x="321" y="99" width="16" height="14" rx="2" fill="#E8503A"/><path d="M329 101v6M326 103h6M327 110l2 -3l2 3" stroke="#fff" stroke-width="1.4" fill="none"/></g>
            <g class="sc-green"><rect x="321" y="115" width="16" height="14" rx="2" fill="#5CE18A"/><path d="M329 117v5M326 119l3 1l3 -2M327 127l2 -5l3 5" stroke="#fff" stroke-width="1.4" fill="none"/></g>`;
        // şemsiyeli yayalar (adım atarak yürürler)
        const peds = [[440, 1], [520, -1], [600, 1], [680, -1], [760, 1], [850, -1], [960, 1], [1060, -1], [1140, -1]].map(([x, dir], i) => {
            const uc = ['#3558D6', '#F58FAA', '#FFC857', '#3E8E6E', '#E8503A', '#8E5BFF', '#5CE1E6', '#FF7A59', '#fff'][i];
            const bc = ['#22264B', '#4A4E6A', '#6B4430', '#2B3150'][i % 4];
            const d = (1.7 + rnd(i + 990) * .6).toFixed(2);
            return `<g class="sc-ped" style="--dx:${dir * 160}px;--d:${d}s;--wdl:${d}s;--steps:9"><g transform="translate(${x},${G}) scale(${dir * .78},.78)"><g class="sc-person">
                <g class="sc-leg la"><rect x="-6" y="-22" width="5" height="22" rx="2.5" fill="${bc}"/></g><g class="sc-leg lb"><rect x="1" y="-22" width="5" height="22" rx="2.5" fill="${bc}"/></g>
                <rect x="-10" y="-44" width="20" height="26" rx="8" fill="${bc}"/><circle cx="0" cy="-53" r="9" fill="#F3D2B8"/><circle cx="4" cy="-53" r="1.2" fill="#22264B"/>
                <path d="M0 -44V-72" stroke="#4A4E6A" stroke-width="1.6"/><path d="M-27 -68Q0 -100 27 -68Q13 -73 0 -68Q-13 -73 -27 -68Z" fill="${uc}" stroke="#22264B" stroke-opacity=".25" stroke-width="1"/></g></g></g>`;
        }).join('');
        let rain = '';
        for (let i = 0; i < 54; i++) {
            const x = Math.round(rnd(i + 200) * 1260 - 20), d = (-rnd(i + 300) * 1.2).toFixed(2), l = 10 + Math.round(rnd(i + 400) * 8);
            rain += `<path class="sc-drop" style="--d:${d}s" d="M${x} -20l-4 ${l}"/>`;
        }
        let ripples = '';
        [[60, 0], [250, .6], [430, 1.1], [560, .2], [700, .3], [840, .8], [980, .9], [1120, .4]].forEach(([x, d]) => ripples += `<ellipse class="sc-ripple" style="--d:${d}s" cx="${x}" cy="${G + 16}" rx="10" ry="3" fill="none" stroke="#fff" stroke-width="1.6"/>`);
        const gap = 66, ux = gap / 2;
        const umbrella = `<g class="sc-umbbob"><path d="M27 -51L${ux} -98" stroke="#fff" stroke-width="2.6"/>
            <path d="M${ux - 60} -96Q${ux} -156 ${ux + 60} -96Q${ux + 45} -102 ${ux + 30} -96Q${ux + 15} -102 ${ux} -96Q${ux - 15} -102 ${ux - 30} -96Q${ux - 45} -102 ${ux - 60} -96Z" fill="rgba(255,255,255,.36)" stroke="#fff" stroke-width="2.4"/>
            <path d="M${ux} -126V-96M${ux - 31} -119L${ux - 30} -96M${ux + 31} -119L${ux + 30} -96" stroke="#fff" stroke-width="1.6" opacity=".9"/><circle cx="${ux}" cy="-128" r="2.5" fill="#fff"/>
            <path d="M${ux - 44} -104q4 -6 10 -9M${ux + 20} -118q6 2 10 6" stroke="#fff" stroke-width="2" opacity=".7" fill="none"/></g>`;
        const p = couple(false, { yPose: 'grab' });
        return sceneBox('scene-d3', `
            ${svgOpen(W, H)}
                ${cloud(60, 34, 1.3, .5)}${cloud(520, 20, 1.5, .5)}${cloud(980, 40, 1.2, .5)}
                ${far}${t109}${row}${qfront}${screens}${hachiko}
                ${road}${signal}${peds}${ripples}
                <g transform="translate(256,${G}) scale(1.1)">${pair(p, gap, { extra: umbrella, style: '--wfrom:0px;--wto:170px;--wd:3.6s;--wdl:1.9s;--steps:8' })}${heart(ux + 170, -146, 5.8)}</g>
                <g class="sc-rain" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".75">${rain}</g>
            </svg>`, W, H, `150 0 640 ${H}`);
    }

    // ===== Gün 4 — Saray (Nijūbashi), Ginza (Wako saat kulesi) ve teamLab: lamba ormanında ışığa dokunmak =====
    function sceneDay4() {
        const W = 1200, H = 220, G = 176;
        const far = `<g fill="#fff" opacity=".2">${Array.from({ length: 9 }, (_, i) => `<rect x="${370 + i * 56}" y="${60 + rnd(i + 500) * 40}" width="${40 + rnd(i + 520) * 14}" height="180" rx="2"/>`).join('')}</g>`;
        // İmparatorluk Sarayı: hendek, taş sur, Fushimi-yagura, çift kemerli Nijūbashi (lambalı), kuğu, kara çamlar
        let stones = '';
        for (let r = 0; r < 5; r++) for (let x = 168 + (r % 2) * 12 - r * 3; x < 352; x += 24) stones += `<rect x="${x}" y="${92 + r * 11}" width="22" height="10" rx="4" fill="${['#C9C3D9', '#B8B1CC', '#D6D0E3'][(r + x) % 3]}"/>`;
        const pine = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M0 0C-2 -22 6 -40 -4 -58" fill="none" stroke="#6B4430" stroke-width="6" stroke-linecap="round"/>
            <g fill="#3E8E6E"><ellipse cx="-18" cy="-56" rx="24" ry="9"/><ellipse cx="12" cy="-70" rx="22" ry="8"/><ellipse cx="-8" cy="-82" rx="16" ry="7"/></g><g fill="#4FA77F"><ellipse cx="-20" cy="-59" rx="15" ry="4"/><ellipse cx="12" cy="-73" rx="14" ry="3.6"/></g></g>`;
        const lamp = (x) => `<path d="M${x} 126V108" stroke="#5E7A6A" stroke-width="2.4"/><path d="M${x - 7} 110h14" stroke="#5E7A6A" stroke-width="2"/><circle class="sc-twink" cx="${x - 7}" cy="106" r="3.2" fill="#FFF4D6"/><circle class="sc-twink" cx="${x + 7}" cy="106" r="3.2" fill="#FFF4D6"/><circle cx="${x}" cy="103" r="3.6" fill="#FFF4D6"/>`;
        const palace = `<g>
            <rect x="-10" y="140" width="380" height="40" fill="#7FB8E8"/>
            <path d="M150 146L172 88H352V146Z" fill="#A8A1BF"/>${stones}
            <rect x="214" y="62" width="96" height="26" fill="#fff"/><path d="M198 66L222 48H302L326 66Z" fill="#5E6A72"/><path d="M198 66h128" stroke="#3A3F6B" stroke-width="2"/>
            <rect x="234" y="34" width="56" height="16" fill="#fff"/><path d="M220 38Q230 34 240 24H284Q294 34 304 38Z" fill="#5E6A72"/>
            ${[224, 250, 276, 296].map(x => `<rect x="${x}" y="70" width="9" height="12" fill="#3A3F6B"/>`).join('')}<rect x="246" y="38" width="8" height="9" fill="#3A3F6B"/><rect x="270" y="38" width="8" height="9" fill="#3A3F6B"/>
            <g opacity=".35" transform="translate(0,292) scale(1,-1)"><rect x="214" y="62" width="96" height="26" fill="#fff"/><path d="M150 146L172 88H352V146Z" fill="#A8A1BF"/></g>
            <path d="M-10 126H158V140Q139 140 126 162Q113 140 94 140Q75 140 62 162Q49 140 30 140Q11 140 -2 162L-10 162Z" fill="#D6D0E3"/>
            <path d="M-10 126H158" stroke="#B8B1CC" stroke-width="4"/>${[8, 32, 56, 80, 104, 128, 152].map(x => `<rect x="${x}" y="116" width="3.4" height="11" fill="#B8B1CC"/>`).join('')}<path d="M-10 117H158" stroke="#B8B1CC" stroke-width="2"/>
            ${lamp(44)}${lamp(112)}
            <path d="M0 156q14 -5 28 0t28 0M180 166q14 -5 28 0t28 0M268 154q14 -5 28 0t28 0" fill="none" stroke="#fff" stroke-width="2" opacity=".7"/>
            <g class="sc-swan"><g transform="translate(0,156)"><path d="M-22 2q10 -3 20 0" fill="none" stroke="#fff" stroke-width="1.4" opacity=".8"/>
                <path d="M-14 0Q-12 -10 4 -8Q12 -7 14 0Z" fill="#fff"/><path d="M-10 -5q6 -5 12 -1" fill="none" stroke="#DDE3EC" stroke-width="1.4"/>
                <path d="M8 -6Q12 -22 4 -22Q0 -22 2 -18" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><path d="M2 -21L-3 -19" stroke="#FF7A59" stroke-width="2.5" stroke-linecap="round"/><circle cx="3.6" cy="-21.6" r=".8" fill="#22264B"/></g></g>
            ${pine(362, BASE, 1)}${pine(138, 130, .6)}</g>`;
        // Ginza: Wako (kavisli cephe + saat kulesi), kemerli mağazalar, Ginza Place kafesi, sokak lambaları
        const face = (x, w, h, c, sign) => `<rect x="${x}" y="${BASE - h}" width="${w}" height="${h + 60}" fill="${c}"/><rect x="${x}" y="${BASE - h}" width="${w}" height="5" fill="#000" opacity=".1"/>`
            + Array.from({ length: Math.floor((h - 38) / 20) }, (_, r) => Array.from({ length: Math.floor((w - 8) / 16) }, (_, k) =>
                `<path d="M${x + 8 + k * 16} ${BASE - h + 28 + r * 20}v-7a5 5 0 0 1 10 0v7z" fill="#9FB0CC"/>`).join('')).join('')
            + `<rect x="${x + 4}" y="${BASE - 26}" width="${w - 8}" height="26" fill="#E9F1F8"/><rect x="${x + 4}" y="${BASE - 30}" width="${w - 8}" height="4" fill="#C9A15A"/>`
            + tx(x + w / 2, BASE - 34, sign, 8, '#6B6F8C', { f: LAT, w: 800, ls: 2 });
        const wako = `<g><path d="M528 ${H}V104Q528 88 544 88H676Q692 88 692 104V${H}Z" fill="#EFE9DC"/>
            <path d="M528 104Q528 88 544 88H676Q692 88 692 104" fill="none" stroke="#C9BFA8" stroke-width="3"/>
            ${[0, 1].map(r => Array.from({ length: 8 }, (_, k) => `<path d="M${540 + k * 19} ${124 + r * 24}v-10a5.5 5.5 0 0 1 11 0v10z" fill="#8C9BB8"/>`).join('')).join('')}
            <path d="M528 142h164" stroke="#C9BFA8" stroke-width="2"/><rect x="536" y="${BASE - 22}" width="148" height="22" fill="#FFF4D6"/>${Array.from({ length: 5 }, (_, k) => `<rect x="${564 + k * 30}" y="${BASE - 22}" width="3" height="22" fill="#EFE9DC"/>`).join('')}
            ${tx(610, 103, 'WAKO', 8, '#8A7F68', { f: LAT, w: 800, ls: 3 })}
            <rect x="586" y="46" width="48" height="44" fill="#EFE9DC"/><rect x="582" y="42" width="56" height="6" fill="#C9BFA8"/><path d="M590 90V48M630 90V48" stroke="#C9BFA8" stroke-width="2.5"/>
            <path d="M592 42Q610 26 628 42Z" fill="#7E8758"/><path d="M610 30V12" stroke="#8A7F68" stroke-width="2"/><path class="sc-flag" d="M610 12h12l-3 4 3 4h-12z" fill="#E8503A"/>
            <circle cx="610" cy="68" r="14" fill="#fff" stroke="#3A3F6B" stroke-width="2.4"/>${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(k => `<path d="M610 56v${k % 3 ? 1.6 : 3}" stroke="#3A3F6B" stroke-width="${k % 3 ? .8 : 1.4}" transform="rotate(${k * 30} 610 68)"/>`).join('')}
            <g class="sc-hand-h"><path d="M610 68V60" stroke="#22264B" stroke-width="2.6" stroke-linecap="round"/></g><g class="sc-hand-m"><path d="M610 68V57" stroke="#22264B" stroke-width="1.8" stroke-linecap="round"/></g><circle cx="610" cy="68" r="1.8" fill="#22264B"/></g>`;
        const place = `<g><rect x="700" y="${BASE - 118}" width="84" height="${H}" fill="#FAFAF7"/>
            ${Array.from({ length: 9 }, (_, r) => Array.from({ length: 6 }, (_, k) => `<path d="M${707 + k * 14 + (r % 2) * 7} ${BASE - 112 + r * 12}l6 6l-6 6l-6 -6z" fill="none" stroke="#C9CED6" stroke-width="1.2"/>`).join('')).join('')}
            <rect x="704" y="${BASE - 24}" width="76" height="24" fill="#E9F1F8"/></g>`;
        const ginza = face(396, 62, 104, '#E8E2D6', 'GINZA') + face(460, 64, 122, '#DDD6C8', 'MODE') + wako + place + face(788, 72, 98, '#F1ECE3', 'CAFE')
            + [388, 524, 698, 866].map(x => `<path d="M${x} ${BASE}V${BASE - 62}" stroke="#3A3F6B" stroke-width="3"/><path d="M${x - 9} ${BASE - 62}h18" stroke="#3A3F6B" stroke-width="2.5"/>
                <circle class="sc-twink" cx="${x - 9}" cy="${BASE - 56}" r="5" fill="#FFF4D6" stroke="#3A3F6B" stroke-width="1.5"/><circle class="sc-twink" cx="${x + 9}" cy="${BASE - 56}" r="5" fill="#FFF4D6" stroke="#3A3F6B" stroke-width="1.5"/>`).join('');
        // teamLab "Rezonans Lambaları Ormanı": karanlık aynalı oda + asılı Murano lambaları; dokununca renk dalgası yayılır
        const touchX = 1066, touchY = 78;
        let lamps = '', refl = '';
        const L = [[904, 50], [932, 96], [962, 36], [992, 122], [1022, 60], [1066, 78], [1096, 32], [1124, 104], [1152, 54], [1180, 90], [1204, 42], [918, 138], [1100, 140], [1170, 140], [1040, 22], [946, 70]];
        L.forEach(([x, y]) => {
            const d = (2.1 + Math.hypot(x - touchX, y - touchY) * .0065).toFixed(2);
            lamps += `<path d="M${x} 14V${y - 12}" stroke="#fff" stroke-width=".8" opacity=".3"/>
                <g class="sc-lamp" style="--d:${d}s"><ellipse cx="${x}" cy="${y + 2}" rx="18" ry="21" opacity=".2"/><path d="M${x - 4} ${y - 12}h8l5 6q5 12 -9 19q-14 -7 -9 -19z"/><path d="M${x - 3} ${y - 6}q-2 8 2 13" fill="none" stroke="#fff" stroke-width="1.4" opacity=".7"/></g>`;
            refl += `<ellipse class="sc-lamp" style="--d:${d}s" cx="${x}" cy="${BASE + 10 + (y % 9)}" rx="12" ry="2.6" opacity=".35"/>`;
        });
        const room = `<g><rect x="872" y="8" width="360" height="${H}" rx="22" fill="#15183A"/>
            <rect x="872" y="${BASE}" width="360" height="60" fill="#1F2350"/>${refl}
            <rect x="872" y="8" width="360" height="${H}" rx="22" fill="none" stroke="#fff" stroke-width="2.5" opacity=".7"/>${lamps}
            <g class="sc-touch"><circle cx="${touchX}" cy="${touchY}" r="16" fill="none" stroke="#fff" stroke-width="2"/></g></g>`;
        const p = couple(false, { walk: false, yPose: 'photo', mPose: 'reach' });
        return sceneBox('scene-d4', `
            ${svgOpen(W, H)}
                ${cloud(120, 30, .9, .55)}${cloud(700, 16, .8, .45)}${birds(40, 2.5)}
                ${far}${palace}${ginza}
                ${sidewalk(W, '#E4DFEA')}
                ${room}
                ${solo(p.yusuf, 968, 0, G, 1.1, '--pose:1.2s;--flash:2.6s')}${solo(p.merve, 1050, 0, G, 1.1, '--pose:1.4s')}
                <g transform="translate(1010,${G}) scale(1.1)">${heart(0, -106, 3.8)}</g>
            </svg>`, W, H, `580 0 640 ${H}`);
    }

    // ===== Gün 5 — Shinkansen ile Kyoto; akşam Yasaka Tapınağı: fener sahnesi, çan ve dua =====
    function sceneDay5() {
        const W = 1200, H = 220, G = 176;
        const BARK = '#6B4A3A';
        const hills = `<path d="M-20 120Q120 60 260 104T560 92T860 70T1220 96V230H-20Z" fill="#7FBF9A" opacity=".55"/>
            <path d="M-20 136Q180 92 380 126T780 110T1220 124V230H-20Z" fill="#5FA882" opacity=".6"/>`;
        // Yükseltilmiş Shinkansen hattı (katener direkli) + N700 (uzun burun, mavi çift şerit)
        const viaduct = `<rect x="-20" y="96" width="${W + 40}" height="7" fill="#B8B1CC"/><rect x="-20" y="92" width="${W + 40}" height="4" fill="#D6D0E3"/>`
            + Array.from({ length: 13 }, (_, i) => `<rect x="${i * 100 + 20}" y="103" width="10" height="80" fill="#C9C3D9"/>`).join('')
            + Array.from({ length: 9 }, (_, i) => `<path d="M${i * 150 + 60} 92V58h16" fill="none" stroke="#8E8A9C" stroke-width="2"/>`).join('') + `<path d="M-20 60H${W + 20}" stroke="#8E8A9C" stroke-width="1" opacity=".7"/>`;
        let train = `<path d="M0 92Q4 86 26 80Q52 73 80 72H98V92Z" fill="#fff"/><path d="M34 79Q46 75 62 74.5V80Z" fill="#22264B"/><path d="M6 89h92" stroke="#3558D6" stroke-width="2.2"/><path d="M14 85.6h84" stroke="#3558D6" stroke-width="1"/><circle cx="12" cy="88" r="1.4" fill="#FFE07A"/>`;
        for (let k = 1; k < 6; k++) {
            const x = k * 100;
            train += `<rect x="${x - 1}" y="72" width="99" height="20" rx="2" fill="#fff"/><path d="M${x - 1} 89h99" stroke="#3558D6" stroke-width="2.2"/><path d="M${x - 1} 85.6h99" stroke="#3558D6" stroke-width="1"/>`
                + Array.from({ length: 7 }, (_, j) => `<rect x="${x + 6 + j * 13}" y="76" width="8" height="5.4" rx="1.2" fill="#22264B" opacity=".85"/>`).join('') + `<rect x="${x + 96}" y="72" width="2" height="20" fill="#C9C3D9"/>`;
        }
        train = `<g class="sc-train"><g transform="translate(1260,0)">${train}<path d="M610 76h46M604 84h70M614 90h36" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/></g></g>`;
        // Yasaka pagodası (Hōkan-ji): koyu ahşap, beş kat
        let pagoda = '';
        for (let k = 0; k < 5; k++) {
            const yb = 152 - k * 23, w = 72 - k * 7, cx = 318;
            pagoda += `<rect x="${cx - (w - 24) / 2}" y="${yb - 13}" width="${w - 24}" height="13" fill="#7A5236"/>`
                + `<path d="M${cx - w / 2 - 8} ${yb - 10}Q${cx - w / 2} ${yb - 13} ${cx - w / 2 + 6} ${yb - 19}H${cx + w / 2 - 6}Q${cx + w / 2} ${yb - 13} ${cx + w / 2 + 8} ${yb - 10}Q${cx} ${yb - 15} ${cx - w / 2 - 8} ${yb - 10}Z" fill="#3A3F6B"/>`;
        }
        pagoda += `<path d="M318 37V8" stroke="#C9A15A" stroke-width="3"/>${[0, 1, 2].map(k => `<ellipse cx="318" cy="${32 - k * 7}" rx="${4.6 - k * .8}" ry="1.6" fill="#C9A15A"/>`).join('')}<rect x="300" y="152" width="36" height="40" fill="#7A5236"/>`;
        const gion = machiyaK(-4, 84, 74, '#22264B', 1.6) + machiyaK(84, 78, 70, '#E8503A', 2.2) + machiyaK(166, 90, 78, '#3E8E6E', 2.8) + pagoda + machiyaK(350, 70, 66, '#22264B', 3.2);
        // Yasaka'nın batı kapısı (Nishi-rōmon): taş basamaklar üstünde iki katlı kırmızı kapı, koma-inu ve taş fenerler
        const romon = `<g>
            <path d="M462 ${BASE}L486 148H642L666 ${BASE}Z" fill="#C9C3B4"/>${[154, 160, 166].map(y => `<path d="M${486 - (y - 148)} ${y}H${642 + (y - 148)}" stroke="#A39C8C" stroke-width="1.2"/>`).join('')}
            <rect x="500" y="98" width="128" height="52" fill="#E8503A"/><rect x="508" y="104" width="30" height="46" fill="#F7F1E6"/><rect x="590" y="104" width="30" height="46" fill="#F7F1E6"/>
            ${[512, 520, 528, 594, 602, 610].map(x => `<path d="M${x} 110v34" stroke="#3E8E6E" stroke-width="2.4"/>`).join('')}<rect x="546" y="106" width="36" height="44" fill="#3A2438"/>
            <path d="M474 100Q482 96 490 84H638Q646 96 654 100Q564 88 474 100Z" fill="#3A3F6B"/>
            <rect x="512" y="60" width="104" height="26" fill="#E8503A"/><rect x="522" y="64" width="84" height="16" fill="#F7F1E6"/>${[532, 548, 564, 580, 596].map(x => `<path d="M${x} 64v16" stroke="#E8503A" stroke-width="2"/>`).join('')}
            <path d="M488 62Q496 58 504 44H624Q632 58 640 62Q564 50 488 62Z" fill="#3A3F6B"/><path d="M536 44L564 30L592 44Z" fill="#3A3F6B"/><path d="M564 30l-4 -6h8z" fill="#E2B04A"/>
            ${toro(478, 150)}${toro(650, 150)}
            ${[[496, 0], [632, 1]].map(([x, f]) => `<g transform="translate(${x},148) scale(${f ? -1 : 1},1)" fill="#B8B1A2"><rect x="-7" y="-8" width="14" height="8"/><path d="M-6 -8q-2 -12 6 -14q6 0 6 6l-3 8z"/><circle cx="4" cy="-22" r="4.4"/></g>`).join('')}</g>`;
        // Maidono: üç sıra beyaz fenerli dans sahnesi (fenerler dalga dalga yanar)
        let lan = '';
        for (let r = 0; r < 3; r++) for (let k = 0; k < 11; k++) {
            const lx = 762 + k * 18, ly = 96 + r * 16;
            lan += `<g class="sc-glow" style="--d:${(1.6 + k * .12 + r * .3).toFixed(2)}s"><rect x="${lx - 6}" y="${ly - 6}" width="12" height="13" rx="4" fill="#FFF4D6"/><path d="M${lx - 4} ${ly - 6}h8M${lx - 4} ${ly + 7}h8" stroke="#2A2438" stroke-width="1.2"/><path d="M${lx} ${ly - 3}v7" stroke="#E8503A" stroke-width="1.6"/></g>`;
        }
        const maidono = `<g><rect x="744" y="${BASE - 20}" width="216" height="20" fill="#8A5C3A"/><path d="M744 ${BASE - 20}h216" stroke="#5A3826" stroke-width="3"/>
            ${[750, 820, 884, 948].map(x => `<rect x="${x}" y="84" width="7" height="${BASE - 104}" fill="#7A5236"/>`).join('')}
            <rect x="744" y="80" width="216" height="8" fill="#7A5236"/>${lan}
            <path d="M716 84Q730 78 742 60L770 36H934L962 60Q974 78 988 84Q852 70 716 84Z" fill="${BARK}"/><path d="M770 36H934" stroke="#3A2A20" stroke-width="5"/><path d="M768 36l-6 -8M936 36l6 -8" stroke="#E2B04A" stroke-width="3" stroke-linecap="round"/></g>`;
        // Honden (ana tapınak): servi kabuğu çatı, kırmızı sütunlar, çan + örgü ip, bağış kutusu
        const yx = 1058, rx = yx + 25.5 * 1.188;
        const honden = `<g><rect x="1002" y="72" width="220" height="${H}" fill="#F3EADB"/>
            ${[1002, 1066, 1130, 1194].map(x => `<rect x="${x}" y="76" width="11" height="${H}" fill="#E8503A"/>`).join('')}<rect x="996" y="70" width="230" height="9" fill="#E8503A"/>
            <path d="M972 74Q988 66 1000 46L1024 22H1210L1232 46V74Z" fill="${BARK}"/><path d="M1024 22H1212" stroke="#3A2A20" stroke-width="5"/>
            <path d="M1084 46L1116 24L1148 46Z" fill="#F3EADB" stroke="${BARK}" stroke-width="4"/><circle cx="1116" cy="38" r="4" fill="#E2B04A"/>
            <path d="M1002 82q110 16 220 0" fill="none" stroke="#F7F1E6" stroke-width="5"/><path d="M1002 82q110 16 220 0" fill="none" stroke="#E8503A" stroke-width="5" stroke-dasharray="10 10"/>
            <rect x="1094" y="${BASE - 26}" width="84" height="26" fill="#8A5C3A"/><path d="M1094 ${BASE - 26}h84" stroke="#5A3826" stroke-width="3"/>
            ${Array.from({ length: 8 }, (_, k) => `<path d="M${1100 + k * 10.4} ${BASE - 23}V${BASE - 14}" stroke="#5A3826" stroke-width="2"/>`).join('')}${tx(1136, BASE - 4, '奉納', 9, '#FFE9C9')}</g>`;
        const bell = `<g class="sc-bell"><path d="M${rx} 86V158" stroke="#E8503A" stroke-width="6" stroke-linecap="round"/><path d="M${rx} 86V158" stroke="#fff" stroke-width="6" stroke-dasharray="4 6"/>
            <path d="M${rx - 4} 158l-3 10M${rx} 158v12M${rx + 4} 158l3 10" stroke="#E8503A" stroke-width="2.4" stroke-linecap="round"/>
            <path d="M${rx} 76V80" stroke="#5A3826" stroke-width="2"/><circle cx="${rx}" cy="86" r="9" fill="#E2B04A" stroke="#8A5C3A" stroke-width="2"/><path d="M${rx - 6} 89h12" stroke="#8A5C3A" stroke-width="2"/></g>
            <g class="sc-ring"><path d="M${rx - 18} 80q-5 6 0 12M${rx + 18} 80q5 6 0 12M${rx - 26} 76q-8 10 0 20M${rx + 26} 76q8 10 0 20" fill="none" stroke="#FFE07A" stroke-width="2" stroke-linecap="round"/></g>`;
        const ishidatami = `<rect x="-20" y="${BASE}" width="${W + 40}" height="60" fill="#D8CFC0"/><path d="M-20 ${BASE}H${W + 20}" stroke="#B7AA94" stroke-width="2"/>`
            + Array.from({ length: 30 }, (_, i) => `<path d="M${i * 44 + (i % 2) * 10} ${BASE + 2}v14M${i * 44 + 22} ${BASE + 16}v30" stroke="#C2B6A1" stroke-width="1.2"/>`).join('')
            + `<path d="M-20 ${BASE + 16}H${W + 20}" stroke="#C2B6A1" stroke-width="1.2"/>`;
        const p = couple(false, { walk: false, yPose: 'grab', mPose: 'clap' });
        return sceneBox('scene-d5', `
            ${svgOpen(W, H)}
                <g class="sc-moon"><circle cx="690" cy="30" r="15" fill="#FFF4D6"/><circle cx="697" cy="26" r="13" fill="#FFA9A0"/></g>
                ${cloud(100, 26, .8, .5)}${cloud(860, 10, .7, .4)}
                ${hills}${viaduct}${train}
                ${gion}${romon}${maidono}${honden}
                ${ishidatami}
                ${solo(p.yusuf, yx, 0, G, 1.1, '--pose:.8s')}
                ${bell}
                ${solo(p.merve, 1176, 1)}
                <g transform="translate(1120,${G}) scale(1.1)">${heart(0, -72, 4.8)}</g>
            </svg>`, W, H, `580 0 640 ${H}`);
    }

    // ===== Gün 6 — Arashiyama: Randen durur, beyaz eldivenli kondüktör eğilir, biz de eğiliriz; Kinkaku-ji =====
    function sceneDay6() {
        const W = 1200, H = 220, G = 176;
        const hills = `<path d="M-20 110Q100 40 230 90T470 70T760 96T1000 60T1220 90V230H-20Z" fill="#5FA882" opacity=".7"/>
            <path d="M-20 132Q160 92 340 122T720 112T1220 122V230H-20Z" fill="#4E9A73" opacity=".75"/>`;
        // Bambu ormanı (solda) + çalı çit
        let bamboo = '';
        for (let i = 0; i < 18; i++) {
            const x = -8 + i * 20.5 + rnd(i + 1300) * 8, w = 7 + rnd(i + 1310) * 4, c = ['#7BCB8A', '#5DB972', '#8ED1B0'][i % 3];
            bamboo += `<g class="sc-sway" style="--d:${(-rnd(i + 5) * 4).toFixed(1)}s"><rect x="${x}" y="-30" width="${w}" height="${H + 60}" rx="3" fill="${c}"/><rect x="${x}" y="-30" width="${w * .3}" height="${H + 60}" fill="#fff" opacity=".18"/>`
                + Array.from({ length: 8 }, (_, k) => `<path d="M${x} ${4 + k * 26 + (i % 3) * 7}h${w}" stroke="#3E8E6E" stroke-width="1.6"/>`).join('') + `</g>`;
        }
        bamboo += `<g fill="#6FBF86">${Array.from({ length: 24 }, (_, i) => { const cx = rnd(i + 1400) * 370, cy = rnd(i + 1410) * 52 - 6; return `<ellipse cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" rx="14" ry="4" transform="rotate(${(rnd(i + 1420) * 60 - 30).toFixed(0)} ${cx.toFixed(0)} ${cy.toFixed(0)})"/>`; }).join('')}</g>`
            + `<g class="sc-rays" fill="#fff"><path d="M40 -30H90L20 230H-20Z"/><path d="M150 -30H185L120 230H90Z"/><path d="M250 -30H280L230 230H200Z"/></g>`
            + Array.from({ length: 5 }, (_, i) => `<ellipse class="sc-petal" style="--d:${(-i * 1.4).toFixed(1)}s;--x:${40 + i * 14}px" cx="${60 + i * 62}" cy="${10 + i * 8}" rx="7" ry="2" fill="#6FBF86"/>`).join('');
        const fence = `<g>${Array.from({ length: 40 }, (_, i) => `<path d="M${-6 + i * 9.6} ${BASE}v-${12 + (i % 3) * 2}" stroke="#A8824E" stroke-width="3" stroke-linecap="round"/>`).join('')}<path d="M-10 ${BASE - 7}H372" stroke="#7A5A30" stroke-width="2"/></g>`;
        // Kinkaku-ji: 1. kat ahşap/beyaz, üst iki kat altın varak, sedir çatılar, tepede anka; gölet + yansıma
        const kin = `<rect x="566" y="126" width="118" height="24" fill="#F3EADB"/>${[566, 590, 614, 638, 662, 680].map(x => `<rect x="${x}" y="126" width="4" height="24" fill="#7A5236"/>`).join('')}<path d="M562 140h126" stroke="#7A5236" stroke-width="2"/>
            <path d="M546 128Q556 124 564 114H686Q694 124 704 128Q625 118 546 128Z" fill="#4A4038"/>
            <rect x="574" y="94" width="102" height="22" fill="#EDBE3C"/>${[582, 600, 618, 636, 654, 668].map(x => `<rect x="${x}" y="97" width="2" height="19" fill="#B88A1E"/>`).join('')}<path d="M570 110h110" stroke="#B88A1E" stroke-width="2"/>
            <path d="M554 96Q564 92 572 82H678Q686 92 696 96Q625 86 554 96Z" fill="#4A4038"/>
            <rect x="596" y="64" width="58" height="20" fill="#F2C94C"/><path d="M606 84v-9a5 5 0 0 1 10 0v9M634 84v-9a5 5 0 0 1 10 0v9" fill="#B88A1E"/>
            <path d="M578 68Q590 62 606 46H644Q660 62 672 68Q625 58 578 68Z" fill="#4A4038"/>
            <path d="M625 46v-6M625 40q-7 -3 -9 -11q5 2 7 6q1 -6 6 -8q0 6 -2 9q5 -1 8 2q-5 3 -10 2z" fill="#F2C94C" stroke="#B88A1E" stroke-width=".8"/>`;
        const kinkaku = `<g><ellipse cx="625" cy="${BASE - 4}" rx="190" ry="24" fill="#7FB8E8"/>
            <g opacity=".42" transform="translate(0,300) scale(1,-1)">${kin}</g>
            <path d="M460 ${BASE - 6}q20 -6 40 0t40 0M700 ${BASE - 2}q20 -6 40 0t40 0M560 ${BASE + 2}q20 -5 40 0t40 0" fill="none" stroke="#fff" stroke-width="1.6" opacity=".6"/>
            ${kin}
            <path d="M452 150q20 -12 46 -4q18 -10 34 4z" fill="#8A7F68"/><g fill="#3E8E6E"><ellipse cx="478" cy="136" rx="24" ry="9"/><ellipse cx="496" cy="124" rx="16" ry="7"/></g><path d="M486 150V128" stroke="#6B4430" stroke-width="4"/>
            <path d="M716 150q22 -10 44 -2q14 -6 26 2z" fill="#8A7F68"/><g fill="#3E8E6E"><ellipse cx="748" cy="134" rx="26" ry="9"/><ellipse cx="760" cy="122" rx="15" ry="6"/></g><path d="M752 150V126" stroke="#6B4430" stroke-width="4"/></g>`;
        // Sazdan çatılı matcha kafesi (sağda) + kırmızı şemsiye + kırmızı keçeli bank
        const cafe = `<g>
            <rect x="926" y="104" width="214" height="${H}" fill="#EFE3CB"/>${[932, 990, 1048, 1106].map(x => `<rect x="${x}" y="104" width="6" height="${H}" fill="#6B4430"/>`).join('')}
            <rect x="944" y="118" width="40" height="34" fill="#F8F2E6"/><rect x="1060" y="118" width="40" height="34" fill="#F8F2E6"/>
            ${[952, 960, 968, 976, 1068, 1076, 1084, 1092].map(x => `<path d="M${x} 118v34" stroke="#C9B48E" stroke-width="1"/>`).join('')}<path d="M944 135h40M1060 135h40" stroke="#C9B48E" stroke-width="1"/>
            <g class="sc-noren"><rect x="1000" y="124" width="42" height="14" fill="#3E8E6E"/><path d="M1014 126v12M1028 126v12" stroke="#EFE3CB" stroke-width="1.4"/></g>
            <path d="M892 114Q1033 16 1174 114Z" fill="#B88A4A"/><path d="M936 100Q1033 44 1130 100" fill="none" stroke="#9C7038" stroke-width="5" opacity=".5"/>
            ${Array.from({ length: 14 }, (_, k) => `<path d="M${906 + k * 19.6} 112Q${990 + k * 6.6} ${66 + Math.abs(6.5 - k) * 5} 1033 34" fill="none" stroke="#9C7038" stroke-width="1.1" opacity=".6"/>`).join('')}
            <path d="M892 114H1174" stroke="#8A5C3A" stroke-width="5"/><path d="M1020 30h26l-4 -8h-18z" fill="#7A5A30"/>
            <rect x="1004" y="88" width="34" height="14" rx="2" fill="#fff"/>${tx(1021, 99, '抹茶', 10, '#3E8E6E')}
            <path d="M1170 ${BASE}V96" stroke="#6B4430" stroke-width="3"/><path d="M1124 106Q1170 62 1216 106Q1193 100 1170 106Q1147 100 1124 106Z" fill="#E8503A"/>
            <rect x="1128" y="${BASE - 22}" width="70" height="7" fill="#E8503A"/><path d="M1134 ${BASE - 15}V${BASE}M1192 ${BASE - 15}V${BASE}" stroke="#6B4430" stroke-width="3"/>
            <path d="M1146 ${BASE - 27}h10l-1 5h-8z" fill="#8ED1B0" stroke="#fff" stroke-width="1"/><path d="M1168 ${BASE - 27}h10l-1 5h-8z" fill="#8ED1B0" stroke="#fff" stroke-width="1"/>
            <path class="sc-smoke" style="--d:0s" d="M1151 ${BASE - 30}c-3 -4 3 -6 0 -10" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path class="sc-smoke" style="--d:1.6s" d="M1173 ${BASE - 30}c-3 -4 3 -6 0 -10" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></g>`;
        const rails = `<rect x="-20" y="${BASE - 4}" width="${W + 40}" height="4" fill="#8E8A9C"/>` + Array.from({ length: 50 }, (_, i) => `<rect x="${i * 26 - 10}" y="${BASE - 2}" width="12" height="3" fill="#6B6F8C"/>`).join('');
        // Randen (Keifuku) tramvayı: Kyoto moru tek vagon, önü sağda; ön camda beyaz eldivenli kondüktör
        const tram = `<g class="sc-tram"><g transform="translate(156,0)"><g class="sc-tramrock">
            <path d="M50 110L62 98L74 110M56 104h12M62 98v-3" fill="none" stroke="#3A3F6B" stroke-width="2"/>
            <path d="M146 ${BASE - 8}V126Q146 110 130 110H4Q0 110 0 114V${BASE - 8}Z" fill="#5B2A6E" stroke="#fff" stroke-width="2"/>
            <rect x="0" y="142" width="146" height="5" fill="#E2B04A"/>
            ${[8, 32, 56, 80].map(x => `<rect x="${x}" y="118" width="20" height="17" rx="2" fill="#CFE6F2"/><path d="M${x + 10} 118v17" stroke="#5B2A6E" stroke-width="1.4"/>`).join('')}
            <rect x="104" y="116" width="8" height="${BASE - 126}" rx="1.5" fill="#6E3A82" stroke="#E2B04A" stroke-width="1"/>
            <path d="M116 117h18q8 0 8 9v10h-26z" fill="#CFE6F2"/>
            <g class="sc-cond"><circle cx="126" cy="129" r="5.6" fill="#FFDFC4"/><path d="M119.6 126.6q6.4 -8 12.8 0z" fill="#22264B"/><rect x="118.6" y="125.6" width="15" height="2.2" rx="1" fill="#22264B"/><circle cx="128.4" cy="129.4" r=".9" fill="#22264B"/><path d="M127 132q1.6 1 3 0" stroke="#8A4A3A" stroke-width=".8" fill="none"/></g>
            <circle class="sc-glove" cx="137" cy="130" r="3.4" fill="#fff" stroke="#22264B" stroke-width=".8"/>
            <rect x="92" y="112" width="26" height="6" rx="1.5" fill="#22264B"/>${tx(105, 117, '嵐山', 5, '#FFE07A')}
            <circle cx="140" cy="${BASE - 22}" r="3" fill="#FFF4D6" stroke="#E2B04A" stroke-width="1"/>${tx(52, 158, '嵐電', 8, '#E2B04A')}
            <rect x="10" y="${BASE - 10}" width="38" height="6" rx="3" fill="#2A2438"/><rect x="98" y="${BASE - 10}" width="38" height="6" rx="3" fill="#2A2438"/>
            ${[20, 38, 108, 126].map(x => `<circle cx="${x}" cy="${BASE - 6}" r="4" fill="#4E4A63"/>`).join('')}
        </g></g></g>`;
        // origami turna
        const crane = `<g class="sc-crane"><g transform="translate(206,116)"><g class="sc-crane-flap">
            <path d="M0 2L-16 -10L-2 -3L4 -18L8 -3L22 -8L8 4L20 10L4 7L-4 14Z" fill="#F9B8C8" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/><path d="M-2 -3L8 4M8 -3L4 7" stroke="#E58AA2" stroke-width="1" fill="none"/></g></g></g>`;
        const y = couple(false, { walk: false, yAct: 'sc-bowing' }), m = couple(false, { walk: false, mAct: 'sc-bowing' });
        return sceneBox('scene-d6', `
            ${svgOpen(W, H)}
                ${cloud(520, 24, .9, .55)}${cloud(980, 14, .7, .45)}${birds(30, 3)}
                ${hills}${kinkaku}${cafe}
                ${bamboo}${fence}${rails}${tram}
                ${sidewalk(W, '#DCD3BF')}
                ${solo(y.yusuf, 100, 0, G, 1.1, '--bow:4.6s')}${solo(m.merve, 172, 0, G, 1.1, '--bow:4.8s')}
                <g transform="translate(138,${G}) scale(1.1)">${heart(0, -106, 5.8)}</g>
                ${crane}
            </svg>`, W, H, `0 0 640 ${H}`);
    }

    // Beş katlı ahşap pagoda (cx,yb = taban ortası)
    const pagoda5 = (cx, yb, s = 1, wood = '#7A5236', roof = '#3A3F6B') => {
        let g = `<rect x="-18" y="-2" width="36" height="46" fill="${wood}"/>`;
        for (let k = 0; k < 5; k++) {
            const y = -k * 23, w = 72 - k * 7;
            g += `<rect x="${-(w - 24) / 2}" y="${y - 13}" width="${w - 24}" height="13" fill="${wood}"/><path d="M${-(w - 24) / 2} ${y - 6}h${w - 24}" stroke="#F3EADB" stroke-width="1" opacity=".45"/>`
               + `<path d="M${-w / 2 - 8} ${y - 10}Q${-w / 2} ${y - 13} ${-w / 2 + 6} ${y - 19}H${w / 2 - 6}Q${w / 2} ${y - 13} ${w / 2 + 8} ${y - 10}Q0 ${y - 15} ${-w / 2 - 8} ${y - 10}Z" fill="${roof}"/>`;
        }
        g += `<path d="M0 -111V-142" stroke="#C9A15A" stroke-width="3"/>${[0, 1, 2, 3].map(k => `<ellipse cx="0" cy="${-117 - k * 6}" rx="${4.8 - k * .8}" ry="1.6" fill="#C9A15A"/>`).join('')}`;
        return `<g transform="translate(${cx},${yb}) scale(${s})">${g}</g>`;
    };

    // ===== Gün 7 — Fushimi Inari sabahı: senbon torii, Rōmon kapısı, tilkiler; kanalda zıplayan kohaku koiler =====
    function sceneDay7() {
        const W = 1200, H = 220, G = 150;
        const sunrise = `<g class="sc-rise"><circle cx="560" cy="56" r="96" fill="#fff" opacity=".18"/><circle cx="560" cy="56" r="36" fill="#FFF4D6"/></g>`;
        // Inari dağı: orman + yamaca tırmanan minik torii dizisi
        const mount = `<path d="M-20 126Q200 6 430 66T830 52T1220 84V230H-20Z" fill="#4E9A73" opacity=".85"/>
            <g fill="#3E8E6E" opacity=".55">${Array.from({ length: 28 }, (_, i) => `<circle cx="${rnd(i + 1500) * 860 + 20}" cy="${96 + rnd(i + 1510) * 40}" r="${12 + rnd(i + 1520) * 12}"/>`).join('')}</g>
            ${Array.from({ length: 24 }, (_, i) => { const x = 236 + i * 13, y = 92 - Math.sin(i / 3.6) * 26 - i * .5; return `<path d="M${x} ${y}v-6h5v6M${x - 1.5} ${y - 6}h8" fill="none" stroke="#E8503A" stroke-width="1.5" opacity=".9"/>`; }).join('')}`;
        // Senbon torii: uzaktan yakına büyüyen kapı sırası (perspektif) + taş patika + süzülen ışık
        let tunnel = `<path d="M40 153L140 153L222 139L192 139Z" fill="#C9C3B4"/>`;
        for (let k = 0; k <= 9; k++) tunnel += toriiK(206 - k * 13.4, 139 + k * 1.4, .6 + k * .1, k % 2 ? '#E8503A' : '#F0623E');
        tunnel += `<g class="sc-rays" fill="#FFF4D6"><path d="M250 -10H300L186 ${G}H150Z"/><path d="M330 -10H356L226 ${G}H208Z"/></g>`;
        // Kitsune heykeli: kaide üstünde oturan tilki, kırmızı önlük, ağzında anahtar
        const fox = (x, flip) => `<g transform="translate(${x},${G}) scale(${flip ? -1 : 1},1)">
            <rect x="-14" y="-10" width="28" height="10" fill="#A39C8C"/><rect x="-11" y="-26" width="22" height="16" fill="#C9C3B4"/><path d="M-11 -20h22" stroke="#A39C8C" stroke-width="1"/>
            <path d="M-7 -30Q-18 -34 -15 -50Q-13 -58 -8 -61" fill="none" stroke="#E9E4D8" stroke-width="5.5" stroke-linecap="round"/>
            <path d="M-7 -26Q-9 -42 -1 -49L6 -45Q9 -36 8 -26Z" fill="#E9E4D8"/><path d="M4 -26V-41" stroke="#DAD3C4" stroke-width="3.6" stroke-linecap="round"/>
            <path d="M-4 -51Q-2 -61 6 -59L16 -53L7 -48Q0 -46 -4 -51Z" fill="#E9E4D8"/><path d="M-2 -58l-1 -9l6 5zM4 -60l3 -8l3 8z" fill="#E9E4D8"/>
            <path d="M5.5 -55.5l4 1.2" stroke="#22264B" stroke-width="1.3" stroke-linecap="round"/><circle cx="15.4" cy="-53" r="1.1" fill="#22264B"/>
            <path d="M-5 -47h11l-2 10h-8z" fill="#E8503A"/><path d="M13 -51v7h3M13 -47h2.4" fill="none" stroke="#E2B04A" stroke-width="1.5"/></g>`;
        // Rōmon: iki katlı kırmızı-beyaz ana kapı, servi kabuğu çatı; önünde büyük torii ve taş fenerler
        const romon = `<g>
            <path d="M632 ${G}L646 142H754L768 ${G}Z" fill="#C9C3B4"/>
            <rect x="628" y="98" width="144" height="52" fill="#F7F1E6"/>
            <rect x="668" y="104" width="64" height="46" fill="#3A2438"/><path d="M680 ${G}L690 122H710L720 ${G}Z" fill="#C9C3B4" opacity=".55"/><path d="M690 122h20v-12h-20z" fill="#E8503A" opacity=".55"/>
            ${[636, 644, 652, 748, 756, 764].map(x => `<path d="M${x} 108v34" stroke="#3E8E6E" stroke-width="2.4"/>`).join('')}
            ${[624, 660, 732, 768].map(x => `<rect x="${x}" y="98" width="8" height="52" fill="#E8503A"/>`).join('')}
            <path d="M604 101Q614 97 622 85H778Q786 97 796 101Q700 89 604 101Z" fill="#6B4A3A"/>
            <rect x="640" y="62" width="120" height="24" fill="#E8503A"/><rect x="648" y="65" width="104" height="14" fill="#F7F1E6"/>
            ${[660, 676, 692, 708, 724, 740].map(x => `<path d="M${x} 65v14" stroke="#E8503A" stroke-width="2"/>`).join('')}<path d="M634 84h132" stroke="#C9402E" stroke-width="3"/>
            <path d="M596 66Q610 60 622 42L648 25H752L778 42Q790 60 804 66Q700 52 596 66Z" fill="#6B4A3A"/><path d="M648 25H752" stroke="#3A2A20" stroke-width="5"/>
            <path d="M646 25l-7 -8M754 25l7 -8" stroke="#E2B04A" stroke-width="3" stroke-linecap="round"/>
            <rect x="686" y="88" width="28" height="11" fill="#2A2438"/>${tx(700, 97, '稲荷', 8, '#E2B04A')}</g>`;
        // Sannenzaka (sağda): machiya sırası ve çatıların üstünde yükselen Yasaka pagodası
        const right = pagoda5(1046, G, .92) + machiyaK(868, 80, 92, '#3558D6', 1.2) + machiyaK(952, 78, 84, '#E8503A', 1.6) + machiyaK(1090, 80, 94, '#3E8E6E', 2)
            + `<rect x="1172" y="${G - 62}" width="60" height="120" fill="#F3EADB"/><path d="M1166 ${G - 62}L1174 ${G - 71}H1232V${G - 62}Z" fill="#3A3F6B"/>
               <rect x="1178" y="${G - 52}" width="40" height="12" rx="2" fill="#fff"/>${tx(1198, G - 43, '抹茶', 8.5, '#3E8E6E')}`;
        // Taş kenarlı kanal, nilüferler ve koiler
        const canal = `<rect x="-20" y="${G}" width="${W + 40}" height="8" fill="#B8B1A2"/>${Array.from({ length: 31 }, (_, i) => `<path d="M${i * 40 + 6} ${G}v8" stroke="#A39C8C" stroke-width="1"/>`).join('')}
            <rect x="-20" y="${G + 8}" width="${W + 40}" height="70" fill="#5FA8D6"/><rect x="-20" y="${G + 8}" width="${W + 40}" height="6" fill="#3F86B8" opacity=".6"/>
            <g class="sc-waterline" fill="none" stroke="#fff" stroke-width="1.6" opacity=".5">${[0, 1, 2].map(r => `<path d="M${-40 + r * 60} ${G + 24 + r * 14}${'q20 -5 40 0t40 0'.repeat(16)}" stroke-dasharray="${60 + r * 20} ${90 - r * 10}"/>`).join('')}</g>
            ${[[140, 0], [640, 6], [960, 2]].map(([x, d]) => `<ellipse cx="${x}" cy="${G + 20 + d}" rx="10" ry="3.4" fill="#6FBF86"/><ellipse cx="${x + 14}" cy="${G + 24 + d}" rx="7" ry="2.6" fill="#8ED1B0"/><circle cx="${x + 3}" cy="${G + 18 + d}" r="2.2" fill="#F9B8C8"/>`).join('')}`;
        const koi = (x, y, c, c2, dur, d, jump) => `<g class="${jump ? 'sc-koijump' : 'sc-koi'}" style="--dur:${dur}s;--d:${d}s"><g transform="translate(${x},${y})">
            <g class="sc-koitail"><path d="M-11 0l-9 -6q2.4 6 0 12z" fill="${c}"/></g>
            <path d="M-13 0Q-2 -8 13 0Q-2 8 -13 0Z" fill="${c}"/><path d="M-6 -4q4 -3 8 0q-1 5 -6 4z" fill="${c2}"/><path d="M4 1.6q3 -1.4 5 .6q-3 2 -5 -.6z" fill="${c2}"/>
            <path d="M-2 -5l3 -4l2 4z" fill="${c}" opacity=".85"/><circle cx="9.4" cy="-1" r="1" fill="#22264B"/></g></g>`;
        const fish = koi(60, G + 32, '#fff', '#E8503A', 8, 0) + koi(300, G + 44, '#FF7A59', '#fff', 10, -3) + koi(520, G + 36, '#FFC857', '#fff', 9, -5) + koi(800, G + 46, '#fff', '#22264B', 11, -2)
            + koi(424, G + 26, '#fff', '#E8503A', 4, 2.6, 1) + koi(500, G + 28, '#FFC857', '#E8503A', 4, 4.8, 1);
        const splash = [[452, 2.6], [528, 4.8]].map(([x, d]) => `<g class="sc-splash" style="--d:${d}s"><path d="M${x - 8} ${G + 12}l-6 -9M${x} ${G + 9}v-10M${x + 8} ${G + 12}l6 -9" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
            <ellipse cx="${x}" cy="${G + 16}" rx="14" ry="3.4" fill="none" stroke="#fff" stroke-width="1.6"/><ellipse cx="${x}" cy="${G + 16}" rx="22" ry="5.4" fill="none" stroke="#fff" stroke-width="1" opacity=".7"/></g>`).join('');
        const p = couple(false, { walk: false, yPose: 'photo', mPose: 'pointDown', mMouth: 'grin' });
        return sceneBox('scene-d7', `
            ${svgOpen(W, H)}
                ${sunrise}${cloud(760, 22, .8, .5)}${birds(34, 2)}
                ${mount}${right}
                ${romon}${toro(596, G)}${toro(804, G)}${fox(616, 0)}${fox(784, 1)}
                ${toriiK(524, G, 1.3)}
                ${tunnel}${fox(258, 1)}${toro(24, G)}
                ${canal}${fish}${splash}
                ${solo(p.yusuf, 334, 0, G, 1.1, '--pose:1s;--flash:3.1s')}${solo(p.merve, 408, 0, G, 1.1, '--pose:1.4s')}
                <g transform="translate(372,${G}) scale(1.1)">${heart(0, -106, 5)}</g>
            </svg>`, W, H, `100 0 640 ${H}`);
    }

    // ===== Gün 8 — Nara: bisküvi için eğilen geyik, arkadan dürten boynuzlu "bisküvi canavarı" ve Tōdai-ji =====
    function sceneDay8() {
        const W = 1200, H = 220, G = 176;
        const TILE = '#4A4E6A';
        const hills = `<path d="M-20 116Q160 46 360 96T760 82T1220 100V230H-20Z" fill="#7FBF9A" opacity=".75"/>
            <g fill="#5FA882" opacity=".7">${Array.from({ length: 14 }, (_, i) => `<circle cx="${rnd(i + 1550) * 1200}" cy="${112 + rnd(i + 1560) * 26}" r="${16 + rnd(i + 1570) * 12}"/>`).join('')}</g>`;
        // Tōdai-ji Daibutsuden: çift saçaklı dev ahşap salon, ortada kavisli karahafu alınlık, mahyada altın shibi
        const todaiji = `<g>
            <rect x="430" y="${BASE - 18}" width="380" height="40" fill="#C9C3B4"/><path d="M590 ${BASE}L600 ${BASE - 18}H640L650 ${BASE}Z" fill="#B8B1A2"/>
            <rect x="448" y="106" width="344" height="${BASE - 124}" fill="#F3EADB"/>
            ${Array.from({ length: 13 }, (_, i) => `<rect x="${448 + i * 28.2}" y="106" width="6" height="${BASE - 124}" fill="#8A5C3A"/>`).join('')}
            <path d="M448 128h344" stroke="#8A5C3A" stroke-width="3"/>
            <rect x="598" y="112" width="44" height="${BASE - 130}" fill="#3A2438"/><path d="M620 112v${BASE - 130}" stroke="#8A5C3A" stroke-width="2"/>
            <path d="M408 112Q428 104 444 86H796Q812 104 832 112Q620 96 408 112Z" fill="${TILE}"/>
            ${Array.from({ length: 34 }, (_, k) => `<path d="M${452 + k * 10.2} 88L${436 + k * 11.2} 106" stroke="#666B8C" stroke-width="1"/>`).join('')}
            <path d="M566 100Q592 66 620 66Q648 66 674 100Q648 86 620 86Q592 86 566 100Z" fill="${TILE}" stroke="#E2B04A" stroke-width="1.6"/>
            <rect x="476" y="62" width="288" height="26" fill="#F3EADB"/>${Array.from({ length: 11 }, (_, i) => `<rect x="${476 + i * 28.2}" y="62" width="6" height="26" fill="#8A5C3A"/>`).join('')}
            <rect x="606" y="64" width="28" height="15" fill="#3A2438"/><circle class="sc-twink" cx="620" cy="72" r="4.6" fill="#E2B04A"/>
            <path d="M424 68Q448 58 466 36L498 13H742L774 36Q792 58 816 68Q620 50 424 68Z" fill="${TILE}"/>
            ${Array.from({ length: 30 }, (_, k) => `<path d="M${504 + k * 8} 15L${456 + k * 11.4} 62" stroke="#666B8C" stroke-width="1"/>`).join('')}
            <path d="M498 13H742" stroke="#33364F" stroke-width="5"/>
            <path d="M500 13q-9 -4 -7 -17q9 4 13 15zM740 13q9 -4 7 -17q-9 4 -13 15z" fill="#E2B04A"/></g>`;
        // Sekizgen bronz fener (salonun önünde)
        const octo = `<g transform="translate(620,${BASE})" fill="#6E7F6A"><rect x="-12" y="-6" width="24" height="6"/><rect x="-4" y="-22" width="8" height="16"/><path d="M-12 -24h24l-3 -4h-18z"/>
            <path d="M-10 -44h20l3 16h-26z" fill="#7F927A"/><path d="M-4 -44v16M4 -44v16" stroke="#566653" stroke-width="1.2"/><rect class="sc-twink" x="-2.6" y="-40" width="5.2" height="9" fill="#FFF4D6"/>
            <path d="M-17 -44Q0 -62 17 -44Z"/><circle cx="0" cy="-58" r="3" fill="#E2B04A"/></g>`;
        const tree = (x, s, c1, c2) => `<g transform="translate(${x},${BASE}) scale(${s})"><path d="M0 0V-34" stroke="#6B4430" stroke-width="7" stroke-linecap="round"/><g class="sc-sway" style="--d:${(-rnd(x) * 4).toFixed(1)}s"><circle cx="-16" cy="-44" r="22" fill="${c1}"/><circle cx="14" cy="-50" r="26" fill="${c1}"/><circle cx="0" cy="-66" r="20" fill="${c2}"/></g></g>`;
        const trees = tree(372, 1, '#4FA77F', '#6FBF86') + tree(404, .7, '#F9B8C8', '#FFD4DE') + tree(868, 1.05, '#4FA77F', '#6FBF86') + tree(18, .9, '#F9B8C8', '#FFD4DE');
        const lanterns = [300, 340, 900, 950].map(x => toro(x)).join('');
        // Geyik bisküvisi tezgâhı (sağda)
        const stand = `<g><rect x="1040" y="${BASE - 44}" width="110" height="44" fill="#8A5C3A"/><rect x="1036" y="${BASE - 52}" width="118" height="10" fill="#E8503A"/>
            <path d="M1044 ${BASE - 52}V${BASE - 96}M1146 ${BASE - 52}V${BASE - 96}" stroke="#6B4430" stroke-width="3"/><path d="M1030 ${BASE - 92}L1040 ${BASE - 104}H1150L1160 ${BASE - 92}Z" fill="#E8503A"/>
            ${Array.from({ length: 6 }, (_, k) => `<path d="M${1050 + k * 20} ${BASE - 104}l-4 12" stroke="#fff" stroke-width="5" opacity=".7"/>`).join('')}
            <rect x="1056" y="${BASE - 86}" width="78" height="20" rx="3" fill="#fff"/>${tx(1095, BASE - 71, '鹿せんべい', 11.5, '#6B4430')}
            ${[0, 1, 2].map(r => [0, 1, 2, 3, 4].map(k => `<circle cx="${1056 + k * 20}" cy="${BASE - 32 + r * 9}" r="7" fill="#E7C27A" stroke="#C9A15A" stroke-width="1"/>`).join('')).join('')}
            ${tx(1095, BASE - 4, '¥200', 9, '#FFE9C9', { f: LAT, w: 800 })}</g>`;
        const farDeer = `${deer(760, BASE, 0, 'sc-graze', '')}<g transform="translate(832,${BASE}) scale(.62)">${deer(0, 0, 1, 'sc-graze', '')}</g>${deer(1180, BASE, 1, 'sc-graze', '', true)}`;
        // Merve'nin elindeki geyik bisküvisi (kapılınca kaybolur)
        const senbei = `<circle class="sc-senbei" cx="31" cy="-41" r="6.5" fill="#E7C27A" stroke="#fff" stroke-width="1.4"/>`;
        const y = couple(false, { walk: false, yPose: 'surprise', late: true });
        const m = couple(false, { walk: false, mPose: 'offer', mItem: senbei, mMouth: 'grin' });
        const ex = `<g class="sc-say" style="--say:5.2s;--sdur:1.8s">${tx(262, 76, '!', 24, '#fff', { f: LAT, w: 800, x: ' stroke="#E8503A" stroke-width="1.2"' })}</g>`;
        return sceneBox('scene-d8', `
            ${svgOpen(W, H)}
                ${cloud(120, 30, .8, .6)}${cloud(900, 18, .9, .5)}${birds(36, 1)}
                ${hills}${todaiji}${trees}
                ${sidewalk(W, '#DDD3B6')}
                <g fill="#B9D48E" opacity=".8"><ellipse cx="80" cy="${BASE + 2}" rx="90" ry="5"/><ellipse cx="820" cy="${BASE + 2}" rx="110" ry="5"/><ellipse cx="1180" cy="${BASE + 2}" rx="60" ry="4"/></g>
                ${octo}${lanterns}${stand}${farDeer}
                ${deer(98, G, 0, 'sc-bowhead', 'sc-lunge')}
                ${solo(m.merve, 168, 1, G, 1.1, '--pose:.5s')}
                <g class="sc-bump">${solo(y.yusuf, 262, 1, G, 1.1, '--raise:5.5s')}</g>
                ${deer(318, G, 1, 'sc-nudgehead', 'sc-nudge', true)}
                ${ex}
                <g transform="translate(214,${G}) scale(1.1)">${heart(0, -108, 6.6)}</g>
            </svg>`, W, H, `0 0 640 ${H}`);
    }

    // ===== Gün 9 — "Köri Ateşi": Osaka sokaklarında acı köri, alev alev ağız, Merve'den su; uzakta Osaka Kalesi =====
    function sceneDay9() {
        const W = 1200, H = 220, G = 176;
        const ROOF = '#5FA88A';
        const far = `<g fill="#fff" opacity=".22">${Array.from({ length: 16 }, (_, i) => `<rect x="${i * 76 - 10}" y="${70 + rnd(i + 1600) * 40}" width="${46 + rnd(i + 1610) * 20}" height="160" rx="2"/>`).join('')}</g>
            <g opacity=".7"><path d="M282 ${H}L296 76H316L330 ${H}Z" fill="#C9C3D9"/>${Array.from({ length: 6 }, (_, k) => `<path d="M${294 - k * 2} ${92 + k * 16}L${318 + k * 2} ${108 + k * 16}M${318 + k * 2} ${92 + k * 16}L${294 - k * 2} ${108 + k * 16}" stroke="#fff" stroke-width="1" opacity=".7"/>`).join('')}
                <path d="M288 60h36l-3 16h-30z" fill="#D6D0E3"/><rect x="298" y="46" width="16" height="14" fill="#C9C3D9"/><path d="M306 46V26" stroke="#C9C3D9" stroke-width="2.5"/><circle class="sc-twink" cx="306" cy="26" r="2.4" fill="#E8503A"/></g>`;
        // Osaka Kalesi: eğimli taş kaide, beş kat beyaz duvar + yeşil bakır çatılar, üçgen alınlıklar, siyah-altın tepe katı, altın shachi
        let keep = `<rect x="850" y="${BASE - 10}" width="370" height="40" fill="#7FB8E8"/><path d="M876 ${H}Q890 150 904 120H1146Q1160 150 1174 ${H}Z" fill="#B8B1CC"/>`;
        for (let r = 0; r < 5; r++) for (let x = 898 + (r % 2) * 12 - r * 3; x < 1150 + r * 3; x += 24) keep += `<rect x="${x}" y="${123 + r * 11}" width="22" height="10" rx="3.5" fill="${['#C9C3D9', '#D6D0E3', '#B8B1CC'][(r + x) % 3]}"/>`;
        const tier = (x, y, w, h, gable) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#F7F4EC"/>`
            + Array.from({ length: Math.floor((w - 8) / 16) }, (_, k) => `<rect x="${x + 7 + k * 16}" y="${y + 7}" width="5" height="${h - 13}" fill="#4A5F7A"/>`).join('')
            + `<path d="M${x - 16} ${y + 3}Q${x - 7} ${y - 1} ${x + 3} ${y - 10}H${x + w - 3}Q${x + w + 7} ${y - 1} ${x + w + 16} ${y + 3}Q${x + w / 2} ${y - 4} ${x - 16} ${y + 3}Z" fill="${ROOF}"/>`
            + `<path d="M${x - 16} ${y + 3}Q${x + w / 2} ${y - 4} ${x + w + 16} ${y + 3}" fill="none" stroke="#E2B04A" stroke-width="1.6"/>`
            + (gable ? `<path d="M${x + w / 2 - gable} ${y - 3}L${x + w / 2} ${y - 3 - gable * .8}L${x + w / 2 + gable} ${y - 3}Z" fill="#F7F4EC" stroke="${ROOF}" stroke-width="3.4" stroke-linejoin="round"/><circle cx="${x + w / 2}" cy="${y - 3 - gable * .34}" r="2.2" fill="#E2B04A"/>` : '');
        keep += tier(918, 98, 214, 24, 22) + tier(942, 72, 166, 22, 0) + `<path d="M964 71L984 56L1004 71ZM1046 71L1066 56L1086 71Z" fill="#F7F4EC" stroke="${ROOF}" stroke-width="3" stroke-linejoin="round"/>`
            + tier(964, 50, 122, 19, 16)
            + `<rect x="984" y="29" width="82" height="19" fill="#2A2438"/>${[994, 1012, 1030, 1048].map(x => `<rect x="${x}" y="33" width="9" height="9" fill="#E2B04A"/>`).join('')}<path d="M980 46h90" stroke="#E2B04A" stroke-width="2"/>`
            + `<path d="M966 31Q978 27 988 16H1062Q1072 27 1084 31Q1025 23 966 31Z" fill="${ROOF}"/><path d="M1003 17L1025 3L1047 17Z" fill="${ROOF}" stroke="#E2B04A" stroke-width="1.4" stroke-linejoin="round"/>`
            + `<path d="M1006 9q-6 -6 -1 -13q2 6 6 9zM1044 9q6 -6 1 -13q-2 6 -6 9z" fill="#E2B04A"/>`;
        const pines = `<path d="M838 ${BASE}C836 150 846 134 836 116" fill="none" stroke="#6B4430" stroke-width="6" stroke-linecap="round"/><g class="sc-sway" fill="#3E8E6E"><ellipse cx="824" cy="118" rx="30" ry="11"/><ellipse cx="848" cy="102" rx="24" ry="9"/><ellipse cx="830" cy="90" rx="16" ry="7"/></g>`;
        // Dōtonbori havası: köri dükkânı, takoyaki, dev yengeç tabelası
        const crab = `<g transform="translate(657,${BASE - 58})">
            <g stroke="#E8503A" stroke-width="3" stroke-linecap="round" fill="none"><path d="M-14 2l-12 -4l-4 6M-14 7l-13 3l-2 6M14 2l12 -4l4 6M14 7l13 3l2 6"/></g>
            <g class="sc-claw"><path d="M-12 -6l-8 -12" stroke="#E8503A" stroke-width="3.4" stroke-linecap="round"/><path d="M-26 -22q4 -8 10 -4l-4 3l5 2q-4 6 -11 -1z" fill="#E8503A"/></g>
            <g class="sc-claw b"><path d="M12 -6l8 -12" stroke="#E8503A" stroke-width="3.4" stroke-linecap="round"/><path d="M26 -22q-4 -8 -10 -4l4 3l-5 2q4 6 11 -1z" fill="#E8503A"/></g>
            <ellipse cx="0" cy="2" rx="17" ry="11" fill="#E8503A" stroke="#fff" stroke-width="1.5"/><path d="M-6 -8v-6M6 -8v-6" stroke="#E8503A" stroke-width="2"/>
            <circle cx="-6" cy="-15" r="3" fill="#fff"/><circle cx="6" cy="-15" r="3" fill="#fff"/><circle cx="-6" cy="-15" r="1.3" fill="#22264B"/><circle cx="6" cy="-15" r="1.3" fill="#22264B"/>
            <path d="M-5 4q5 4 10 0" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></g>`;
        const shop = bld(340, 76, 96, { c: FACADE[3], chochin: 1, shop: '#F6D9A8', vs: '串カツ', roof: 'tank' })
            + bld(420, 120, 110, { c: '#F3E7C9', awning: '#E8B83A', hs: 'カレー', hsBg: '#E8B83A', hsFg: '#6B4430', vs: '辛さ一番', vsBg: '#E8503A', shop: '#FFE9C9', steam: 1, balcony: 1 })
            + bld(544, 70, 92, { c: FACADE[1], noren: '#22264B', hs: 'たこ焼き', steam: 1 }) + bld(618, 78, 124, { c: FACADE[4], hs: 'かに', hsBg: '#E8503A', hsFg: '#fff', roof: 'rail' }) + crab
            + bld(700, 64, 98, { c: FACADE[0], hs: 'コンビニ', hsBg: '#3E8E6E', hsFg: '#fff', awning: '#3E8E6E' })
            + bld(-8, 70, 104, { c: FACADE[5], vs: '道頓堀', vsBg: '#FFC857', vsFg: '#E8503A', balcony: 1 }) + bld(64, 60, 84, { c: FACADE[2], noren: '#E8503A', hs: 'お好み焼', lit: .3 })
            + bld(254, 82, 118, { c: FACADE[6], vs: 'ラーメン', vsBg: '#22264B', chochin: 1, shop: '#F6D9A8', roof: 'box' });
        const poles = [236, 590, 790];
        // sokak masası: sürahi, bardak, ikinci tabak
        const table = `<rect x="150" y="${BASE - 30}" width="74" height="6" rx="2" fill="#8A5C3A"/><path d="M158 ${BASE - 24}V${BASE}M216 ${BASE - 24}V${BASE}" stroke="#6B4430" stroke-width="4"/>
            <path d="M162 ${BASE - 30}v-13h11v13z" fill="#BFE3F2" stroke="#fff" stroke-width="1.2"/><path d="M173 ${BASE - 40}q5 1 4 6" fill="none" stroke="#fff" stroke-width="1.4"/><rect x="163" y="${BASE - 38}" width="9" height="8" fill="#5CE1E6" opacity=".6"/>
            <ellipse cx="200" cy="${BASE - 31}" rx="12" ry="3.4" fill="#fff" stroke="#C9CED6" stroke-width="1"/><path d="M191 ${BASE - 32}q9 -7 18 0z" fill="#B8742A"/><circle cx="195" cy="${BASE - 33.5}" r="2.2" fill="#fff"/>
            <path class="sc-smoke" style="--d:.4s" d="M200 ${BASE - 38}c-3 -4 3 -6 0 -10" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`;
        // Yusuf: köri tabağı, kızaran yüz, ağızdan alev, ter, kulaklardan buhar
        const plate = `<ellipse cx="30" cy="-37" rx="11" ry="4.5" fill="#fff" stroke="#C9CED6" stroke-width="1.2"/><path d="M21 -38q9 -7 18 0z" fill="#B8742A"/><circle cx="25" cy="-39" r="2.4" fill="#fff"/><circle cx="33" cy="-40.6" r="1.2" fill="#E8503A" stroke="none"/>`;
        const fx = `<g class="sc-flush"><ellipse cx="2" cy="-55" rx="11.5" ry="7.5" fill="#E8503A" opacity=".55" stroke="none"/></g>`
            + `<g class="sc-fire" stroke="none"><path d="M12 -52q13 -8 22 -2q-7 2 -3 7q-9 3 -19 -5z" fill="#FF7A59"/><path d="M13 -52q8 -4 13 -1q-4 2 -1 4q-6 1 -12 -3z" fill="#FFC857"/></g>`
            + `<g class="sc-sweat" stroke="none"><path d="M-13 -70q-3 5 0 7q3 -2 0 -7z" fill="#BFE3F2"/><path d="M13 -74q-3 5 0 7q3 -2 0 -7z" fill="#BFE3F2"/></g>`
            + `<g class="sc-earsteam" fill="#fff" stroke="none"><circle cx="-17" cy="-62" r="2.6"/><circle cx="-21" cy="-67" r="3.4"/><circle cx="-26" cy="-73" r="4.2"/></g>`;
        const glass = `<rect x="27" y="-50" width="9" height="13" rx="1.5" fill="#BFE3F2" stroke="#fff" stroke-width="1.4"/><rect x="28" y="-45" width="7" height="7" fill="#5CE1E6" opacity=".7" stroke="none"/>`;
        const y = couple(false, { walk: false, yPose: 'eat', yItem: plate, yFx: fx, yMouth: 'o' });
        const m = couple(false, { walk: false, mPose: 'offer', mItem: glass, late: true, mMouth: 'grin' });
        return sceneBox('scene-d9', `
            ${svgOpen(W, H)}
                ${cloud(540, 26, .9, .5)}${cloud(1090, 44, .7, .45)}
                ${far}${keep}${pines}${shop}
                ${sidewalk(W)}
                ${poles.map(x => pole(x)).join('')}${wires(poles)}
                ${vending(770, '#3558D6')}
                ${table}
                ${solo(y.yusuf, 120, 0)}${solo(m.merve, 252, 1, G, 1.1, '--raise:3.6s')}
                <g style="--say:2.7s;--sdur:2.6s">${bubble(152, 34, 48, '辛い!', 'sc-say')}</g>
                <g transform="translate(186,${G}) scale(1.1)">${heart(0, -108, 6.4)}</g>
            </svg>`, W, H, `0 0 640 ${H}`);
    }

    // ===== Gün 10 — Shinkansen'in içi: pencereden akan manzara, bulutların üstünde Fuji ve fotoğraf telaşı =====
    function sceneDay10() {
        const W = 1200, H = 220, FY = 196;
        const wins = Array.from({ length: 6 }, (_, i) => [20 + i * 200, 170 + i * 200]);
        const clip = `<clipPath id="scWin10">${wins.map(([a, b]) => `<rect x="${a}" y="40" width="${b - a}" height="84" rx="16"/>`).join('')}</clipPath><clipPath id="scLed10"><rect x="568" y="5" width="184" height="15"/></clipPath>`;
        // pencere dışı: gökyüzü, Fuji (yavaşça gelir), orta plan tepeler, hızla akan tarlalar/evler, vınlayan direkler
        let hillsL = '', land = '', polesL = '';
        for (let rep = 0; rep < 2; rep++) {
            const o = rep * 1200;
            hillsL += `<path d="M${o} 112Q${o + 150} 84 ${o + 300} 104T${o + 600} 100T${o + 900} 106T${o + 1200} 112V140H${o}Z" fill="#7FBF9A"/>`;
            land += `<rect x="${o}" y="108" width="1200" height="30" fill="#A9D98A"/>`
                + Array.from({ length: 10 }, (_, i) => `<rect x="${o + i * 120 + 10}" y="${112 + (i % 3) * 4}" width="74" height="5" rx="2.5" fill="#7BCB8A"/>`).join('')
                + Array.from({ length: 6 }, (_, i) => `<g transform="translate(${o + 60 + i * 200},108)"><rect x="0" y="-14" width="24" height="14" fill="#F3EADB"/><path d="M-4 -14L12 -25L28 -14Z" fill="#4A4E6A"/><rect x="5" y="-9" width="5" height="5" fill="#8C9BB8"/><circle cx="40" cy="-8" r="9" fill="#4FA77F"/></g>`).join('');
            polesL += Array.from({ length: 4 }, (_, i) => `<path d="M${o + i * 300 + 40} 134V44" stroke="#8E8A9C" stroke-width="5"/><path d="M${o + i * 300 + 26} 52h28" stroke="#8E8A9C" stroke-width="3"/>`).join('');
        }
        const outside = `<g clip-path="url(#scWin10)">
            <rect x="0" y="34" width="${W}" height="100" fill="#BFE0F7"/><rect x="0" y="34" width="${W}" height="30" fill="#9CCBF0" opacity=".6"/>
            <g class="sc-clouds2" fill="#fff" opacity=".9"><ellipse cx="240" cy="58" rx="60" ry="7"/><ellipse cx="780" cy="52" rx="80" ry="8"/><ellipse cx="1240" cy="60" rx="60" ry="7"/><ellipse cx="1500" cy="54" rx="70" ry="7"/></g>
            <g class="sc-fujimove"><g transform="translate(320,0)">
                <path d="M-160 112Q-64 92 -22 47Q0 43 22 47Q64 92 160 112Z" fill="#6F7FD6"/>
                <path d="M-39 65Q-28 54 -22 47Q0 43 22 47Q28 54 39 65L28 70L18 60L8 72L0 61L-9 72L-18 60L-28 70Z" fill="#fff"/>
                <path d="M-90 100q40 -6 70 -2M30 98q40 -4 80 4" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".85" fill="none"/></g></g>
            <g class="sc-land slow">${hillsL}</g><g class="sc-land">${land}</g><g class="sc-land fast">${polesL}</g></g>`;
        // vagon içi: krem duvar, bagaj rafı + valizler, LED yazı, askılar
        const interior = `<rect x="-20" y="0" width="${W + 40}" height="${H}" fill="#F3EEE4"/><rect x="-20" y="128" width="${W + 40}" height="100" fill="#E7E1D4"/>
            <rect x="-20" y="0" width="${W + 40}" height="26" fill="#E2DCD0"/><path d="M-20 26H${W + 20}" stroke="#C9C3B4" stroke-width="3"/><path d="M-20 30H${W + 20}" stroke="#fff" stroke-width="2" opacity=".8"/>
            ${[[40, 44, '#FF7A59'], [96, 30, '#5D86BE'], [214, 52, '#22264B'], [300, 36, '#FFC857'], [836, 46, '#3E8E6E'], [900, 34, '#F58FAA'], [1040, 50, '#5D86BE'], [1110, 40, '#FF7A59']].map(([x, w, c]) => `<rect x="${x}" y="${26 - 17}" width="${w}" height="17" rx="4" fill="${c}"/><path d="M${x + w / 2 - 5} 9v-3h10v3" fill="none" stroke="#22264B" stroke-width="1.5"/>`).join('')}
            <rect x="560" y="2" width="200" height="21" rx="4" fill="#15183A" stroke="#C9C3B4" stroke-width="2"/>
            <g clip-path="url(#scLed10)"><g class="sc-led">${tx(0, 16.5, 'のぞみ 東京行 ・ NOZOMI for TOKYO ・ まもなく右手に富士山', 10, '#FFB23E', { a: 'start', w: 700 })}</g></g>`;
        const frames = wins.map(([a, b], i) => `<rect x="${a}" y="40" width="${b - a}" height="84" rx="16" fill="none" stroke="#D9D3C6" stroke-width="7"/><rect x="${a}" y="40" width="${b - a}" height="84" rx="16" fill="none" stroke="#fff" stroke-width="2" opacity=".7"/>
            ${i === 4 ? `<rect x="${a + 4}" y="43" width="${b - a - 8}" height="30" rx="10" fill="#E9E4D8"/><path d="M${a + 60} 73h30" stroke="#B8B1A2" stroke-width="3" stroke-linecap="round"/>` : ''}
            <path d="M${a + 6} 129H${b - 6}" stroke="#C9C3B4" stroke-width="5" stroke-linecap="round"/><path d="M${b + 25} 62v6q0 4 -4 4" fill="none" stroke="#B8B1A2" stroke-width="2.4" stroke-linecap="round"/>`).join('')
            + `<rect x="246" y="113" width="7" height="15" rx="2" fill="#6FBF86"/><rect x="247.5" y="109" width="4" height="4" fill="#fff"/><rect x="246" y="118" width="7" height="5" fill="#fff" opacity=".8"/>`;
        const seat = (x) => `<rect x="${x}" y="132" width="86" height="120" rx="18" fill="#4A64B8"/><rect x="${x + 6}" y="150" width="74" height="100" rx="10" fill="#5B76CC"/><rect x="${x + 14}" y="126" width="58" height="24" rx="6" fill="#fff"/><path d="M${x + 14} 144h58" stroke="#DDD8CC" stroke-width="1.2"/>`;
        const seatsBack = [-80, 262, 362, 462, 562, 662, 762, 862, 962, 1062, 1162].map(seat).join('');
        const seatsFront = [56, 150].map(x => `<rect x="${x - 6}" y="160" width="92" height="90" rx="16" fill="#3F58A8"/><rect x="${x + 8}" y="172" width="64" height="26" rx="3" fill="#E2DCD0"/><rect x="${x + 36}" y="169" width="8" height="5" rx="1.5" fill="#8E8A9C"/><path d="M${x} 166h80" stroke="#6F8AE0" stroke-width="3"/>`).join('');
        const p = couple(false, { walk: false, yPose: 'photo', mPose: 'point', late: true, mMouth: 'grin' });
        return sceneBox('scene-d10', `
            ${svgOpen(W, H)}
                <defs>${clip}</defs>
                ${interior}${outside}${frames}${seatsBack}
                <g class="sc-ride">${solo(p.yusuf, 104, 0, FY, 1.1, '--raise:4.4s;--flash:5.1s')}${solo(p.merve, 186, 0, FY, 1.1, '--raise:4.1s')}</g>
                ${seatsFront}
                <g style="--say:4.6s;--sdur:2.6s">${bubble(214, 46, 58, '富士山!', 'sc-say')}</g>
                <g transform="translate(146,${FY}) scale(1.1)">${heart(0, -106, 7.2)}</g>
            </svg>`, W, H, `0 0 640 ${H}`);
    }

    // ===== Gün 11 — Hokusai Müzesi: yorganın altında resim yapan balmumu Hokusai kıpırdar, Merve zıplar; Büyük Dalga canlanır =====
    function sceneDay11() {
        const W = 1200, H = 220, G = 176;
        const wall = `<rect x="-20" y="0" width="${W + 40}" height="${H}" fill="#F2F0EE"/><rect x="-20" y="0" width="${W + 40}" height="12" fill="#DCDDE6"/><path d="M-20 14H${W + 20}" stroke="#4A4E6A" stroke-width="2"/>
            ${Array.from({ length: 12 }, (_, i) => `<rect x="${54 + i * 100}" y="13" width="12" height="7" rx="2" fill="#4A4E6A"/><path d="M${60 + i * 100} 20l-26 74h52z" fill="#FFF4D6" opacity=".28"/>`).join('')}`;
        // Kanagawa Açıklarında Büyük Dalga (230×72): pençeli köpükler, kayıklar, ortada küçük Fuji
        const wave = (x, y, s) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-9" y="-9" width="248" height="90" fill="#6B4430"/><rect x="-5" y="-5" width="240" height="82" fill="#F8F2E6"/>
            <g clip-path="url(#scWave11)"><rect width="230" height="72" fill="#F1E4C3"/><path d="M0 0H230V24Q176 36 124 22Q60 8 0 30Z" fill="#D9CDB0"/>
                <path d="M128 57L146 38L164 57Z" fill="#3D5FA8"/><path d="M141.4 43L146 38L150.6 43L148 45.4L146 43L144 45.4Z" fill="#fff"/>
                <g class="sc-wavecurl b"><path d="M96 80V60Q150 48 192 56Q214 60 240 48V80Z" fill="#2D4E9A"/><path d="M110 60Q150 50 190 57Q214 61 236 51" fill="none" stroke="#fff" stroke-width="2.4"/>
                    <path d="M118 62q18 6 38 -2l-2 5q-17 6 -34 1z" fill="#E7C79A" stroke="#8A5C3A" stroke-width=".8"/>${[126, 132, 138, 144].map(bx => `<circle cx="${bx}" cy="62.5" r="1.5" fill="#3D5FA8"/>`).join('')}
                    <path d="M176 57q14 5 30 -3l-2 5q-14 5 -27 1z" fill="#E7C79A" stroke="#8A5C3A" stroke-width=".8"/></g>
                <g class="sc-wavecurl"><path d="M-10 80V34Q12 10 44 6Q76 2 96 22Q104 32 98 44Q92 34 80 32Q64 30 58 42Q54 54 70 60Q92 66 120 60V80Z" fill="#2D4E9A"/>
                    <path d="M8 62Q18 30 46 19M24 66Q30 40 56 30M40 68Q42 52 54 44" fill="none" stroke="#6F8FD0" stroke-width="2"/>
                    <path d="M4 36Q18 10 44 6Q76 2 96 22Q104 32 98 44" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
                    <path d="M90 16q10 -2 13 5M97 24q9 1 9 9M100 33q7 3 5 10M98 43q5 4 2 9M78 8q8 -5 14 0M62 4q7 -6 13 -2" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
                    ${[[110, 22], [116, 30], [112, 40], [106, 50], [120, 16], [124, 36]].map(([a, b], i) => `<circle class="sc-twink" style="--d:${i * .3}s" cx="${a}" cy="${b}" r="1.6" fill="#fff"/>`).join('')}</g>
                <rect x="6" y="4" width="9" height="18" fill="#F1E4C3" stroke="#6B4430" stroke-width=".8"/><path d="M10.5 7v12" stroke="#6B4430" stroke-width="1.6" stroke-dasharray="2 1.4"/></g></g>`;
        // Kızıl Fuji (Gaifū kaisei, 100×70): kiremit kırmızısı dağ, doruk karları, sıra sıra bulutlar
        const redFuji = (x, y, s) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-8" y="-8" width="116" height="86" fill="#6B4430"/><rect x="-4" y="-4" width="108" height="78" fill="#F8F2E6"/>
            <rect width="100" height="70" fill="#3F7FB8"/><rect y="44" width="100" height="26" fill="#9CCBF0" opacity=".6"/>
            ${[[6, 10, 30], [44, 8, 22], [10, 20, 40], [70, 18, 24], [4, 30, 26], [76, 30, 20], [14, 40, 20]].map(([a, b, w]) => `<path d="M${a} ${b}h${w}" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".9"/>`).join('')}
            <path d="M0 70V64Q36 46 60 9Q64 4 68 9Q82 38 100 56V70Z" fill="#C9402E"/><path d="M0 70V66Q30 56 46 36Q40 60 20 70Z" fill="#A8321F" opacity=".6"/>
            <path d="M58 13l1.5 9M62 8l.6 12M66 9l-.4 10M69.6 13l-1 7M55 18l1 6" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M0 70V63Q22 58 38 62T70 62T100 60V70Z" fill="#2F6E55"/></g>`;
        const label = (x) => `<rect x="${x}" y="108" width="26" height="9" rx="1" fill="#fff" stroke="#C9CED6" stroke-width=".8"/><path d="M${x + 3} 111h14M${x + 3} 114h20" stroke="#9AA0B2" stroke-width="1"/>`;
        const art = wave(430, 26, .9) + label(520) + redFuji(672, 28, 1) + label(710) + wave(812, 40, .48) + label(854) + redFuji(962, 22, 1.15) + label(1008) + wave(1104, 44, .4);
        const ropes = [430, 600, 770, 940, 1110].map(x => `<rect x="${x - 2.5}" y="${BASE - 32}" width="5" height="32" fill="#C9A15A"/><circle cx="${x}" cy="${BASE - 33}" r="3.6" fill="#E2B04A"/><rect x="${x - 7}" y="${BASE - 3}" width="14" height="3" fill="#A8824E"/>`).join('')
            + [430, 600, 770, 940].map(x => `<path d="M${x} ${BASE - 30}q85 16 170 0" fill="none" stroke="#C9402E" stroke-width="3"/>`).join('');
        const floor = `<rect x="-20" y="${BASE}" width="${W + 40}" height="60" fill="#D9C7A6"/><path d="M-20 ${BASE}H${W + 20}" stroke="#B7A27C" stroke-width="2"/>`
            + Array.from({ length: 26 }, (_, i) => `<path d="M${i * 50 - 10 + (i % 2) * 20} ${BASE + 2}v20M${i * 50 + 14} ${BASE + 22}v26" stroke="#C4B08A" stroke-width="1.2"/>`).join('') + `<path d="M-20 ${BASE + 22}H${W + 20}" stroke="#C4B08A" stroke-width="1.2"/>`;
        // Canlandırma: loş tatami oda, yorganın altında yere eğilmiş resim yapan Hokusai ve yanında kızı Ōi
        const room = `<rect x="236" y="62" width="170" height="${BASE - 62}" fill="#3A2F2A"/><rect x="236" y="62" width="170" height="${BASE - 62}" fill="none" stroke="#6B4430" stroke-width="5"/>
            ${[0, 1, 2].map(k => `<rect x="${246 + k * 34}" y="72" width="30" height="70" fill="#E9DCC4" opacity=".5"/><path d="M${261 + k * 34} 72v70M${246 + k * 34} 95h30M${246 + k * 34} 118h30" stroke="#6B4430" stroke-width="1.2" opacity=".8"/>`).join('')}
            <rect x="238" y="${BASE - 16}" width="166" height="16" fill="#B8A56A"/><path d="M238 ${BASE - 16}h166M292 ${BASE - 16}v16M348 ${BASE - 16}v16" stroke="#8E7C48" stroke-width="1.4"/>
            <g class="sc-twink"><rect x="380" y="${BASE - 52}" width="16" height="26" rx="2" fill="#FFE9A8"/><path d="M380 ${BASE - 52}h16M380 ${BASE - 26}h16M388 ${BASE - 52}v26" stroke="#6B4430" stroke-width="1.4"/></g><path d="M383 ${BASE - 26}v10M393 ${BASE - 26}v10" stroke="#6B4430" stroke-width="1.6"/>
            <rect x="262" y="48" width="118" height="14" rx="2" fill="#fff" stroke="#C9CED6" stroke-width="1"/>${tx(321, 59, '北斎のアトリエ', 9, '#22264B')}`;
        const hokusai = `<g transform="translate(316,${BASE - 16})">
            <path d="M-60 -1h40l5 -6h-40z" fill="#F8F2E6" stroke="#C9B48E" stroke-width=".8"/><path class="sc-ink" d="M-52 -4q5 -3 9 0t9 -1" fill="none" stroke="#22264B" stroke-width="1.1" stroke-linecap="round"/>
            <circle cx="-8" cy="-3" r="4" fill="#22264B"/><circle cx="-8" cy="-3" r="2.4" fill="#3D5FA8"/>
            <path d="M-24 0Q-32 -30 -18 -46Q0 -60 20 -46Q34 -32 34 0Z" fill="#8C6A4A"/><path d="M-6 -50Q10 -44 12 -22L8 0H26Q34 -30 20 -46Q8 -56 -6 -50Z" fill="#A8845E"/>
            <path d="M-12 -42l9 16M6 -51l-3 24M20 -40l-7 20M-22 -20h52M-20 -8h50" fill="none" stroke="#6B4E34" stroke-width="1.3"/>
            <g class="sc-hokhead"><circle cx="-24" cy="-40" r="10" fill="#EBCDAE"/><path d="M-17 -48q7 1 6 10q-1 5 -5 6" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
                <circle cx="-29" cy="-41" r="1.3" fill="#22264B"/><path d="M-33 -45l6 1" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><path d="M-32 -35q3 1.4 5 0" fill="none" stroke="#8A4A3A" stroke-width="1"/>
                <path d="M-29 -48h7M-28 -50.4h5M-22 -36q2 2 1 4" fill="none" stroke="#D2AE8C" stroke-width=".9"/><ellipse cx="-15" cy="-39" rx="2" ry="3" fill="#E0BE9C"/></g>
            <g class="sc-brush"><path d="M-16 -28L-37 -15" stroke="#5A6E8C" stroke-width="6.4" stroke-linecap="round"/><circle cx="-38" cy="-14" r="3.2" fill="#EBCDAE"/><path d="M-36 -18l-9 13" stroke="#6B4430" stroke-width="1.8" stroke-linecap="round"/><path d="M-45 -5l-1.6 3" stroke="#22264B" stroke-width="2.4" stroke-linecap="round"/></g>
            <g transform="translate(54,0)"><path d="M-16 0Q-20 -26 -10 -36Q2 -42 10 -32Q16 -18 14 0Z" fill="#7A3E48"/><rect x="-13" y="-22" width="24" height="6" fill="#E2B04A"/>
                <circle cx="-4" cy="-46" r="8.6" fill="#F3D2B8"/><path d="M-12.6 -48q2 -10 10 -9q8 1 7 10q-4 -6 -9 -5q-5 0 -8 4z" fill="#22264B"/><circle cx="1" cy="-57" r="4" fill="#22264B"/><path d="M-2 -58h8" stroke="#E8503A" stroke-width="1.4"/>
                <circle cx="-8.4" cy="-46" r="1.1" fill="#22264B"/><path d="M-10 -42q2 1 3.4 0" fill="none" stroke="#8A4A3A" stroke-width=".9"/>
                <path d="M-10 -26L-20 -34" stroke="#7A3E48" stroke-width="5" stroke-linecap="round"/><circle cx="-21" cy="-35" r="2.6" fill="#F3D2B8"/><path d="M-21 -36l-10 2" stroke="#6B4430" stroke-width="1.4"/>
                <path class="sc-smoke" style="--d:1s" d="M-32 -36c-3 -4 3 -6 0 -10" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></g></g>`;
        const shock = `<g class="sc-say" style="--say:2.7s;--sdur:1.8s">${tx(200, 74, '!', 26, '#fff', { f: LAT, w: 800, x: ' stroke="#E8503A" stroke-width="1.2"' })}<path d="M217 70q-4 6 0 9q4 -3 0 -9z" fill="#BFE3F2"/></g>`;
        const haha = `<g class="sc-say" style="--say:3.2s;--sdur:2.4s">${tx(98, 72, 'ハハハ!', 13, '#E8503A')}</g>`;
        const bench = `<rect x="760" y="${BASE - 16}" width="150" height="8" rx="2" fill="#4A4E6A"/><path d="M772 ${BASE - 8}V${BASE}M898 ${BASE - 8}V${BASE}" stroke="#33364F" stroke-width="4"/>`;
        const y = couple(false, { walk: false, yAct: 'sc-laugh', yMouth: 'grin' });
        const m = couple(false, { walk: false, mAct: 'sc-jump', mMouth: 'o', mPose: 'surprise', late: true });
        return sceneBox('scene-d11', `
            ${svgOpen(W, H)}
                <defs><clipPath id="scWave11"><rect width="230" height="72"/></clipPath></defs>
                ${wall}${art}${room}
                ${floor}${hokusai}${ropes}${bench}
                ${solo(y.yusuf, 98, 0)}${solo(m.merve, 196, 0, G, 1.1, '--jump:2.7s;--raise:2.7s')}
                ${shock}${haha}
                <g transform="translate(148,${G}) scale(1.1)">${heart(0, -108, 5.6)}</g>
            </svg>`, W, H, `0 0 640 ${H}`);
    }

    // ===== Gün 12 — Shibuya Sky: gün batımından geceye; şehir ışıkları, ışık huzmeleri, selfie ve süzülen polaroid =====
    function sceneDay12() {
        const W = 1200, H = 220, G = 176;
        const night = `<defs><linearGradient id="scNightG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1E2250" stop-opacity="0"/><stop offset=".55" stop-color="#1E2250" stop-opacity=".85"/><stop offset="1" stop-color="#1E2250"/></linearGradient></defs>
            <rect class="sc-night" x="-20" y="-260" width="${W + 40}" height="${H + 260}" fill="url(#scNightG)"/>`;
        const stars = `<g class="sc-stars" fill="#fff">${Array.from({ length: 30 }, (_, i) => `<circle class="sc-twink" style="--d:${(rnd(i + 1730) * 3).toFixed(1)}s" cx="${(rnd(i + 1700) * W).toFixed(0)}" cy="${(rnd(i + 1710) * 74 - 12).toFixed(0)}" r="${(rnd(i + 1720) * 1.3 + .6).toFixed(1)}"/>`).join('')}</g>`;
        const sun = `<g class="scene-sun12"><circle cx="560" cy="86" r="74" fill="#fff" opacity=".18"/><circle cx="560" cy="86" r="30" fill="#FFE9A8"/></g>`;
        const fuji = `<path d="M400 112Q500 96 538 56Q560 52 582 56Q620 96 720 112Z" fill="#6B5A9C" opacity=".6"/><path d="M527 68Q534 61 538 56Q560 52 582 56Q586 61 593 68L583 71L574 64L566 73L560 65L553 73L546 64L537 71Z" fill="#fff" opacity=".75"/>`;
        // aşağıda Tokyo: yoğun bloklar, Shinjuku kümesi, Skytree ve ışıklanan Tokyo Kulesi
        let city = `<rect x="-20" y="146" width="${W + 40}" height="40" fill="#3D4176"/>`;
        for (let i = 0; i < 70; i++) {
            const x = i * 18 - 10, tall = i > 42 && i < 50, h = (tall ? 44 : 16) + rnd(i + 1800) * (tall ? 34 : 40), w = 14 + rnd(i + 1810) * 8;
            city += `<rect x="${x}" y="${150 - h}" width="${w}" height="${h + 80}" fill="${['#4A4E86', '#3D4176', '#56598F'][i % 3]}"/>`;
            for (let k = 0; k < (tall ? 10 : 4); k++) if (rnd(i * 7 + k) > .42) city += `<rect class="sc-win" style="--d:${(2.4 + rnd(i + k * 3) * 3.6).toFixed(2)}s" x="${x + 3 + (k % 2) * 6}" y="${150 - h + 5 + Math.floor(k / 2) * 9}" width="3" height="4" fill="#FFD76A"/>`;
        }
        city += `<path d="M806 ${150 - 78}L812 ${150 - 104}L818 ${150 - 78}Z" fill="#56598F"/><circle class="sc-twink" cx="812" cy="${150 - 106}" r="1.8" fill="#E8503A"/>`
            + `<g transform="translate(150,0)"><g class="sc-lit" style="--d:3.6s"><path d="M182 150L189.4 44H192.6L200 150Z" fill="#C9C3D9"/><path d="M184 86h14l2 7h-18z" fill="#E6E2EE"/><rect x="186" y="70" width="10" height="5" rx="1.5" fill="#E6E2EE"/><path d="M191 44V18" stroke="#C9C3D9" stroke-width="2.2"/></g></g>`
            + `<g transform="translate(975,150)"><g class="sc-lit" style="--d:3.2s"><path d="M-17 0Q-6 -30 -3.5 -74H3.5Q6 -30 17 0H10Q5 -14 0 -16Q-5 -14 -10 0Z" fill="#F0623E"/>
                <path d="M-11 -12L7 -30M11 -12L-7 -30M-6 -36L4 -56M6 -36L-4 -56" stroke="#FFC857" stroke-width=".9" opacity=".8"/>
                <rect x="-7.5" y="-37" width="15" height="5" fill="#fff"/><rect x="-4.6" y="-60" width="9.2" height="4" fill="#fff"/>
                <path d="M0 -74V-100" stroke="#F0623E" stroke-width="2.4"/><path d="M0 -84v-7" stroke="#fff" stroke-width="2.4"/></g></g>`;
        // gece ışık huzmeleri (çatıdan gökyüzüne)
        const beams = `<g class="sc-beams">${[[420, -1], [470, 1], [760, -1], [810, 1]].map(([x, dir], i) => `<g class="sc-beam" style="--bdir:${dir * 14}deg;--d:${(-i * .9).toFixed(1)}s"><path d="M${x - 3} 118L${x - 16} -90H${x + 16}L${x + 3} 118Z" fill="#fff" opacity=".2"/></g>`).join('')}</g>`;
        // çatı: cam korkuluk, güverte, helikopter pisti işareti, diğer ziyaretçiler
        const roof = `<rect x="-20" y="118" width="${W + 40}" height="58" fill="#BFE3F2" opacity=".26"/>
            ${Array.from({ length: 16 }, (_, i) => `<path d="M${i * 80 + 8} 124l14 0l-22 46l-14 0z" fill="#fff" opacity=".12"/>`).join('')}
            <path d="M-20 118H${W + 20}" stroke="#fff" stroke-width="3" opacity=".9"/>
            ${Array.from({ length: 16 }, (_, i) => `<path d="M${i * 80} 118V${BASE}" stroke="#fff" stroke-width="2" opacity=".6"/>`).join('')}
            <rect x="-20" y="${BASE}" width="${W + 40}" height="60" fill="#6E7F6A"/><rect x="-20" y="${BASE}" width="${W + 40}" height="7" fill="#8A8FA8"/>
            <path d="M-20 ${BASE}H${W + 20}" stroke="#5A5F78" stroke-width="2"/>
            <ellipse cx="840" cy="${BASE + 28}" rx="130" ry="15" fill="none" stroke="#fff" stroke-width="3" opacity=".8"/><path d="M816 ${BASE + 20}l-6 16M864 ${BASE + 20}l6 16M813 ${BASE + 28}h54" stroke="#fff" stroke-width="3.4" opacity=".8"/>
            ${[[640, 0], [668, .8], [1040, 1.6]].map(([x, d]) => `<g transform="translate(${x},${G})" fill="#2B2F5E"><rect x="-6" y="-22" width="5" height="22" rx="2"/><rect x="1" y="-22" width="5" height="22" rx="2"/><rect x="-9" y="-44" width="18" height="26" rx="7"/><circle cx="0" cy="-52" r="8"/>
                <path d="M7 -38l9 -12" stroke="#2B2F5E" stroke-width="4" stroke-linecap="round"/><circle class="sc-twink" style="--d:${d}s" cx="17" cy="-52" r="2.2" fill="#fff"/></g>`).join('')}`;
        // polaroid: flaştan sonra havada süzülür
        const pola = `<g class="sc-pola"><g transform="translate(262,64) rotate(-8)">
            <rect x="-17" y="-21" width="34" height="41" rx="1.5" fill="#fff" stroke="#22264B" stroke-width="1"/>
            <rect x="-13" y="-17" width="26" height="26" fill="#2B2F5E"/><rect x="-13" y="1" width="26" height="8" fill="#FF9E7A"/><path d="M-13 3l5 -5v5h4v-8h4v8h5v-4l5 4z" fill="#3D4176"/>
            <circle cx="-4.6" cy="-5" r="3.8" fill="#FFDFC4"/><circle cx="5" cy="-5" r="3.8" fill="#FFDFC4"/>
            <path d="M-8.6 -6q0 -5.4 4 -5.4q4 0 4 5q-4 -3 -8 .4z" fill="#A8452B"/><path d="M1 -6q0 -5.4 4 -5.4q4 0 4 5q-4 -3 -8 .4z" fill="#6B4430"/>
            <path d="M-4 15q3 -3 4 0q1 -3 4 0q-2 3 -4 4q-2 -1 -4 -4z" fill="#E8503A"/></g></g>`;
        const p = couple(false, { walk: false, yPose: 'selfie', yMouth: 'grin', mMouth: 'grin' });
        return sceneBox('scene-d12', `
            ${svgOpen(W, H)}
                ${sun}${fuji}${night}${stars}${beams}
                ${city}
                ${roof}
                ${solo(p.merve, 120, 0)}${solo(p.yusuf, 190, 0, G, 1.1, '--pose:3.6s;--flash:4.8s')}
                <g transform="translate(155,${G}) scale(1.1)">${heart(0, -108, 6.2)}</g>
                ${pola}
            </svg>`, W, H, `0 0 640 ${H}`);
    }

    // ===== Gün 13 — Havalimanı: hediyelik dolu bagaj arabası, kalkış panosunda İstanbul, kalkan uçağa el sallamak =====
    function sceneDay13() {
        const W = 1200, H = 220, G = 176;
        // camın ardı: apron, pist, kontrol kulesi, körüğe bağlı park hâlindeki uçak
        const outside = `<rect x="-20" y="10" width="${W + 40}" height="${BASE - 10}" fill="#CFE6F7" opacity=".5"/>
            <path d="M-20 128Q300 118 620 126T1220 122V130H-20Z" fill="#8ED1B0" opacity=".7"/>
            <rect x="-20" y="128" width="${W + 40}" height="50" fill="#8E8A9C" opacity=".65"/><path d="M-20 140H${W + 20}" stroke="#FFC857" stroke-width="1.6" opacity=".8"/>
            ${Array.from({ length: 30 }, (_, i) => `<rect x="${i * 44}" y="152" width="22" height="3" fill="#fff" opacity=".8"/>`).join('')}
            <g fill="#C9C3D9"><rect x="1070" y="62" width="10" height="68"/><path d="M1058 62h34l-5 -16h-24z"/><rect x="1062" y="50" width="26" height="6" fill="#5D86BE"/><path d="M1075 46V32" stroke="#C9C3D9" stroke-width="2"/></g><circle class="sc-twink" cx="1075" cy="32" r="2" fill="#E8503A"/>
            <g transform="translate(700,150)"><path d="M0 -3Q0 -16 14 -16H150Q176 -16 186 -6Q176 2 150 2H12Q0 2 0 -3Z" fill="#fff" stroke="#8E8A9C" stroke-width="1"/>
                <path d="M6 -16L-8 -46H10L34 -16Z" fill="#3558D6"/><path d="M4 -4h160" stroke="#3558D6" stroke-width="2"/><path d="M84 -4L56 14H72L112 -4Z" fill="#C9CED6"/><rect x="78" y="4" width="18" height="7" rx="3.5" fill="#8E8A9C"/>
                ${Array.from({ length: 14 }, (_, k) => `<circle cx="${40 + k * 8.6}" cy="-9" r="1.5" fill="#5D86BE"/>`).join('')}<path d="M166 -12h8l5 4h-13z" fill="#22264B"/>
                <path d="M150 -14H214V-30H150Z" fill="#E6E2EE" stroke="#8E8A9C" stroke-width="1"/>${[160, 172, 184, 196].map(x => `<path d="M${x} -30v16" stroke="#8E8A9C" stroke-width="1"/>`).join('')}<path d="M206 -14V28" stroke="#8E8A9C" stroke-width="4"/></g>`;
        // kalkan uçak (burnu solda) + arkasında iz
        const plane = `<g class="sc-takeoff"><g transform="translate(1290,134) scale(-1,1)"><g class="sc-nose">
            <path class="sc-trail" d="M-6 -6H-190" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-dasharray="14 9" opacity=".8"/>
            <path d="M0 -2Q0 -13 12 -13H86Q102 -13 110 -5Q102 2 86 2H10Q0 2 0 -2Z" fill="#fff" stroke="#22264B" stroke-width="1.3"/>
            <path d="M4 -13L-5 -33H9L24 -13Z" fill="#E8503A" stroke="#22264B" stroke-width="1.3" stroke-linejoin="round"/><path d="M2 -6L-8 -9V-4Z" fill="#C9CED6"/>
            <path d="M48 -4L28 14H40L68 -4Z" fill="#C9CED6" stroke="#22264B" stroke-width="1.2" stroke-linejoin="round"/><rect x="42" y="3" width="13" height="5.4" rx="2.7" fill="#8E8A9C"/>
            <path d="M8 -2.6h92" stroke="#E8503A" stroke-width="1.6"/>${[34, 42, 50, 58, 66, 74, 82].map(x => `<circle cx="${x}" cy="-7.6" r="1.5" fill="#5D86BE"/>`).join('')}<path d="M95 -9.6h6l4 3.4h-10z" fill="#22264B"/></g></g></g>`;
        // terminal: çelik makas çatı, cam cephe dikmeleri
        const mullions = Array.from({ length: 14 }, (_, i) => `<rect x="${i * 90 - 6}" y="14" width="7" height="${BASE - 14}" fill="#E6E2EE"/>`).join('')
            + `<rect x="-20" y="86" width="${W + 40}" height="4" fill="#E6E2EE"/><rect x="-20" y="0" width="${W + 40}" height="5" fill="#D2CDDD"/><rect x="-20" y="14" width="${W + 40}" height="5" fill="#E6E2EE"/>`
            + `<path d="M-20 16${Array.from({ length: 28 }, () => 'l22.5 -12l22.5 12').join('')}" fill="none" stroke="#D2CDDD" stroke-width="2.4"/>`;
        // kalkış panosu (yapraklı pano gibi sırayla döner)
        const rows = [['ISTANBUL', '13:45', '14', '搭乗中', 1], ['SEOUL', '14:20', '21', '定刻', 0], ['SINGAPORE', '15:05', '08', '定刻', 0], ['PARIS', '15:40', '17', '遅延', 0]];
        const board = `<g><path d="M452 14V20M594 14V20" stroke="#8E8A9C" stroke-width="3"/><rect x="420" y="20" width="206" height="72" rx="4" fill="#1B1E3F" stroke="#E6E2EE" stroke-width="3"/>
            ${tx(430, 32, '出発 DEPARTURES', 8, '#FFC857', { a: 'start', f: LAT, w: 800 })}${tx(616, 32, '13:10', 8, '#fff', { a: 'end', f: LAT, w: 800 })}<path d="M426 36h194" stroke="#3D4176" stroke-width="1"/>
            ${rows.map(([c, t, g, st, hot], i) => `<g class="sc-flap" style="--d:${(.5 + i * .35).toFixed(2)}s"><g class="${hot ? 'sc-brd' : ''}">
                ${tx(430, 48 + i * 12, c, 8.5, hot ? '#5CE18A' : '#fff', { a: 'start', f: LAT, w: 800 })}${tx(520, 48 + i * 12, t, 8.5, '#fff', { a: 'start', f: LAT, w: 800 })}
                ${tx(566, 48 + i * 12, g, 8.5, '#FFC857', { a: 'middle', f: LAT, w: 800 })}${tx(616, 48 + i * 12, st, 8, hot ? '#5CE18A' : st === '遅延' ? '#FF7A59' : '#C9C3D9', { a: 'end' })}</g></g>`).join('')}</g>`;
        const gate = `<path d="M900 14V28" stroke="#8E8A9C" stroke-width="3"/><rect x="846" y="28" width="110" height="24" rx="3" fill="#FFC857"/>${tx(856, 45, '14', 15, '#22264B', { a: 'start', f: LAT, w: 800 })}${tx(916, 44, '搭乗口', 10, '#22264B')}
            <g transform="translate(760,${BASE})">${[0, 1, 2, 3].map(k => `<rect x="${k * 36}" y="-40" width="32" height="22" rx="5" fill="#3F58A8"/><rect x="${k * 36}" y="-20" width="32" height="7" rx="3" fill="#4A64B8"/>`).join('')}<path d="M0 -13h140" stroke="#8E8A9C" stroke-width="3"/><path d="M10 -13V0M130 -13V0" stroke="#8E8A9C" stroke-width="4"/></g>`;
        const floor = `<rect x="-20" y="${BASE}" width="${W + 40}" height="60" fill="#E6E2EE"/><path d="M-20 ${BASE}H${W + 20}" stroke="#C9C3D9" stroke-width="2"/>
            ${Array.from({ length: 30 }, (_, i) => `<path d="M${i * 44} ${BASE}V${BASE + 50}" stroke="#D2CDDD" stroke-width="1.4"/>`).join('')}
            <g fill="#fff" opacity=".5">${Array.from({ length: 14 }, (_, i) => `<path d="M${i * 90 + 14} ${BASE + 3}h50l-10 34h-50z"/>`).join('')}</g>`;
        // hediyelik dolu bagaj arabası (karakterlerle birlikte hareket eder)
        const cart = `<g transform="translate(38,0)">
            <path d="M58 -6H2L-6 -33" fill="none" stroke="#8E8A9C" stroke-width="3" stroke-linecap="round"/><path d="M56 -6V-30" stroke="#8E8A9C" stroke-width="3"/><path d="M-11 -34h8" stroke="#22264B" stroke-width="4" stroke-linecap="round"/>
            <circle cx="8" cy="-2" r="4" fill="#22264B"/><circle cx="48" cy="-2" r="4" fill="#22264B"/><circle cx="8" cy="-2" r="1.4" fill="#C9CED6" stroke="none"/><circle cx="48" cy="-2" r="1.4" fill="#C9CED6" stroke="none"/>
            <rect x="2" y="-30" width="34" height="24" rx="4" fill="#FF7A59"/><path d="M10 -28v20M19 -28v20M28 -28v20" stroke="#fff" stroke-opacity=".5" stroke-width="1.6"/><rect x="34" y="-28" width="22" height="22" rx="4" fill="#5D86BE"/>
            <rect x="6" y="-44" width="24" height="14" fill="#3E8E6E"/>${tx(18, -34, '抹茶', 7, '#fff', { x: ' stroke="none"' })}
            <rect x="30" y="-46" width="18" height="18" fill="#FFC857"/><path d="M39 -46v18M30 -37h18" stroke="#E8503A" stroke-width="2"/>
            <g class="sc-topbox"><rect x="18" y="-58" width="24" height="13" fill="#F58FAA"/>${tx(30, -48.6, '土産', 7, '#fff', { x: ' stroke="none"' })}
                <circle cx="10" cy="-52" r="7.4" fill="#E8503A"/><ellipse cx="10" cy="-53" rx="4.6" ry="3.6" fill="#FFDFC4" stroke="none"/><circle cx="8.2" cy="-53.4" r=".9" fill="#22264B" stroke="none"/><circle cx="11.8" cy="-53.4" r=".9" fill="#22264B" stroke="none"/></g></g>`;
        const y = couple(false, { yPose: 'push' }), m = couple(false, { mPose: 'wave', mMouth: 'grin' });
        const people = { yusuf: y.yusuf, merve: m.merve };
        return sceneBox('scene-d13', `
            ${svgOpen(W, H)}
                ${outside}${plane}${mullions}${board}${gate}
                ${floor}
                <g transform="translate(70,${G}) scale(1.1)">${pair(people, 132, { extra: cart, style: '--wfrom:-460px;--wto:0px;--wd:3.4s;--wdl:.4s;--steps:7' })}</g>
                <g style="--say:4.6s;--sdur:3.2s">${bubble(244, 34, 96, 'さようなら!', 'sc-say')}</g>
                <g transform="translate(150,${G}) scale(1.1)">${heart(0, -108, 6.6)}</g>
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

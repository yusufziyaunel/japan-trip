// ============================================
// JAPONYA GEZİ PLANI - v2.0 Final
// ============================================

// Trip dates - 2026 GÜNCELLEME
const TRIP_START = new Date(2026, 2, 7, 15, 20, 0); // 7 Mart 15:20 // 7 Mart 2026
const TRIP_END = new Date(2026, 2, 20, 10, 45, 0); // 20 Mart 10:45 // 19 Mart 2026

// ============================================
// FOTOĞRAF SİSTEMİ - Manuel URL
// Kendi fotoğraflarını buraya ekle!
// ============================================
const customImages = {
    // UÇUŞ GÜNÜ - 7 MART
    'flight-departure': 'https://i.imgur.com/cLrwXtM.jpeg', // İstanbul Havalimanı karesi
    'flight-inflight': 'https://i.imgur.com/9i3KmqC.jpeg',  // Uçak içi veya bulutlar

    // 1. GÜN: 8 MART - SHINJUKU GELİŞ
    'day1-haneda': 'https://i.imgur.com/kppQHPL.png',
    'day1-hotel': '',      // Otel odası veya Shinjuku sokakları
    'day1-3d-cat': 'https://i.imgur.com/po7v424.jpeg',
    'day1-godzilla': 'https://i.imgur.com/5TBrpdX.jpeg',
    'day1-dinner': 'https://i.imgur.com/qc8wgKP.png',
    'day1-golden-gai': 'https://i.imgur.com/XqKVFKR.png', 
    'day1-don': 'https://i.imgur.com/tdlEHt4.png', 
    
    // 2. GÜN: 9 MART - ASAKUSA & UENO & AKIHABARA
    'day2-sensoji': 'https://i.imgur.com/X8I9O7p.png',
    'day2-lunch': 'https://i.imgur.com/J5jCVv2.png',
    'day2-ueno': 'https://i.imgur.com/xDygxs2.png',
    'day2-national-museum': 'https://i.imgur.com/1lUyr66.jpeg',
    'day2-ameyoko': 'https://i.imgur.com/4u1tCWM.png',
    'day2-akihabara': 'https://i.imgur.com/zffhD8u.jpeg',   // Akiba neon tabelalar
    'day4-yodabashi': 'https://i.imgur.com/RU68mP3.png',   // Yodobashi Camera binası
    'day2-dinner': 'https://i.imgur.com/MWKx4nM.jpeg',

    // 3. GÜN: 10 MART - HARAJUKU & SHIBUYA
    'day3-meiji': 'https://i.imgur.com/ZHO1uAf.jpeg',       // Meiji Jingu orman yolu
    'day3-takeshita': 'https://i.imgur.com/kkJ68KR.png',   // Kalabalık Takeshita caddesi
    'day3-museum': 'https://i.imgur.com/3fDxkYD.png',      // Ota Memorial veya Nezu
    'day3-shibuya': 'https://i.imgur.com/3GGee8h.png',     // Shibuya Crossing tepeden
    'day3-mega-don': 'https://i.imgur.com/EFNbGtW.png',    // Mega Don Quijote girişi

    // 4. GÜN: 11 MART - IMPERIAL PALACE & GINZA
    'day4-palace': 'https://i.imgur.com/6Gw1q0Z.png',      // Saray bahçesi ve köprü
    'day4-character': 'https://i.imgur.com/LghwtzD.png',   // Tokyo Station Character Street
    'day4-ichigokan': 'https://i.imgur.com/RnGyc6d.jpeg',   // Mitsubishi Ichigokan kırmızı tuğlalar
    'day4-ginza': 'https://i.imgur.com/CokoJNh.png',       // Ginza lüks binalar
    'day4-dinner': 'https://i.imgur.com/6kf6VIO.png',      // Ginza akşam yemeği

    // 5. GÜN: 12 MART - KYOTO GEÇİŞ
    'day5-shinkansen': 'https://i.imgur.com/NrY0GSy.png',  // Shinkansen dış/iç çekim
    'day5-kyoto': 'https://i.imgur.com/1BkvHXn.png',       // Kyoto istasyon mimarisi
    'day5-nishiki': 'https://i.imgur.com/qqpquHP.png',     // Nishiki Market yemekleri
    'day5-gion': 'https://i.imgur.com/uz9EtVz.png',        // Gion ahşap evler
    'day5-pontocho': 'https://i.imgur.com/tk738B4.png',    // Pontocho dar sokak
    'day5-hario': 'https://i.imgur.com/SgqxyAD.png', 
    
    // 6. GÜN: 13 MART - ARASHIYAMA
    'day6-golden': 'https://i.imgur.com/1u0glY7.png',      // Kinkaku-ji (Altın Tapınak)
    'day6-shrine': 'https://i.imgur.com/J3b3dec.png',      // Hirano Shrine
    'day6-bamboo': 'https://i.imgur.com/MaZy0MZ.jpeg',      // Bambu ormanı yolu
    'day6-coffee': 'https://i.imgur.com/d51yggE.png',      // Zen Coffee karesi
    'day6-dinner': 'https://i.imgur.com/KCTTEKh.jpeg',      // Kyoto akşam yemeği

    // 7. GÜN: 14 MART - TAPINAKLAR
    'day7-fushimi': 'https://i.imgur.com/nl7TmLW.jpeg',     // Turuncu Torii kapıları
    'day7-kiyomizu': 'https://i.imgur.com/8ajBzCf.png',     // Kiyomizu-dera teras manzarası
    'day7-sannenzaka': 'https://i.imgur.com/qaCfqwk.png',   // Sannenzaka merdivenler
    'day7-silver': 'https://i.imgur.com/SgqxyAD.png',       // Nanzen-ji veya Ginkaku-ji
    'day7-dinner': 'https://i.imgur.com/LXaIlLA.png',       // Kyoto son akşam yemeği

    // 8. GÜN: 15 MART - NARA & OSAKA
    'day8-train': 'https://i.imgur.com/BEYnTfk.png',        // Nara treni
    'day8-nara': 'https://i.imgur.com/GfTiTEK.png',         // Nara geyikleri
    'day8-lunch': 'https://i.imgur.com/DR2Kv6M.png',        // Nara öğle yemeği
    'day8-osaka-train': 'https://i.imgur.com/W8B4LNX.png',  // Osaka'ya geçiş
    'day8-osaka': '',        // Osaka şehir girişi
    'day8-shinsaibashi': 'https://i.imgur.com/wEMFNzw.png', // Shinsaibashi alışveriş yolu
    'day8-dotonbori': 'https://i.imgur.com/D1aCLya.png',    // Glico Man tabelası

    // 9. GÜN: 16 MART - OSAKA KALE & MODERN
    'day9-castle': 'https://i.imgur.com/bwkufP9.png',       // Osaka Kalesi
    'day9-kuromon': 'https://i.imgur.com/k7zO2yE.png',      // Kuromon Market deniz ürünleri
    'day9-yasaka': 'https://i.imgur.com/cbiDMVh.png',       // Namba Yasaka (Aslan ağzı)
    'day9-shinsekai': 'https://i.imgur.com/LUDKQnx.jpeg',    // Tsutenkaku Kulesi
    'day9-umeda': 'https://i.imgur.com/7HVhwtx.png',        // Umeda Sky Building manzarası

    // 10. GÜN: 17 MART - TEAMLAB & ROPPONGI
    'day10-shinkansen': 'https://i.imgur.com/5Ip8RAM.png',  // Osaka -> Tokyo dönüşü
    'day10-hotel': '',       // Shinjuku dönüş oteli
    'day10-teamlab': 'https://i.imgur.com/ibpSdbT.jpeg',     // TeamLab dijital sanat karesi
    'day10-roppongi': 'https://i.imgur.com/XnF7I4f.png',    // Mori Tower veya Roppongi gece
    'day10-dinner': 'https://i.imgur.com/32A5LcK.png',      // Gonpachi (Kill Bill) restoranı

    // 11. GÜN: 18 MART - TOKYO TOWER & SERBEST
    'day11-free': '',        // Serbest gezinti karesi
    'day11-tower': 'https://i.imgur.com/aA4oAW7.png',       // Kırmızı Tokyo Tower
    'day11-zojoji': 'https://i.imgur.com/RloRDZp.png',      // Tapınak ve arkada kule manzarası
    'day11-shinjuku': 'https://i.imgur.com/lXQ125n.jpeg',    // Shinjuku son gece
    'day11-dinner': 'blob:https://imgur.com/5a1dd2f4-d67a-4312-b837-9e83148663f2',      // Veda yemeği

    // 12. GÜN: 19 MART - SON ALIŞVERİŞ & ODAIBA
    'day12-shopping': 'https://i.imgur.com/xvMGcP3.png',    // Ginza Loft veya Itoya
    'day12-haneda': 'https://i.imgur.com/s0Qlmt1.png',      // Odaiba Gundam veya sahil

    // 13. GÜN: 20 MART - AYRILIŞ
    'day13-depart': 'https://i.imgur.com/E1PNJRt.jpeg',      // Haneda Havalimanı son kare
    'day13-goodbye': 'https://i.imgur.com/mgpvIhk.png'      // Camdan son Japonya görüntüsü
};

// Placeholder SVG (fotoğraf yoksa gösterilir)
function getPlaceholderSVG(type = 'default') {
    const colors = {
        temple: '#fa709a',
        food: '#667eea',
        city: '#4facfe',
        park: '#38b000',
        shopping: '#ff6b6b',
        default: '#6c757d'
    };
    
    const icons = {
        temple: '⛩️',
        food: '🍜',
        city: '🏙️',
        park: '🌳',
        shopping: '🛍️',
        default: '📸'
    };
    
    const color = colors[type] || colors.default;
    const icon = icons[type] || icons.default;
    
    return `data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
            <rect width="400" height="200" fill="${color}"/>
            <text x="50%" y="50%" font-size="60" text-anchor="middle" dy=".3em" fill="white">${icon}</text>
        </svg>
    `)}`;
}

// Get image URL with fallback
function getImageUrl(key, type = 'default') {
    return customImages[key] || getPlaceholderSVG(type);
}

// ============================================
// GÜN PLANLARI - Tam 13 Gün
// ============================================
const tripDays = [
        // ==========================================
    // UÇUŞ GÜNÜ - 7 MART CUMA
    // ==========================================
    {
        id: 'flight-day',
        day: '✈️ Uçuş',
        date: '7 Mart Cuma',
        city: 'İstanbul',
        cityColor: '#e74c3c',
        activities: {
            afternoon: [
                {
                    time: '15:20',
                    title: 'İstanbul Kalkış ✈️',
                    location: 'İstanbul Havalimanı (IST)',
                    mapLink: 'https://flights.booking.com/booking/order-details/524c6be0ffa811e80f35a45c353d7a1c684246049cd1231040ca38616df49c2699354e50b146eae3883abf5de73794314a1cf477b74386f3252d1d06b5dadb9c1853e4ed0f879a5c3fdcd559c234?aid=304142&label=flights-booking-direct',
                    imageKey: 'flight-departure',
                    imageType: 'city'
                }
            ],
            evening: [
                {
                    time: '8 Mart 09:45',
                    title: 'Pekin Aktarma (Daxing)',
                    location: 'China Southern Airlines',
                    mapLink: 'https://flights.booking.com/booking/order-details/524c6be0ffa811e80f35a45c353d7a1c684246049cd1231040ca38616df49c2699354e50b146eae3883abf5de73794314a1cf477b74386f3252d1d06b5dadb9c1853e4ed0f879a5c3fdcd559c234?aid=304142&label=flights-booking-direct',
                    imageKey: 'flight-inflight',
                    imageType: 'city'
                }
            ]
        },
        food: [
            { name: 'Uçak Yemeği', place: 'China Southern', type: 'Havayolu', mapLink: 'https://goo.gl/maps/istanbul-airport' }
        ]
    },
{
        id: 'day1',
        day: '1. Gün',
        date: '8 Mart Cumartesi',
        city: 'Tokyo',
        cityColor: '#667eea',
        activities: {
            afternoon: [
                {
                    time: '14:05',
                    title: 'Haneda Varış ✈️',
                    location: 'Haneda Airport',
                    mapLink: 'https://goo.gl/maps/haneda',
                    imageKey: 'day1-haneda',
                    imageType: 'city'
                },
                {
                    time: '16:00',
                    title: 'Otele Yerleşme',
                    location: 'Shinjuku Hotel',
                    mapLink: 'https://goo.gl/maps/shinjuku',
                    imageKey: 'day1-hotel',
                    imageType: 'city'
                },
                {
                    time: '18:00',
                    title: 'İlk Japon Yemeği',
                    location: 'Omoide Yokocho',
                    mapLink: 'https://maps.app.goo.gl/6y5rtYFmRatECJid8',
                    imageKey: 'day1-dinner',
                    imageType: 'food'
                }
            ],
            evening: [
                {
                    time: '19:00',
                    title: 'The Giant 3D Cat',
                    location: 'Shinjuku',
                    mapLink: 'https://maps.app.goo.gl/tEhq2mtTRjsry4gz8',
                    imageKey: 'day1-3d-cat',
                    imageType: 'default'
                },
                {
                    time: '20:00',
                    title: 'Godzilla Head',
                    location: 'Shinjuku',
                    mapLink: 'https://maps.app.goo.gl/rpttRAzAwQnZJfBG6',
                    imageKey: 'day1-godzilla',
                    imageType: 'default'
                },
                {
                    time: '21:00',
                    title: 'Shinjuku Golden-Gai',
                    location: 'Kabukicho, Shinjuku',
                    mapLink: 'https://maps.app.goo.gl/EMsX4QJqVMcur8bw5',
                    imageKey: 'day1-golden-gai',
                    imageType: 'city'
                },
                {
                    time: '22:00',
                    title: 'Don Quijote Shinjuku',
                    location: 'Kabukicho, Shinjuku',
                    mapLink: 'https://maps.app.goo.gl/nWreKfKoBMzpXi6A6',
                    imageKey: 'day1-don',
                    imageType: 'shopping'
                }
            ]
        },
        food: [
            { name: 'Ichiran Ramen', place: 'Shinjuku, Özel kabinler', type: 'Restoran', mapLink: 'https://goo.gl/maps/ichiran' },
            { name: 'Omoide Yokocho', place: 'İzakaya sokak barları', type: 'Sokak', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' }
        ]
    },
    {
        id: 'day2',
        day: '2. Gün',
        date: '9 Mart Pazar',
        city: 'Tokyo',
        cityColor: '#667eea',
        activities: {
            morning: [
                {
                    time: '09:00',
                    title: 'Senso-ji',
                    location: 'Asakusa',
                    mapLink: 'https://maps.app.goo.gl/aDdM7DxAFy4owJN59',
                    imageKey: 'day2-sensoji',
                    imageType: 'temple'
                },
                {
                    time: '11:00',
                    title: 'Nakamise Market',
                    location: 'Asakusa',
                    mapLink: 'https://maps.app.goo.gl/cA8qXU8r25nHwV7R7',
                    imageKey: 'day2-lunch',
                    imageType: 'food'
                },
            ],
            afternoon: [
                {
                    time: '12:00',
                    title: 'Ueno Park',
                    location: 'Ueno',
                    mapLink: 'https://maps.app.goo.gl/6fwqijqdEiRp4TLH7',
                    imageKey: 'day2-ueno',
                    imageType: 'park'
                },
                {
                    time: '13:00',
                    title: 'Tokyo National Museum',
                    location: 'Ueno',
                    mapLink: 'https://maps.app.goo.gl/LZ2sMaCgfQkafjtV8',
                    imageKey: 'day2-national-museum',
                    imageType: 'default'
                },
                {
                    time: '16:00',
                    title: 'Ameyoko Bazaar',
                    location: 'Ueno',
                    mapLink: 'https://maps.app.goo.gl/K1agJMKE5woHUPWAA',
                    imageKey: 'day2-ameyoko',
                    imageType: 'food'
                }
            ],
            evening: [
                {
                    time: '17:00',
                    title: 'Akşam Yemeği',
                    location: 'Akihabara',
                    mapLink: 'https://maps.app.goo.gl/1YN58RhNfGvGvpgG7',
                    imageKey: 'day2-akihabara',
                    imageType: 'shopping'
                },
                {
                    time: '18:00',
                    title: 'Yodobashi, Super Potato, Mandarake',
                    location: 'Akihabara',
                    mapLink: 'https://maps.app.goo.gl/MhTbED5zKxVuKhKw5',
                    imageKey: 'day4-yodabashi',
                    imageType: 'shopping'
                }
            ]
        },
        food: [
            { name: 'Daikokuya Tempura', place: 'Asakusa, Geleneksel', type: 'Restoran', mapLink: 'https://goo.gl/maps/asakusa' },
            { name: 'Ameyoko Sokak Yemekleri', place: 'Takoyaki, yakitori', type: 'Sokak', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' }
        ]
    },
    {
        id: 'day3',
        day: '3. Gün',
        date: '10 Mart Pazartesi',
        city: 'Tokyo',
        cityColor: '#667eea',
        activities: {
            morning: [
                {
                    time: '09:30',
                    title: 'Meiji Jingu & Yoyogi Park',
                    location: 'Harajuku',
                    mapLink: 'https://maps.app.goo.gl/4bgZVkTgfrkFTWJz6',
                    imageKey: 'day3-meiji',
                    imageType: 'temple'
                },
                {
                    time: '11:30',
                    title: 'Takeshita Street',
                    location: 'Harajuku',
                    mapLink: 'https://maps.app.goo.gl/niMxbWF8yzNJWH9n6',
                    imageKey: 'day3-takeshita',
                    imageType: 'shopping'
                }
            ],
            afternoon: [
                {
                    time: '13:00',
                    title: 'Ōta Memorial Museum of Art / Nezu Musem',
                    location: 'Shibuya',
                    mapLink: 'https://maps.app.goo.gl/KhmK5rUjHxnxbJGa7',
                    imageKey: 'day3-museum',
                    imageType: 'city'
                },
                {
                    time: '16:00',
                    title: 'Shibuya Crossing & Sky',
                    location: 'Shibuya',
                    mapLink: 'https://maps.app.goo.gl/WZrB4LYTs6xFgJYz9',
                    imageKey: 'day3-shibuya',
                    imageType: 'city'
                }
            ],
            evening: [
                {
                    time: '18:00',
                    title: 'MEGA Don Quijote',
                    location: 'Shibuya',
                    mapLink: 'https://maps.app.goo.gl/iuiRGmzzpVUXnAPQ8',
                    imageKey: 'day3-mega-don',
                    imageType: 'shopping'
                }
            ]
        },
        food: [
            { name: 'Rainbow Crepe', place: 'Harajuku Takeshita', type: 'Cafe', mapLink: 'https://goo.gl/maps/harajuku' },
            { name: 'Shibuya Ramen', place: 'Center-gai', type: 'Restoran', mapLink: 'https://goo.gl/maps/shibuya' }
        ]
    },
    {
        id: 'day4',
        day: '4. Gün',
        date: '11 Mart Salı',
        city: 'Tokyo',
        cityColor: '#667eea',
        activities: {
            morning: [
                {
                    time: '09:00',
                    title: 'Imperial Palace Gardens',
                    location: 'Chiyoda',
                    mapLink: 'https://maps.app.goo.gl/8G8TvQEcfnQQNbJ86',
                    imageKey: 'day4-palace',
                    imageType: 'park'
                },
                {
                    time: '11:00',
                    title: 'Character Street',
                    location: 'Tokyo Station',
                    mapLink: 'https://maps.app.goo.gl/8qQWY128fvckfZYb7',
                    imageKey: 'day4-character',
                    imageType: 'shopping'
                }
            ],
            afternoon: [
                {
                    time: '13:00',
                    title: 'Mitsubishi Ichigokan Museum',
                    location: 'Chiyoda',
                    mapLink: 'https://maps.app.goo.gl/bkArW8eC95Xshtd78',
                    imageKey: 'day4-ichigokan',
                    imageType: 'default'
                },
                {
                    time: '15:00',
                    title: 'Ginza',
                    location: 'Chuo City',
                    mapLink: 'https://maps.app.goo.gl/Pn7a891mP7xXPWr57',
                    imageKey: 'day4-ginza',
                    imageType: 'shopping'
                },

            ],
            evening: [
                {
                    time: '19:00',
                    title: 'Akşam Yemeği',
                    location: 'Chuo City',
                    mapLink: 'https://goo.gl/maps/akihabara',
                    imageKey: 'day4-dinner',
                    imageType: 'food'
                }
            ]
        },
        food: [
            { name: 'CoCo Curry', place: 'Japon curry rice', type: 'Restoran', mapLink: 'https://goo.gl/maps/akihabara' },
            { name: 'Maid Cafe (Opsiyonel)', place: 'Tema kafe', type: 'Cafe', mapLink: 'https://goo.gl/maps/akihabara' }
        ]
    },
    {
        id: 'day5',
        day: '5. Gün',
        date: '12 Mart Çarşamba',
        city: 'Kyoto',
        cityColor: '#fa709a',
        activities: {
            morning: [
                {
                    time: '09:00',
                    title: 'Shinkansen Tokyo → Kyoto',
                    location: 'Tokyo Station',
                    mapLink: 'https://www.klook.com/japan-rail/shinkansen/',
                    imageKey: 'day5-shinkansen',
                    imageType: 'city'
                }
            ],
            afternoon: [
                {
                    time: '12:00',
                    title: 'Kyoto Varış',
                    location: 'Kyoto Station',
                    mapLink: 'https://goo.gl/maps/kyotostation',
                    imageKey: 'day5-kyoto',
                    imageType: 'city'
                },
                {
                    time: '14:00',
                    title: 'Nishiki Market',
                    location: 'Nakagyo-ku',
                    mapLink: 'https://maps.app.goo.gl/uzk1QkbY3fv8oHTE8',
                    imageKey: 'day5-nishiki',
                    imageType: 'shopping'
                },
                {
                    time: '16:00',
                    title: 'Yasaka Shrine',
                    location: 'Gion',
                    mapLink: 'https://maps.app.goo.gl/tcn7S44CSsq9uQnh6',
                    imageKey: 'day5-gion',
                    imageType: 'temple'
                }
            ],
            evening: [
                {
                    time: '20:00',
                    title: 'Pontocho Barlar',
                    location: 'Pontocho',
                    mapLink: 'https://maps.app.goo.gl/jNKZAsBVuijht4ty9',
                    imageKey: 'day5-pontocho',
                    imageType: 'food'
                }
            ]
        },
        food: [
            { name: 'Ekiben (Tren)', place: 'Shinkansen kutu yemek', type: 'Sokak', mapLink: 'https://goo.gl/maps/tokyostation' },
            { name: 'Nishiki Market', place: 'Deniz ürünleri, street food', type: 'Market', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' },
            { name: 'Pontocho Riverside', place: 'Nehir kenarı restoranlar', type: 'Restoran', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' }
        ]
    },
    {
        id: 'day6',
        day: '6. Gün',
        date: '13 Mart Perşembe',
        city: 'Kyoto',
        cityColor: '#fa709a',
        activities: {
            morning: [
                {
                    time: '08:30',
                    title: 'Kinkaku-ji Altın Tapınak',
                    location: 'Kita-ku',
                    mapLink: 'https://maps.app.goo.gl/mHDFi1P28rngtPRh6',
                    imageKey: 'day6-golden',
                    imageType: 'temple'
                },
                {
                    time: '11:00',
                    title: 'Hirano Shrine',
                    location: 'Kita-ku',
                    mapLink: 'https://maps.app.goo.gl/8SAGc9JhqNKjU8oZ7',
                    imageKey: 'day6-shrine',
                    imageType: 'temple'
                }
            ],
            afternoon: [
                {
                    time: '13:00',
                    title: 'Arashiyama Bambu & Tenryu-ji',
                    location: 'Arashiyama',
                    mapLink: 'https://maps.app.goo.gl/LNbqCuJiwSt5YGVL8',
                    imageKey: 'day6-bamboo',
                    imageType: 'park'
                },
                {
                    time: '15:00',
                    title: 'Zen Coffee',
                    location: 'Kyoto',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day6-coffee',
                    imageType: 'food'
                },

            ],
            evening: [
                {
                    time: '19:00',
                    title: 'Akşam Yemeği',
                    location: 'Kyoto Center',
                    mapLink: 'https://goo.gl/maps/kyoto',
                    imageKey: 'day6-dinner',
                    imageType: 'food'
                },
            ]
        },
        food: [
            { name: 'Tofu Kaiseki', place: 'Arashiyama, Geleneksel', type: 'Restoran', mapLink: 'https://goo.gl/maps/arashiyama' },
            { name: 'Zen Coffee', place: 'Specialty coffee', type: 'Cafe', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' }
        ]
    },
    {
        id: 'day7',
        day: '7. Gün',
        date: '14 Mart Cuma',
        city: 'Kyoto',
        cityColor: '#fa709a',
        activities: {
            morning: [
                {
                    time: '07:30',
                    title: 'Fushimi Inari (Erken gidin!)',
                    location: 'Fushimi-ku',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day7-fushimi',
                    imageType: 'temple'
                },
                {
                    time: '11:00',
                    title: 'Kiyomizu-dera',
                    location: 'Kiyomizu',
                    mapLink: 'https://maps.app.goo.gl/2tQJp9wUttdWokQs7',
                    imageKey: 'day7-kiyomizu',
                    imageType: 'temple'
                }
            ],
            afternoon: [
                {
                    time: '13:00',
                    title: 'Ninenzaka & Sannenzaka',
                    location: 'Ninenzaka',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day7-sannenzaka',
                    imageType: 'food'
                },
                {
                    time: '16:00',
                    title: 'Nanzen-ji',
                    location: 'Nanzen-ji',
                    mapLink: 'https://maps.app.goo.gl/JiTRXJX8ihEbrhM99',
                    imageKey: 'day7-silver',
                    imageType: 'temple'
                },
                {
                    time: '18:00',
                    title: 'Hario Cafe',
                    location: 'Gion',
                    mapLink: 'https://maps.app.goo.gl/Ktc649MNDkPcf6eT8',
                    imageKey: 'day5-hario',
                    imageType: 'temple'
                }
            ],
            evening: [
                {
                    time: '19:00',
                    title: 'Gion Akşam Gezisi',
                    location: 'Gion',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day7-dinner',
                    imageType: 'food'
                }
            ]
        },
        food: [
            { name: 'Inari Sushi', place: 'Fushimi, Tofu cepleri', type: 'Sokak', mapLink: 'https://goo.gl/maps/fushimi' },
            { name: 'Matcha Dondurma', place: 'Sannenzaka', type: 'Cafe', mapLink: 'https://goo.gl/maps/sannenzaka' },
            { name: 'Gion Kaiseki', place: 'Çok çeşitli geleneksel', type: 'Restoran', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' }
        ]
    },
    {
        id: 'day8',
        day: '8. Gün',
        date: '15 Mart Cumartesi',
        city: 'Nara',
        cityColor: '#38b000',
        activities: {
            morning: [
                {
                    time: '09:00',
                    title: 'Kyoto → Nara Tren',
                    location: 'Kyoto Station',
                    mapLink: 'https://goo.gl/maps/kyotostation',
                    imageKey: 'day8-train',
                    imageType: 'city'
                },
                {
                    time: '10:00',
                    title: 'Nara Park & Todai-ji',
                    location: 'Nara Park',
                    mapLink: 'https://maps.app.goo.gl/Yu3DaLU8y7ic74rk7',
                    imageKey: 'day8-nara',
                    imageType: 'park'
                }
            ],
            afternoon: [
                {
                    time: '13:00',
                    title: 'Nara Öğle',
                    location: 'Nara',
                    mapLink: 'https://maps.app.goo.gl/MwurHkRedjGwVghx9',
                    imageKey: 'day8-lunch',
                    imageType: 'food'
                },
                {
                    time: '15:00',
                    title: 'Nara → Osaka Tren',
                    location: 'Nara Station',
                    mapLink: 'https://goo.gl/maps/narastation',
                    imageKey: 'day8-osaka-train',
                    imageType: 'city'
                },
                {
                    time: '17:00',
                    title: 'Osaka Otele Yerleşme',
                    location: 'Osaka Hotel',
                    mapLink: 'https://goo.gl/maps/osaka',
                    imageKey: 'day8-osaka',
                    imageType: 'city'
                }
            ],
            evening: [
                {
                    time: '18:00',
                    title: 'Shinsaibashi-Suji Shopping Street',
                    location: 'Shinsaibashi-Suji',
                    mapLink: 'https://maps.app.goo.gl/aFUSZnyfYx1nSUZF9',
                    imageKey: 'day8-shinsaibashi',
                    imageType: 'city'
                },
                {
                    time: '19:00',
                    title: 'Dotonbori Neonlar!',
                    location: 'Dotonbori',
                    mapLink: 'https://maps.app.goo.gl/bc8sWnrVaxgGtBvh6',
                    imageKey: 'day8-dotonbori',
                    imageType: 'city'
                }
            ]
        },
        food: [
            { name: 'Kakinoha Sushi', place: 'Nara, Persimmon yaprağı', type: 'Restoran', mapLink: 'https://goo.gl/maps/nara' },
            { name: 'Takoyaki', place: 'Dotonbori Kukuru', type: 'Sokak', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' },
            { name: 'Okonomiyaki', place: 'Chibo/Mizuno', type: 'Restoran', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' }
        ]
    },
    {
        id: 'day9',
        day: '9. Gün',
        date: '16 Mart Pazar',
        city: 'Osaka',
        cityColor: '#4facfe',
        activities: {
            morning: [
                {
                    time: '09:30',
                    title: 'Osaka Castle',
                    location: 'Chuo-ku',
                    mapLink: 'https://maps.app.goo.gl/Lfp6d83v5gVB51Am8',
                    imageKey: 'day9-castle',
                    imageType: 'temple'
                }
            ],
            afternoon: [
                {
                    time: '12:00',
                    title: 'Kuromon Market',
                    location: 'Namba',
                    mapLink: 'https://maps.app.goo.gl/qnNp6JRCuHyfhVEH6',
                    imageKey: 'day9-kuromon',
                    imageType: 'shopping'
                },
                {
                    time: '14:00',
                    title: 'Namba Yasaka Jinja',
                    location: 'Namba',
                    mapLink: 'https://maps.app.goo.gl/ji2BYDYNTuTgrbj5A',
                    imageKey: 'day9-yasaka',
                    imageType: 'temple'
                },
                {
                    time: '16:00',
                    title: 'Shinsekai & Tsutenkaku',
                    location: 'Shinsekai',
                    mapLink: 'https://maps.app.goo.gl/9xnvDdSVn1JqSqXj9',
                    imageKey: 'day9-shinsekai',
                    imageType: 'city'
                }
            ],
            evening: [
                {
                    time: '20:00',
                    title: 'Umeda Sky Building',
                    location: 'Umeda',
                    mapLink: 'https://maps.app.goo.gl/TyB4UX6cCmmmzwzPA',
                    imageKey: 'day9-umeda',
                    imageType: 'city'
                }
            ]
        },
        food: [
            { name: 'Kuromon Market Fresh', place: 'Tuna, oyster, fugu', type: 'Market', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' },
            { name: 'Kushikatsu Daruma', place: 'Shinsekai, Kızartma', type: 'Restoran', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' }
        ]
    },
    {
        id: 'day10',
        day: '10. Gün',
        date: '17 Mart Pazartesi',
        city: 'Tokyo',
        cityColor: '#667eea',
        activities: {
            morning: [
                {
                    time: '11:00',
                    title: 'Shinkansen Osaka → Tokyo 🚄',
                    location: 'Shin-Osaka → Tokyo Station',
                    mapLink: 'https://www.klook.com/japan-rail/shinkansen/',
                    imageKey: 'day10-shinkansen',
                    imageType: 'city'
                }
            ],
            afternoon: [
                {
                    time: '14:00',
                    title: 'Otele Yerleşme',
                    location: 'Shinjuku Hotel',
                    mapLink: 'https://goo.gl/maps/shinjuku',
                    imageKey: 'day10-hotel',
                    imageType: 'city'
                },
                {
                    time: '16:00',
                    title: 'TeamLab Borderless ✨',
                    location: 'Azabudai Hills',
                    mapLink: 'https://maps.app.goo.gl/teamlab-borderless',
                    imageKey: 'day10-teamlab',
                    imageType: 'city'
                }
            ],
            evening: [
                {
                    time: '19:00',
                    title: 'Roppongi Hills Mori Tower',
                    location: 'Roppongi - Tokyo panorama',
                    mapLink: 'https://maps.app.goo.gl/roppongi-hills',
                    imageKey: 'day10-roppongi',
                    imageType: 'city'
                },
                {
                    time: '21:00',
                    title: 'Akşam Yemeği',
                    location: 'Roppongi / Azabu',
                    mapLink: 'https://goo.gl/maps/roppongi',
                    imageKey: 'day10-dinner',
                    imageType: 'food'
                }
            ]
        },
        food: [
            { name: 'Gonpachi Nishi-Azabu', place: 'Kill Bill restoranı, Roppongi', type: 'Restoran', mapLink: 'https://goo.gl/maps/gonpachi' },
            { name: 'Ichiran Ramen', place: 'Roppongi şubesi', type: 'Restoran', mapLink: 'https://goo.gl/maps/ichiran' }
        ]
    },
    {
        id: 'day11',
        day: '11. Gün',
        date: '18 Mart Salı',
        city: 'Tokyo',
        cityColor: '#667eea',
        activities: {
            morning: [
                {
                    time: '10:00',
                    title: 'Serbest Zaman / Kaçırdığınız Yerler',
                    location: 'Tokyo',
                    mapLink: 'https://goo.gl/maps/tokyo',
                    imageKey: 'day11-free',
                    imageType: 'city'
                }
            ],
            afternoon: [
                {
                    time: '14:00',
                    title: 'Tokyo Tower',
                    location: 'Minato City - İkonik manzara',
                    mapLink: 'https://maps.app.goo.gl/tokyotower',
                    imageKey: 'day11-tower',
                    imageType: 'city'
                },
                {
                    time: '16:30',
                    title: 'Zojo-ji Temple',
                    location: 'Tokyo Tower yanı',
                    mapLink: 'https://maps.app.goo.gl/zojoji',
                    imageKey: 'day11-zojoji',
                    imageType: 'temple'
                }
            ],
            evening: [
                {
                    time: '18:30',
                    title: 'Shinjuku Son Gezinti',
                    location: 'Kabukicho / Omoide Yokocho',
                    mapLink: 'https://goo.gl/maps/shinjuku',
                    imageKey: 'day11-shinjuku',
                    imageType: 'city'
                },
                {
                    time: '20:00',
                    title: 'Akşam Yemeği',
                    location: 'Shinjuku',
                    mapLink: 'https://goo.gl/maps/shinjuku',
                    imageKey: 'day11-dinner',
                    imageType: 'food'
                }
            ]
        },
        food: [
            { name: 'Tokyo Ramen Street', place: '8 farklı ramen dükkanı', type: 'Food Court', mapLink: 'https://goo.gl/maps/tokyo-station' },
            { name: 'Omoide Yokocho', place: 'Shinjuku izakaya sokağı', type: 'Sokak', mapLink: 'https://goo.gl/maps/omoide' }
        ]
    },
    {
        id: 'day12',
        day: '12. Gün',
        date: '19 Mart Perşembe',
        city: 'Tokyo',
        cityColor: '#667eea',
        activities: {
            morning: [
                {
                    time: '10:00',
                    title: 'Son Alışveriş Turu',
                    location: 'Ginza Loft / Itoya / Akihabara',
                    mapLink: 'https://goo.gl/maps/ginza',
                    imageKey: 'day12-shopping',
                    imageType: 'shopping'
                }
            ],
            afternoon: [
                {
                    time: '15:00',
                    title: 'Odaiba Sahil Gezisi',
                    location: 'Odaiba Marine Park',
                    mapLink: 'https://goo.gl/maps/odaiba',
                    imageKey: 'day12-haneda',
                    imageType: 'city'
                }
            ],
            evening: [
            ]
        },
        food: [
            { name: 'Kushiyaki', place: 'Yerel bir izakaya', type: 'Sokak', mapLink: 'https://goo.gl/maps/tokyo' }
        ]
    },
    {
        id: 'day13',
        day: '13. Gün',
        date: '20 Mart Cuma',
        city: 'İstanbul',
        cityColor: '#2c3e50',
        activities: {
            morning: [
                {
                    time: '07:00',
                    title: 'Havalimanına Hareket',
                    location: 'Haneda',
                    mapLink: 'https://goo.gl/maps/haneda',
                    imageKey: 'day13-depart',
                    imageType: 'city'
                },
                {
                    time: '10:45',
                    title: 'さようなら日本！✈️',
                    location: 'Haneda Airport',
                    mapLink: 'https://goo.gl/maps/haneda',
                    imageKey: 'day13-goodbye',
                    imageType: 'city'
                }
            ]
        },
        food: [
            { name: 'Haneda Duty Free', place: 'Son alışveriş!', type: 'Havalimanı', mapLink: 'https://goo.gl/maps/haneda' }
        ]
    }
];

// ============================================
// MODAL KATEGORİLER
// ============================================
const categories = {
    food: {
        emoji: '🍜',
        title: 'Japon Mutfağı',
        subtitle: 'Unutulmaz lezzetler',
        items: [
            { name: 'Ramen', location: 'Ichiran, Ippudo', desc: 'Zengin buluyon, noodle. Tonkotsu, shoyu, miso çeşitleri.', mapLink: 'https://goo.gl/maps/ichiran' },
            { name: 'Sushi & Sashimi', location: 'Ginza, Tsukiji', desc: 'Taze balık. Omakase (şefin seçimi) önerilir.', mapLink: 'https://goo.gl/maps/ginza' },
            { name: 'Takoyaki', location: 'Dotonbori, Osaka', desc: 'Ahtapot topları, bonito, sos. Street food!', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' },
            { name: 'Okonomiyaki', location: 'Osaka', desc: 'Japon pizza. Lahana, et, deniz ürünleri.', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' },
            { name: 'Tempura', location: 'Asakusa', desc: 'Kızarmış deniz ürünleri ve sebze. Hafif, çıtır.', mapLink: 'https://goo.gl/maps/asakusa' },
            { name: 'Kaiseki', location: 'Kyoto', desc: 'Çok çeşitli geleneksel yemek. Sanat gibi sunulan.', mapLink: 'https://goo.gl/maps/kyoto' }
        ]
    },
    temples: {
        emoji: '⛩️',
        title: 'Tapınaklar & Kutsal Yerler',
        subtitle: 'Japonya\'nın manevi mirası',
        items: [
            { name: 'Senso-ji (Tokyo)', location: 'Asakusa', desc: 'Tokyo\'nun en eski tapınağı (628 AD). Kaminarimon kapısı ikonik.', mapLink: 'https://goo.gl/maps/sensoji' },
            { name: 'Meiji Jingu (Tokyo)', location: 'Harajuku', desc: 'Dev orman içinde Shinto tapınağı. Geleneksel düğünler.', mapLink: 'https://goo.gl/maps/meijijingu' },
            { name: 'Zojo-ji (Tokyo)', location: 'Tokyo Tower yanı', desc: 'Tokyo Tower ile muhteşem manzara! Budist tapınak kompleksi.', mapLink: 'https://maps.app.goo.gl/zojoji' },
            { name: 'Kinkaku-ji (Kyoto)', location: 'Kita-ku', desc: 'ALTIN kaplama Zen tapınağı. Sabah 08:30 erken gidin!', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' },
            { name: 'Fushimi Inari (Kyoto)', location: 'Fushimi-ku', desc: '10,000+ kırmızı torii. 2-3 saat tırmanış. Sabah 07:30!', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' },
            { name: 'Kiyomizu-dera (Kyoto)', location: 'Higashiyama', desc: 'Ahşap teraslı tapınak. Muhteşem Kyoto manzarası.', mapLink: 'https://goo.gl/maps/kiyomizudera' }
        ]
    },
    culture: {
        emoji: '🎎',
        title: 'Geleneksel Kültür',
        subtitle: 'Japonya\'nın ruhu',
        items: [
            { name: 'Geyşa Kültürü', location: 'Gion, Kyoto', desc: '17:00-18:00 arası Maiko/Geiko görebilirsiniz. Saygılı olun!', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' },
            { name: 'Bambu Ormanı', location: 'Arashiyama', desc: 'İkonik bambu yürüyüş yolu. Sabah erken sessiz ve huzurlu.', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' },
            { name: 'Çay Töreni', location: 'Kyoto', desc: 'Matcha hazırlama sanatı. Zen felsefesi, meditasyon.', mapLink: 'https://goo.gl/maps/kyoto' },
            { name: 'Onsen (Kaplıca)', location: 'Hakone, çeşitli', desc: 'Japon hamamı. Çıplak girilir, havlu yasak!', mapLink: 'https://goo.gl/maps/hakone' }
        ]
    },
    nightlife: {
        emoji: '🌃',
        title: 'Gece Hayatı',
        subtitle: 'Neon ışıkları ve eğlence',
        items: [
            { name: 'Shibuya Crossing', location: 'Shibuya', desc: 'Gece neon ışıkları. Clublar, karaoke, eğlence merkezi.', mapLink: 'https://goo.gl/maps/shibuya' },
            { name: 'Kabukicho', location: 'Shinjuku', desc: 'Golden Gai barları (50 küçük bar). Robot Restaurant!', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' },
            { name: 'Roppongi Hills', location: 'Roppongi', desc: 'Gece manzarası, lüks barlar, uluslararası atmosfer. Mori Tower panorama!', mapLink: 'https://maps.app.goo.gl/roppongi' },
            { name: 'Dotonbori', location: 'Osaka', desc: 'Glico Running Man, yengeç tabelası. Neon cennet!', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' },
            { name: 'Pontocho', location: 'Kyoto', desc: 'Dar sokak, geleneksel izakaya barları. Nehir kenarı.', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' },
            { name: 'White Door Speakeasy', location: 'Shibuya', desc: 'Gizli kokteyl barı. REZERVASYON ŞİDDETLE önerilir!', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' }
        ]
    },
    shopping: {
        emoji: '🛍️',
        title: 'Alışveriş Cennetleri',
        subtitle: 'Anime\'den lükse her şey',
        items: [
            { name: 'Yodobashi Akiba', location: 'Akihabara', desc: '9 KAT elektronik! Kamera, PC, oyun. Tax-free.', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' },
            { name: 'Akihabara Anime', location: 'Tokyo', desc: 'Surugaya, Mandarake, Animate. Super Potato retro games!', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' },
            { name: 'Harajuku', location: 'Tokyo', desc: 'Takeshita Street kawaii. Omotesando lüks butikler.', mapLink: 'https://goo.gl/maps/harajuku' },
            { name: 'Nakano Broadway', location: 'Tokyo', desc: 'Akihabara alternatifi. Vintage, collectibles, anime.', mapLink: 'https://goo.gl/maps/nakano' },
            { name: 'Nishiki Market', location: 'Kyoto', desc: '"Kyoto\'nun mutfağı" - 400 yıllık market. Yiyecek cennet!', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' }
        ]
    },
    transport: {
        emoji: '🚄',
        title: 'Ulaşım & JR Pass',
        subtitle: '300+ km/h bullet train deneyimi',
        items: [
            { name: 'Shinkansen', location: 'Tokyo ↔ Kyoto ↔ Osaka', desc: '300+ km/h! Pencere koltuğu Mount Fuji için. Ekiben (tren yemeği) alın!', mapLink: 'https://goo.gl/maps/tokyostation' },
            { name: 'JR Pass (7 Gün)', location: 'Tüm Japonya', desc: '~₺12,000. Shinkansen sınırsız! Voucher Türkiye\'den al.', mapLink: 'https://www.jrpass.com' },
            { name: 'IC Kart (Suica/Pasmo)', location: 'Her yerde', desc: 'Metro, tren, konbini. Havalimanında 2000 yen yükle.', mapLink: 'https://goo.gl/maps/haneda' },
            { name: 'Lokal Tren', location: 'Kyoto, Osaka', desc: 'JR/Private lines. Google Maps kullan, kolay!', mapLink: 'https://goo.gl/maps/kyoto' }
        ]
    },
    modern: {
        emoji: '✨',
        title: 'Modern Tokyo Deneyimleri',
        subtitle: 'Teknoloji, sanat ve gökdelenler',
        items: [
            { name: 'teamLab Borderless', location: 'Azabudai Hills', desc: 'Dünyanın en iyi dijital sanat müzesi! 2-3 saat ayırın. Bilet önceden alın (teamlab.art).', mapLink: 'https://maps.app.goo.gl/teamlab' },
            { name: 'Tokyo Tower', location: 'Minato City', desc: '333m yükseklik. İkonik Tokyo manzarası. Gece ışıklandırması muhteşem!', mapLink: 'https://maps.app.goo.gl/tokyotower' },
            { name: 'Roppongi Hills', location: 'Roppongi', desc: 'Mori Tower gözlem katı. 360° Tokyo panorama. Gece manzarası önerilir.', mapLink: 'https://maps.app.goo.gl/roppongi' },
            { name: 'Shibuya Sky', location: 'Shibuya', desc: '230m yükseklikte açık teras. Shibuya Crossing\'i tepeden görebilirsiniz!', mapLink: 'https://goo.gl/maps/shibuya-sky' },
            { name: 'Tokyo Metropolitan Gov', location: 'Shinjuku', desc: 'ÜCRETSİZ panorama! 202m yükseklik. 23:00\'e kadar açık.', mapLink: 'https://maps.app.goo.gl/tokyo-metro-gov' }
        ]
    }
};

// ============================================
// COUNTDOWN TIMER
// ============================================
function updateCountdown() {
    const now = new Date();
    const distance = TRIP_START - now;
    
    if (distance < 0) {
        document.getElementById('countdownWrapper').style.display = 'none';
        return;
    }
    
    const d = Math.floor(distance / (1000*60*60*24));
    const h = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const m = Math.floor((distance % (1000*60*60)) / (1000*60));
    const s = Math.floor((distance % (1000*60)) / 1000);
    
    document.getElementById('days').textContent = String(d).padStart(2, '0');
    document.getElementById('hours').textContent = String(h).padStart(2, '0');
    document.getElementById('minutes').textContent = String(m).padStart(2, '0');
    document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}

// ============================================
// RENDER DAYS
// ============================================
function renderDays(filter = 'all') {
    const container = document.getElementById('daysContainer');
    container.innerHTML = '';
    
    tripDays.forEach((day, idx) => {
        if (filter !== 'all' && day.city.toLowerCase() !== filter.toLowerCase()) return;
        
        const card = document.createElement('div');
        card.className = 'day-card';
        card.style.setProperty('--city-color', day.cityColor);
        card.style.animationDelay = `${idx * 0.1}s`;
        
        let html = '';
        const periods = ['morning', 'afternoon', 'evening', 'all'];
        const labels = { 
            morning: '🌅 Sabah', 
            afternoon: '☀️ Öğleden Sonra', 
            evening: '🌙 Akşam', 
            all: '📅 Tüm Gün' 
        };
        
        periods.forEach(period => {
            if (!day.activities[period]) return;
            html += `<div class="time-column"><div class="column-header">${labels[period]}</div>`;
            day.activities[period].forEach(act => {
                const imageUrl = getImageUrl(act.imageKey, act.imageType);
                html += `
                    <div class="activity-item">
                        <img src="${imageUrl}" alt="${act.title}" class="activity-image" loading="lazy">
                        <div class="activity-time">${act.time}</div>
                        <div class="activity-title">${act.title}</div>
                        <div class="activity-location">📍 ${act.location}</div>
                        <a href="${act.mapLink}" target="_blank" class="activity-map-link">Haritada Gör →</a>
                    </div>
                `;
            });
            html += '</div>';
        });
        
        // Food suggestions
        let foodHTML = '';
        if (day.food && day.food.length > 0) {
            foodHTML = '<div class="food-suggestions"><div class="food-header">🍽️ Bu Gün Ne Yenir?</div>';
            day.food.forEach(f => {
                foodHTML += `
                    <div class="food-item">
                        <div class="food-name">${f.name}</div>
                        <div class="food-place">📍 ${f.place}</div>
                        <span class="food-type">${f.type}</span>
                        <a href="${f.mapLink}" target="_blank" class="food-link">Haritada Gör →</a>
                    </div>
                `;
            });
            foodHTML += '</div>';
        }
        
        // Günlük link butonu - sadece day1-day13 için (flight-day hariç)
        let journalLink = '';
        if (day.id.startsWith('day') && day.id !== 'flight-day') {
            const dayNumber = day.id.replace('day', '');
            journalLink = `
                <div class="day-journal-link">
                    <a href="days/day${dayNumber.padStart(2, '0')}.html" class="journal-button">
                        📖 Günlüğü Oku
                    </a>
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="day-header">
                <div class="day-title">${day.day}</div>
                <div class="day-subtitle">${day.date}</div>
                <div class="day-meta">
                    <span class="meta-item">📍 ${day.city}</span>
                </div>
            </div>
            <div class="timeline-grid">${html}</div>
            ${foodHTML}
            ${journalLink}
        `;
        
        container.appendChild(card);
    });
}

// ============================================
// FILTERS
// ============================================
function setupFilters() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderDays(this.getAttribute('data-city'));
        });
    });
}

// ============================================
// MODAL SYSTEM
// ============================================
function openModal(cat) {
    const modal = document.getElementById('categoryModal');
    const body = document.getElementById('modalBody');
    const data = categories[cat];
    
    let itemsHTML = '';
    data.items.forEach(item => {
        itemsHTML += `
            <div class="modal-item">
                <h4>${item.name}</h4>
                <div class="modal-item-location">📍 ${item.location}</div>
                <p>${item.desc}</p>
                <a href="${item.mapLink}" target="_blank" class="modal-item-link">Haritada Gör →</a>
            </div>
        `;
    });
    
    body.innerHTML = `
        <div class="modal-header">
            <div class="modal-emoji">${data.emoji}</div>
            <h2 class="modal-title">${data.title}</h2>
            <p class="modal-subtitle">${data.subtitle}</p>
        </div>
        <div class="modal-items">${itemsHTML}</div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(e) {
    if (!e || e.target.id === 'categoryModal') {
        document.getElementById('categoryModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ESC key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
    renderDays();
    setupFilters();
});

console.log('%c🗾 Japonya 2026 Gezi Planı', 'font-size:24px;font-weight:bold;color:#d32f2f');
console.log('%c📸 Fotoğrafları customImages objesine ekleyin!', 'font-size:12px;color:#667eea');
console.log('%cTasarım: Yuzi | Mevy', 'font-size:10px;color:#999');
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
    'flight-departure': '',
    'flight-inflight': '',
    
// 0. GÜN: TOKYO GELİŞ
    'day1-haneda': 'https://i.imgur.com/kppQHPL.png',
    'day1-hotel': '',
    'day1-godzilla': 'https://i.imgur.com/5TBrpdX.jpeg',
    'day1-dinner': 'https://i.imgur.com/qc8wgKP.png',

    // 1. GÜN: ASAKUSA & UENO
    'day2-sensoji': 'https://i.imgur.com/X8I9O7p.png',
    'day2-lunch': 'https://i.imgur.com/J5jCVv2.png',
    'day2-ueno': 'https://i.imgur.com/xDygxs2.png',
    'day2-ameyoko': 'https://i.imgur.com/4u1tCWM.png',
    'day2-dinner': 'https://i.imgur.com/MWKx4nM.jpeg',

    // 2. GÜN: HARAJUKU & SHIBUYA
    'day3-meiji': '',
    'day3-harajuku': '',
    'day3-teamlab': '',
    'day3-shibuya': '',
    'day3-bar': '',

    // 3. GÜN: AKIHABARA
    'day4-palace': '',
    'day4-station': '',
    'day4-lunch': '',
    'day4-akiba': '',
    'day4-dinner': '',

    // 4. GÜN: KYOTO GEÇİŞ
    'day5-shinkansen': '',
    'day5-kyoto': '',
    'day5-nishiki': '',
    'day5-gion': '',
    'day5-pontocho': '',

    // 5. GÜN: ARASHIYAMA
    'day6-golden': '',
    'day6-bamboo': '',
    'day6-lunch': '',
    'day6-monkey': '',
    'day6-coffee': '',
    'day6-dinner': '',

    // 6. GÜN: TAPINAKLAR
    'day7-fushimi': '',
    'day7-kiyomizu': '',
    'day7-sannenzaka': '',
    'day7-silver': '',
    'day7-dinner': '',

    // 7. GÜN: NARA & OSAKA
    'day8-train': '',
    'day8-nara': '',
    'day8-lunch': '',
    'day8-osaka-train': '',
    'day8-osaka': '',
    'day8-dotonbori': '',

    // 8. GÜN: OSAKA KALE & MODERN
    'day9-castle': '',
    'day9-kuromon': '',
    'day9-yasaka': '',
    'day9-shinsekai': '',
    'day9-umeda': '',

    // 9-11. GÜNLER: SERBEST ZAMAN
    'day10-12-nakano': '',
    'day10-12-explore': '',
    'day10-12-shopping': '',
    'day10-12-return': '',

    // 12. GÜN: AYRILIŞ
    'day13-depart': '',
    'day13-goodbye': ''
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
                    mapLink: 'https://goo.gl/maps/istanbul-airport',
                    imageKey: 'flight-departure',
                    imageType: 'city'
                }
            ],
            evening: [
                {
                    time: '16s 45dk',
                    title: 'Uçuş (1 aktarma)',
                    location: 'China Southern Airlines',
                    mapLink: 'https://www.flychina.com',
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
                    title: 'Godzilla Head & Kabukicho',
                    location: 'Kabukicho, Shinjuku',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day1-godzilla',
                    imageType: 'city'
                }
            ],
            evening: [
                {
                    time: '20:00',
                    title: 'İlk Japon Yemeği',
                    location: 'Omoide Yokocho',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day1-dinner',
                    imageType: 'food'
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
                    title: 'Senso-ji & Nakamise',
                    location: 'Asakusa',
                    mapLink: 'https://goo.gl/maps/sensoji',
                    imageKey: 'day2-sensoji',
                    imageType: 'temple'
                }
            ],
            afternoon: [
                {
                    time: '12:00',
                    title: 'Öğle - Tempura',
                    location: 'Asakusa',
                    mapLink: 'https://goo.gl/maps/asakusa',
                    imageKey: 'day2-lunch',
                    imageType: 'food'
                },
                {
                    time: '14:00',
                    title: 'Ueno Park & Museum',
                    location: 'Ueno',
                    mapLink: 'https://goo.gl/maps/uenopark',
                    imageKey: 'day2-ueno',
                    imageType: 'park'
                },
                {
                    time: '17:00',
                    title: 'Ameyoko Bazaar',
                    location: 'Ueno',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day2-ameyoko',
                    imageType: 'shopping'
                }
            ],
            evening: [
                {
                    time: '19:00',
                    title: 'Akşam Yemeği',
                    location: 'Ueno',
                    mapLink: 'https://goo.gl/maps/ueno',
                    imageKey: 'day2-dinner',
                    imageType: 'food'
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
                    mapLink: 'https://goo.gl/maps/meijijingu',
                    imageKey: 'day3-meiji',
                    imageType: 'temple'
                },
                {
                    time: '11:30',
                    title: 'Takeshita Street',
                    location: 'Harajuku',
                    mapLink: 'https://goo.gl/maps/harajuku',
                    imageKey: 'day3-harajuku',
                    imageType: 'shopping'
                }
            ],
            afternoon: [
                {
                    time: '14:00',
                    title: 'teamLab Borderless',
                    location: 'Azabudai Hills',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day3-teamlab',
                    imageType: 'city'
                },
                {
                    time: '17:00',
                    title: 'Shibuya Crossing & Sky',
                    location: 'Shibuya',
                    mapLink: 'https://goo.gl/maps/shibuya',
                    imageKey: 'day3-shibuya',
                    imageType: 'city'
                }
            ],
            evening: [
                {
                    time: '20:00',
                    title: 'White Door Speakeasy',
                    location: 'Shibuya',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day3-bar',
                    imageType: 'city'
                }
            ]
        },
        food: [
            { name: 'Rainbow Crepe', place: 'Harajuku Takeshita', type: 'Cafe', mapLink: 'https://goo.gl/maps/harajuku' },
            { name: 'Shibuya Ramen', place: 'Center-gai', type: 'Restoran', mapLink: 'https://goo.gl/maps/shibuya' },
            { name: 'White Door Cocktails', place: 'Craft drinks', type: 'Bar', mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5' }
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
                    mapLink: 'https://goo.gl/maps/imperialpalace',
                    imageKey: 'day4-palace',
                    imageType: 'park'
                },
                {
                    time: '11:00',
                    title: 'Tokyo Station & Character Street',
                    location: 'Tokyo Station',
                    mapLink: 'https://goo.gl/maps/tokyostation',
                    imageKey: 'day4-station',
                    imageType: 'shopping'
                }
            ],
            afternoon: [
                {
                    time: '13:00',
                    title: 'Akihabara Öğle',
                    location: 'Akihabara',
                    mapLink: 'https://goo.gl/maps/akihabara',
                    imageKey: 'day4-lunch',
                    imageType: 'food'
                },
                {
                    time: '14:00',
                    title: 'Yodobashi, Super Potato, Mandarake',
                    location: 'Akihabara',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day4-akiba',
                    imageType: 'shopping'
                }
            ],
            evening: [
                {
                    time: '20:00',
                    title: 'Akşam Yemeği',
                    location: 'Akihabara',
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
                    mapLink: 'https://goo.gl/maps/tokyostation',
                    imageKey: 'day5-shinkansen',
                    imageType: 'city'
                }
            ],
            afternoon: [
                {
                    time: '12:00',
                    title: 'Kyoto Varış & Öğle',
                    location: 'Kyoto Station',
                    mapLink: 'https://goo.gl/maps/kyotostation',
                    imageKey: 'day5-kyoto',
                    imageType: 'city'
                },
                {
                    time: '14:00',
                    title: 'Nishiki Market',
                    location: 'Nakagyo-ku',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day5-nishiki',
                    imageType: 'shopping'
                },
                {
                    time: '16:00',
                    title: 'Gion & Yasaka Shrine',
                    location: 'Gion',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day5-gion',
                    imageType: 'temple'
                }
            ],
            evening: [
                {
                    time: '19:00',
                    title: 'Pontocho Akşam',
                    location: 'Pontocho',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
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
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day6-golden',
                    imageType: 'temple'
                },
                {
                    time: '11:00',
                    title: 'Arashiyama Bambu & Tenryu-ji',
                    location: 'Arashiyama',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day6-bamboo',
                    imageType: 'park'
                }
            ],
            afternoon: [
                {
                    time: '13:00',
                    title: 'Arashiyama Öğle',
                    location: 'Arashiyama',
                    mapLink: 'https://goo.gl/maps/arashiyama',
                    imageKey: 'day6-lunch',
                    imageType: 'food'
                },
                {
                    time: '15:00',
                    title: 'Maymun Parkı',
                    location: 'Iwatayama',
                    mapLink: 'https://goo.gl/maps/monkeypark',
                    imageKey: 'day6-monkey',
                    imageType: 'park'
                },
                {
                    time: '17:00',
                    title: 'Zen Coffee',
                    location: 'Kyoto',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day6-coffee',
                    imageType: 'food'
                }
            ],
            evening: [
                {
                    time: '19:00',
                    title: 'Akşam Yemeği',
                    location: 'Kyoto Center',
                    mapLink: 'https://goo.gl/maps/kyoto',
                    imageKey: 'day6-dinner',
                    imageType: 'food'
                }
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
                    title: 'Fushimi Inari (Erken!)',
                    location: 'Fushimi-ku',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day7-fushimi',
                    imageType: 'temple'
                },
                {
                    time: '11:00',
                    title: 'Kiyomizu-dera',
                    location: 'Higashiyama',
                    mapLink: 'https://goo.gl/maps/kiyomizudera',
                    imageKey: 'day7-kiyomizu',
                    imageType: 'temple'
                }
            ],
            afternoon: [
                {
                    time: '13:00',
                    title: 'Sannenzaka & Ninenzaka + Öğle',
                    location: 'Higashiyama',
                    mapLink: 'https://goo.gl/maps/sannenzaka',
                    imageKey: 'day7-sannenzaka',
                    imageType: 'shopping'
                },
                {
                    time: '16:00',
                    title: 'Ginkaku-ji & Filozof Yolu',
                    location: 'Sakyo-ku',
                    mapLink: 'https://goo.gl/maps/ginkakuji',
                    imageKey: 'day7-silver',
                    imageType: 'temple'
                }
            ],
            evening: [
                {
                    time: '19:00',
                    title: 'Gion Akşam',
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
                    mapLink: 'https://goo.gl/maps/narapark',
                    imageKey: 'day8-nara',
                    imageType: 'park'
                }
            ],
            afternoon: [
                {
                    time: '13:00',
                    title: 'Nara Öğle',
                    location: 'Nara',
                    mapLink: 'https://goo.gl/maps/nara',
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
                    time: '19:00',
                    title: 'Dotonbori Neonlar!',
                    location: 'Dotonbori',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
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
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day9-castle',
                    imageType: 'temple'
                }
            ],
            afternoon: [
                {
                    time: '12:00',
                    title: 'Kuromon Market Öğle',
                    location: 'Namba',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day9-kuromon',
                    imageType: 'shopping'
                },
                {
                    time: '14:00',
                    title: 'Namba Yasaka Jinja',
                    location: 'Namba',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day9-yasaka',
                    imageType: 'temple'
                },
                {
                    time: '16:00',
                    title: 'Shinsekai & Tsutenkaku',
                    location: 'Shinsekai',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
                    imageKey: 'day9-shinsekai',
                    imageType: 'city'
                }
            ],
            evening: [
                {
                    time: '19:00',
                    title: 'Umeda Sky Building',
                    location: 'Umeda',
                    mapLink: 'https://maps.app.goo.gl/BmruWEMs64MMWASx5',
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
        id: 'day10-12',
        day: '10-12. Gün',
        date: '17-19 Mart Pazartesi-Çarşamba',
        city: 'Tokyo',
        cityColor: '#667eea',
        activities: {
            all: [
                {
                    time: 'Serbest',
                    title: 'Nakano Broadway',
                    location: 'Nakano',
                    mapLink: 'https://goo.gl/maps/nakano',
                    imageKey: 'day10-12-nakano',
                    imageType: 'shopping'
                },
                {
                    time: 'Serbest',
                    title: 'Kaçırdığınız Yerler',
                    location: 'Tokyo',
                    mapLink: 'https://goo.gl/maps/tokyo',
                    imageKey: 'day10-12-explore',
                    imageType: 'city'
                },
                {
                    time: 'Serbest',
                    title: 'Son Alışveriş',
                    location: 'Tokyo',
                    mapLink: 'https://goo.gl/maps/tokyo',
                    imageKey: 'day10-12-shopping',
                    imageType: 'shopping'
                },
                {
                    time: '19 Mart',
                    title: 'Haneda Yakınına Dönüş',
                    location: 'Haneda Area',
                    mapLink: 'https://goo.gl/maps/haneda',
                    imageKey: 'day10-12-return',
                    imageType: 'city'
                }
            ]
        },
        food: [
            { name: 'Favori Yerler', place: 'Tekrar ziyaret edin!', type: 'Serbest', mapLink: 'https://goo.gl/maps/tokyo' }
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
                    time: '08:00',
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

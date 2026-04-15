#!/usr/bin/env python3
"""
Japonya 2026 - Tüm gün sayfalarını otomatik oluştur
Kullanım: python3 generate_days.py
"""

import os

# Gün verileri
DAYS = [
    {"num": 1, "title": "Shinjuku Gelişi", "date": "8 Mart Cumartesi", "city": "Tokyo", "color": "#667eea"},
    {"num": 2, "title": "Asakusa, Ueno & Akihabara", "date": "9 Mart Pazar", "city": "Tokyo", "color": "#667eea"},
    {"num": 3, "title": "Harajuku & Shibuya", "date": "10 Mart Pazartesi", "city": "Tokyo", "color": "#667eea"},
    {"num": 4, "title": "Imperial Palace, Ginza & teamLab", "date": "11 Mart Salı", "city": "Tokyo", "color": "#667eea"},
    {"num": 5, "title": "Tokyo → Kyoto Geçişi", "date": "12 Mart Çarşamba", "city": "Kyoto", "color": "#f093fb"},
    {"num": 6, "title": "Arashiyama", "date": "13 Mart Perşembe", "city": "Kyoto", "color": "#f093fb"},
    {"num": 7, "title": "Kyoto Tapınakları", "date": "14 Mart Cuma", "city": "Kyoto", "color": "#f093fb"},
    {"num": 8, "title": "Nara & Osaka", "date": "15 Mart Cumartesi", "city": "Nara → Osaka", "color": "#4facfe"},
    {"num": 9, "title": "Osaka Kalesi & Modern", "date": "16 Mart Pazar", "city": "Osaka", "color": "#4facfe"},
    {"num": 10, "title": "Osaka → Tokyo Dönüşü", "date": "17 Mart Pazartesi", "city": "Tokyo", "color": "#667eea"},
    {"num": 11, "title": "Tokyo Tower & Odaiba", "date": "18 Mart Salı", "city": "Tokyo", "color": "#667eea"},
    {"num": 12, "title": "Mount Fuji", "date": "19 Mart Çarşamba", "city": "Fuji", "color": "#fa709a"},
    {"num": 13, "title": "Dönüş Günü", "date": "20 Mart Perşembe", "city": "Tokyo → İstanbul", "color": "#e74c3c"},
]

HTML_TEMPLATE = '''<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{num}. Gün - {title} | Japonya 2026</title>
    <meta name="description" content="{city} - {title}">
    <link href="https://fonts.googleapis.com/css2?family=Yuji+Boku&family=Shippori+Mincho:wght@400;500;600;700;800&family=Zen+Antique&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../gallery.css">
</head>
<body class="day-detail-page">
    
    <nav class="detail-nav">
        <a href="../index.html" class="btn-back">← Ana Sayfa</a>
        <div class="day-navigation">
            {prev_link}
            {next_link}
        </div>
    </nav>

    <header class="day-hero" style="background: linear-gradient(135deg, {color} 0%, #764ba2 100%);">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <span class="day-label">{num}. Gün</span>
            <h1 class="day-title">{title}</h1>
            <p class="day-date">{date}</p>
            <div class="day-stats">
                <span class="stat">📍 {city}</span>
                <span class="stat">📸 fotoğraf eklenecek</span>
                <span class="stat">🚶 adım eklenecek</span>
            </div>
        </div>
    </header>

    <section class="day-summary">
        <div class="container">
            <h2>Günün Hikayesi</h2>
            <p class="story-text">
                Bugünün hikayesini buraya yazın... Geziden döndükten sonra 
                bu alanı dolduracaksınız.
            </p>
            
            <div class="highlights-grid">
                <div class="highlight-box">
                    <div class="icon">😍</div>
                    <h4>En Sevdiğim An</h4>
                    <p>En beğendiğiniz anı buraya...</p>
                </div>
                <div class="highlight-box">
                    <div class="icon">🍜</div>
                    <h4>Öne Çıkan Yemek</h4>
                    <p>En lezzetli yemek...</p>
                </div>
                <div class="highlight-box">
                    <div class="icon">💡</div>
                    <h4>İpucu</h4>
                    <p>Gelecek gezginler için tavsiye...</p>
                </div>
            </div>
        </div>
    </section>

    <section class="timeline-detailed">
        <div class="container">
            
            <div class="time-block">
                <h3 class="time-header">
                    <span class="time-icon">☀️</span>
                    Gün İçi Aktiviteler
                </h3>
                
                <div class="activity-detail">
                    <div class="activity-header">
                        <span class="time-badge">00:00</span>
                        <h4>Aktivite Başlığı</h4>
                    </div>
                    <p class="activity-story">
                        Aktivite hikayesini buraya yazın...
                    </p>
                    
                    <div class="photo-gallery">
                        <div class="photo-item" onclick="openLightbox('day{num:02d}/photo-01.jpg')">
                            <img src="../photos/day{num:02d}/photo-01.jpg" alt="Fotoğraf" loading="lazy">
                            <div class="photo-caption">Fotoğraf açıklaması</div>
                        </div>
                        <!-- Daha fazla fotoğraf ekleyin -->
                    </div>
                </div>
                
                <!-- Daha fazla aktivite ekleyin -->
                
            </div>
        </div>
    </section>

    <section class="day-notes">
        <div class="container">
            <h2>Gün Sonu Notları 📝</h2>
            <div class="notes-grid">
                <div class="note-card">
                    <h4>💰 Harcama</h4>
                    <p>eklenecek</p>
                    <small>Toplam harcama</small>
                </div>
                <div class="note-card">
                    <h4>🚶 Adım</h4>
                    <p>eklenecek</p>
                    <small>Google Fit / Apple Health</small>
                </div>
                <div class="note-card">
                    <h4>⭐ Puan</h4>
                    <p>?/10</p>
                    <small>Genel değerlendirme</small>
                </div>
                <div class="note-card">
                    <h4>😴 Yorgunluk</h4>
                    <p>?</p>
                    <small>Az / Orta / Çok</small>
                </div>
            </div>
            
            <div class="personal-note">
                <h4>Kişisel Not</h4>
                <p>
                    Günün sonunda ne hissettiniz, neler düşündünüz... 
                    Özel anılarınızı buraya yazın.
                </p>
            </div>
        </div>
    </section>

    {next_section}

    <div id="lightbox" class="lightbox" onclick="closeLightbox()">
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-content" id="lightbox-img">
        <div class="lightbox-caption" id="lightbox-caption"></div>
        <button class="lightbox-nav prev" onclick="event.stopPropagation(); navigateLightbox(-1)">‹</button>
        <button class="lightbox-nav next" onclick="event.stopPropagation(); navigateLightbox(1)">›</button>
    </div>

    <script src="../lightbox.js"></script>
</body>
</html>
'''

def generate_days():
    """Tüm gün sayfalarını oluştur"""
    output_dir = "days"
    os.makedirs(output_dir, exist_ok=True)
    
    for i, day in enumerate(DAYS):
        # Navigation links
        prev_link = f'<a href="day{i:02d}.html" class="btn-back">← Önceki Gün</a>' if i > 0 else ''
        next_link = f'<a href="day{i+2:02d}.html" class="btn-next">Sonraki Gün →</a>' if i < len(DAYS)-1 else ''
        
        # Next day preview
        if i < len(DAYS)-1:
            next_day = DAYS[i+1]
            next_section = f'''<section class="next-day-preview">
        <div class="container">
            <h3>Yarın Neredeyiz?</h3>
            <a href="day{i+2:02d}.html" class="next-day-card">
                <div class="next-day-image">
                    <img src="../photos/day{i+2:02d}/preview.jpg" alt="{next_day['title']}">
                </div>
                <div class="next-day-content">
                    <span class="next-label">{next_day['num']}. Gün</span>
                    <h4>{next_day['title']}</h4>
                    <p>{next_day['city']}</p>
                    <span class="btn-next-day">Devamını Oku →</span>
                </div>
            </a>
        </div>
    </section>'''
        else:
            next_section = '<section class="next-day-preview"><div class="container"><h3>🏠 Gezi Tamamlandı!</h3><p>Harika bir yolculuktu! 🇯🇵❤️</p></div></section>'
        
        # Generate HTML
        html = HTML_TEMPLATE.format(
            num=day['num'],
            title=day['title'],
            date=day['date'],
            city=day['city'],
            color=day['color'],
            prev_link=prev_link,
            next_link=next_link,
            next_section=next_section
        )
        
        # Write file
        filename = f"{output_dir}/day{day['num']:02d}.html"
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(html)
        
        print(f"✅ {filename} oluşturuldu")
    
    print(f"\n🎉 Toplam {len(DAYS)} gün sayfası oluşturuldu!")
    print(f"📁 Klasör: {output_dir}/")

if __name__ == "__main__":
    generate_days()

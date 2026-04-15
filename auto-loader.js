// ============================================
// TAM OTOMATİK FOTOĞRAF YÜKLEYICI
// ============================================
// Kullanım: loadAllPhotos('day01', 'gallery-id')
// Python ile oluşturulan JSON'u okur, tüm fotoğrafları yükler
// ============================================

/**
 * Bir günün TÜM fotoğraflarını otomatik yükle
 * 
 * @param {string} day - Gün ID'si (örn: 'day01')
 * @param {string} containerId - HTML container ID
 * @param {Object} options - Opsiyonel ayarlar
 */
async function loadAllPhotos(day, containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`❌ Container bulunamadı: ${containerId}`);
        return;
    }
    
    // Varsayılan ayarlar
    const settings = {
        showCount: true,
        showFilename: false,
        onError: null,
        ...options
    };
    
    try {
        // JSON manifest'i yükle
        const response = await fetch(`../photos/${day}.json`);
        
        if (!response.ok) {
            throw new Error(`JSON bulunamadı: ${day}.json`);
        }
        
        const data = await response.json();
        
        if (!data.photos || data.photos.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.5);">Henüz fotoğraf eklenmemiş.</p>';
            return;
        }
        
        // Fotoğrafları render et
        const html = data.photos.map((filename, idx) => {
            const caption = settings.showFilename ? filename : `📸 ${idx + 1}`;
            const imagePath = `../photos/${day}/${filename}`;
            
            return `
                <div class="photo-item" onclick="openLightbox('${day}/${filename}')">
                    <img src="${imagePath}" 
                         alt="${caption}" 
                         loading="lazy"
                         onerror="this.parentElement.classList.add('photo-error')">
                    <div class="photo-caption">${caption}</div>
                </div>
            `;
        }).join('');
        
        container.innerHTML = html;
        
        // Başarı mesajı
        console.log(`✅ ${day}: ${data.photos.length} fotoğraf yüklendi`);
        
        // Count badge göster
        if (settings.showCount && data.count > 0) {
            const countBadge = container.previousElementSibling;
            if (countBadge && countBadge.classList.contains('photo-count-badge')) {
                countBadge.textContent = `${data.count} fotoğraf`;
            }
        }
        
    } catch (error) {
        console.error(`❌ ${day} fotoğrafları yüklenemedi:`, error);
        
        if (settings.onError) {
            settings.onError(error);
        } else {
            container.innerHTML = `
                <p style="text-align: center; color: rgba(255,100,100,0.8);">
                    ⚠️ Fotoğraflar yüklenemedi.<br>
                    <small>${error.message}</small>
                </p>
            `;
        }
    }
}

/**
 * Birden fazla günü yükle
 */
async function loadMultipleDays(dayContainerPairs) {
    const promises = dayContainerPairs.map(({ day, containerId, options }) => 
        loadAllPhotos(day, containerId, options)
    );
    
    await Promise.all(promises);
}

/**
 * Lazy loading - sayfa scroll'da yükle
 */
function setupLazyPhotoLoading(day, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadAllPhotos(day, containerId);
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(container);
}

// ============================================
// KULLANIM ÖRNEKLERİ
// ============================================

/*
// ÖRNEK 1: Basit Kullanım
<div class="photo-gallery" id="day01-gallery"></div>

<script src="../auto-loader.js"></script>
<script>
loadAllPhotos('day01', 'day01-gallery');
</script>


// ÖRNEK 2: Opsiyonlar ile
loadAllPhotos('day01', 'day01-gallery', {
    showFilename: true,  // Dosya ismini göster
    showCount: true      // Fotoğraf sayısını göster
});


// ÖRNEK 3: Birden Fazla Gün
loadMultipleDays([
    { day: 'day01', containerId: 'day01-gallery' },
    { day: 'day02', containerId: 'day02-gallery' },
    { day: 'day03', containerId: 'day03-gallery' }
]);


// ÖRNEK 4: Lazy Loading (Performans için)
setupLazyPhotoLoading('day01', 'day01-gallery');


// ÖRNEK 5: Hata Yönetimi
loadAllPhotos('day01', 'day01-gallery', {
    onError: (error) => {
        alert('Fotoğraflar yüklenemedi: ' + error.message);
    }
});
*/

// ============================================
// YARDIMCI FONKSİYONLAR
// ============================================

/**
 * Tüm günlerin fotoğraf sayısını getir
 */
async function getAllPhotoStats() {
    const stats = {};
    
    for (let i = 1; i <= 13; i++) {
        const day = `day${String(i).padStart(2, '0')}`;
        
        try {
            const response = await fetch(`../photos/${day}.json`);
            if (response.ok) {
                const data = await response.json();
                stats[day] = data.count;
            }
        } catch (e) {
            stats[day] = 0;
        }
    }
    
    return stats;
}

/**
 * Ana sayfada fotoğraf sayılarını güncelle
 */
async function updatePhotoCountsOnMainPage() {
    const stats = await getAllPhotoStats();
    
    Object.keys(stats).forEach(day => {
        const badge = document.querySelector(`[data-day="${day}"] .photo-count`);
        if (badge && stats[day] > 0) {
            badge.textContent = `📸 ${stats[day]} fotoğraf`;
            badge.style.display = 'inline-block';
        }
    });
}

// Auto-init
console.log('✅ auto-loader.js yüklendi');

// DOMContentLoaded'da ana sayfa badge'lerini güncelle
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.querySelector('.photo-count')) {
            updatePhotoCountsOnMainPage();
        }
    });
} else {
    if (document.querySelector('.photo-count')) {
        updatePhotoCountsOnMainPage();
    }
}

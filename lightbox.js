// ============================================
// LIGHTBOX PHOTO VIEWER
// ============================================

let currentPhotoIndex = 0;
let photos = [];

// Initialize photo gallery
document.addEventListener('DOMContentLoaded', () => {
    collectPhotos();
    setupKeyboardNavigation();
});

// Collect all photos from the page
function collectPhotos() {
    const photoItems = document.querySelectorAll('.photo-item');
    photos = Array.from(photoItems).map(item => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.photo-caption');
        return {
            src: img.src,
            alt: img.alt,
            caption: caption ? caption.textContent : img.alt || ''
        };
    });
    console.log(`📸 ${photos.length} fotoğraf yüklendi`);
}

// Open lightbox with specific image
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    // Find current photo index
    currentPhotoIndex = photos.findIndex(p => p.src.includes(imageSrc));
    
    if (currentPhotoIndex === -1) {
        // If not found by src, try by exact match
        currentPhotoIndex = photos.findIndex(p => p.src === imageSrc);
    }
    
    if (currentPhotoIndex !== -1) {
        showPhoto(currentPhotoIndex);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        console.error('Fotoğraf bulunamadı:', imageSrc);
    }
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Show specific photo
function showPhoto(index) {
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    if (photos[index]) {
        lightboxImg.src = photos[index].src;
        lightboxImg.alt = photos[index].alt;
        lightboxCaption.textContent = photos[index].caption;
        currentPhotoIndex = index;
    }
}

// Navigate through photos
function navigateLightbox(direction) {
    let newIndex = currentPhotoIndex + direction;
    
    // Wrap around
    if (newIndex < 0) {
        newIndex = photos.length - 1;
    } else if (newIndex >= photos.length) {
        newIndex = 0;
    }
    
    showPhoto(newIndex);
}

// Keyboard navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    navigateLightbox(-1);
                    break;
                case 'ArrowRight':
                    navigateLightbox(1);
                    break;
            }
        }
    });
}

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        lightbox.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left - next photo
            navigateLightbox(1);
        } else {
            // Swiped right - previous photo
            navigateLightbox(-1);
        }
    }
}

// Preload adjacent images for smooth navigation
function preloadAdjacentImages() {
    const prevIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    const nextIndex = (currentPhotoIndex + 1) % photos.length;
    
    [prevIndex, nextIndex].forEach(index => {
        if (photos[index]) {
            const img = new Image();
            img.src = photos[index].src;
        }
    });
}

// Call preload when showing a photo
const originalShowPhoto = showPhoto;
showPhoto = function(index) {
    originalShowPhoto(index);
    preloadAdjacentImages();
};

console.log('✅ Lightbox yüklendi - Ok tuşları veya kaydırma ile fotoğraflar arasında gezinin');

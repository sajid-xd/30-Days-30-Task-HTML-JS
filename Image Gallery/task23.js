let currentImageIndex = 0;
const images = document.querySelectorAll('.thumbnails img');

function openLightbox(imageUrl) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageUrl;
    lightbox.classList.add('show');
    currentImageIndex = Array.from(images).findIndex(img => img.src === imageUrl);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
}

function moveToPreviousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        const imageUrl = images[currentImageIndex].src;
        const lightboxImage = document.getElementById('lightbox-image');
        lightboxImage.src = imageUrl;
    }
}

function moveToNextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        const imageUrl = images[currentImageIndex].src;
        const lightboxImage = document.getElementById('lightbox-image');
        lightboxImage.src = imageUrl;
    }
}

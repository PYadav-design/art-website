document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    // Lightbox styles
    lightbox.style.position = 'fixed';
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.background = 'rgba(0, 0, 0, 0.9)';
    lightbox.style.display = 'flex';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = 1000;

    const imgEl = document.createElement('img');
    // Use high-res version if available
    imgEl.src = img.dataset.full || img.src;
    imgEl.alt = img.alt || '';

    // Image styles
    imgEl.style.maxWidth = '95%';
    imgEl.style.maxHeight = '95%';
    imgEl.style.border = '5px solid white';
    imgEl.style.borderRadius = '10px';
    imgEl.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.4)';

    lightbox.appendChild(imgEl);

    // Close on click
    lightbox.addEventListener('click', () => {
      lightbox.remove();
    });
  });
});

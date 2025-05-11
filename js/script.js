document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    lightbox.style.position = 'fixed';
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = 1000;

    const imgEl = document.createElement('img');
    imgEl.src = img.src;
    imgEl.style.maxWidth = '90%';
    imgEl.style.maxHeight = '90%';
    imgEl.style.border = '4px solid white';
    imgEl.style.borderRadius = '10px';
    lightbox.appendChild(imgEl);

    lightbox.addEventListener('click', () => {
      lightbox.remove();
    });
  });
});

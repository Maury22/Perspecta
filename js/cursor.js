
document.addEventListener('DOMContentLoaded', () => {
  // 2) Overlay que sigue al cursor sobre los thumbs
  const thumbs = document.querySelectorAll('.proyecto-thumb');
  console.log('Thumbnails encontrados:', thumbs.length);

  thumbs.forEach(container => {
    const circle = container.querySelector('.overlay-circle');
    // Si no encuentra el div.overlay-circle, saltamos
    if(!circle) return;

    container.addEventListener('mouseenter', () => {
      circle.style.opacity = '1';
    });
    container.addEventListener('mouseleave', () => {
      circle.style.opacity = '0';
    });
    container.addEventListener('mousemove', e => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      circle.style.left = `${x}px`;
      circle.style.top  = `${y}px`;
    });
  });
});
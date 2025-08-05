document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.img-wrapper');
  const overlay = document.querySelector('.img-overlay');
  const bar = document.querySelector('.slider-bar');

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let percent = (x / rect.width) * 100;

    percent = Math.max(0, Math.min(100, percent));

    overlay.style.width = `${percent}%`;
    bar.style.left = `${percent}%`;
  });
});

// Soporte para pantallas táctiles
wrapper.addEventListener('touchmove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  let touch = e.touches[0];
  let x = touch.clientX - rect.left;
  let percent = (x / rect.width) * 100;

  percent = Math.max(0, Math.min(100, percent));

  overlay.style.width = `${percent}%`;
  bar.style.left = `${percent}%`;
});




document.querySelectorAll('.proyecto-thumb').forEach(container => {
  const circle = container.querySelector('.overlay-circle');

  // cuando entra el ratón, lo mostramos
  container.addEventListener('mouseenter', () => {
    circle.style.opacity = '1';
  });

  // cuando sale, lo ocultamos
  container.addEventListener('mouseleave', () => {
    circle.style.opacity = '0';
  });

  // cada vez que se mueve el ratón dentro, reposicionamos el círculo
  container.addEventListener('mousemove', e => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;  // coords relativas al contenedor
    const y = e.clientY - rect.top;
    circle.style.left = `${x}px`;
    circle.style.top  = `${y}px`;
  });
});

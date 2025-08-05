// // js/parallax.js
// window.addEventListener("scroll", function () {
//   const image = document.querySelector(".parallax-img");
//   const section = document.querySelector(".parallax-section");

//   const rect = section.getBoundingClientRect();
//   const scrollProgress = Math.min(Math.max(rect.top / window.innerHeight, 0), 1);

//   // Zoom de 1.2 (inicio) hasta 1 (normal)
//   const scale = 1 + (2 * scrollProgress);
//   image.style.transform = `scale(${scale})`;
// });

window.addEventListener('scroll', () => {
  const section = document.querySelector('.zoom-out-section');
  const img      = section.querySelector('.zoom-img');
  const overlay  = section.querySelector('.zoom-final-overlay');
  const rect = section.getBoundingClientRect();

  // ──────────── PARÁMETROS DE CONTROL ────────────
  const totalScroll = window.innerHeight * 0.4;     // usar 2x viewport para todo el zoom
  const startZoom   = 1.8;                        // scale inicial
  const endZoom     = 0.6;                        // scale final
  const showOverlayAt = 0.8;                      // umbral (90% de progress) para el overlay
  const startOffset = window.innerHeight * 0.5;  // <— aquí ajustas: 0.3 = empieza al 30% de la pantalla
  // ─────────────────────────────────────────────────

  // 1) Calculamos un progreso que arranca en 0 **antes** de que la sección haya desaparecido por completo:
  let progress = (startOffset - rect.top) / totalScroll;

  // 2) Lo limitamos entre 0 y 1
  progress = Math.min(Math.max(progress, 0), 1);

  // 3) Interpolamos el scale
  const scale = startZoom + (endZoom - startZoom) * progress;
  img.style.transform = `scale(${scale})`;

  // 4) Mostramos el overlay al final
  overlay.style.opacity = progress > showOverlayAt ? 1 : 0;
});






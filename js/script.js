// script.js
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modalPresupuesto');
  const panel = modal.querySelector('.panel');
  const btnAbrir = document.getElementById('abrirModal');
  const btnCerrar = modal.querySelector('.cerrar');

  // Abrir
  btnAbrir.addEventListener('click', e => {
    e.preventDefault();
    modal.style.display = 'block';
    // Tras un pequeño delay para que la propiedad display surta efecto,
    // añadimos la clase que activa la transición
    requestAnimationFrame(() => {
      modal.classList.add('open');
    });
  });

  // Cerrar al clickar la X o fuera del panel
  const cerrarModal = () => {
    modal.classList.remove('open');
    // Esperamos a que termine la transición
    panel.addEventListener('transitionend', () => {
      modal.style.display = 'none';
    }, { once: true });
  };

  btnCerrar.addEventListener('click', cerrarModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) cerrarModal();
  });
});



//Abrir modal desde boton SOLICITAR CONSULTA PRIVADA
const abrirDesdeHero = document.getElementById('abrirModalDesdeHero');
if (abrirDesdeHero) {
  abrirDesdeHero.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
  });
}


const wrapper = document.querySelector('.img-wrapper');
const labelAntes = document.querySelector('.label.antes');
const labelDespues = document.querySelector('.label.despues');

wrapper.addEventListener('mousemove', (e) => {
  const wrapperWidth = wrapper.offsetWidth;
  const mouseX = e.clientX - wrapper.getBoundingClientRect().left;
  const porcentaje = mouseX / wrapperWidth;

  labelAntes.style.opacity = 1 - porcentaje;
  labelDespues.style.opacity = porcentaje;
});




// Abrir/Cerrar menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
  const btnHam = document.getElementById('btnHamburger');
  const menu   = document.getElementById('mainMenu');

  btnHam.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  // También puedes cerrar al hacer click fuera:
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
    }
  });
});










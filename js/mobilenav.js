export function sidebarToggle() {
  const burger = document.getElementById('burger');

  burger.addEventListener('click', event => {
    document.body.classList.toggle('show-sidebar');
  })
}



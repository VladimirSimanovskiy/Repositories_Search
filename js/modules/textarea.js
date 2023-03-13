export function autoresize() {
  const textArea = document.querySelectorAll('[data-autoresize');

  textArea.forEach(item => {
    item.addEventListener('input', event => {
      let $this = event.target;

      $this.style.height = "30px";
      $this.style.height = $this.scrollHeight + 'px';
    });
  });
}


var onDOMContentLoaded = (event) => {
  const amn = document.querySelector('.amn');
  amn.querySelector('span:first-child').remove();
}

if (document.readyState === 'complete') {
  onDOMContentLoaded();
} else {
  window.addEventListener('load', onDOMContentLoaded);
}

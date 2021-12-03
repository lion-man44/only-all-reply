var onDOMContentLoaded = () => {
  const amn = document.querySelector('.amn');
  if (amn == null) return next(onDOMContentLoaded);
  const spans = amn.querySelectorAll('span');
  if (spans.length < 3) return next(onDOMContentLoaded);
  spans[0].remove();
  next(onDOMContentLoaded);
}

const next = (callback) => {
  window.requestAnimationFrame(callback);
};

onDOMContentLoaded()

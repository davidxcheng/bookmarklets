(() => {
  document.head.insertAdjacentHTML('beforeend', '<style>.struck {text-decoration: line-through}</style>');
  document.addEventListener('click', e => e.target.classList.toggle('struck'));
})()

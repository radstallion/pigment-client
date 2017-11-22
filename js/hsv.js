['hue', 'saturation', 'light'].forEach(part => {
  document.querySelector(`.hls-picker input[type=range][data-pick=${part}]`).addEventListener('input', ({target}) => {
  target.parentNode.style.setProperty(`--${part}`, target.value + (part !== 'hue' ? '%' : ''))
}, {passive: true});
});

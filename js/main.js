// Colive Fukuoka — Fukuoka Builders' Coliving landing page
// Decorative QR-style grid for the stablecoin section (visual only, not a real QR code).
(function () {
  var el = document.getElementById('qrgrid');
  if (!el) return;

  var pattern = [
    1,1,1,0,0,1,1,1,0,
    1,0,1,0,1,0,1,0,1,
    1,1,1,0,1,1,1,1,0,
    0,0,0,0,1,0,0,0,1,
    1,0,1,1,0,1,0,1,0,
    0,1,0,0,1,0,1,0,1,
    1,1,1,0,0,1,1,1,0,
    1,0,1,0,1,0,1,0,1,
    1,1,1,0,1,1,0,1,1
  ];

  pattern.forEach(function (v) {
    var d = document.createElement('div');
    d.style.background = v ? '#5FB6E0' : 'transparent';
    d.style.opacity = v ? (0.55 + Math.random() * 0.45) : 0;
    el.appendChild(d);
  });
})();

// Agentation dev widget — only loads on localhost
(function () {
  if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') return;

  var script = document.createElement('script');
  script.src = '/dev-widget-bundle.js';
  document.body.appendChild(script);
})();

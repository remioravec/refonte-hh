/* ==========================================================================
   HELLO HAREL — Scroll Reveal Animations
   À injecter via Elementor > Custom Code (header ou footer) OU via un widget HTML
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('hh-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.hh-fade-in').forEach(function (el) {
    observer.observe(el);
  });
});

var prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    entry.target.classList.toggle("visible", entry.isIntersecting);
  });
}, { threshold: 0.1 });

document.querySelectorAll(".track-visible").forEach(function (el) {
  if (prefersReduced) el.classList.add("visible");
  else observer.observe(el);
});

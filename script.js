const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".track-visible");
targets.forEach(function (target) {
  observer.observe(target);
});

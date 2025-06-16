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


// carousel
const scrollContainer = document.querySelector('#carousel');

let scrollInterval;

function autoScroll() {
  scrollInterval = setInterval(() => {
    carousel.scrollLeft += 1;
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
      carousel.scrollLeft = 0;
    }
  }, 16); // ~60fps
}

carousel.addEventListener('mouseenter', () => clearInterval(scrollInterval));
carousel.addEventListener('mouseleave', autoScroll);

autoScroll();

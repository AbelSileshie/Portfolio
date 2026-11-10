let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");
let seeMoreButtons = document.querySelectorAll(".seeMore");
let backButton = document.getElementById("back");

let autoScrollInterval = 4000;
let autoScroll;
let unAcceppClick;
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const startAutoScroll = (interval) => {
  clearInterval(autoScroll);
  if (
    prefersReducedMotion ||
    carousel.matches(":hover") ||
    carousel.matches(":focus-within") ||
    carousel.classList.contains("showDetail")
  ) {
    return;
  }

  autoScroll = setInterval(() => {
    showSlider("next");
  }, interval);
};

const pauseAutoScroll = () => {
  clearInterval(autoScroll);
};

const updateCarouselAccessibility = () => {
  const activeItem = listHTML.querySelectorAll(".item")[1];
  const showingDetail = carousel.classList.contains("showDetail");

  listHTML.querySelectorAll(".item").forEach((item) => {
    const isActive = item === activeItem;
    item.inert = !isActive;
    item.setAttribute("aria-hidden", String(!isActive));
    item.querySelector(".introduce").inert = showingDetail;
    item.querySelector(".detail").inert = !showingDetail;
  });
};

nextButton.onclick = function () {
  showSlider("next");
  startAutoScroll(10000); // Set to 10 seconds after button click
};
prevButton.onclick = function () {
  showSlider("prev");
  startAutoScroll(10000); // Set to 10 seconds after button click
};

const showSlider = (type) => {
  nextButton.classList.add("disabled");
  prevButton.classList.add("disabled");

  carousel.classList.remove("next", "prev");
  let items = document.querySelectorAll(".carousel .list .item");
  if (type === "next") {
    listHTML.appendChild(items[0]);
    carousel.classList.add("next");
  } else {
    listHTML.prepend(items[items.length - 1]);
    carousel.classList.add("prev");
  }
  updateCarouselAccessibility();
  clearTimeout(unAcceppClick);
  unAcceppClick = setTimeout(() => {
    nextButton.classList.remove("disabled");
    prevButton.classList.remove("disabled");
  }, 2000);
};

seeMoreButtons.forEach((button) => {
  button.onclick = function () {
    carousel.classList.remove("next", "prev");
    carousel.classList.add("showDetail");
    updateCarouselAccessibility();
    pauseAutoScroll(); // Pause auto-scroll when "seeMore" is clicked
    backButton.focus();
  };
});

backButton.onclick = function () {
  carousel.classList.remove("showDetail");
  updateCarouselAccessibility();
  listHTML.querySelectorAll(".item")[1].querySelector(".seeMore").focus();
  startAutoScroll(autoScrollInterval); // Resume auto-scroll when back button is clicked
};

carousel.addEventListener("focusin", pauseAutoScroll);
carousel.addEventListener("focusout", () => {
  requestAnimationFrame(() => {
    if (!carousel.contains(document.activeElement)) {
      startAutoScroll(autoScrollInterval);
    }
  });
});
carousel.addEventListener("pointerenter", pauseAutoScroll);
carousel.addEventListener("pointerleave", () => {
  startAutoScroll(autoScrollInterval);
});

updateCarouselAccessibility();

// Start initial auto-scroll
startAutoScroll(autoScrollInterval);

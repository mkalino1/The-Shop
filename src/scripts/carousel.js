export default function() {

  const next = document.querySelector(".carousel-wrapper__button--next");
  const prev = document.querySelector(".carousel-wrapper__button--prev");
  const carousel = document.querySelector(".carousel");
  
  const width = 500;

  next.addEventListener("click", () => {
    carousel.scrollBy(width, 0);
  });
  
  prev.addEventListener("click", () => {
    carousel.scrollBy(-(width), 0);
  });

}

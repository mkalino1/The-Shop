import fetchData from './fetch-data'

const next = document.querySelector(".carousel-wrapper__button--next");
const prev = document.querySelector(".carousel-wrapper__button--prev");
const carousel = document.querySelector(".carousel");
 
 function handleButtons() {
  const carouselContent = document.querySelector(".carousel__content");
  const carouselItem = document.querySelector(".carousel__item");

  const carouselWidth = carousel.offsetWidth;
  const gap = parseInt(getComputedStyle(carouselContent).gap);
  const itemWidth = carouselItem.clientWidth + gap;

  const properScrollWidth = Math.floor(carouselWidth/itemWidth)*itemWidth;

  next.addEventListener("click", () => {
    carousel.scrollBy(properScrollWidth, 0);
  });
  
  prev.addEventListener("click", () => {
    carousel.scrollBy(-(properScrollWidth), 0);
  });
}

function createCarouselItems(data){
  const content = document.querySelector('.carousel__content');
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  for (let element of data) {
    const carousel_item = document.createElement('figure');
    carousel_item.classList.add('carousel__item');

    const url = "https://" + element.imageUrl;
    carousel_item.innerHTML = 
    `
      <img src=${url} alt=${element.name}/>
      <figcaption>
        <p>${element.name}</p>
        <p>${element.price.current.text}</p>
      </figcaption> 
    `;
    content.appendChild(carousel_item);
  }
}

function launchCarousel(){
  fetchData(28945, 8).then( data => createCarouselItems(data));
}

function handleResizing() {
  window.addEventListener("resize", () => {
    carousel.scrollLeft = 0;
    handleButtons();
  });
}


export default function() {
  launchCarousel();
  handleButtons();
  handleResizing();
}
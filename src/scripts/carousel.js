import fetchData from './fetch-carousel'
 
 function handleButtons() {
  const next = document.querySelector(".carousel-wrapper__button--next");
  const prev = document.querySelector(".carousel-wrapper__button--prev");
  const carousel = document.querySelector(".carousel");
  //const carouselContent = document.querySelector(".carousel__content");
  //console.log(carouselContent.style);
  const carouselItem = document.querySelector(".carousel__item");

  const carouselWidth = carousel.offsetWidth;
  const itemWidth = carouselItem.offsetWidth + 10;
  const properScrollWidth = Math.floor(carouselWidth/itemWidth)*itemWidth;

  next.addEventListener("click", () => {
    carousel.scrollBy(properScrollWidth, 0);
  });
  
  prev.addEventListener("click", () => {
    carousel.scrollBy(-(properScrollWidth), 0);
  });
}

function createCarouselItems(data){
  const loaders = document.querySelectorAll('.carousel .loader');
  const content = document.querySelector('.carousel__content');

  for (let element of data) {
    const carousel_item = document.createElement('figure');
    carousel_item.classList.add('carousel__item');
    const url = "https://" + element.imageUrl;
    carousel_item.innerHTML = 
    `
      <img src=${url} alt=${element.name}/>
      <figcaption class="carousel__info-cnt">
        <p>${element.name}</p>
        <p>${element.price.current.text}</p>
      </figcaption> 
    `;
    content.appendChild(carousel_item);
  }

  for (let loader of loaders){
    loader.classList.add('loader--hidden');
  }
}

function launchCarousel(){
  fetchData().then( data => createCarouselItems(data));
}

export default function() {
  //launchCarousel();
  handleButtons();
}
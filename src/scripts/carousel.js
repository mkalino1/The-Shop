import fetchData from './fetch-carousel'
 
 function handleButtons() {
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

// <!-- <figure class="carousel__item">
  // <img src="https://via.placeholder.com/314x400?text=Loading...">
  // <figcaption>Buty</figcaption>
// </figure> -->

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
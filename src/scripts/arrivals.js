import fetchData from './fetch-data'

function createArrivalsItems(data){
  const content = document.querySelector('.arrivals__container');

  for (let element of data) {
    const carousel_item = document.createElement('figure');
    carousel_item.classList.add('arrivals__fig', 'col-xs-6', 'col-s-4', 'col-l-3');

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

  const loaders = document.querySelectorAll('.arrivals .loader');
  for (let loader of loaders){
    loader.classList.add('loader--hidden');
  }
}


function handleLoadingMore() {
  const button = document.querySelector('.arrivals__more-button');
  let counter = 0;
  button.addEventListener('click', () => {
      if (counter <3){
          counter ++;
          fetchData(4209, 12, counter*12).then( data => createArrivalsItems(data));
      }
      else {
          button.style.display = 'none';
      }
  });
}

export default function() {
    fetchData(4209, 12).then( data => createArrivalsItems(data));
    handleLoadingMore();
}
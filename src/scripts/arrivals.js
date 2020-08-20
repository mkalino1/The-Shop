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
  const loader = document.querySelector('.loader--more');
  let counter = 0;
  button.addEventListener('click', () => {
      counter ++;
      button.classList.add('arrivals__more-button--hidden');
      loader.classList.remove('loader--hidden')
      fetchData(8799, 12, counter*12)
          .then( data => createArrivalsItems(data))
          .then( () => {
            if (counter < 3){
              button.classList.remove('arrivals__more-button--hidden');
            }
            loader.classList.add('loader--hidden')
          });
  });
}

export default function() {
    fetchData(8799, 12).then( data => createArrivalsItems(data));
    handleLoadingMore();
}
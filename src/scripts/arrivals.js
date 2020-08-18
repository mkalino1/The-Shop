import fetchData from './fetch-data'

function createArrivalsItems(data){
  const content = document.querySelector('.arrivals__container');
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

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
}

export default function() {
    fetchData(4209, 12).then( data => createArrivalsItems(data));
}
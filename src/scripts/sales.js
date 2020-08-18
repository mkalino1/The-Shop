import fetchData from './fetch-data'

function createArrivalsItems(data){
  const content = document.querySelector('.sales__container');
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  for (let element of data) {
    const carousel_item = document.createElement('figure');
    carousel_item.classList.add('sales__fig');

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
    fetchData(4210, 5).then( data => createArrivalsItems(data));
}
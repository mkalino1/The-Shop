export default function() {
    const imgs = document.querySelectorAll('.carousel__item');

    fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4208&limit=48&store=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "asos2.p.rapidapi.com",
            "x-rapidapi-key": "fab6404bfcmshd9fba50815cc7b4p1ecbacjsnbe158f9ebfd0"
        }
    })
    .then(res => res.json())
    .then(data => { 
        let sources = data.products;
        let i =0;
        i=0;

        for (let img of imgs){
            img.children[0].src = "https://" + sources[i].imageUrl;
            img.children[1].innerHTML = sources[i].name;
            i++;
        }
    })
    .catch(err => {
        console.log(err);
    });
}

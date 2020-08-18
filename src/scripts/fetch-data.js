export default function(categoryId, limit) {
    return fetch(`https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=${categoryId}&limit=${limit}&store=US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "asos2.p.rapidapi.com",
            "x-rapidapi-key": "fab6404bfcmshd9fba50815cc7b4p1ecbacjsnbe158f9ebfd0"
        }
    })
    .then(res => res.json())
    .then(data => data.products)
    .catch(err => {
        console.log(err);
    });
}

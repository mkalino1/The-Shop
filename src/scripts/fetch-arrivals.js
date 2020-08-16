export default function() {
    const imgs = document.querySelectorAll('.arrivals__fig');

    fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "asos2.p.rapidapi.com",
            "x-rapidapi-key": "61074dac6emsh8f5b49cd05e94eep1a93f4jsn9b824b551a7c"
        }
    })
    .then(res => res.json())
    .then(data => { 
        let sources = data.products;
        let i =0;
        i=0;

        for (let img of imgs){
            img.children[0].src = "http://" + sources[i].imageUrl;
            i++;
        }
    });

}
export default function() {
    const carousel = document.querySelector('.carousel__content');
    const arrivals = document.querySelector('.arrivals__container');
    const sales = document.querySelector('.sales__container');

    for (let i = 0; i<10; i++){
        carousel.innerHTML += `
        <div class="loader carousel__item">
            <div class="loader__box">
                <span></span><span></span><span></span><span></span><span></span>
            </div>
            <div class="loader__text">Waiting for data...</div>
        </div>`
    }

    for (let i = 0; i<12; i++){
        arrivals.innerHTML += `
        <div class="loader col-xs-6 col-s-4 col-l-3">
            <div class="loader__box">
                <span></span><span></span><span></span><span></span><span></span>
            </div>
            <div class="loader__text">Waiting for data...</div>
        </div>`
    }

    for (let i = 0; i<5; i++){
        sales.innerHTML += `
        <div class="loader sales__fig">
            <div class="loader__box">
                <span></span><span></span><span></span><span></span><span></span>
            </div>
            <div class="loader__text">Waiting for data...</div>
        </div>`
    }

}
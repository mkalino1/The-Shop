import './styles/style.scss'

import hamburger from './scripts/hamburger'
import scrollArrow from './scripts/scroll-arrow'
import carousel from './scripts/carousel'
import fetchArrivals from './scripts/fetch-arrivals'
import fetchCarousel from './scripts/fetch-carousel'
import fetchSales from './scripts/fetch-sales'

document.addEventListener("DOMContentLoaded", (e) => {
    hamburger();
    carousel();
    scrollArrow();
    //fetchCarousel();
    //fetchArrivals();
    //fetchSales();
  });
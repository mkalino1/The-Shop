import './styles/style.scss'

import createLoaders from './scripts/create-loaders'
import hamburger from './scripts/hamburger'
import scrollArrow from './scripts/scroll'

import carousel from './scripts/carousel'
import arrivals from './scripts/arrivals'
import sales from './scripts/sales'

document.addEventListener("DOMContentLoaded", (e) => {
    createLoaders();
    hamburger();
    scrollArrow();

    //carousel();
    // arrivals();
    // sales();
  });
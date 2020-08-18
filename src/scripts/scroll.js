export default function() {
    const scrollArrow = document.querySelector('.scroll-arrow');
  
    window.addEventListener('scroll', (e) => {
      let y_position = window.scrollY;
      let viewportHeight = window.innerHeight;
      if (y_position > viewportHeight/2) {
        scrollArrow.classList.add('scroll-arrow--visible');
      } else {
        scrollArrow.classList.remove('scroll-arrow--visible');
      }
    });
    
    scrollArrow.addEventListener('click', (e) => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    
    /*Smooth nav autoscroll*/
    const arrivalsLink = document.querySelector('.header__link--arrivals');
    const salesLink = document.querySelector('.header__link--sales');
    const newsletterLink = document.querySelector('.header__link--newsletter');

    const arrivals = document.querySelector('.arrivals');
    const sales = document.querySelector('.sales');
    const newsletter = document.querySelector('.newsletter');

    arrivalsLink.addEventListener('click', () => {
      arrivals.scrollIntoView({behavior: "smooth"});
    });
    salesLink.addEventListener('click', () => {
      sales.scrollIntoView({behavior: "smooth"});
    });
    newsletterLink.addEventListener('click', () => {
      newsletter.scrollIntoView({behavior: "smooth"});
    });
     
}
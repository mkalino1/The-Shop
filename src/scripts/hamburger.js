export default function() {
    let toggler = document.querySelector(".header__hamburger");
    let navbar = document.querySelector(".header__navbar");
    let title = document.querySelector(".header__title");
  
    toggler.addEventListener("click", () => {
      navbar.classList.toggle("header__navbar--visible");
      toggler.classList.toggle("header__hamburger--active");
      title.classList.toggle("header__title--active");
    })
}  
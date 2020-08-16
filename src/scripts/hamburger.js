export default function() {
    let toggler = document.querySelector(".header__toggler");
    let navbar = document.querySelector(".header__navbar");
    let title = document.querySelector(".header__title");
  
    toggler.addEventListener("click", () => {
      navbar.classList.toggle("header__navbar--hidden");
      toggler.classList.toggle("header__toggler--active");
      title.classList.toggle("header__title--active");
    })
}  
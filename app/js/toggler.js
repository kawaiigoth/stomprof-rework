(function(){var hamburger = document.getElementById("Hamburger");
var mobileMenu = document.getElementById("MobileMenu");
hamburger.onclick = (function (e) {
    if (hamburger.classList.contains("new-header__nav-toggler--closed")) {
        hamburger.classList.remove("new-header__nav-toggler--closed");
        hamburger.classList.add("new-header__nav-toggler--opened");
        mobileMenu.classList.remove("new-header__navigation-mobile--closed");
    } else if (hamburger.classList.contains("new-header__nav-toggler--opened")) {
        hamburger.classList.remove("new-header__nav-toggler--opened");
        hamburger.classList.add("new-header__nav-toggler--closed");
        mobileMenu.classList.add("new-header__navigation-mobile--closed");
    }
})}());
// Бургер меню
(function () {
    const burgerButton = document.querySelector(".burger-btn");
    const closeBurgerBtn = document.querySelector(".burger-btn-close");
    const menu = document.querySelector(".pop-up");
    const overlay = document.querySelector(".modal-overlay");
    const body = document.querySelector("body");

    function onOverlayClick(evt) {
        if (evt.target.classList.contains("modal-overlay")) {
            closeMenu();
        }
    }

    function closeMenu() {
        menu.classList.remove("show");
        overlay.classList.remove("open");
        overlay.removeEventListener("click", onOverlayClick);
        body.classList.remove("no-scroll");
    }

    function onBurgerButtonClick(evt) {
        evt.preventDefault();
        menu.classList.add("show");
        overlay.classList.add("open");
        body.classList.add("no-scroll");
        overlay.addEventListener("click", onOverlayClick);
    }

    burgerButton.addEventListener("click", onBurgerButtonClick);
    closeBurgerBtn.addEventListener("click", closeMenu);
})();

//advice-табы
(function () {
    const tabs =  Array.prototype.slice.apply(document.querySelectorAll('.advice__tabs-item'));
    const content =  Array.prototype.slice.apply(document.querySelectorAll('.advice__content-item'));

    document.getElementById('adviceTabs').addEventListener('click', e => {
        if (e.target.classList.contains('advice__tabs-item')) {
            let tabSelect = tabs.indexOf(e.target);
            tabs.map( item => item.classList.remove('active'));
            tabs[tabSelect].classList.add('active');

            content.map( content => content.classList.remove('active'));
            content[tabSelect].classList.add('active');
        }
    })
})();

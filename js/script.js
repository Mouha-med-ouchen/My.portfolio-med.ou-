let header = document.querySelector("header");
let btnY = document.getElementById('btnY');

window.onscroll = function() {
    if (this.scrollY >= 50) {
        header.classList.add('add-bac');

    } else {
        header.classList.remove('add-bac');

    }



}

let nav_lenks = document.getElementById('links');

function Open_colose_menu() {
    nav_lenks.classList.toggle('active');
}
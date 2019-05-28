"use strict";
window.onscroll = () => {
  const nav = document.querySelector("#navigation");
  const navItem = document.querySelectorAll(".navbar-item");
  if (this.scrollY <= 500) {
    nav.classList.remove("navbar--color");
    nav.classList.add("navbar--transparent");
    for (let i = 0; i < navItem.length; i++) {
      console.log(i);
      navItem[i].classList.remove("navbar--black");
      navItem[i].classList.add("navbar--white");
    }
  } else {
    nav.classList.add("navbar--color");
    nav.classList.remove("navbar--transparent");
    for (let i = 0; i < navItem.length; i++) {
      console.log(i);
      navItem[i].classList.remove("navbar--white");
      navItem[i].classList.add("navbar--black");
    }
  }
};

let formOpen = false;

function openForm() {
  let overlay = document.querySelector("#overlay");
  let form = document.querySelector("#form");
  if (!formOpen) {
    overlay.classList.remove("overlay--disabled");
    overlay.classList.add("overlay--active");
    form.classList.remove("form--disabled");
    form.classList.add("form--active");
    formOpen = !formOpen;
  } else {
    overlay.classList.remove("overlay--active");
    overlay.classList.add("overlay--disabled");
    form.classList.remove("form--active");
    form.classList.add("form--disabled");
    formOpen = !formOpen;
  }
}

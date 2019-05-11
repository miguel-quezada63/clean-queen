window.onscroll = () => {
  const nav: HTMLElement = document.querySelector("#navigation");
  const navItem: Array<HTMLElement> = document.querySelectorAll(".navbar-item");
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

const DOMElements = {
  nav: document.querySelector(".side-nav"),
  mobileNav: document.querySelector(".mobile-nav"),
  navIcon: document.getElementById("nav-icon"),
  closeNavBtn: document.querySelector(".close-nav-btn"),
  overlay: document.getElementById("overlay"),
  myAccountBtn: document.querySelector(".side-nav__myaccount"),
  sideNavNav: document.querySelector(".side-nav-nav"),
  myAccountNav: document.querySelector(".my-account-nav"),
  mobileNavAccount: document.querySelector(".mobile-nav__myaccount"),
  pagesNav: document.querySelector(".pages-nav"),
  closeAccountNav: document.querySelector(".close-account-nav"),
  year: document.querySelector("footer template"),
  copyright: document.querySelector(".copywright p"),
};

const navBtnHandler = () => {
  console.log(DOMElements.nav);
  DOMElements.nav.classList.add("display-nav");
  DOMElements.navIcon.style.display = "none";
  DOMElements.overlay.style.position = "fixed";
  DOMElements.overlay.style.display = "block";
};

const closeNavBtnHandler = () => {
  DOMElements.nav.classList.remove("display-nav");
  DOMElements.navIcon.style.display = "flex";
  DOMElements.overlay.style.position = "static";
  DOMElements.overlay.style.display = "none";
  closeAccountNavHandler();
};

const myAccountBtnHandler = () => {
  console.log(DOMElements.sideNavNav);
  DOMElements.sideNavNav.style.display = "none";
  DOMElements.myAccountNav.classList.add("open-account-nav");
  DOMElements.nav.style.height = "28rem";
};

const closeAccountNavHandler = () => {
  console.log("here2");
  if (DOMElements.mobileNav.contains(DOMElements.myAccountNav)) {
    DOMElements.mobileNav.replaceChild(
      DOMElements.pagesNav,
      DOMElements.myAccountNav
    );
    return;
  }
  DOMElements.sideNavNav.style.display = "block";
  DOMElements.myAccountNav.classList.remove("open-account-nav");
  DOMElements.nav.style.height = "21rem";
};

const mobileNavHandler = () => {
  DOMElements.mobileNav.style.display = "block";
  DOMElements.overlay.style.position = "fixed";
  DOMElements.overlay.style.display = "block";
};

const closeMobileNavHandler = () => {
  // conssole.log("th")
  DOMElements.mobileNav.style.display = "none";
  DOMElements.overlay.style.position = "static";
  DOMElements.overlay.style.display = "none";
};

const closeOverlayHandler = () => {
  closeMobileNavHandler();
  closeNavBtnHandler();

  if (document.body.contains(document.querySelector("#order"))) {
    closeOrderPopup();
  }
};

myMobileAccountBtnHandler = () => {
  DOMElements.mobileNav.replaceChild(
    DOMElements.myAccountNav,
    DOMElements.pagesNav
  );
  DOMElements.myAccountNav.classList.add("mobile-my-account-nav");
  DOMElements.overlay.style.position = "fixed";
  DOMElements.overlay.style.display = "block";
};

DOMElements.navIcon.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 425px)").matches) {
    mobileNavHandler();
    console.log("here");
  } else {
    navBtnHandler();
  }
});

DOMElements.closeNavBtn.addEventListener("click", closeNavBtnHandler);
DOMElements.overlay.addEventListener("click", closeOverlayHandler);
DOMElements.myAccountBtn.addEventListener("click", myAccountBtnHandler);
DOMElements.closeAccountNav.addEventListener("click", closeAccountNavHandler);
DOMElements.mobileNavAccount.addEventListener(
  "click",
  myMobileAccountBtnHandler
);

// Add date to DOM
let date = new Date();
let currYear = document.createElement("span");
currYear.textContent = date.getFullYear();

DOMElements.copyright.replaceChild(currYear, DOMElements.year);

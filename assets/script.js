const open = document.getElementById("header__openNav");
const close = document.getElementById("header__closeNav");
const nav = document.getElementById("header__nav");

const scrollEffect = () => {
  const header = document.getElementById("header");
  //   console.log(nav.addClass("licorice"));
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      header.classList.add("licorice");
    } else {
      header.classList.remove("licorice");
    }
  });
};

scrollEffect();

const openNavMenu = () => {
  console.log(window);

  open.addEventListener("click", () => {
    nav.style.display = "inherit";
  });

  close.addEventListener("click", () => {
    nav.style.display = "none";
  });
};
const windowResize = () => {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      close.style.display = "none ";
      open.style.display = "none ";
      nav.removeAttribute("style");
    } else {
      close.style.display = "block";
      open.style.display = "block";
    }
  });
};

const elements = document.querySelectorAll("div[data-aos], img[data-aos]");

const removeAOS = () => {
  if (window.innerWidth < 1000) {
    elements.forEach((element) => {
      element.removeAttribute("data-aos");
    });
  }
};

removeAOS();

openNavMenu();
windowResize();

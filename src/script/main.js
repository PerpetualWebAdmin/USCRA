const navham = document.querySelector(".navham");
const navList = document.querySelector(".navlist");

navham.addEventListener("click", () => {
  navham.classList.toggle("active");
  navList.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((links) => {
  navList.classList.remove("active");
  navham.classList.remove("active");
});

//Dropdown

let navItems = document.querySelectorAll(".nav-items");

navItems.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    let child = menu.querySelectorAll(":scope *"); //The Purpose of Using Scope is to target all the items on the nav-items

    if (menu.classList.contains("active")) {
      //ClassList Contains - The ClassList Contains purpose is to check if the data is present which means if it is true then it will throwback to the target element. If not then it will not be executed
      menu.classList.remove("active");

      navItems.forEach((sub) => {
        sub.classList.remove("active");
        sub.removeAttribute("style");
      });

      menu.removeAttribute("style");
      child.forEach((x) => {
        x.removeAttribute("style");
      });
    } else {
      navItems.forEach((sub) => {
        sub.classList.remove("active");
        sub.setAttribute("style", "opacity:1");
      });

      menu.removeAttribute("style");
      child.forEach((x) => {
        x.removeAttribute("style");
      });

      menu.classList.add("active");
    }
  });
});

//Modal Section
const membersModal = document.querySelector(".open-imgs");
const imgs = document.querySelectorAll(".members-imgs > img");
const closeImgs = document.querySelector(".close-imgs");
const openImgs = document.querySelector(".open-imgs > img");

let currentValue = -1;

//Targeting all the image array using the foreach syntax
imgs.forEach((image, index) => {
  //Adding an event so the image will be clickable
  image.addEventListener("click", (n) => {
    currentValue = index;
    //Once the target modal has been click, all the members of the active will be launch
    membersModal.classList.toggle("active");
    //Once the openimgs has been toggle then the output will be the contain imgs of the Imgs
    openImgs.src = n.target.src;
  });
});

closeImgs.addEventListener("click", () => {
  membersModal.classList.remove("active");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    membersModal.classList.remove("active");
  }
});

const carouselButtons = document.querySelectorAll(".carousel");

carouselButtons.forEach((buttons) => {
  let x = 0;
  if (buttons.classList.contains("prev")) {
    x = -1;
  } else {
    x = 1;
  }

  buttons.addEventListener("click", () => {
    openImgs.src = imgs[currentValue + x].src;
    currentValue += x;
  });
});

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

    if (menu.classList.contains("active")) { //ClassList Contains - The ClassList Contains purpose is to check if the data is present which means if it is true then it will throwback to the target element. If not then it will not be executed
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


//Horizontal Animation

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

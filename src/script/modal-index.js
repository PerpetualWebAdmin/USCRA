const mapModal = document.querySelector(".open-imgs");
const regisImgs = document.querySelectorAll(".regis-imgs > img");
const regcloseImgs = document.querySelector(".close-imgs");
const regopenImgs = document.querySelector(".open-imgs > img");
const closeModal = document.querySelector('.closetag');


//Targeting all the image array using the foreach syntax
regisImgs.forEach((image, index) => {
  //Adding an event so the image will be clickable
  image.addEventListener("click", (n) => {
   
    //Once the target modal has been click, all the members of the active will be launch
    mapModal.classList.toggle("active");
    //Once the openimgs has been toggle then the output will be the contain imgs of the Imgs
    regopenImgs.src = n.target.src;
  });
});

regcloseImgs.addEventListener("click", () => {
  membersModal.classList.remove("active");
});
closeModal.addEventListener('click', ()=>{
    membersModal.classList.remove('active')
})

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    membersModal.classList.remove("active");
  }
});


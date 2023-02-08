const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

const search = () => {
  const searchbox = document.getElementById("search").value.toUpperCase();
  const items = document.getElementById("card-container");
  const item = document.querySelectorAll(".card");
  const name = items.getElementsByTagName("h3");

  for (var i = 0; i < name.length; i++) {
    let match = item[i].getElementsByTagName("h3")[0];

    if (match) {
      let text = match.textContent || match.innerHTML;

      if (text.toUpperCase().indexOf(searchbox) > -1) {
        item[i].style.display = "";
      } else {
        item[i].style.display = "none";
      }
    }
  }
};

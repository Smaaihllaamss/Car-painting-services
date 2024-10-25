const cards = Array.from(document.querySelectorAll(".gallery__card"));
const slider = document.querySelector(".gallery-slider");
const sliderContainer = document.querySelector(".gallery-slider__container");
const image = Array.from(document.querySelectorAll(".gallery__img"));
const sliderBtnPrev = document.querySelector(".slider-btn-prev");
const sliderBtnNext = document.querySelector(".slider-btn-next");
const sliderBtnClose = document.querySelector(".slider-btn-close");

let cardIndex = -1;
let imageFull;

for (const card of cards) {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    cardIndex = cards.indexOf(card);
    //console.log(cardsIndex); // Проверка индекса катрочки
    imageFull = image[cardIndex].cloneNode();
    imageFull.style.borderRadius = "0";
    sliderContainer.append(imageFull);
    slider.classList.add("active");
  });
}

sliderBtnPrev.addEventListener("click", (event) => {
  event.preventDefault();
  changeImage("prev");
});

sliderBtnNext.addEventListener("click", (event) => {
  event.preventDefault();
  changeImage("next");
});

function changeImage(dir) {
  if (dir === "prev") {
    if (cardIndex > 0) {
      cardIndex--;
    } else {
      cardIndex = cards.length - 1;
    }
  } else if (dir === "next") {
    if (cardIndex < cards.length - 1) {
      cardIndex++;
    } else {
      cardIndex = 0;
    }
  }
  let newImageFull = image[cardIndex].cloneNode();
  newImageFull.style.objectFit = "contain";
  imageFull.replaceWith(newImageFull);
  imageFull = newImageFull;
}

sliderBtnClose.addEventListener("click", (event) => {
  event.preventDefault();
  slider.classList.remove("active");
  ImageFull.remove();
  newImageFull.remove();
});

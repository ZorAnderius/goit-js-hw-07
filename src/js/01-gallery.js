import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

let instance;

//loking for gallary tag
const gallaryEl = document.querySelector(".gallery");

//creat HTML elements
const imagesMarkup = creatGallaryMarkup(galleryItems);

function creatGallaryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`
    )
    .join("");
}

//add HTML elements onto the gallery
gallaryEl.insertAdjacentHTML("beforeend", imagesMarkup);

//add listener to gallary
gallaryEl.addEventListener("click", onClick);

function onClick(e) {
  const isImgEl = e.target.classList.contains("gallery__image");
  if (!isImgEl) {
    return;
  }
  e.preventDefault();
  onImgClick(e);
}

function onImgClick(e) {
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  window.addEventListener("keydown", (e) => {
    const ESC_KEY = "Escape";
    if (e.code == ESC_KEY) {
      instance.close();
      removeListeners();
    }
  });
}

function removeListeners() {
  window.removeEventListener("keydown", (e) => {
    const ESC_KEY = "Escape";
    if (e.code == ESC_KEY) {
      instance.close();
      closeListeners(e);
    }
  });
}

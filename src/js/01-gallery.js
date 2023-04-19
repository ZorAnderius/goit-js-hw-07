import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//loking for gallary tag
const gallaryEl = document.querySelector(".gallery");

//creat HTML elements
const gallaryStrMarkup = creatGallaryMarkup(galleryItems);

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
gallaryEl.insertAdjacentHTML("beforeend", gallaryStrMarkup);

//add listener to gallary
gallaryEl.addEventListener("click", onImageViwer);

function onImageViwer(e) {
  e.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
}

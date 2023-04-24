import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryStrMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryStrMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                 <img class="gallery__image" 
                 src="${preview}" 
                 alt="${description}" />
            </a>
        </li>`
    )
    .join("");
}

const lightBox = new SimpleLightbox(".gallery__link");

console.log(lightBox);

lightBox.on("show.simplelightbox", (event) => {
  lightBox.options.captionsData =
    event.currentTarget.firstElementChild.getAttribute("alt");
  lightBox.options.captionType = "self";
  lightBox.options.captionSelector = "text";
  lightBox.options.captionDelay = 250;
});

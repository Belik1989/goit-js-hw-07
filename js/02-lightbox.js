import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

// Створення та рендеринг розмітки по масиву даних galleryItems 
// та представленому шаблону galleryItem

const galleryItemMarkup = creatGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryItemMarkup);

function creatGalleryMarkup(galleryItems) {
return galleryItems
    .map(({ preview, original, description }) => {

// Ініціалізація бібліотеки SimpleLightbox
    return `<li>
        <a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    </li>`;
    })
    .join("");
}

// з допомогою пункту Options додаємо підпис на картинку та швидкість анімацїї
const lightbox = new SimpleLightbox(".gallery__item", {
captionsData: "alt",
captionDelay: 250,
});
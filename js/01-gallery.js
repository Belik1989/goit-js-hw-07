import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

// Створення та рендеринг розмітки по масиву даних galleryItems 
// та представленому шаблону galleryItem

const galleryItemMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryItemMarkup);


function createGalleryMarkup(galleryItems) {
return galleryItems
    .map(({ preview, original, description }) => {

// зміна src <img>
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </div>`;
    })
    .join("");
}
// делегування <div class="gallery" </div>
galleryEl.addEventListener("click", openImgModal);

function openImgModal(event) {
// заборона переходу на іншу сторінку за замовчуванням
event.preventDefault();

// подія відбувається тільки псля click на картинку
if (!event.target.classList.contains("gallery__image")) {
    return;
}

// добування посилань на оригінальні зображення
const imgUrlOriganal = event.target.dataset.source;

// // відкривання(за кліком на зображення) та закривання(за кліком 
// на оверлоу та кнопки esc) модального вікна 
const instance = basicLightbox.create(
    `
    <div class="modal">
    <img src="${imgUrlOriganal}" width="800" height="600">
    <a>Close</a>
    </div>
`,
    {
    onShow: () => {
        document.addEventListener("keyup", onEscClose);
    },
    onClose: () => {
        document.removeEventListener("keyup", onEscClose);
    },
    }
);

function onEscClose(evt) {
    if (evt.key === "Escape") {
    instance.close();
    }
}

instance.show();
}

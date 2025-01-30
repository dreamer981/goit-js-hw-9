import "./init.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { images } from "../data/images";

const galleryContainer = document.querySelector(".gallery");

// Galeri öğelerini dinamik olarak oluşturma
const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `
  )
  .join("");

// Galeri markup'u ekle
galleryContainer.innerHTML = galleryMarkup;

// SimpleLightbox başlatma
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
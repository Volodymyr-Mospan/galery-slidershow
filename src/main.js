import "./style.css";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import galleryData from "./data.json";

// console.log(galleryData);
const gallery = document.querySelector(".gallery");

async function murkupGallery(galleryData) {
  let murkup = galleryData.reduce((acc, picture, i) => {
    return (acc += `
      <div class="card">
        <img
          src="${picture.images.thumbnail}"
          alt="Picture ${picture.name} of ${picture.artist.name}"
        />
        <div class="caption">
          <h2 class="pic-name">${picture.name}</h2>
          <p class="pic-author">${picture.artist.name}</p>
        </div>
      </div>`);
  }, "");

  gallery.innerHTML = murkup;
}

murkupGallery(galleryData);

const msnry = new Masonry(".gallery", {
  itemSelector: ".card",
  columnWidth: ".card",
  gutter: 40,
  percentPosition: true,
});

imagesLoaded(".gallery", () => {
  gallery.style.display = "block";
  msnry.layout();
});

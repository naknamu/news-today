import astroImage from "./astro_skull.png";

let createEmptyMessage = (content) => {
  content.textContent = '';
  //text message
  const newText = document.createElement("div");
  newText.textContent = "There seems to be nothing here...";
  newText.style.color = "gray";
  content.appendChild(newText);
  //image
  const newImage = document.createElement("img");
  newImage.src = astroImage;
  content.appendChild(newImage);
};

export default createEmptyMessage;

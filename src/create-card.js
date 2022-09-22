/**Function to CREATE NEWS CARD DYNAMICALLY **/
let createCard = (
  link,
  image_source,
  headline_text,
  details_text,
  publisher_text,
  date_text
) => {
  const content = document.querySelector(".content");
  //create card
  const card = document.createElement("div");
  content.appendChild(card);
  card.classList.add("card");
  card.addEventListener("click", () => {
    console.log("im clicked!");
    window.open(link, "_blank").focus();
  });
  //create video or image
  if (image_source !== null && image_source !== undefined) {
    //video
    if (image_source.includes(".mp4")) {
      console.log("this link is not an image!");
      const video = document.createElement("video");
      card.appendChild(video);
      video.src = image_source;
      video.setAttribute("controls", "controls");
      video.classList.add('video');
      //image
    } else {
      const img = document.createElement("img");
      img.src = image_source;
      card.appendChild(img);
    }
  }
  //create headline
  const headline = document.createElement("div");
  headline.textContent = headline_text;
  card.appendChild(headline);
  headline.classList.add("headline");
  //create details
  const details = document.createElement("div");
  details.textContent = details_text;
  card.appendChild(details);
  details.classList.add("details");
  //create wrapper for publisher and date
  const wrapper = document.createElement("div");
  card.appendChild(wrapper);
  wrapper.classList.add("wrapper");
  //create publisher
  const publisher = document.createElement("div");
  publisher.textContent = publisher_text;
  publisher.classList.add("publisher");
  wrapper.appendChild(publisher);
  //create separation dot
  const dot = document.createElement("div");
  dot.textContent = "•";
  wrapper.appendChild(dot);
  //create date
  const date = document.createElement("div");
  date.textContent = date_text;
  date.classList.add("date");
  wrapper.appendChild(date);
};

export default createCard;

//FUNCTION CREATING LOADING ANIMATION
let createLoadingAnimation = (content) => {
    console.log("loading screen!");
    //create ring div
    const ring = document.createElement("div");
    ring.classList.add("ring");
    content.appendChild(ring);
    ring.textContent = "Loading";
    //create child span
    const span = document.createElement("span");
    ring.appendChild(span);
  };
  
  //DELETE LOADING ANIMATION
  let deleteLoadingAnimation = () => {
    const ring = document.querySelector(".ring");
    ring.remove();
  };

export {createLoadingAnimation, deleteLoadingAnimation};
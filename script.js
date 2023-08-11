var imageIndex = 1; // Start with the first image

function toggleImage() {
  var imageElements = document.getElementsByClassName("hamburger-icon");
  var navDivs = document.getElementsByClassName("mobile-nav");
  var navDiv = navDivs[0];
  var imageElement = imageElements[0];
  if (imageIndex === 1) {
      imageElement.src = "./images/icon-close.svg"; // Path to the first image
      imageIndex = 2;
      navDiv.style.display = "flex";
    } else {
        imageIndex = 1;
        navDiv.style.display = "none";
        imageElement.src = "./images/icon-hamburger.svg"; // Path to the second image
  }
}

let myImage = document.querySelector("img");
let imageDisplayNumber = document.querySelector("h1");
imageDisplayNumber.textContent = getNumber(myImage.getAttribute("src"));
console.log(myImage.getAttribute("src"));

function getNumber(string) {
  string = string.slice(-5, -4);
  return Number(string);
}

function clickUp(object) {
  let mySrc = object.getAttribute("src");
  let imageNumber = getNumber(mySrc);
  console.log(imageNumber);
  if (imageNumber < 3) {
    imageNumber += 1;
  } else {
    imageNumber = 1;
  }
  myImage.setAttribute("src", `./images/homelander_${imageNumber}.png`);
  imageDisplayNumber.textContent = getNumber(myImage.getAttribute("src"));
}

function clickDown(object) {
  let mySrc = object.getAttribute("src");
  let imageNumber = getNumber(mySrc);
  console.log(imageNumber);
  if (imageNumber > 1) {
    imageNumber -= 1;
  } else {
    imageNumber = 3;
  }
  myImage.setAttribute("src", `./images/homelander_${imageNumber}.png`);
  imageDisplayNumber.textContent = getNumber(myImage.getAttribute("src"));
}

let leftArrow = document.querySelector(".arrow.left");
let rightArrow = document.querySelector(".arrow.right");
leftArrow.addEventListener("click", () => clickDown(myImage));
rightArrow.addEventListener("click", () => clickUp(myImage));

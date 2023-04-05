//1. get a reference to the button -> querySelector
const button = document.querySelector("#clickMe");
//2. define a function to alert user
function alertUser() {
  alert("you clicked!");
  //   button.removeEventListener("click", alertUser);
}
//3. add the function as event listener
button.addEventListener("click", alertUser, { once: true });

function changeBGPink() {
  // document.body.style.backgroundColor = "pink";
  // document.body.style = "background-color:pink"
  document.body.classList.add("pinkBG");
}
button.addEventListener("click", changeBGPink);

function changeText(event) {
  console.log(event);
  // if it says Click Me! change it to clicked
  //else change it to Click Me!

  if (button.textContent === "Click Me!") {
    button.innerHTML = "clicked!";
  } else {
    button.textContent = "Click Me!";
  }
}
button.addEventListener("click", changeText);

//1. find the div
const buttonContainer = document.querySelector(".button-container");
//2. define changeBGGreen function
function changeBGGreen(event) {
  if (event.target.tagName === "BUTTON") {
    event.target.classList.add("greenBG");
  } //change the style of event.target to have green bg
}
//3. add the func as event listener
buttonContainer.addEventListener("mouseover", changeBGGreen);

// 2. define a function to change textcolor
function changeTextColor(event) {
  if (event.target.tagName === "BUTTON") {
    event.target.style.color = event.target.textContent;
  }
  // event.target.classList.add(event.target.textContent)
  // if "red" button is clicked -> the text color should be red
}
// 3.event listener
buttonContainer.addEventListener("click", changeTextColor);

// 1. find the element -> button
//2. define function
function addNewElements() {
  //createElement x2 -> button and p
  const newButton = document.createElement("button"); //1.find the element
  const newP = document.createElement("p");

  newButton.addEventListener("mouseover", changeBGGreen);
  // appendChild x2
  document.body.appendChild(newP);
  document.body.appendChild(newButton);
  //textContent x2
  newButton.textContent = "purple";
  newP.textContent = "something";
}
//3. addEventListener
button.addEventListener("click", addNewElements);

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

function changeText() {
  // if it says Click Me! change it to clicked
  //else change it to Click Me!
  
  if (button.textContent === "Click Me!") {
    button.innerHTML = "clicked!";
  }
  else{
    button.textContent = "Click Me!";

  }
}
button.addEventListener("click", changeText);

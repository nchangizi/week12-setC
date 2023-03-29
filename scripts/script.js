//1. get a reference to the button -> querySelector
const button = document.querySelector("#clickMe");
//2. define a function to alert user
function alertUser() {
  alert("you clicked!");
//   button.removeEventListener("click", alertUser);

}
//3. add the function as event listener
button.addEventListener("click", alertUser,{once:true});

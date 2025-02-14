const text = document.getElementById("text");
text.textContent = `Hello, DOM!`;

const changeColorButton = document.getElementById("changeColor");
changeColorButton.addEventListener("click", () => {
  document.body.style.backgroundColor = `yellow`;
});

const toggle = document.querySelector("#toggle");
const box = document.querySelector("#box");

toggle.addEventListener("click", () => {
  box.classList?.toggle("toggleDisplay");
});

const list = document.querySelector("#list");
const addItem = document.querySelector("#addItem");

addItem.addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.appendChild(newItem);
});

const nameInput = document.getElementById("nameInput");
const fillName = document.getElementById("fillName");

fillName.addEventListener("click", () => {
  nameInput.value = "John Doe";
});

let count = 0;
const countDisplay = document.getElementById("countDisplay");
const countButton = document.getElementById("countButton");
countButton.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

const removeMe = document.getElementById("removeMe");
const removeButton = document.getElementById("removeButton");

removeButton.onclick = function () {
  removeMe.remove();
};

const hoverText = document.getElementById("hoverText");
hoverText.onmouseover = function () {
  hoverText.style.fontSize = "2em";
};
hoverText.onmouseout = function () {
  hoverText.style.fontSize = "1em";
};

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

const createBox = document.getElementById("createBox");

createBox.addEventListener("click", function () {
  let fragment = document.createDocumentFragment();
  let newDiv = document.createElement("div");
  newDiv.textContent = `I am a new Div`;
  newDiv.classList.add("box");
  fragment.appendChild(newDiv);
  document.body.appendChild(fragment);
});

const removeBox = document.getElementById("removeBox");
removeBox.addEventListener("click", () => {
  let boxes = document.getElementsByClassName("box");
  if (boxes.length) {
    document.body.removeChild(boxes[boxes.length - 1]);
  }
});

const message = document.getElementById("message");
const charCount = document.getElementById("charCount");

message.addEventListener("input", (e) => {
  charCount.innerText = message.value.length;
});

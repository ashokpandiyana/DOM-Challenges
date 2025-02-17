const text = document.getElementById("text");
const changeColorButton = document.getElementById("changeColor");
const toggle = document.querySelector("#toggle");
const box = document.querySelector("#box");
const list = document.querySelector("#list");
const addItem = document.querySelector("#addItem");
const nameInput = document.getElementById("nameInput");
const fillName = document.getElementById("fillName");
const countDisplay = document.getElementById("countDisplay");
const countButton = document.getElementById("countButton");
const removeMe = document.getElementById("removeMe");
const removeButton = document.getElementById("removeButton");
const hoverText = document.getElementById("hoverText");
const myForm = document.getElementById("myForm");
const createBox = document.getElementById("createBox");
const removeBox = document.getElementById("removeBox");
const message = document.getElementById("message");
const charCount = document.getElementById("charCount");
const inputs = document.querySelectorAll("input");
const myInput = document.getElementById("myInput");
const dragBox = document.getElementById("dragBox");
const darkMode = document.getElementById("darkMode");
const timer = document.getElementById("timer");
const userList = document.getElementById("userList");
const switchText = document.getElementById("switchText");
const copyInput = document.getElementById("copyInput");
const copyBtn = document.getElementById("copyBtn");
const windowSize = document.getElementById("windowSize");
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const scrollTop = document.getElementById("scrollTop");
const typeText = document.getElementById("typeText");
const tooltipBtn = document.getElementById("tooltipBtn");
const tooltip = document.getElementById("tooltip");
const showEmoji = document.getElementById("showEmoji");
const emoji_container = document.querySelector(".emoji_container");

if (text) text.textContent = "Hello, DOM!";

if (changeColorButton) {
  changeColorButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow";
  });
}

if (toggle && box) {
  toggle.addEventListener("click", () => {
    box.classList.toggle("toggleDisplay");
  });
}

if (list && addItem) {
  addItem.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    list.appendChild(newItem);
  });
}

if (nameInput && fillName) {
  fillName.addEventListener("click", () => {
    nameInput.value = "John Doe";
  });
}

let count = 0;
if (countDisplay && countButton) {
  countButton.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
  });
}

if (removeMe && removeButton) {
  removeButton.onclick = function () {
    removeMe.remove();
  };
}

if (hoverText) {
  hoverText.onmouseover = function () {
    hoverText.style.fontSize = "2em";
  };
  hoverText.onmouseout = function () {
    hoverText.style.fontSize = "1em";
  };
}

if (myForm) {
  myForm.addEventListener("submit", function (e) {
    e.preventDefault();
  });
}

if (createBox) {
  createBox.addEventListener("click", function () {
    const fragment = document.createDocumentFragment();
    const newDiv = document.createElement("div");
    newDiv.textContent = "I am a new Div";
    newDiv.classList.add("box");
    fragment.appendChild(newDiv);
    document.body.appendChild(fragment);
  });
}

if (removeBox) {
  removeBox.addEventListener("click", () => {
    const boxes = document.getElementsByClassName("box");
    if (boxes.length) {
      document.body.removeChild(boxes[boxes.length - 1]);
    }
  });
}

if (message && charCount) {
  message.addEventListener("input", () => {
    charCount.innerText = message.value.length;
  });
}

if (inputs.length) {
  inputs.forEach((input) =>
    input.addEventListener("focus", (e) => {
      input.style.backgroundColor = "red";
    })
  );
  inputs.forEach((input) =>
    input.addEventListener("blur", (e) => {
      input.style.backgroundColor = "white";
    })
  );
}

if (myInput) {
  myInput.addEventListener("keydown", (e) => {
    console.log(e);

    if (e.key == "Enter") {
      console.log("Enter Key pressed!");
    }
  });
}

let offsetX = 0,
  offsetY = 0,
  isDragging = false;

if (dragBox) {
  dragBox.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - dragBox.getBoundingClientRect().left;
    offsetY = e.clientY - dragBox.getBoundingClientRect().top;
    dragBox.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    dragBox.style.position = "absolute";
    dragBox.style.left = `${e.clientX - offsetX}px`;
    dragBox.style.top = `${e.clientY - offsetY}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    dragBox.style.cursor = "grab";
  });
}

if (darkMode) {
  darkMode.onclick = function () {
    document.body.classList.toggle("dark-mode");
  };
}

let interval;
window.addEventListener("DOMContentLoaded", () => {
  interval = setInterval(() => {
    timer.innerText = timer.innerText - 1;
    console.log(timer.innerText);
    if (timer.innerText == 0) {
      clearInterval(interval);
    }
  }, 1000);
});

async function fetchUrl(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Data fetch failed:", err);
  }
}

if (userList) {
  let users = fetchUrl(`https://jsonplaceholder.typicode.com/users`);
  if (users.length) {
    let fragement = document.createDocumentFragment();
  }
  console.log("Users", users);
}

if (switchText) {
  window.addEventListener("DOMContentLoaded", function () {
    setInterval(() => {
      switchText.innerText =
        switchText.innerText === "Hello" ? "Goodbye" : "Hello";
    }, 2000);
  });
}

if (copyBtn) {
  copyBtn.onclick = function () {
    if (copyInput.value.length) navigator.clipboard.writeText(copyInput.value);
  };
}

if (windowSize) {
  window.addEventListener("resize", (e) => {
    console.log(e);
    windowSize.innerText = `Width:${window.innerWidth}`;
  });
}
if (modalBtn && modal) {
  modalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });
  window.addEventListener("click", (e) => {
    console.log(e.target);
    if (
      modal.style.display === "block" &&
      !e.target.closest(".modalContainer")
    ) {
      modal.style.display = "none";
    }
  });
}

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const typeWriteText = "Hello, this is a typewriter text";
let index = 0;
function typeWriter() {
  if (index < typeWriteText.length) {
    typeText.innerHTML += typeWriteText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  } else {
    typeText.style.borderRight = "none";
  }
}

if (typeText) {
  window.onload = function () {
    setTimeout(typeWriter, 500);
  };
}

tooltipBtn.addEventListener("mouseover", function (event) {
  tooltip.style.display = "block";
  tooltip.style.position = "absolute";
  tooltip.style.left = event.pageX + "px";
  tooltip.style.top = event.pageY + 20 + "px";
});

tooltipBtn.addEventListener("mouseout", function () {
  tooltip.style.display = "none";
});

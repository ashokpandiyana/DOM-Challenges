// function findElementsContainingText(root, keyword) {
//   let result = [];

//   function search(node) {
//     if (!node) return;

//     if (
//       node.nodeType === Node.ELEMENT_NODE &&
//       node.textContent.includes(keyword)
//     ) {
//       result.push(node);
//     }

//     for (let child of node.children) {
//       search(child);
//     }
//   }

//   search(root);
//   return result;
// }

// const list = document.getElementById("list");
// console.log(findElementsContainingText(list, "Fruits"));

// function delegateEvent(parentSelector, childSelector, eventName, callback) {
//   const parent = document.querySelector(parentSelector);
//   if (!parent) {
//     console.error(`Parent element ${parentSelector} not found.`);
//     return;
//   }

//   parent.addEventListener(eventName, function (event) {
//     if (event.target.matches(childSelector)) {
//       callback(event);
//     }
//   });
// }

// delegateEvent("#container", ".btn", "click", (event) => {
//   console.log(event.target.classList);
//   console.log("Button clicked:", event.target.textContent);
// });

// let count = 3;

// setInterval(() => {
//   const newButton = document.createElement("button");
//   newButton.className = "btn";
//   newButton.textContent = `Click Me ${count++}`;
//   document.getElementById("container").appendChild(newButton);
// }, 1000);

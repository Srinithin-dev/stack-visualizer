const getInputValue = document.getElementById("userInput");
const pushButton = document.getElementById("push");
const resetButton = document.getElementById("reset");
const popButton = document.getElementById("pop");

const stackContainer = document.getElementById("stackContainer");
const stackValue = document.getElementById("stackValue");
const topOfTheStack = document.getElementById("topOfTheStack");
const lastPushed = document.getElementById("lastPushed");
const lastPopped = document.getElementById("lastPopped");
const stackSize = document.getElementById("stackSize");
const inputError = document.getElementById("inputError");
const lastedStatus = document.getElementById("lastedMessage");

let stack = [];

pushButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(getInputValue.value, "getInputValue.value.length");
  if (!getInputValue.value.length) {
    inputError.innerHTML = "please enter a value";
    return;
  }

  if (stack.length > 5) {
    getInputValue.value = "";
    alert("stack size exceeded");
    return;
  }

  stack.push(getInputValue.value);
  renderStack();

  topOfTheStack.innerHTML = stack[stack.length - 1];
  lastPushed.innerHTML = stack[stack.length - 1];
  stackSize.innerHTML = stack.length;
  lastedStatus.innerHTML = `pushed ${stack[stack.length - 1]}`;
});

resetButton.addEventListener("click", function () {
  inputError.innerHTML = "";
  getInputValue.value = "";
  stackValue.innerHTML = "";
  topOfTheStack.innerHTML = "";
  lastPushed.innerHTML = "";
  lastPopped.innerHTML = "";
  stackSize.innerHTML = "";
  lastedStatus.innerHTML = `Stack reset`;
  stack = [];
});

popButton.addEventListener("click", function () {
  if (!stack.length) {
    inputError.innerHTML = "stack is empty already";
    return;
  }
  const poppedItem = stack.pop();
  renderStack();
  lastPopped.innerHTML = poppedItem;
  lastedStatus.innerHTML = `popped ${poppedItem}`;
});

function renderStack() {
  inputError.innerHTML = "";
  getInputValue.value = "";
  stackValue.innerHTML = "";
  console.log(stack, "stack");

  let html = "";
  for (let i = 0; i < stack.length; i++) {
    html += `<div class="bg-emerald-600 py-4 px-6 rounded-lg text-white">${stack[i]}</div>`;
  }
  console.log(stackValue.innerHTML, "rendering", html);
  stackValue.innerHTML = html;
}

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

pushButton.addEventListener("click", function () {
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
  for (let i = stack.length; i > 0; i--) {
    stackValue.innerHTML += `<div class="bg-emerald-600 py-4 px-6 rounded-lg text-white">${stack[i - 1]}</div>`;
  }

  topOfTheStack.innerHTML = stack[stack.length - 1];
  lastPushed.innerHTML = stack[stack.length - 1];
  stackSize.innerHTML = stack.length;
  lastedStatus.innerHTML = `pushed ${stack[stack.length - 1]}`;
});

resetButton.addEventListener("click", function () {
  renderStack();

  topOfTheStack.innerHTML = "";
  lastPushed.innerHTML = "";
  lastPopped.innerHTML = "";
  stackSize.innerHTML = "";
  stack = [];
});

popButton.addEventListener("click", function () {
  if (!stack.length) {
    inputError.innerHTML = "stack is empty already";
    return;
  }
  let poppedItem = "";
  renderStack();

  const a = stack.filter((value, index) => {
    if (stack.length - 1 !== index) {
      return value;
    } else {
      poppedItem = value;
    }
  });
  stack = [];
  stack.push(...a);
  for (let i = stack.length; i > 0; i--) {
    stackValue.innerHTML += `<div class="bg-emerald-600 py-4 px-6 rounded-lg text-white">${stack[i - 1]}</div>`;
  }
  lastPopped.innerHTML = poppedItem;
  lastedStatus.innerHTML = `popped ${poppedItem}`;
});

function renderStack() {
  inputError.innerHTML = "";
  getInputValue.value = "";
  stackValue.innerHTML = "";
}

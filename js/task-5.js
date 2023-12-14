const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

function handleInput(event) {
  let inputValue = event.currentTarget.value.trim();
  if (inputValue) {
    outputEl.textContent = inputValue;
  } else {
    outputEl.textContent = "Anonymous";
  }
}

inputEl.addEventListener("input", handleInput);

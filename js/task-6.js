const inputEl = document.getElementById("validation-input");

const handleLength = function (e) {
  const inputValue = this.value.trim().length;

  // const inputValue = e.target.value.trim().length;
  // NOTE: You can either used the code above this line, I used 'this' keyword because, 'this' in a handler function (except arrow function) is the element calling itself right? in this case it's the same as input element :))

  // const requiredLength = this.dataset.length;
  const requiredLength = e.target.dataset.length;

  if (inputValue === parseInt(requiredLength)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", handleLength);

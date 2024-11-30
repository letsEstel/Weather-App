const getInput = () => {
  return new Promise((resolve) => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let unit = form.unit.value;
      let location = form.inputPlace.value;
      resolve({ unit, location });
    });
  });
};

export { getInput };

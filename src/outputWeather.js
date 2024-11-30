const outputWeather = (weather) => {
  const div = document.querySelector(".show");
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  let temp = weather.currentConditions.temp;
  let cond = weather.currentConditions.conditions;
  const condDiv = document.createElement("div");
  condDiv.className = "condDiv";
  condDiv.textContent = cond;
  const tempDiv = document.createElement("div");
  tempDiv.className = "tempDiv";
  tempDiv.textContent = temp + "\u00B0";
  div.appendChild(condDiv);
  div.appendChild(tempDiv);
  //div.textContent = weather.currentConditions.temp;
};
export { outputWeather };

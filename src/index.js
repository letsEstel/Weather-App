// index.js
import { getWeather } from "./getWeather";
import { getInput } from "./getInput";
import { outputWeather } from "./outputWeather";
import "./style.css";
const showWeather = async () => {
  let { unit, location } = await getInput();
  let weather = await getWeather(unit, location);
  console.log(weather);
  outputWeather(weather);
};

const magicBtn = document.querySelector("button");
magicBtn.addEventListener("click", () => {
  showWeather();
});

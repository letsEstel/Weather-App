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

//when app start
let weather = await getWeather("metric", "London");
console.log(weather);
outputWeather(weather);

const magicBtn = document.querySelector("button");
const form = document.querySelector(".formDiv");
magicBtn.addEventListener("click", () => {
  showWeather();
  form.classList.remove("show");
});

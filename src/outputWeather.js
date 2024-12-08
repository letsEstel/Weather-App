const outputWeather = (weather) => {
  const div = document.querySelector(".show");
  const descriptionBar = document.querySelector(".displayCondition");
  //show the condition bar and tmp
  while (div.firstChild) {
    console.log("removing");
    div.removeChild(div.firstChild);
  }
  while (descriptionBar.firstChild) {
    descriptionBar.removeChild(descriptionBar.firstChild);
  }

  //Change the condBar
  let cond = weather.currentConditions.conditions;
  const condDiv = document.querySelector(".condDiv");
  condDiv.textContent = cond;

  //show the description

  if (weather.description) {
    //code to parser the weather:
    // Prepare the report
    let reportLines = [];
    // Helper function to format epoch time to HH:MM
    function formatTime(epoch) {
      const date = new Date(epoch * 1000);
      return date.toISOString().substr(11, 5); // Extracts 'HH:MM' from ISO string
    }

    // General location and description
    reportLines.push(`${weather.resolvedAddress}`);
    reportLines.push(`Description: ${weather.description}`);
    reportLines.push(""); // Blank line for spacing

    // Limit to three days of weather data
    weather.days.slice(0, 3).forEach((day) => {
      const dayDate = day.datetime;
      const sunrise = formatTime(day.sunriseEpoch);
      const sunset = formatTime(day.sunsetEpoch);
      const conditions = day.conditions;
      const tempMax = day.tempmax;
      const tempMin = day.tempmin;
      const windSpeed = day.windspeed;

      // Add daily weather summary
      reportLines.push(`  Date: ${dayDate}`);
      reportLines.push(`  Conditions: ${conditions}`);
      reportLines.push(`  Temp: Max ${tempMax}°C, Min ${tempMin}°C`);
      reportLines.push(`  Wind: ${windSpeed} km/h`);
      reportLines.push(`  Sunrise: ${sunrise}, Sunset: ${sunset}`);
      reportLines.push(""); // Blank line for spacing
    });

    //Code from https://codepen.io/gavra/pen/nNRvKX
    // set up text to print, each item in array is new line

    var aText = reportLines;
    var iSpeed = 35; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines

    var iTextPos = 0; // initialise text position
    var sContents = ""; // initialise contents variable
    var iRow; // initialise current row

    function typewriter() {
      sContents = " ";
      iRow = Math.max(0, iIndex - iScrollAt);
      var destination = descriptionBar;

      while (iRow < iIndex) {
        sContents += aText[iRow++] + "<br />";
      }
      destination.innerHTML =
        sContents + aText[iIndex].substring(0, iTextPos) + "_";
      if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
          iArrLength = aText[iIndex].length;
          setTimeout(typewriter, 5);
        } else {
          // Animation finished, append the input button
          const input = document.createElement("div");
          input.className = "inputBtn";
          input.textContent = ">>>Press here to change a location<<<";
          input.addEventListener("click", () => {
            console.log(1);
            const inputForm = document.querySelector(".formDiv");
            console.log(inputForm);
            inputForm.classList.add("show");
          });
          descriptionBar.appendChild(input);
        }
      } else {
        setTimeout(typewriter, iSpeed);
      }
    }

    typewriter();
  } else {
    console.log(1);
    const input = document.createElement("div");
    input.className = "inputBtn";
    input.textContent = ">>>Press here to change a location<<<";
    input.addEventListener("click", () => {
      console.log(1);
      const inputForm = document.querySelector(".formDiv");
      console.log(inputForm);
      inputForm.classList.add("show");
    });
    descriptionBar.appendChild(input);
  }
};
export { outputWeather };

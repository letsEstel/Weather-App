const getWeather = async function (unit, location) {
  try {
    let weather = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        location +
        "?unitGroup=" +
        unit +
        "&key=8K8JZUTQJNHY2NWSS65QMAERA&contentType=json",
      { mode: "cors" }
    );
    if (!weather.ok) {
      return {
        currentConditions: {
          conditions: "ERROR",
          temp: "?",
        },
      };
    }
    let weatherJson = await weather.json();
    return weatherJson;
  } catch (err) {
    console.log(err);
  }
};

export { getWeather };

const getWeather = async function (unit, location) {
  let weather = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      location +
      "?unitGroup=" +
      unit +
      "&key=8K8JZUTQJNHY2NWSS65QMAERA&contentType=json",
    { mode: "cors" }
  );
  let weatherJson = await weather.json();
  return weatherJson;
};

export { getWeather };

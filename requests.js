const axios = require("axios");

const url = "http://localhost:5000/constellations";
axios
  .get(url)
  .then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    const responseArray = response.data;
    responseArray.filter((planet) => {
      if (planet.starsWithPlanets < 10) {
        console.log(planet);
      }
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

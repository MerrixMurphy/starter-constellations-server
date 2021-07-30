const axios = require("axios");

const url = "http://localhost:5000/constellations";
axios
  .get(url)
  .then(({ data }) => {
    const exists = data.find(({ name }) => name === leo.name);
    if (exists) throw `Constellation "${leo.name}" already exists.`;
    return axios.post(url, leo).then(({ data }) => console.log(data));
  })
  .catch(console.log);

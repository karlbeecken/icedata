const { default: axios } = require("axios");

/**
 * Fetches all data from the ICE API and return it as a JSON Object
 */
exports.fetchAll = async () => {
  let ret;
  await axios
    .get("https://iceportal.de/api1/rs/status")
    .then((res) => {
      ret = res.data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
  return ret;
};

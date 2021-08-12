const ice = require("./app");

describe("Fetch data from the iceportal.de API", () => {
  test("it should give valid data back", async () => {
    let res = await ice.fetchAll();
    console.log(res);
  });
});

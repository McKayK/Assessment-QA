const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  test("should return an array", () => {
    const shuffle = shuffleArray(["kal", "syl", "dalinar"]);
    expect(shuffle).not.toBe([]);
  });
  test("array should be the same length", () => {
    const shuffle = shuffleArray(["kal", "syl", "dalinar"]);
    expect(shuffle).toHaveLength(3);
  });
});

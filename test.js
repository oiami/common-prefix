const findCommonPrefix = require("./index");

test("return common prefix", () => {
  expect(findCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
});

test("return common prefix", () => {
  expect(
    findCommonPrefix(["internet", "internation", "intercom", "interpersonal"]),
  ).toEqual("inter");
});

test("return empty string when no common prefix found", () => {
  expect(findCommonPrefix(["dog", "racecar", "car"])).toEqual("");
});

test("return empty string when just some/partial common prefix found", () => {
  expect(findCommonPrefix(["dog", "racecar", "rat"])).toEqual("");
});

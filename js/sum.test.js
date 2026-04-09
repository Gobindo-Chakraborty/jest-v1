const sum = require("./sum");

test("properly adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

const subtract = require("./subtract");

test("subtraction of two numbers", () => {
  expect(subtract(1, 2)).toBe(-1);
});

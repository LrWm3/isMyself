const isMyself = require("./app.js");

test("I am not null", () => {
  expect(isMyself(null)).toBe(false);
});

test("I am not an empty string", () => {
  expect(isMyself("")).toBe(false);
});

test("I am not zero", () => {
  expect(isMyself(0)).toBe(false);
});

test("I am not one", () => {
  expect(isMyself(1)).toBe(false);
});

test("I am not negative one", () => {
  expect(isMyself(-1)).toBe(false);
});

test("I am not undefined", () => {
  expect(isMyself(1)).toBe(false);
});

for (let ii = -3; ii < 3; ++ii) {
  test(`I am not ${ii}`, () => {
    expect(isMyself(ii)).toBe(false);
  });
}

test("I am myself", () => {
  expect(isMyself(isMyself)).toBe(true);
});

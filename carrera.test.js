const race = require("./carrera-v2.js");

test("Si la distancia es 84 debe ser [ 0, 38, 46 ]", () => {
  expect(race(720, 850, 84)).toStrictEqual([0, 38, 46]);
});
test("Si la distancia es 130 debe ser [ 1, 0, 0 ]", () => {
  expect(race(720, 850, 130)).toStrictEqual([1, 0, 0]);
});
test("Si la distancia es 224 debe ser [1, 43, 23]", () => {
  expect(race(720, 850, 224)).toStrictEqual([1, 43, 23]);
});
test("Si la distancia es 560 debe ser [4,18,27]", () => {
  expect(race(720, 850, 560)).toStrictEqual([4, 18, 27]);
});
test("Si la distancia es 3086 debe ser [23,44,18]", () => {
  expect(race(720, 850, 3086)).toStrictEqual([23, 44, 18]);
});

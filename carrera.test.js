const race = require("./carreraOP.js");

test("Si la distancia es 50 debe ser [0, 23, 4]", () => {
  expect(race(720, 850, 50)).toStrictEqual([0, 23, 4]);
});

test("Si la distancia es 84 debe ser [ 0, 38, 46 ]", () => {
  expect(race(720, 850, 84)).toStrictEqual([0, 38, 46]);
});

test("Si la distancia es 100 debe ser [ 0, 46, 9 ]", () => {
  expect(race(720, 850, 100)).toStrictEqual([0, 46, 9]);
});

test("Si la distancia es 130 debe ser [ 1, 0, 0 ]", () => {
  expect(race(720, 850, 130)).toStrictEqual([1, 0, 0]);
});

test("Si la distancia es 150 debe ser [1,9,13]", () => {
  expect(race(720, 850, 150)).toStrictEqual([1, 9, 13]);
});

test("Si la distancia es 224 debe ser [1, 43, 23]", () => {
  expect(race(720, 850, 224)).toStrictEqual([1, 43, 23]);
});

test("Si la distancia es 560 debe ser [4,18,27]", () => {
  expect(race(720, 850, 560)).toStrictEqual([4, 18, 27]);
});

test("Si la distancia es 1234 debe ser [9,29,32]", () => {
  expect(race(720, 850, 1234)).toStrictEqual([9, 29, 32]);
});

test("Si la distancia es 3086 debe ser [23,44,18]", () => {
  expect(race(720, 850, 3086)).toStrictEqual([23, 44, 18]);
});

test("Si la distancia es 19000 debe ser [146, 9, 13]", () => {
  expect(race(720, 850, 19000)).toStrictEqual([146, 9, 13]);
});

test("Si la distancia es 36000 debe ser [276, 55, 23]", () => {
  expect(race(720, 850, 36000)).toStrictEqual([276, 55, 23]);
});

test("Si la distancia es 38765 debe ser [298, 11, 32]", () => {
  expect(race(720, 850, 38765)).toStrictEqual([298, 11, 32]);
});

test("Si la distancia es 44131 debe ser [339, 28, 9]", () => {
  expect(race(720, 850, 44131)).toStrictEqual([339, 28, 9]);
});

test("Si la distancia es 86400 debe ser [664,36,55]", () => {
  expect(race(720, 850, 86400)).toStrictEqual([664, 36, 55]);
});

test("Si la distancia es 999999 debe ser [7692, 18, 0]", () => {
  expect(race(720, 850, 999999)).toStrictEqual([7692, 18, 0]);
});

test("Si la distancia es 1000000 debe ser [7692, 18, 27]", () => {
  expect(race(720, 850, 1000000)).toStrictEqual([7692, 18, 27]);
});

test("Si la distancia es 9999999 debe ser [76923, 4, 9]", () => {
  expect(race(720, 850, 9999999)).toStrictEqual([76923, 4, 9]);
});

test("Si la distancia es 10000000 debe ser [76923, 4, 36]", () => {
  expect(race(720, 850, 10000000)).toStrictEqual([76923, 4, 36]);
});

test("Si la distancia es 100000000 debe ser [769230, 46, 9]", () => {
  expect(race(720, 850, 100000000)).toStrictEqual([769230, 46, 9]);
});

test("Si la distancia es 10000001 debe ser [76923, 5, 4 ]", () => {
  expect(race(720, 850, 10000001)).toStrictEqual([76923, 5, 4]);
});

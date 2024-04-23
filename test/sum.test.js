import { sum, sumAll } from "../src/sum";

test("test sum function 1", () => {
  // exec function for test
  const result = sum(1, 2);

  // test validation
  expect(result).toBe(3);
});

test("test sum function 2", () => {
  // exec function for test
  const result = sum(1, 2);

  // test validation
  expect(result).toBe(3);
});

test("test sum function 3", () => {
  // exec function for test
  const result = sum(1, 2);

  // test validation
  expect(result).toBe(3);
});

test("test sum all", () => {
  const numbers = [1, 1, 1, 1, 1];

  expect(sumAll(numbers)).toBe(5);
});

import { sayHello } from "../src/sayHello.js";

test("sayHello succes", () => {
  expect(sayHello("Dani")).toBe("Hello Dani");
});

test.failing("sayHello error", () => {
  sayHello();
});

test("sayHello error using matcher", () => {
  expect(() => sayHello(null)).toThrow();
});

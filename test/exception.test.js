import { MyExecption, callMe } from "../src/exception.js";

test("exeption", () => {
  expect(() => callMe("Dani")).toThrow();
  expect(() => callMe("Dani")).toThrow(MyExecption);
  expect(() => callMe("Dani")).toThrow("Ups My Expection happens");
});

test("execption not happen", () => {
  expect(callMe("Dian")).toBe("OK");
});

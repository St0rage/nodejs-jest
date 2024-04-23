test("string.not", () => {
  const name = "Dani Yudistira Maulana";

  expect(name).not.toBe("Dian");
  expect(name).not.toEqual("Dian");
  expect(name).not.toMatch(/dian/);
});

test("number.not", () => {
  const value = 2 + 2;

  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(3);
  expect(value).not.toBe(10);
});

test("string", () => {
  const name = "Dani Yudistira Maulana";

  expect(name).toBe("Dani Yudistira Maulana");
  expect(name).toMatch(/lana/);
});

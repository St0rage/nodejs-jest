test("array", () => {
  const names = ["dani", "yudistira", "maulana"];

  expect(names).toEqual(["dani", "yudistira", "maulana"]);
  expect(names).toContain("yudistira");
});

test("array object", () => {
  const persons = [
    {
      name: "Dani",
    },
    {
      name: "Dian",
    },
  ];

  expect(persons).toContainEqual({
    name: "Dani",
  });
});

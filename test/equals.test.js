test("test toBe", () => {
  const name = "Dani";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Dani");
});

test("test toEqual", () => {
  let person = {
    id: "dian",
  };
  Object.assign(person, { name: "Dani" });

  expect(person).toEqual({ id: "dian", name: "Dani" });
});

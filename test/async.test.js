import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
  const result = await sayHelloAsync("Dani");

  expect(result).toBe("Hello Dani");
});

test("test async matchers", async () => {
  await expect(sayHelloAsync("Dani")).resolves.toBe("Hello Dani");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});

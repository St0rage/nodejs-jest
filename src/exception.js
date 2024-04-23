export class MyExecption extends Error {}

export const callMe = (name) => {
  if (name == "Dani") {
    throw new MyExecption("Ups My Expection happens");
  } else {
    return "OK";
  }
};

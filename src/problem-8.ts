const validateKeys = <T extends object, P extends keyof T>(
  obj: T,
  keys: P[]
): boolean => {
  return keys.every((key) => key in obj);
};

const person = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

{
  //

  const getProperty = <T, P extends keyof T>(obj: T, propertyName: P): T[P] => {
    return obj[propertyName];
  };
  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));

  //
}

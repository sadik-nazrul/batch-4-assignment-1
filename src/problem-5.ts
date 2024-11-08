const getProperty = <T, P extends keyof T>(obj: T, propertyName: P): T[P] => {
  return obj[propertyName];
};

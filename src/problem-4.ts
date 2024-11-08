type Circle = {
  shape: "circle";
  radius: number;
};
type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};
type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape): number => {
  if (shape.shape === "circle") {
    const radius: number = shape.radius;
    const calculateArea = Math.PI * radius * radius;
    const area = Math.round(calculateArea * 100) / 100;
    return area;
  } else if (shape.shape === "rectangle") {
    const width = shape.width;
    const height = shape.height;
    const calculateArea = width * height;
    const area = Math.round(calculateArea * 100) / 100;
    return area;
  }
  return 0;
};

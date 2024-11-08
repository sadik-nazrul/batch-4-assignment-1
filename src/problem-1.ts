const sumArray = (nums: number[]): number => {
  let sum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

const subOfNumbers = sumArray([1, 2, 3, 4, 5]);
console.log(subOfNumbers);

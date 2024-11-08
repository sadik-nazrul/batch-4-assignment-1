const sumArray = (nums: number[]): number => {
  let sum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

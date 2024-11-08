const removeDuplicates = (nums: number[]): number[] => {
  return [...new Set(nums)];
};
const uniqueNums = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueNums);

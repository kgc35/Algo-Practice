/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  //Check to see that nums[i] === nums[j] && i < j

  let counter = 0;

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) {
        counter += 1;
      }
    }
  }
  return counter;
};

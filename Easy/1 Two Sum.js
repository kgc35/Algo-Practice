/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Brute Force solution
// var twoSum = function(nums, target) {
//     for(i=0; i< nums.length; i++) {
//         for(j=i+1; j< nums.length ; j++){
//             console.log([i,j])
//             if (nums[i] + nums[j] === target) {
//                 return [i,j]
//             }
//         }
//     }
// };

var twoSum = function (nums, target) {
  let newMap = new Map();

  for (i = 0; i < nums.length; i++) {
    let difference = target - nums[i];

    if (newMap.has(difference)) {
      return [i, newMap.get(difference)];
    }

    newMap.set(nums[i], i);
  }
};

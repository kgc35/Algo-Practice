/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => a - b);
  salary.pop();
  salary.shift();

  let sum = 0;

  salary.forEach((element) => {
    sum += element;
  });

  return sum / salary.length;
};

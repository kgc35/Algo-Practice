/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  for (i = 0; i < prices.length; i++) {
    for (j = i + 1; j < prices.length; j++) {
      difference = prices[j] - prices[i];

      if (difference > profit) {
        profit = difference;
      }
    }
  }
  return profit;
};

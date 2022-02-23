/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let s_array = s.split(" "); //correctly splits array
  let answer = [];

  s_array.forEach((word) => {
    let order = word[word.length - 1];
    answer[order - 1] = word.slice(0, -1);
  });
  return answer.join(" ");
};

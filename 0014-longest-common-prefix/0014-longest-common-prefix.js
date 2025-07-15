/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
 let answer = "";
  for (let i = 0; i < strs[0].length; i++) {
    let result = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (result !== strs[j][i]) {
        return answer;
      }
    }
    answer += result;
  }
  return answer;   
};
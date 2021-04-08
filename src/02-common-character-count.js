/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(one, two) {
  let four = two;
  let tree = two;
  let count = 0;
  one.split('').forEach((item) => {
    if (tree.length > four.replace(item, '').length) {
      four = four.replace(item, '');
      tree = four;
      count++;
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;

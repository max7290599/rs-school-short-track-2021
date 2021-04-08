/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = [];
  const sortArr = [];
  let count = 0;
  arr.forEach((item) => {
    if (item > 0) array.push(item);
  });
  array.sort((a, b) => a - b);
  arr.forEach((item) => {
    if (item < 0) {
      sortArr.push(item);
    } else {
      sortArr.push(array[count]);
      count++;
    }
  });
  return sortArr;
}

module.exports = sortByHeight;

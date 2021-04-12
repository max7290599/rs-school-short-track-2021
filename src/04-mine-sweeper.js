/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newArr = [];
  matrix.forEach((row, i) => {
    newArr[i] = [];
    row.forEach((item, j) => {
      let count = 0;
      for (let x = i - 1; x < i + 2; x++) {
        for (let y = j - 1; y < j + 2; y++) {
          if (!(x === i && y === j)) {
            if (x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix[i].length - 1) {
              if (matrix[x][y] === true) {
                count++;
              }
            }
          }
        }
      }
      newArr[i][j] = count;
    });
  });
  return newArr;
}

module.exports = minesweeper;

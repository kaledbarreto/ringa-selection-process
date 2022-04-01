array = [3, 5, -4, 8, 11, 1, -1, 6];
targetSum = 10;

function sumArray(array, targetSum) {
  newArray = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        newArray.push(array[i]);
        newArray.push(array[j]);
      }
    }
  }

  return newArray;
}

let result = sumArray(array, targetSum);

console.log(result);
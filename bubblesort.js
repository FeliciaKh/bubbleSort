
function bubbleSort(arr) {
  if (!arr.length || arr.length === 1) {
    return arr;
  } else {
    //number of passes
    for (let i = arr.length -1; i > 0; i--) {
      //each pass comparing items
      for (let j = arr.length - i; j > 0; j--) {
        if (arr[j] < arr[j-1]) {
          swap(arr, j, j-1);
        }
      }
    }
    return arr;
  }
}


function swap(arr, index1, index2) {
  let item = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = item;
}



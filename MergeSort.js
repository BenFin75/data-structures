const mergeSort = (array) => {
  console.log(array);
  if (array.length === 0) {
    return array;
  }
  if (array.length === 1) {
    return array;
  }

  else {
    // split array in half
    const split = Math.round(array.length / 2);
    const leftHalf = array.slice(0, split);
    const rightHalf = array.slice(split, array.length);
    const leftSorted = mergeSort(leftHalf);
    const rightSorted = mergeSort(rightHalf);

    console.log(leftSorted)
    console.log(rightSorted)

    //sort array
    const sortedArray = [];
    while (leftSorted.length > 0 || rightSorted.length > 0) {
      if (!leftSorted[0]) {
        sortedArray.push(rightSorted.shift());
      }
      else if (!rightSorted[0]) {
        sortedArray.push(leftSorted.shift());
      }
      else if (leftSorted[0] < rightSorted[0]) {
        sortedArray.push(leftSorted.shift());
      }
      else {
        sortedArray.push(rightSorted.shift());
      }
    }
    return sortedArray
  }
}

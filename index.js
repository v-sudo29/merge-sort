function mergeSort(arr) {
  if (!Array.isArray(arr)) return 'Please enter a valid array'
  if (arr.length === 0) return arr
  if (arr.length === 1) return arr

  // 1. Split array in half
  const middleIndex = Math.ceil(arr.length / 2)
  const leftArr = arr.slice(0, middleIndex)
  const rightArr = arr.slice(middleIndex, arr.length)
  const finalSortedArr = []

  // 2. Sort left array
  const sortedLeftArr = mergeSort(leftArr)

  // 3. Sort right array
  const sortedRightArr = mergeSort(rightArr)

  // 4. Compare first elements of each array, add lower element to new array, repeat until all elements have been compared
  let i = 0, j = 0

  while (i <= sortedLeftArr.length && j <= sortedRightArr.length) {
    if (!sortedLeftArr[i] && sortedRightArr[j]) {
      finalSortedArr.push(sortedRightArr[j])
      j++
    }
    if (!sortedRightArr[j] && sortedLeftArr[i]) {
      finalSortedArr.push(sortedLeftArr[i])
      i++
    }
    if (!sortedLeftArr[i] && !sortedRightArr[j]) {
      return finalSortedArr
    }
    if (sortedLeftArr[i] < sortedRightArr[j]) {
      finalSortedArr.push(sortedLeftArr[i])
      i++
    } 
    if (sortedRightArr[j] < sortedLeftArr[i]){
      finalSortedArr.push(sortedRightArr[j])
      j++
    }
  }
}
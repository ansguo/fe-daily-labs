/**
 * 二分查找
 * @param {} list 
 * @param {*} item 
 * @returns 
 */

const binarySearch = (list, item) => {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    debugger
    const mid = Math.floor((low + high) / 2)
    const guess = list[mid]

    if (guess === item) {
      return mid
    }

    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return null
}


const testList = [1, 2, 4, 5, 6, 9]

console.log(binarySearch(testList, 9))

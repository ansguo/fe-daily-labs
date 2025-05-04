/**
 * 求最长递增子序列
 * 
 * arr = [4,5,1,3,2,7,3,6,9]
 * expect: [1, 2, 3, 6, 9]
 */

function LIS(numArr) {
  if (!Array(numArr) || !numArr.length) {
    return []
  }

  const result = [[numArr[0]]]
  for (let i = 0; i < numArr.length; i++) {
    const n = numArr[i]
    _update(n)
  }

  function _update(n) {
    for (let j = result.length - 1; j >= 0 ; j--) {
      const line = result[j]
      const tail = line[line.length - 1]
      if (n > tail) {
        result[j + 1] = [...line, n]
        return
      }
    }
    result[0] = [n]
  }

  return result[result.length - 1]

}


/**
 * 步骤拆解：
 * 1. 先看数组第一项 4
 * 2. 看两项4,5，[[4], [4,5]]
 * 3. 看三项4,5,1，[[1], [4,5]]
 * 4. 看四项4,5,1,3，[[1], [1,3]]
 * 5. 看五项4,5,1,3,2，[[1], [1,2]]
 * 6. 看六项4,5,1,3,2,7，[[1], [1,2], [1,2,7]]
 */

const arr = [4,5,1,3,2,7,3,6,9]
console.log(LIS(arr))

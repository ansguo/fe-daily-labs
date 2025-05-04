/**
 * 判断是否是稀疏数组
 * @param {Array} arr
 */
function isSparseArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an array')
  }

  for (let i = 0; i < arr.length; i++) {
    console.log('i', i)
    if (!arr.hasOwnProperty(i)) {
      return true
    }
  }

  return false
}

/**
 * 方式一：
 * 使用arr.length 和 Object.keys()的长度对比，如果不一致就是稀疏数组
 * 不准确，如果给数组设置了其他属性，也会在Object.keys中
 * 
**/
const arr = [1, 2, , 5]
arr.a = 'abc'
console.log('方式一')
console.log('Object.keys()', Object.keys(arr))
console.log('是否是稀疏数组', arr.length === Object.keys(arr).length)


/**
 * 方式二:
 * 使用hasOwnProperty()返回一个boolean，表示对象自有属性（不是继承来的）中是否有指定的属性
 */
console.log('方式二')
console.log(isSparseArray([1, 2, 3]))
console.log(isSparseArray([1, , , 3, ,]))
console.log(isSparseArray(new Array(3)))
console.log(isSparseArray(new Array(3).fill('')))
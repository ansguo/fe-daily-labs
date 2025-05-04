/**
 * 两个超出整数存储范围的大正整数求和
 * @param {string} a 
 * @param {string} b 
 * @returns string
 */
export function bigStrNumberSum(a, b) {
  if (!isOnlyDigits(a) || !isOnlyDigits(b)) {
    throw new Error('参数中不能有非数字字符')
  }

  const maxLength = Math.max(a.length, b.length)
  a = a.padStart(maxLength, '0')
  b = b.padStart(maxLength, '0')

  let carry = 0 // 进位
  let result = '' // 最终结果
  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = Number(a[i]) + Number(b[i]) + carry
    const digit = sum % 10 // 个位
    carry = Math.floor(sum / 10) // 十位（进位值），一定为1
    result = digit + result
  }
  if (carry) {
    result = carry + result
  }

  // 结果要去除前面的0，如果输入是001 + 002这种
  result = result.replace(/^0+/, '')

  return result ? result : '0'
}

function isOnlyDigits(str) {
  /**
   * 可优化点:  str !== '' 前置判断一下
   */
  return str !== '' && /^[0-9]+$/.test(str)
}

console.log('=====start=====')
// 正常的输入
console.log(bigStrNumberSum('111', '222'))
console.log(bigStrNumberSum('1000', '9000'))
console.log(bigStrNumberSum('9876543211212121298765432112121212', '987654321'))

// 异常输入处理
console.log(bigStrNumberSum('001', '006565'))
console.log(bigStrNumberSum('0000', '0000'))
console.log(bigStrNumberSum('0000', '0001'))
// console.log(bigStrNumberSum('', ''))
// console.log(bigStrNumberSum('abc', '987654321'))
console.log('=====end=====')


/**
 * 思路
 * 1. 对齐两个数字的位数，按加法规则从最右侧开始逐个开始相加，并且维护一个进位值carry
 * 2. 最后要处理进位，如果有前导0的话需要处理
 * 3. 字符串方法padStart使用
 * 
 * 可优化点：
 * 1. 做好参数相关的前置检查
 * 2. 极端大数场景，性能优化，避免使用频繁的字符串凭借，也可以改为数组存储，最后反转一下拼接成字符串
 */
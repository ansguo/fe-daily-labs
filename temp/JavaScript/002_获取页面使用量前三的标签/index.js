/**
 * 获取页面中使用量前三的dom标签
 * 
 * 方式一：使用querySelectorAll api拿到所有的节点
 * 
 */
// function getTop3Dom() {
//   const elements = Array.from(document.querySelectorAll('*'))
//   const result = {}

//   for (const el of elements) {
//     const tagName = el.tagName
//     result[tagName] = (result[tagName] || 0) + 1
//   }

//   const sorted = Object.entries(result).sort((a, b) => b[1] - a[1])
//   const top3 = sorted.slice(0, 3).map(i => i[0])

//   return top3
// }

/**
 * 获取页面中使用量前三的dom标签
 * 
 * 方式一：使用querySelectorAll api拿到所有的节点
 * 
 */
function getTop3Dom() {
  const html = document.querySelector('html')
  const result = {}

  function scan(parent) {
    const tagName = parent.tagName
    result[tagName] = (result[tagName] || 0) + 1
    for (el of parent.children) {
      scan(el)
    }
  }

  scan(html)

  const sorted = Object.entries(result).sort((a, b) => b[1] - a[1])
  const top3 = sorted.slice(0, 3).map(i => i[0])

  return top3
}

console.log(getTop3Dom())


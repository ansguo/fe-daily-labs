/**
 * promise串行 就是一个promise执行完之后再执行下一个promise
 */

/**
 * 题目
 * 定义 type Task = () => Promise （即 Task 是一个 类型，是一个返回值是 Promise 的函数类型）
 * 假设有一个数组 tasks: Task[]（每一项都是一个 Task 类型的数组）
 * 实现一个方法 function execute(tasks: Task[]): Promise，该方法将 tasks 内的任务 依次 执行，并返回一个结果为数组的 Promise ，该数组包含任务执行结果（以执行顺序排序）
 * 要求：
 * 忽略异常任务，并在结果数组中用 null 占位
 * 限制：
 * 不添加任何依赖，仅使用 Promise，不使用 Generator 或 async
 */

/**
 * 测试用例
 */
const runTask = (result, isSuccess = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        console.log(`success: ${result}`)
        resolve(result)
      } else {
        console.log(`error: ${result}`)
        reject(result)
      }
    }, 10)
  })
}

execute([runTask('1'), runTask('2')]).then((res) => {
  console.log('result: ' + res)
})

/**
 * 实现execute函数
 */
async function execute(tasks) {
  const result = []
  for (const task of tasks) {
    try {
      result.push(await task())
    } catch (error) {
      result.push(null)
    }
  }
  return result
}

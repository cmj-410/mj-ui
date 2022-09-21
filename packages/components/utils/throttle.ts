export const throttle = (fn: any, delay: number) => {
  let lastTime: any
  let timer: any
  let theDelay = delay || 200
  return function () {
    let args = arguments
    // 记录当前函数触发的时间
    let nowTime = Date.now()
    if (lastTime && nowTime - lastTime < theDelay) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        // 记录上一次函数触发的时间
        lastTime = nowTime
        // 修正this指向问题
        fn.apply(this, args)
      }, theDelay)
    } else {
      lastTime = nowTime
      fn.apply(this, args)
    }
  }
}

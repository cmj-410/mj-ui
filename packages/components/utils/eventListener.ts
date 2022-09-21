/**
 * 新增事件监听
 * @param {*} element
 * @param {*} event
 * @param {*} handler
 * @param {*} useCapture
 */
export const on = function (element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture)
  }
}

/**
 * 移除事件监听
 * @param {*} element
 * @param {*} event
 * @param {*} handler
 * @param {*} useCapture
 */
export const off = function (element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture)
  }
}

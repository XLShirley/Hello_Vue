/*
 * @Author: 肖玲
 * @Date: 2023-11-08 18:15:23
 * @LastEditTime: 2023-11-08 18:15:52
 * @LastEditors: 肖玲
 * @Description:
 * @FilePath: \Hello_Vue\src\utils\util.ts
 * 工具类函数
 */

/**
 * 节流函数
 * @param {*} fn 执行函数
 * @param {*} wait 防抖时间
 * @returns 闭包函数
 */
export function throttle(fn, wait = 100) {
  let timer;
  return function () {
    if (timer != null) return;
    let context = this;
    let args = arguments;
    fn.apply(context, args);
    timer = setTimeout(() => {
      timer = null;
    }, wait);
  };
}

/**
 * @description Creates a throttled function that only invokes 'fn' at most once per 'delay' milliseconds.
 * @param {Function} fn The function to throttle.
 * @param {number} delay The number of milliseconds to throttle invocations to.
 * @returns {Function}
 */
export function throttle(fn: () => void, delay = 20): () => void {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function');
  }

  let startTime = new Date().valueOf();
  let flag = false; // Is it the first time to invoke.

  return function (this: unknown, ...args: []): any {
    if (!flag && delay !== 0) {
      flag = true;
      return fn.apply(this, args);
    }

    const currentTime = new Date().valueOf();
    if (currentTime - startTime >= delay) {
      startTime = currentTime;
      return fn.apply(this, args);
    }

    return undefined;
  };
}

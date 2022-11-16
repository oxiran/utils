/**
 * @description Set localStorage item
 * @param {string} key
 * @param {any} value
 * @return {void}
 */
export function setLocalStorage(key: string, value: any): void {
  window.localStorage.setItem(key, JSON.stringify(value));
}

/**
 * @description Get localStorage item
 * @param {string} key
 * @return {any}
 */
export function getLocalStorage(key: string): any {
  const value = window.localStorage.getItem(key);
  return typeof value === 'string' ? JSON.parse(value) : value;
}

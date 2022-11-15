/**
 * @description Get the data type.
 * @param data - The data which you want to get it's type.
 * @return {string}
 */
export function getDataType(data: any): string {
  return Object.prototype.toString.call(data).split(' ')[1].slice(0, -1);
}

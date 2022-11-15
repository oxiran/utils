/**
 * @description Round off a number then return a formatted string.
 * @param {number} num - The number which need to round.
 * @param {number} digits - The digits count of number.
 * @return {string}
 */
export function toFixedNumber(num: number, digits = 0): string {
  return (Math.round(num * (10 ** digits)) / (10 ** digits)).toFixed(digits);
}

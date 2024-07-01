export class ZeroDivisorError extends Error {}

export function divide(dividend: number, divisor: number) {
  if (divisor === 0) throw new ZeroDivisorError("0を割ることはできません");
  return dividend / divisor;
}

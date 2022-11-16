import { toFixedNumber } from '../../src/utils/toFixedNumber';

describe('Test toFixedNumber', () => {
  test('Test float', () => {
    expect(toFixedNumber(2.345, 2)).toEqual('2.35');

    expect(toFixedNumber(99.99)).toEqual('100');

    expect(toFixedNumber(22.2, 2)).toEqual('22.20');
  });

  test('Test integer', () => {
    expect(toFixedNumber(200, 2)).toEqual('200.00');

    expect(toFixedNumber(100)).toEqual('100');
  });
});

import { throttle } from '../../src/utils/throttle';


describe('Test throtte function', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('Different input for throttle function', () => {
    expect(() => (throttle('hello' as any))).toThrow('Expected a function');

    expect(() => (throttle(20 as any))).toThrow('Expected a function');

    const fn = jest.fn();
    const throtteFn = throttle(fn, 0);

    throtteFn();
    expect(fn).toHaveBeenCalled();
  });

  test('Has been invoked between "delay" time', () => {
    const fn = jest.fn();
    const throtteFn = throttle(fn, 100);

    throtteFn();
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(1);

    setTimeout(() => {
      throtteFn();
    }, 90);
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(1);

    setTimeout(() => {
      throtteFn();
    }, 110);
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(2);
  });

  test('Test invoked in a long time', () => {
    const fn = jest.fn();
    const throtteFn = throttle(fn, 50);

    let i: number;
    for (i = 0; i < 100; i += 1) {
      setTimeout(() => {
        throtteFn();
      }, i * 50);
    }
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(i);
  });
});

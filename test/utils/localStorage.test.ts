import { getLocalStorage, setLocalStorage } from '../../src/utils/localStorage';

describe('Test getLocalStorage and setLocalStorage', () => {
  jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
  jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem');

  test('Test setLocalStorage', () => {
    expect(setLocalStorage('user', 'oxiran')).toBeUndefined();

    expect(setLocalStorage('list', [1, 2, 3])).toBeUndefined();

    expect(setLocalStorage('info', { name: 'oxiran' })).toBeUndefined();
  });

  test('Test getLocalStorage', () => {
    expect(getLocalStorage('user')).toEqual('oxiran');

    expect(getLocalStorage('email')).toBeNull();

    expect(getLocalStorage('list')).toEqual([1, 2, 3]);

    expect(getLocalStorage('info')).toEqual({ name: 'oxiran' });
  });
});

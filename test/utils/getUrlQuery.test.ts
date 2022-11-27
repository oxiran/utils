import { getUrlQuery } from '../../src/utils/getUrlQuery';

function setLocationUrl(href: string): void {
  Object.defineProperty(window, 'location', {
    writable: true,
    value: { href, search: `?${href.split('?')[1]}` },
  });
}

describe('Test getUrlQuery', () => {
  test('Have no search', () => {
    expect(getUrlQuery()).toBeNull();

    setLocationUrl('https://www.baidu.com');
    expect(getUrlQuery()).toBeNull();

    setLocationUrl('https://www.baidu.com?');
    expect(getUrlQuery()).toBeNull();

    setLocationUrl('https://www.baidu.com?name');
    expect(getUrlQuery()).toBeNull();

    setLocationUrl('https://www.baidu.com?name=');
    expect(getUrlQuery()).toBeNull();
  });

  test('Have some search', () => {
    setLocationUrl('https://www.baidu.com?name=oxiran&age=18');
    expect(getUrlQuery()).toEqual({ name: 'oxiran', age: '18' });

    setLocationUrl('https://www.baidu.com?name=oxiran&age=18&age=28');
    expect(getUrlQuery()).toEqual({ name: 'oxiran', age: '28' });

    setLocationUrl('https://www.baidu.com?name=oxiran&age=18&email=oxiran.liao@gmail.com');
    expect(getUrlQuery()).toEqual({ name: 'oxiran', age: '18', email: 'oxiran.liao@gmail.com' });
  });
});

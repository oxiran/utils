import { getDataType } from '../../src/utils/getDataType';

describe('Test getDataType', () => {
  test('Test primitive data.', () => {
    const dataList = [
      {
        key: 'String',
        value: 'Hello World!',
      },
      {
        key: 'Number',
        value: 9527,
      },
      {
        key: 'Number',
        value: NaN,
      },
      {
        key: 'Number',
        value: Infinity,
      },
      {
        key: 'Boolean',
        value: true,
      },
      {
        key: 'Undefined',
        value: undefined,
      },
      {
        key: 'Null',
        value: null,
      },
      {
        key: 'Symbol',
        value: Symbol('It is a test symbol'),
      },
    ];
    dataList.forEach((item) => {
      expect(getDataType(item.value)).toEqual(item.key);
    });
  });

  test('Test non-primitive data.', () => {
    const dataList = [
      {
        key: 'Object',
        value: { author: 'oxiran' },
      },
      {
        key: 'Array',
        value: [1, 2, 3, 4, 5],
      },
      {
        key: 'Function',
        value() {
          // Do something.
        },
      },
      {
        key: 'Function',
        value: () => {
          //  Do something.
        },
      },
      {
        key: 'Set',
        value: new Set(),
      },
      {
        key: 'Error',
        value: new Error(),
      },
      {
        key: 'Date',
        value: new Date(),
      },
      {
        key: 'Map',
        value: new Map(),
      },
    ];

    dataList.forEach((item) => {
      expect(getDataType(item.value)).toEqual(item.key);
    });
  });
});

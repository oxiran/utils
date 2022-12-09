import { formatDate } from '../../src/utils/formatDate';

interface WeekMap {
  [key: number]: string;
}
const weekMap: WeekMap = {
  0: '日',
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
};

describe('Test formatDate', () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const week = weekMap[date.getDay()];

  test('Different data types input', () => {
    const time = `${year}-${month > 9 ? month : `0${month}`}-${day > 9 ? day : `0${day}`} ${hour > 9 ? hour : `0${hour}`}:${minute > 9 ? minute : `0${minute}`}:${second > 9 ? second : `0${second}`}`;

    expect(formatDate(date)).toEqual(time);
    expect(formatDate(`${date.valueOf()}`)).toEqual(time);
    expect(formatDate(date.valueOf())).toEqual(time);
    expect(formatDate(new Date(time))).toEqual(time);
    expect(formatDate(date.toString())).toEqual('Invalid Date');
    expect(formatDate()).toBeDefined();
  });

  test('Get milliseconds', () => {
    const millisecond = date.getMilliseconds();

    expect(formatDate(date, 'S')).toEqual(`${millisecond}`);
  });

  test('Get week', () => {
    const time = `${year}-${month > 9 ? month : `0${month}`}-${day > 9 ? day : `0${day}`}`;

    expect(formatDate(date, 'yyyy-MM-dd E')).toEqual(`${time} ${week}`);
    expect(formatDate(date, 'yyyy-MM-dd EE')).toEqual(`${time} 周${week}`);
    expect(formatDate(date, 'yyyy-MM-dd EEE')).toEqual(`${time} 星期${week}`);
  });

  test('Different clock', () => {
    const time12Clock = hour % 12 === 0 ? 12 : hour % 12;
    const time12 = `${time12Clock > 9 ? time12Clock : `0${time12Clock}`}:${minute > 9 ? minute : `0${minute}`}:${second > 9 ? second : `0${second}`}`;
    const time24 = `${hour > 9 ? hour : `0${hour}`}:${minute > 9 ? minute : `0${minute}`}:${second > 9 ? second : `0${second}`}`;

    expect(formatDate(date, 'hh:mm:ss')).toEqual(`${time12}`);
    expect(formatDate(date, 'HH:mm:ss')).toEqual(`${time24}`);
    expect(formatDate(new Date('2022-11-17 00:11:12'), 'hh:mm:ss')).toEqual('12:11:12');
    expect(formatDate(new Date('2022-11-17 13:11:12'), 'hh:mm:ss')).toEqual('01:11:12');
  });

  test('Different symbol', () => {
    const time = `${year}_${month > 9 ? month : `0${month}`}_${day > 9 ? day : `0${day}`} ${hour > 9 ? hour : `0${hour}`}++${minute > 9 ? minute : `0${minute}`}++${second > 9 ? second : `0${second}`}`;

    expect(formatDate(date, 'yyyy_MM_dd HH++mm++ss')).toEqual(time);
  });

  test('Error input', () => {
    expect(formatDate('Hello World')).toEqual('Invalid Date');
  });
});

interface WeekMap {
  [key: number]: string;
}

interface DateMap {
  [key: string]: number;
}

/**
 * @description Format date according to format.
 * @param {Date |number | string} time Which you want to format.
 * @param {string} format Time format.
 * @return {string}
 */
export function formatDate(
  time: Date | number | string = new Date().valueOf(),
  format = 'yyyy-MM-dd HH:mm:ss',
): string {
  const date = typeof time === 'string' ? new Date(parseInt(time)) : new Date(time);
  if (date.toString() === 'Invalid Date') {
    return 'Invalid Date';
  }

  let formatted = format;

  const dateMap: DateMap = {
    'M+': date.getMonth() + 1, // month
    'd+': date.getDate(), // day
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // hour: 12-hour clock
    'H+': date.getHours(), // hour: 24-hour clock
    'm+': date.getMinutes(), // minute
    's+': date.getSeconds(), // second
    'q+': Math.floor((date.getMonth() + 3) / 3), // season
    S: date.getMilliseconds(), // millisecond
  };

  const weekMap: WeekMap = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
  };

  if (/y+/.test(formatted)) {
    const matched = formatted.match(/y+/)![0];
    formatted = formatted.replace(matched, `${date.getFullYear()}`.slice(4 - matched.length));
  }

  if (/E+/.test(formatted)) {
    const matched = formatted.match(/E+/)![0];
    let week = '';
    const day = weekMap[date.getDay()];
    if (matched.length > 1) {
      week = matched.length > 2 ? `星期${day}` : `周${day}`;
    } else {
      week = day;
    }
    formatted = formatted.replace(matched, week);
  }

  Object.keys(dateMap).forEach((key) => {
    if (new RegExp(`${key}`).test(formatted)) {
      const matched = formatted.match(new RegExp(`${key}`))![0];
      const str = `${dateMap[key]}`;
      formatted = formatted.replace(matched, matched.length === 1 ? str : `00${str}`.slice(str.length));
    }
  });

  return formatted;
}

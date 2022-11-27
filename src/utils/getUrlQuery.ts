interface QueryMap {
  [key: string]: any;
}

/**
 * @description Get url query then return a object or null.
 * @returns {object}
 */
export function getUrlQuery(): object | null {
  const search = window.location.search;
  if (!search) return null;

  const query: QueryMap = search.split('?')[1].split('&').reduce((prev, current) => {
    const items = current.split('=');
    if (items[1]) {
      prev[items[0]] = items[1];
    }
    return prev;
  }, {} as QueryMap);

  return Object.keys(query).length ? query : null;
}

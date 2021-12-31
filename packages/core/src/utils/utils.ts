import _ from 'lodash';

export function arrayTreeFilter<T>(
  data: T[],
  filterFn: (item: T, level: number) => boolean,
  options?: {
    childrenKeyName?: string;
  },
) {
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || 'children';
  var children = data || [];
  var result: T[] = [];
  var level = 0;
  do {
    var foundItem: T = children.filter(function (item) {
      return filterFn(item, level);
    })[0];
    if (!foundItem) {
      break;
    }
    result.push(foundItem);
    children = (foundItem as any)[options.childrenKeyName] || [];
    level += 1;
  } while (children.length > 0);
  return result;
}

/**
 * 判断元素是否在数组最后一位
 * @param length 数组长度
 * @param i 循环下标
 * @returns
 */
export const last = (length: number, i: number) => length - 1 === i;

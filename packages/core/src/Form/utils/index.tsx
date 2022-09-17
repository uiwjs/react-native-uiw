import cloneDeepWith from 'lodash/cloneDeepWith';
import lodashSet from 'lodash/set';
import { isObject, isArray } from './is';
import { PropertyPath } from 'lodash';

export function cloneDeep(value: any) {
  // 只有对象才执行拷贝，否则直接返回。 如果是 File，MouseEvent对象，都可以直接返回
  return cloneDeepWith(value, (val) => {
    if (!isObject(val) && !isArray(val)) {
      return val;
    }
  });
}

export function set<T extends { [key: string]: any }>(target: T, field: PropertyPath, value: any) {
  lodashSet(target, field, cloneDeep(value));
  return target;
}

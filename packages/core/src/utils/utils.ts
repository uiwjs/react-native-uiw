import { TextStyle } from 'react-native';
import _ from 'lodash';
import { colorsPalette } from './colors';

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
 *
 * RnText 类型判断
 * @param type "header" | "title" | 'label' | 'subLabel'
 * @returns
 */
export function rnTextType(type?: 'header' | 'title' | 'label' | 'subLabel') {
  let textStyle: TextStyle = {
    color: colorsPalette.grey10,
    fontSize: 16,
  };
  switch (type) {
    case 'header':
      textStyle = {
        color: colorsPalette.grey10,
        fontSize: 17,
        fontWeight: '500',
      };
      break;
    case 'title':
      textStyle = {
        color: colorsPalette.grey10,
        fontSize: 15,
        fontWeight: '400',
      };
      break;
    case 'label':
      textStyle = {
        color: colorsPalette.grey10,
        fontSize: 14,
        fontWeight: '300',
      };
      break;
    case 'subLabel':
      textStyle = {
        color: colorsPalette.grey30,
        fontSize: 12,
        fontWeight: '300',
      };
      break;
    default:
  }
  return textStyle;
}

/**
 * 处理高亮文本
 * @targetString 整体文本
 * @highlightText 高亮的文本
 * textParts:[]
 * */
export const getTextPartsByHighlight = (targetString = '', highlightText = '') => {
  if (_.isEmpty(highlightText.trim())) {
    return [targetString];
  }

  const textParts = [];
  let highlightIndex;

  do {
    highlightIndex = targetString.toLowerCase().indexOf(highlightText.toLowerCase());
    if (highlightIndex !== -1) {
      if (highlightIndex > 0) {
        textParts.push(targetString.substring(0, highlightIndex));
      }
      textParts.push(targetString.substr(highlightIndex, highlightText.length));
      targetString = targetString.substr(highlightIndex + highlightText.length);
    } else {
      textParts.push(targetString);
    }
  } while (highlightIndex !== -1);
  return textParts;
};

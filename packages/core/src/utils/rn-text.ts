import { TextStyle } from 'react-native';
import _ from 'lodash';
import { colorsPalette } from './colors';
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

/**
 * 截取文本 + '...'
 * @param text 文本
 * @param length 截取的长度
 * @returns
 */
export function sliceText(text = '', length: number) {
  return text.substr(0, length) + '...';
}

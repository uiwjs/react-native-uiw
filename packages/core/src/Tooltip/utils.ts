import { Dimensions } from 'react-native';
import { style } from './index';

export let MainWidth = Dimensions.get('window').width;
export let MainHeight = Dimensions.get('window').height;

export enum xLocation {
  start = 'flex-start',
  center = 'center',
  end = 'flex-end',
}
export interface getLocationReturn {
  style: style;
  isDown: boolean;
  isStart: xLocation;
  triangle: number;
}

/**
 * 得到 cloud 位置
 * @returns getLocationReturn
 */
export function getLocation(
  width: number,
  height: number,
  pageOffsetX: number,
  pageOffsetY: number,
  _W: number,
  _H: number,
): getLocationReturn {
  let isDown: boolean = false;
  let isStart: xLocation = xLocation.start;
  let triangle: number = 0;
  let style: style = {};
  let halfWidth = width / 2;
  // 得到 三角上下位置
  if (pageOffsetY > MainHeight / 2) {
    isDown = true;
    style.top = pageOffsetY - _H;
  } else {
    isDown = false;
    style.top = pageOffsetY + height;
  }
  // 得到 三角 x 位置
  if (pageOffsetX === (MainWidth - width) / 2) {
    isStart = xLocation.center;
    style.left = (MainWidth - _W) / 2;
  }
  if (MainWidth - width - pageOffsetX > pageOffsetX) {
    isStart = xLocation.start;
    style.left = pageOffsetX + halfWidth - 16;
  }
  if (MainWidth - width - pageOffsetX < pageOffsetX) {
    isStart = xLocation.end;
    style.left = pageOffsetX - halfWidth + 16;
  }
  // cloud 宽度超出屏幕
  if (_W + pageOffsetX >= MainWidth - 40) {
    style.width = MainWidth - 40;
    triangle = pageOffsetX + halfWidth - 20 - 10 - 6;
    style.left = 20;
    if (pageOffsetY > MainHeight / 2) {
      style.top = pageOffsetY;
    }
  }
  return {
    style,
    isDown,
    isStart,
    triangle,
  };
}

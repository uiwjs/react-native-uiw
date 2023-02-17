import { DateLabel } from './index';
import { DateKey } from './component/PickerView';
import { PickerData } from '../Picker';

export interface Diff {
  min: number;
  max: number;
}
export interface TimerDiff {
  year?: Diff;
  month?: Diff;
  day?: Diff;
  hour?: Diff;
  minute?: Diff;
  second?: Diff;
}
export interface ResultDate {
  year?: PickerData[];
  month?: PickerData[];
  day?: PickerData[];
  hour?: PickerData[];
  minute?: PickerData[];
  second?: PickerData[];
}
export interface ChangeParams {
  MAXTIMER?: DateLabel;
  MINTIMER?: DateLabel;
  nextLabel?: DateLabel;
  prevLabel?: DateLabel;
}
const bigMonths = [1, 3, 5, 7, 8, 10, 12];
/**
 * 校验 precision
 * @param precision 精度
 * @returns DateKey
 */
export function precisionValue(precision: DateKey): DateKey {
  if (['year', 'month', 'day', 'hour', 'minute', 'second'].includes(precision)) {
    return precision;
  }
  return 'day';
}
/**
 * 获得时间 数组 [2021,10,1,10,00,00]
 * @param value 时间
 * @param type DateKey
 * @returns number[]
 */
export function setTimer(type: DateKey, value?: string): number[] {
  const arr = [];
  const date = value ? new Date(value) : new Date();
  arr[0] = date.getFullYear();
  if (type === 'year') return arr;
  arr[1] = date.getMonth() + 1;
  if (type === 'month') return arr;
  arr[2] = date.getDate();
  if (type === 'day') return arr;
  arr[3] = date.getHours();
  if (type === 'hour') return arr;
  arr[4] = date.getMinutes();
  if (type === 'minute') return arr;
  arr[5] = date.getSeconds();
  return arr;
}
/**
 * 得到时间差
 * @param min 最小时间数组
 * @param max 最大时间数组
 * @param type 精度
 * @returns 时间差 TimerDiff
 */
export function setTimerDiff(min: number[], max: number[], type: DateKey): TimerDiff {
  const result: TimerDiff = {};
  result.year = {
    min: min[0],
    max: max[0],
  };
  if (type === 'year') return result;
  result.month = {
    min: min[1],
    max: max[1],
  };
  if (type === 'month') return result;
  result.day = {
    min: min[2],
    max: max[2],
  };
  if (type === 'day') return result;
  result.hour = {
    min: min[3],
    max: max[3],
  };
  if (type === 'hour') return result;
  result.minute = {
    min: min[4],
    max: max[4],
  };
  if (type === 'minute') return result;
  result.second = {
    min: min[5],
    max: max[5],
  };
  return result;
}
/**
 * 得到年份数据
 * @param star 最小
 * @param end 最大
 * @returns PickerData[]
 */
export function getYears(star: number, end: number): PickerData[] {
  const arr: PickerData[] = [];
  for (let i = star; i <= end; i++) {
    arr.push({ label: i + '', value: i });
  }
  return arr;
}
/** 生成数据 */
function createDate(star: number, end: number): PickerData[] {
  const arr: PickerData[] = [];
  for (let i = star; i <= end; i++) {
    if (i < 10) {
      arr.push({ label: '0' + i, value: i });
    } else {
      arr.push({ label: i + '', value: i });
    }
  }
  return arr;
}
/** 得到月份 */
export function getMonths(initial: number = 1, type: 'star' | 'end' = 'star'): PickerData[] {
  const star = type === 'star' ? initial : 1;
  const end = type === 'end' ? initial : 12;
  const arr: PickerData[] = createDate(star, end);
  return arr;
}
/** 得到每月天数 */
export function getDays(year: number, month: number, initial: number = 1, type: 'star' | 'end' = 'star'): PickerData[] {
  // bigMonths
  let max = bigMonths.includes(month) ? 31 : 30;
  // let Newinitial = initial
  if (month === 2) {
    if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
      max = 29;
    } else {
      max = 28;
    }
  }
  const star = type === 'star' ? initial : 1;
  const end = type === 'end' ? initial : max;
  const arr: PickerData[] = createDate(star, end);
  return arr;
}
/** 得到小时 */
export function getHours(initial: number = 0, type: 'star' | 'end' = 'star'): PickerData[] {
  const star = type === 'star' ? initial : 0;
  const end = type === 'end' ? initial : 23;
  const arr: PickerData[] = createDate(star, end);
  return arr;
}
/** 得到分钟或者秒 */
export function getMinutesOrSeconds(initial: number = 1, type: 'star' | 'end' = 'star'): PickerData[] {
  const star = type === 'star' ? initial : 1;
  const end = type === 'end' ? initial : 59;
  const arr: PickerData[] = createDate(star, end);
  return arr;
}
/**
 * 计算一个装着时间的数组
 * @param star 起始位置
 * @param end 结束位置
 * @param PrecisionType DateKey
 * @returns ResultDate
 */
export function getPickerData(timerDiff: TimerDiff, type: DateKey): ResultDate {
  const obj: ResultDate = {};
  obj.year = getYears(timerDiff.year!.min, timerDiff.year!.max);
  if (type === 'year') return obj;
  obj.month = getMonths(timerDiff.month!.min);
  if (type === 'month') return obj;
  obj.day = getDays(timerDiff.year!.min, timerDiff.month!.min, timerDiff.day?.min);
  if (type === 'day') return obj;
  obj.hour = getHours(timerDiff.hour!.min);
  if (type === 'hour') return obj;
  obj.minute = getMinutesOrSeconds(timerDiff.minute!.min);
  if (type === 'minute') return obj;
  obj.second = getMinutesOrSeconds(timerDiff.second!.min);
  return obj;
}
/**
 * 计算当从最小的时间发生改变应该改变的时节数据
 * @param key 发生改变的key
 * @param MINTIMER 最小的时间
 * @param nextLabel 更改的时间
 * @returns 新的时间对象
 */
export function minData(key: DateKey, changeParams: ChangeParams, precision: DateKey): ResultDate {
  const { MINTIMER = {}, nextLabel = {} } = changeParams;
  const newObj: ResultDate = {};
  if (key === 'month') {
    return newObj;
  }
  if (MINTIMER.month !== '01') {
    newObj.month = getMonths();
  }
  if (key === 'day') {
    return newObj;
  }
  if (MINTIMER.day !== '01' || Number(nextLabel.month) !== 2) {
    newObj.day = getDays(Number(nextLabel.year), Number(nextLabel.month));
  }
  if (key === 'hour') return newObj;
  if (MINTIMER.hour !== '00') {
    newObj.hour = getHours();
  }
  if (key === 'minute') return newObj;
  if (MINTIMER.minute !== '00') {
    newObj.minute = getMinutesOrSeconds();
  }
  if (key === 'second') return newObj;
  if (MINTIMER.second !== '00') {
    newObj.second = getMinutesOrSeconds();
  }

  return newObj;
}
/** 最大时间改变的 */
export function maxData(key: DateKey, changeParams: ChangeParams, precision: DateKey): ResultDate {
  const newObj: ResultDate = {};
  const { MAXTIMER = {}, nextLabel = {} } = changeParams;
  if (key === 'second') return newObj;
  if (MAXTIMER.second !== '59') {
    newObj.second = getMinutesOrSeconds();
  }
  if (key === 'minute') return newObj;
  if (MAXTIMER.minute !== '59') {
    newObj.minute = getMinutesOrSeconds();
  }
  if (key === 'hour') return newObj;
  if (MAXTIMER.hour !== '23') {
    newObj.hour = getHours();
  }
  if (key === 'day') return newObj;
  getDays(Number(nextLabel.year), Number(nextLabel.month));
  if (key === 'month') return newObj;
  if (MAXTIMER.month !== '12') {
    newObj.month = getMonths();
  }
  return newObj;
}
export function changeData(key: DateKey, changeParams: ChangeParams, precision: DateKey): ResultDate {
  let newObj: ResultDate = {};
  const { MAXTIMER = {}, nextLabel = {}, MINTIMER = {}, prevLabel = {} } = changeParams;
  if (nextLabel.year === MINTIMER.year) {
    newObj = minData(key, changeParams, precision);
    return newObj;
  }
  if (nextLabel.year === MAXTIMER.year) {
    newObj = maxData(key, changeParams, precision);
    return newObj;
  }
  if (nextLabel.year !== MAXTIMER.year && nextLabel.year !== MINTIMER.year && nextLabel.month === '02') {
    newObj.day = getDays(Number(nextLabel.year), Number(nextLabel.month));
  }
  return newObj;
}

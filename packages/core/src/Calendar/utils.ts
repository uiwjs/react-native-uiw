import { bindAll } from 'lodash';
import { string } from 'prop-types';
import { Dimensions, Text } from 'react-native';
import { getLunarCalendar, CalendarProps } from './lunarHolidays';
/**
 * 处理当月、上月、下月数据
 */
export function getMonths(year: number, month: number, day: number) {
  let threeMonth: Array<number[]> = [];
  let monthDays = getMonthCount(year, month);
  let whereMonday = getWeekday(year, month);
  let preMonth = getPreMonthCount(year, month);
  let nextMonth = getNextMonthCount(year, month);
  if (whereMonday === 0) {
    whereMonday = 7;
  }
  let preArr = preMonth.slice(-1 * whereMonday);
  let ranks = 35 - monthDays.length - whereMonday;
  let nextArr: Array<number> = [];
  if (ranks > 0) {
    nextArr = nextMonth.slice(0, 35 - monthDays.length - whereMonday);
  } else {
    nextArr = nextMonth.slice(0, 42 - monthDays.length - whereMonday);
  }
  threeMonth.push(preArr, monthDays, nextArr);
  return threeMonth;
}

/**
 * 判断年闰年
 */
export function isLeapYear(year: number) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

/**
 * 每个月的日期天数
 */
export function getMonthCount(year: number, month: number) {
  let arr = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let count = arr[month] || (isLeapYear(year) ? 29 : 28);
  return Array.from(new Array(count), (item, value) => value + 1);
}

/**
 * 每个月1号是星期几
 */
export function getWeekday(year: number, month: number) {
  let date = new Date(year, month, 1);
  return date.getDay();
}

/**
 * 处理上个月天数展示
 */
export function getPreMonthCount(year: number, month: number) {
  if (month === 0) {
    return getMonthCount(year - 1, 11);
  } else {
    return getMonthCount(year, month - 1);
  }
}

/**
 * 处理下个月天数展示
 */
export function getNextMonthCount(year: number, month: number) {
  if (month === 11) {
    return getMonthCount(year + 1, 0);
  } else {
    return getMonthCount(year, month + 1);
  }
}

export function getJudge(lunarHoliday: string | CalendarProps) {
  let getHoliday: CalendarProps;
  if (typeof lunarHoliday === 'string') {
    getHoliday = { lunarHolidays: lunarHoliday, colorType: '', lunarMonth: '', lunar: '' };
  } else {
    getHoliday = {
      lunarHolidays: lunarHoliday.lunarHolidays,
      colorType: lunarHoliday.colorType,
      lunarMonth: lunarHoliday.lunarMonth,
      lunar: lunarHoliday.lunar,
    };
  }

  return getHoliday;
}
export interface daysArrProps {
  monthDays: number;
  index: number;
  type: string;
  lunarHolidays: string;
  colorType: string;
  lunarMonth: string;
  lunar: string;
  date?: string;
}
/**
 * 按每周分行
 * @returns daysArrProps
 */
export function getWeeksArray(lastDays: number[], days: number[], nextDays: number[], year: number, month: number) {
  let res: daysArrProps[] = [];
  let lastArr: daysArrProps[] = [];
  let currentArr: daysArrProps[] = [];
  let nextArr: daysArrProps[] = [];
  lastDays.forEach((lstVal, lstIndx) => {
    let lunarHolidays = getLunarCalendar(year, month - 1, lstVal);
    let getHoliday = getJudge(lunarHolidays);
    lastArr.push({
      monthDays: lstVal,
      index: lstIndx,
      type: 'last',
      lunarHolidays: getHoliday.lunarHolidays,
      colorType: getHoliday.colorType,
      lunarMonth: getHoliday.lunarMonth,
      lunar: getHoliday.lunar,
      date: year + '-' + (month + 1) + '-' + lstVal,
    });
  });
  days.forEach((Val, Indx) => {
    let types = 'currentMonth';
    let lunarHolidays = getLunarCalendar(year, month, Val, types);
    let getHoliday = getJudge(lunarHolidays);
    currentArr.push({
      monthDays: Val,
      index: Indx,
      type: 'current',
      lunarHolidays: getHoliday.lunarHolidays,
      colorType: getHoliday.colorType,
      lunarMonth: getHoliday.lunarMonth,
      lunar: getHoliday.lunar,
      date: year + '-' + (month + 1) + '-' + Val,
    });
  });
  nextDays.forEach((nextVal, nextIndx) => {
    let lunarHolidays = getLunarCalendar(year, month + 1, nextVal);
    let getHoliday = getJudge(lunarHolidays);
    nextArr.push({
      monthDays: nextVal,
      index: nextIndx,
      type: 'next',
      lunarHolidays: getHoliday.lunarHolidays,
      colorType: getHoliday.colorType,
      lunarMonth: getHoliday.lunarMonth,
      lunar: getHoliday.lunar,
      date: year + '-' + (month + 1) + '-' + nextVal,
    });
  });
  res = res.concat(lastArr, currentArr, nextArr);
  let weekR: Array<daysArrProps[]> = [];
  let sevenDays: daysArrProps[] = [];
  let count: number = 0;
  res.forEach((day, index) => {
    count += 1;
    sevenDays.push(day);
    if (count === 7) {
      weekR.push(sevenDays);
      count = 0;
      sevenDays = [];
    }
  });
  return weekR;
}

export interface getTypeProps {
  type: number;
  lunarShow: string;
}
/**
 * 处理当月、上月、下月状态判断
 *@returns getTypeProps
 */
export function getType(
  day: daysArrProps,
  currentYear: number,
  currentMonth: number,
  currentDays: number,
  toYear: number,
  toMonth: number,
  toDays: number,
) {
  let lunarAll: getTypeProps;
  let lunarShow = `农历${day.lunarMonth}${day.lunar}`;

  if (day.type === 'last' || day.type === 'next') {
    lunarAll = { type: 1, lunarShow: '' };
  } else if (
    currentYear === toYear &&
    currentMonth === toMonth &&
    day.monthDays === currentDays &&
    currentDays === toDays
  ) {
    lunarAll = { type: 2, lunarShow: lunarShow };
  } else if (day.monthDays === currentDays) {
    lunarAll = { type: 3, lunarShow: lunarShow };
  } else {
    lunarAll = { type: 0, lunarShow: '' };
  }
  return lunarAll;
}

/**
 * 农历及假日文字长度
 */
export function getNameLen(name: string): number {
  let len = 0;
  for (let i = 0; i < name.length; i++) {
    len++;
  }
  return len;
}

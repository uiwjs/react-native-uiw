import { Dimensions, Text } from 'react-native';
import { lunarInfo, nStr1, nStr2, nStr3, lunarHoliday, solarTerm, sTermInfo, basejieri } from './lunarDatas';
export interface CalendarProps {
  lunarHolidays: string;
  colorType: string;
  lunarMonth: string;
  lunar: string;
}
/**
 * 获取农历
 * @returns CalendarProps
 */
export function getLunarCalendar(year: number, month: number, day: number, type?: string) {
  let lDate = Lunar(year, month, day);
  let y = lDate.years;
  let m = lDate.months;
  let d = lDate.days;
  let lunar = '';
  let paraHoliday = (m > 9 ? m : '0' + m) + '' + (d > 9 ? d : '0' + d);

  let lunarMonth = '';
  if (type === 'currentMonth') {
    lunarMonth = nStr3[m] + '月';
  }

  //农历节日
  if (lunarHoliday.hasOwnProperty(paraHoliday)) {
    let paraData = lunarHoliday[paraHoliday as keyof typeof lunarHoliday];
    lunar = cDay(d);
    let getHoliday: CalendarProps = {
      lunarHolidays: paraData,
      colorType: 'type',
      lunarMonth: lunarMonth,
      lunar: lunar,
    };
    return getHoliday;
  }
  if (m === 12) {
    let theLastDay = lDate.isLeap ? leapDays(y) : monthDays(y, m); //农历当月最後一天
    lunar = cDay(d);
    if (theLastDay === d) {
      let getHoliday: CalendarProps = {
        lunarHolidays: '除夕',
        colorType: 'type',
        lunarMonth: lunarMonth,
        lunar: lunar,
      };
      return getHoliday;
    }
  }
  // 节气
  let solarTermDay = (month + 1 > 9 ? month + 1 : '0' + (month + 1)) + '' + (day > 9 ? day : '0' + day);
  lunar = cDay(d);
  let sTermDateArr = sTermDate(year);
  for (var i = 0; i < sTermDateArr.length; i++) {
    if (solarTermDay === sTermDateArr[i]) {
      let paraData = solarTerm[i];
      let getHoliday: CalendarProps = {
        lunarHolidays: paraData,
        colorType: 'type',
        lunarMonth: lunarMonth,
        lunar: lunar,
      };
      return getHoliday;
    }
  }
  //法定节日
  if (basejieri.hasOwnProperty(solarTermDay)) {
    let paraData = basejieri[solarTermDay as keyof typeof basejieri];
    let getHoliday: CalendarProps = {
      lunarHolidays: paraData,
      colorType: 'type',
      lunarMonth: lunarMonth,
      lunar: lunar,
    };
    return getHoliday;
  }
  if (d === 1) {
    lunar = nStr1[m] + '月';
    let lunar1 = cDay(d);
    let getHoliday: CalendarProps = { lunarHolidays: lunar, colorType: '', lunarMonth: lunarMonth, lunar: lunar1 };
    return getHoliday;
  } else {
    lunar = cDay(d);
    let getHoliday: CalendarProps = { lunarHolidays: '', colorType: '', lunarMonth: lunarMonth, lunar: lunar };
    return getHoliday;
  }
  // return lunar;
}

export interface lunarProps {
  years: number;
  months: number;
  days: number;
  isLeap: boolean;
}
/**
 * 处理农历年月日
 * @returns lunarProps
 */
export function Lunar(year: number, month: number, day: number): lunarProps {
  let years = 0;
  let months = 0;
  let days = 0;
  let isLeap = false;
  let i = 0;
  let leap = 0;
  let temp = 0;
  let offset = (Date.UTC(year, month, day) - Date.UTC(1900, 0, 31)) / 86400000;
  for (i = 1900; i < 2100 && offset > 0; i++) {
    temp = lYearDays(i);
    offset -= temp;
  }
  if (offset < 0) {
    offset += temp;
    i--;
  }
  years = i;
  leap = leapMonth(i); //闰哪个月
  isLeap = false;
  for (i = 1; i < 13 && offset > 0; i++) {
    // 闰月
    if (leap > 0 && i === leap + 1 && isLeap === false) {
      --i;
      isLeap = true;
      temp = leapDays(years);
    } else {
      temp = monthDays(years, i);
    }
    // 解除闰月
    if (isLeap === true && i === leap + 1) {
      isLeap = false;
    }
    offset -= temp;
  }

  if (offset === 0 && leap > 0 && i === leap + 1) {
    if (isLeap) {
      isLeap = false;
    } else {
      isLeap = true;
      --i;
    }
  }
  if (offset < 0) {
    offset += temp;
    --i;
  }
  months = i;
  days = offset + 1;
  return {
    years,
    months,
    days,
    isLeap,
  };
}

/**
 *返回农历Y年的总天数
 */
export function lYearDays(year: number) {
  let i = 0;
  let sum = 348;
  for (i = 0x8000; i > 0x8; i >>= 1) {
    sum += lunarInfo[year - 1900] & i ? 1 : 0;
  }
  return sum + leapDays(year);
}

/**
 *返回农历Y年闰月的天数
 */
export function leapDays(year: number) {
  if (leapMonth(year)) {
    return (lunarInfo[year - 1899] & 0xf) === 0xf ? 30 : 29;
  } else {
    return 0;
  }
}

/**
 *判断y年的农历中那个月是闰月
 */
export function leapMonth(year: number) {
  let lm = lunarInfo[year - 1900] & 0xf;
  return lm === 0xf ? 0 : lm;
}

/**
 *返回农历y年m月的总天数
 */
export function monthDays(year: number, month: number) {
  return (lunarInfo[year - 1900] & (0x10000 >> month)) ? 30 : 29;
}

/**
 *获取y年的节气
 */
export function sTermDate(year: number) {
  let sTermDateArr: string[] = [];
  for (var i = 0; i < solarTerm.length; i++) {
    let date = new Date(31556925974.7 * (year - 1900) + sTermInfo[i] * 60000 + Date.UTC(1900, 0, 6, 2, 5));
    let months = date.getMonth();
    let days = date.getUTCDate();
    let stdateStr = (months + 1 > 9 ? months + 1 : '0' + (months + 1)) + '' + (days > 9 ? days : '0' + days);
    sTermDateArr.push(stdateStr);
  }
  return sTermDateArr;
}

/**
 *用中文显示农历的日期
 */
export function cDay(day: number) {
  let s;
  switch (day) {
    case 10:
      s = '初十';
      break;
    case 20:
      s = '二十';
      break;
    case 30:
      s = '三十';
      break;
    default:
      s = nStr2[Math.floor(day / 10)];
      s += nStr1[day % 10];
  }
  return s;
}

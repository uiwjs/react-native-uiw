import React, { useEffect, useState } from 'react';
import { View, ViewProps, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import Icon from '../Icon';
import Ellipsis from '../Ellipsis';
import { getMonths, getWeeksArray, daysArrProps, getType, getNameLen } from './utils';
import ShowDate from './show';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';
import Text from '../Typography/Text';

export let MainWidth = Dimensions.get('window').width;
export let MainHeight = Dimensions.get('window').height;
export let newDates = new Date();
export let toYear = newDates.getFullYear();
export let toMonth = newDates.getMonth();
export let toDays = newDates.getDate();
interface BarState {
  title?: string;
  barRightText?: string;
  barLeftText?: string;
  onPressBarLeft?: () => void;
  render?: React.ReactNode;
}

export interface CalendarProps extends ViewProps {
  // 日历颜色
  color?: string;
  // 是否显示农历及假日
  lunarHoliday?: boolean;
  bar?: BarState;
  // 是否显示农历详情
  showLunar?: boolean;
  onChange?: (value: string) => void;
  // 是否显示头部导航栏
  showBar?: boolean;
  // 自定义渲染日期额外内容
  renderDay?: (date: string, currentDate: string) => React.ReactNode | JSX.Element;
  // 值
  value?: Date;
}

const Calendar = (props: CalendarProps) => {
  const bars = {
    barRightText: 'Menu',
    title: 'Calendar',
    barLeftText: 'Today',
    onPressBarLeft: undefined,
    render: undefined,
  };
  const theme = useTheme<Theme>();
  const styles = createStyles({
    bgColor: theme.colors.mask,
    themeColor: theme.colors.primary_background,
    themeText: theme.colors.text,
  });
  const {
    color = theme.colors.primary_background,
    lunarHoliday = false,
    bar = bars,
    showLunar = false,
    onChange,
    showBar = true,
    renderDay,
    value,
  } = props;
  const { barRightText, title, barLeftText, onPressBarLeft, render } = bar;
  const [currentYear, setCurrentYear] = useState<number>(toYear);
  const [currentMonth, setCurrentMonth] = useState<number>(toMonth);
  const [currentDays, setCurrentDays] = useState<number>(toDays);
  const [dayData, setDayData] = useState<number[]>([]);
  const [lastData, setLastData] = useState<number[]>([]);
  const [nextData, setNextData] = useState<number[]>([]);
  const [lunarName, setLunarName] = useState('');

  useEffect(() => {
    if (value) {
      let toYear = value.getFullYear();
      let toMonth = value.getMonth();
      let toDays = value.getDate();
      setCurrentYear(toYear);
      setCurrentMonth(toMonth);
      setCurrentDays(toDays);
    }
  }, [value]);

  useEffect(() => {
    let toMonths = getMonths(currentYear, currentMonth, currentDays);
    setLastData(toMonths[0]);
    setDayData(toMonths[1]);
    setNextData(toMonths[2]);
    // const date = currentYear + '-' + (currentMonth + 1) + '-' + currentDays;
    // onChange?.(date);
  }, [currentYear, currentMonth, currentDays]);

  /**
   * 头部导航栏
   * barRightText 左侧文字
   * title 标题
   * barLeftText 右侧文字
   * onPressBarLeft 左侧点击事件
   * render 自定义导航栏
   */
  const renderBar = render ? (
    render
  ) : (
    <View style={[styles.header, { backgroundColor: color }]}>
      <TouchableOpacity style={styles.headerBtnWrap} onPress={() => onPressBarLeft && onPressBarLeft()}>
        <View style={styles.headerBtn}>
          <Icon name="left" size={20} color={theme.colors.mask} />
          <Text color="mask" style={styles.headerText}>{barRightText}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.headerTextWrap}>
        <Text color="mask" style={styles.headerText}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.headerTextTouch} onPress={() => goToday()}>
        <Text color="mask" style={styles.headerText}>{barLeftText}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderWeekDays = () => {
    let weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    return weekdays.map((day) => {
      return (
        <Text key={day} style={styles.calendarWedText}>
          {day.toLocaleUpperCase()}
        </Text>
      );
    });
  };

  const renderWeeks = () => {
    let groupedDays = getWeeksArray(lastData, dayData, nextData, currentYear, currentMonth);
    return groupedDays.map((weekDays, index) => {
      return (
        <View key={index} style={styles.weekDay}>
          {renderDays(weekDays)}
        </View>
      );
    });
  };

  const renderDays = (weekDays: daysArrProps[]) => {
    return weekDays.map((day, index) => {
      let lunarAll = getType(day, currentYear, currentMonth, currentDays, toYear, toMonth, toDays);
      if (lunarAll.lunarShow !== '' && lunarName === '') {
        setLunarName(lunarAll.lunarShow);
      }

      let nameLen = getNameLen(day.lunarHolidays);
      let lineHeight =
        lunarHoliday === true && Platform.OS === 'ios' ? 0 : lunarHoliday === true ? 18 : MainWidth / 7 - 4.5;
      let paddingTop = lunarHoliday === true ? 4 : 0;
      let colorType = '';
      if (day.colorType === '') {
        colorType = '#828282';
      } else {
        colorType = color;
      }
      return (
        <TouchableOpacity
          key={index}
          style={
            lunarAll.type === 1
              ? [styles.dateBase, styles.otherMonth]
              : lunarAll.type === 2
                ? [styles.currentMonth, styles.dateBase, { backgroundColor: color }]
                : lunarAll.type === 3
                  ? [styles.selectMonth, styles.dateBase, { borderColor: color }]
                  : styles.dateBase
          }
          onPress={() => goSelectDay(day)}
        >
          <View>
            {renderDay?.(day.date || '', currentYear + '-' + (currentMonth + 1))}
            <Text
              style={[
                styles.dayText,
                {
                  color: lunarAll.type === 1 ? theme.colors.disabled : lunarAll.type === 2 ? '#fff' : theme.colors.text,
                  lineHeight: lineHeight,
                  paddingTop: paddingTop,
                },
              ]}
            >
              {day.monthDays}
            </Text>
            {lunarHoliday === true && (
              <Text
                style={[
                  styles.dayText,
                  {
                    color: lunarAll.type === 1 ? theme.colors.disabled : lunarAll.type === 2 ? '#fff' : colorType,
                    fontSize: 13,
                  },
                ]}
              >
                {nameLen > 3 ? <Ellipsis maxLen={2}>{day.lunarHolidays}</Ellipsis> : day.lunarHolidays || day.lunar}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      );
    });
  };
  const goSelectDay = (day: daysArrProps) => {
    let lunarName = `农历${day.lunarMonth}${day.lunar}`;
    if (day.type === 'current') {
      setLunarName(lunarName);
      setCurrentDays(day.monthDays);
    } else if (day.type === 'last') {
      setCurrentDays(day.monthDays);
      getCurrentMonth('last');
    } else {
      setCurrentDays(day.monthDays);
      getCurrentMonth('next');
    }
    onChange?.(day.date || '');
  };
  const getCurrentYear = (type: string) => {
    let year = 0;
    let month;
    if (type === 'last') {
      year = currentYear - 1;
      setCurrentYear(year);
      month = currentMonth === 0 ? 11 : currentMonth;
    } else {
      year = currentYear + 1;
      setCurrentYear(year);
      month = currentMonth === 11 ? 0 : currentMonth;
    }
    onChange?.(year + '-' + (month + 1) + '-' + currentDays);
  };
  const getCurrentMonth = (type: string) => {
    let month;
    if (type === 'last') {
      month = currentMonth - 1;
      if (month < 0) {
        setCurrentMonth(11);
        getCurrentYear('last');
      } else {
        setCurrentMonth(month);
        onChange?.(currentYear + '-' + (month + 1) + '-' + currentDays);
      }
    } else {
      month = currentMonth + 1;
      if (month > 11) {
        setCurrentMonth(0);
        getCurrentYear('next');
      } else {
        setCurrentMonth(month);
        onChange?.(currentYear + '-' + (month + 1) + '-' + currentDays);
      }
    }
  };
  const goToday = () => {
    setCurrentYear(toYear);
    setCurrentMonth(toMonth);
    setCurrentDays(toDays);
    onChange?.(toYear + '-' + (toMonth + 1) + '-' + toDays);
  };
  const goCurrentDay = (day: number) => {
    setCurrentDays(day);
  };

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View style={{ flex: 1, backgroundColor: theme.colors.mask }}>
        {showBar && renderBar}
        <View style={styles.calendarHeader}>
          <View style={styles.calendarHeaderItem}>
            <TouchableOpacity onPress={() => getCurrentYear('last')}>
              <Icon name="left" size={20} color={theme.colors.text} />
            </TouchableOpacity>
            <Text style={styles.calendarHeaderText}>{currentYear}年</Text>
            <TouchableOpacity onPress={() => getCurrentYear('next')}>
              <Icon name="right" size={20} color={theme.colors.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.calendarHeaderItem}>
            <TouchableOpacity onPress={() => getCurrentMonth('last')}>
              <Icon name="left" size={20} color={theme.colors.text} />
            </TouchableOpacity>
            <Text style={styles.calendarHeaderText}>{currentMonth + 1}月</Text>
            <TouchableOpacity onPress={() => getCurrentMonth('next')}>
              <Icon name="right" size={20} color={theme.colors.text} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.calendarWeekdays}>{renderWeekDays()}</View>
        <View style={styles.calendarDays}>{renderWeeks()}</View>
      </View>
      {showLunar === true && <ShowDate iconColor={color} lunar={lunarName} />}
    </View>
  );
};

type CreStyle = {
  bgColor: string;
  themeColor: string;
  themeText: string;
};
function createStyles({ bgColor, themeColor, themeText }: CreStyle) {
  return StyleSheet.create({
    header: {
      flex: 1,
      display: 'flex',
      backgroundColor: themeColor,
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerBtnWrap: {
      flex: 1,
    },
    headerBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      // width: 50,
    },
    headerTextWrap: {
      flex: 1,
      alignItems: 'center',
    },
    headerTextTouch: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row-reverse',
    },
    headerText: {
      fontSize: 20,
    },
    calendarHeader: {
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-between',
    },
    calendarHeaderItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 10,
    },
    calendarHeaderText: {
      paddingHorizontal: 30,
      fontSize: 20,
      fontWeight: '500',
      color: themeText,
    },
    calendarWeekdays: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: MainWidth / 7 - 33,
      paddingTop: 10,
    },
    calendarWedText: {
      textAlign: 'center',
    },
    calendarDays: {
      marginVertical: 10,
    },
    weekDay: {
      flexDirection: 'row',
      paddingHorizontal: 2,
    },
    dateBase: {
      marginHorizontal: 2,
      width: MainWidth / 7 - 4.5,
      height: MainWidth / 7 - 4.5,
      ...Platform.select({
        ios: {},
        android: {
          justifyContent: 'center',
        },
      }),
    },
    currentMonth: {
      backgroundColor: themeColor,
      borderRadius: 50,
    },
    selectMonth: {
      borderWidth: 1,
      borderColor: themeColor,
      borderRadius: 50,
    },
    otherMonth: {
      borderRadius: 50,
    },
    dayText: {
      textAlign: 'center',
      fontSize: 17,
      fontWeight: '500',
    },
  });
}

export default Calendar;

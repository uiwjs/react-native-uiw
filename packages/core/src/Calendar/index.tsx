import React, { useEffect, useState } from 'react';
import { View, Text, ViewProps, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import Icon from '../Icon';
import Ellipsis from '../Ellipsis';
import { getMonths, getWeeksArray, daysArrProps, getType, getNameLen } from './utils';
import ShowDate from './show';

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
  renderDay?: (date: any) => React.ReactNode | JSX.Element;
}

const Calendar = (props: CalendarProps) => {
  const bars = {
    barRightText: 'Menu',
    title: 'Calendar',
    barLeftText: 'Today',
    onPressBarLeft: undefined,
    render: undefined,
  };
  const {
    color = '#329BCB',
    lunarHoliday = false,
    bar = bars,
    showLunar = false,
    onChange,
    showBar = true,
    renderDay,
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
    let toMonths = getMonths(currentYear, currentMonth, currentDays);
    setLastData(toMonths[0]);
    setDayData(toMonths[1]);
    setNextData(toMonths[2]);
    const date = currentYear + '-' + (currentMonth + 1) + '-' + currentDays;
    onChange?.(date);
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
          <Icon name="left" size={20} color={'#fff'} />
          <Text style={styles.headerText}>{barRightText}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.headerTextWrap}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.headerTextTouch} onPress={() => goToday()}>
        <Text style={styles.headerText}>{barLeftText}</Text>
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
            {renderDay?.(day.date || '')}
            <Text
              style={[
                styles.dayText,
                {
                  color: lunarAll.type === 1 ? '#B5B5B5' : lunarAll.type === 2 ? '#fff' : '#000',
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
                    color: lunarAll.type === 1 ? '#B5B5B5' : lunarAll.type === 2 ? '#fff' : colorType,
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
  };
  const getCurrentYear = (type: string) => {
    if (type === 'last') {
      let year = currentYear - 1;
      setCurrentYear(year);
    } else {
      let year = currentYear + 1;
      setCurrentYear(year);
    }
  };
  const getCurrentMonth = (type: string) => {
    if (type === 'last') {
      let month = currentMonth - 1;
      if (month < 0) {
        getCurrentYear('last');
        setCurrentMonth(11);
      } else {
        setCurrentMonth(month);
      }
    } else {
      let month = currentMonth + 1;
      if (month > 11) {
        getCurrentYear('next');
        setCurrentMonth(0);
      } else {
        setCurrentMonth(month);
      }
    }
  };
  const goToday = () => {
    setCurrentYear(toYear);
    setCurrentMonth(toMonth);
    setCurrentDays(toDays);
  };
  const goCurrentDay = (day: number) => {
    setCurrentDays(day);
  };

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        {showBar && renderBar}
        <View style={styles.calendarHeader}>
          <View style={styles.calendarHeaderItem}>
            <TouchableOpacity onPress={() => getCurrentYear('last')}>
              <Icon name="left" size={20} color={'#333'} />
            </TouchableOpacity>
            <Text style={styles.calendarHeaderText}>{currentYear}年</Text>
            <TouchableOpacity onPress={() => getCurrentYear('next')}>
              <Icon name="right" size={20} color={'#333'} />
            </TouchableOpacity>
          </View>

          <View style={styles.calendarHeaderItem}>
            <TouchableOpacity onPress={() => getCurrentMonth('last')}>
              <Icon name="left" size={20} color={'#333'} />
            </TouchableOpacity>
            <Text style={styles.calendarHeaderText}>{currentMonth + 1}月</Text>
            <TouchableOpacity onPress={() => getCurrentMonth('next')}>
              <Icon name="right" size={20} color={'#333'} />
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
const styles = StyleSheet.create({
  header: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#329BCB',
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
    color: '#fff',
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
    color: '#000',
  },
  calendarWeekdays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: MainWidth / 7 - 33,
    paddingTop: 10,
  },
  calendarWedText: {
    color: '#616161',
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
    backgroundColor: '#329BCB',
    borderRadius: 50,
  },
  selectMonth: {
    borderWidth: 1,
    borderColor: '#329BCB',
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

export default Calendar;

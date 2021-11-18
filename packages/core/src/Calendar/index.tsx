import React, { useEffect, useState } from 'react';
import { View, Text, ViewProps, TextProps, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { color } from 'src/utils';
import Icon from '../Icon';
import { getMonths, getWeeksArray, daysArrProps } from './utils';

export let MainWidth = Dimensions.get('window').width;
export let newDates = new Date();
export let toYear = newDates.getFullYear();
export let toMonth = newDates.getMonth();
export let toDays = newDates.getDate();

interface barState {
  title?: string;
  barRightText?: string;
  barLeftText?: string;
  onPressBarLeft?: () => void;
  render?: React.ReactNode;
}
export interface CalendarProps extends ViewProps {
  // 日历颜色
  color?: string;
  bar: barState;
}
const Calendar = (props: CalendarProps) => {
  const {
    color = '#329BCB',
    bar: { render = null, barRightText = '返回', title = '日历', barLeftText = '今天', onPressBarLeft = null },
  } = props;

  const [currentYear, setCurrentYear] = useState<number>(toYear);
  const [currentMonth, setCurrentMonth] = useState<number>(toMonth);
  const [currentDays, setCurrentDays] = useState<number>(toDays);
  const [dayData, setDayData] = useState<number[]>([]);
  const [lastData, setLastData] = useState<number[]>([]);
  const [nextData, setNextData] = useState<number[]>([]);

  useEffect(() => {
    let toMonths = getMonths(currentYear, currentMonth);
    setLastData(toMonths[0]);
    setDayData(toMonths[1]);
    setNextData(toMonths[2]);
  }, [currentYear, currentMonth]);

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
      <TouchableOpacity onPress={() => onPressBarLeft && onPressBarLeft()}>
        <View style={styles.headerBtn}>
          <Icon name="left" size={20} color={'#fff'} />
          <Text style={styles.headerText}>{barRightText}</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <TouchableOpacity onPress={() => goToday()}>
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
    let groupedDays = getWeeksArray(lastData, dayData, nextData);
    return groupedDays.map((weekDays, index) => {
      return (
        <View key={index} style={styles.weekDays}>
          {renderDays(weekDays)}
        </View>
      );
    });
  };
  const renderDays = (weekDays: daysArrProps[]) => {
    return weekDays.map((day, index) => {
      let type = 0;
      if (day.type === 'last' || day.type === 'next') {
        type = 1;
      } else if (
        currentYear === toYear &&
        currentMonth === toMonth &&
        day.monthDays === currentDays &&
        currentDays === toDays
      ) {
        type = 2;
      } else if (day.monthDays === currentDays) {
        type = 3;
      } else {
        type = 0;
      }
      return (
        <TouchableOpacity
          key={index}
          style={
            type === 1
              ? styles.otherMonth
              : type === 2
              ? [styles.currentMonth, { backgroundColor: color }]
              : type === 3
              ? [styles.selectMonth, { borderColor: color }]
              : styles.day
          }
          onPress={() => goSelectDay(day)}
        >
          <Text style={[styles.dayText, { color: type === 1 ? '#B5B5B5' : type === 2 ? '#fff' : '#000' }]}>
            {day.monthDays}
          </Text>
        </TouchableOpacity>
      );
    });
  };
  const goSelectDay = (day: daysArrProps) => {
    if (day.type === 'current') {
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
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {renderBar}
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
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#329BCB',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  headerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
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
  weekDays: {
    flexDirection: 'row',
    paddingHorizontal: 2,
  },
  currentMonth: {
    backgroundColor: '#329BCB',
    borderRadius: 50,
    marginHorizontal: 2,
    width: MainWidth / 7 - 4.5,
    height: MainWidth / 7 - 4.5,
  },
  selectMonth: {
    borderWidth: 1,
    borderColor: '#329BCB',
    borderRadius: 50,
    marginHorizontal: 2,
    width: MainWidth / 7 - 4.5,
    height: MainWidth / 7 - 4.5,
  },
  otherMonth: {
    borderRadius: 50,
    marginHorizontal: 2,
    width: MainWidth / 7 - 4.5,
    height: MainWidth / 7 - 4.5,
  },
  day: {
    marginHorizontal: 2,
    width: MainWidth / 7 - 4.5,
    height: MainWidth / 7 - 4.5,
  },
  dayText: {
    textAlign: 'center',
    fontSize: 17,
    lineHeight: MainWidth / 7 - 4.5,
    fontWeight: '500',
  },
});

export default Calendar;

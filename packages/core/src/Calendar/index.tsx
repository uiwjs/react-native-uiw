import React, { useEffect, useState } from 'react';
import { View, Text, ViewProps, TextProps, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { color } from 'src/utils';
import Icon from '../Icon';
import Ellipsis from '../Ellipsis';
import { getMonths, getWeeksArray, daysArrProps, getType, getNameLen } from './utils';

export let MainWidth = Dimensions.get('window').width;
export let newDates = new Date();
export let toYear = newDates.getFullYear();
export let toMonth = newDates.getMonth();
export let toDays = newDates.getDate();
export interface CalendarProps extends ViewProps {
  // 日历颜色
  color: string;
  //是否显示农历及假日
  lunarHoliday: boolean;
  //左上角按钮自定义跳转
  onPress?: () => void;
}
const Calendar = (props: CalendarProps) => {
  const { color = '#329BCB', lunarHoliday = false, onPress } = props;
  const [currentYear, setCurrentYear] = useState<number>(toYear);
  const [currentMonth, setCurrentMonth] = useState<number>(toMonth);
  const [currentDays, setCurrentDays] = useState<number>(toDays);
  const [dayData, setDayData] = useState<number[]>([]);
  const [lastData, setLastData] = useState<number[]>([]);
  const [nextData, setNextData] = useState<number[]>([]);

  useEffect(() => {
    let toMonths = getMonths(currentYear, currentMonth, currentDays);
    setLastData(toMonths[0]);
    setDayData(toMonths[1]);
    setNextData(toMonths[2]);
  }, [currentYear, currentMonth]);

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
      let type = getType(day, currentYear, currentMonth, currentDays, toYear, toMonth, toDays);
      let nameLen = getNameLen(day.lunarHolidays);
      let lineHeight = lunarHoliday === true ? 0 : MainWidth / 7 - 4.5;
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
          <Text
            style={[
              styles.dayText,
              {
                color: type === 1 ? '#B5B5B5' : type === 2 ? '#fff' : '#000',
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
                  color: type === 1 ? '#B5B5B5' : type === 2 ? '#fff' : colorType,
                  fontSize: 13,
                },
              ]}
            >
              {nameLen > 3 ? <Ellipsis maxLen={2}>{day.lunarHolidays}</Ellipsis> : day.lunarHolidays}
            </Text>
          )}
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
      <View style={[styles.header, { backgroundColor: color }]}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.headerBtn}>
            <Icon name="left" size={20} color={'#fff'} />
          </View>
        </TouchableOpacity>

        <View style={{ marginLeft: MainWidth / 5.5 - 10 }}>
          <Text style={styles.headerText}>Calendar</Text>
        </View>
        <TouchableOpacity onPress={() => goToday()}>
          <Text style={styles.headerText}>Today</Text>
        </TouchableOpacity>
      </View>

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
    flex: 1,
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
  weekDay: {
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
    fontWeight: '500',
  },
});

export default Calendar;

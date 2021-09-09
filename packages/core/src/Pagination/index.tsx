import React, { useState, useEffect } from 'react';
import { View, StyleSheet, } from 'react-native';
import DirText from './DirText'
import Page from './Page'

export type size = 'small' | 'default' | 'large';

export interface PaginationProps {
  /** 尺寸 */
  size?: size;
  /** 当前页	 */
  current?: number,
  /** 当前页的颜色 */
  currentColor?: string
  /** 数据总量	 */
  total: number,
  /** 每页数据量	 */
  pageSize?: number,
  /** 是否以 icon 形式展示按钮 */
  icon?: boolean,
  /** 点击页码按钮时触发 */
  onPageChange?: (type: 'prev' | 'next', current: number) => void,
}


const Pagination = (props: PaginationProps) => {
  const { size = 'default', icon = false, currentColor, total, pageSize = 10 } = props
  const [current, setCurrent] = useState<number>(1)
  useEffect(() => {
    setCurrent(props.current || 1)
  }, [props.current])
  /** 页码 */
  const onPageChange = (type: 'prev' | 'next',) => {
    if (current === 1 && type === 'prev') {
      return false
    }
    if (current === Math.ceil(total / pageSize) && type === 'next') {
      return false
    }
    const present: number = type === 'prev' ? current - 1 : current + 1
    if(typeof props.onPageChange === 'function') {
      props.onPageChange(type, present)
    }else {
      setCurrent(present)
    }
  }

  return (
    <View style={styles.pagination}>
      <DirText 
        size={size} 
        direction='left' 
        disabled={current === 1} 
        icon={icon}
        onPageChange={onPageChange}
      />
      <Page
        size={size}
        current={current}
        totalPage={Math.ceil(total / pageSize)}
        currentColor={currentColor}
      />
      <DirText
        onPageChange={onPageChange}
        size={size}
        direction='right'
        disabled={current === Math.ceil(total / pageSize)}
        icon={icon}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  }
});
export default Pagination
import React from 'react';
import { ViewProps } from 'react-native';
import { IconsName } from '../Icon';

/** icon 类型 */
export type TimelineItemsIcons = IconsName | React.ReactElement | React.ReactNode;

export type TimelineItemsMode = 'left' | 'alternate';

export interface TimelineItemsProps {
  /** 标题 */
  title: string;
  /** 子标题 */
  tips?: string;
  /** 子项内容 */
  desc?: string | string[];
  /** 自定义图标 */
  icon?: TimelineItemsIcons;
  /** 自定义图标颜色 */
  color?: string;
  /** 自定义图标尺寸 */
  size?: number;
  renderItem?: (item: TimelineItemsProps, index: number) => React.ReactNode;
}

export interface TimelineProps extends ViewProps {
  /** 是否倒序 */
  isReverse?: boolean;
  /** 步骤条数据列表 */
  items: TimelineItemsProps[];
  /** 改变时间轴和内容的相对位置 */
  mode?: TimelineItemsMode;
  renderItem?: (item: TimelineItemsProps, index: number) => React.ReactNode;
}

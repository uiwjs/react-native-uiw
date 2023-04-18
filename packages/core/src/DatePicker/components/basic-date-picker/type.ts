import { SyntheticEvent } from 'react';
import { CascadePickerItemProps, WheelPickerPropsBase } from '../../../Picker/components/WheelPicker/type';

type Event = SyntheticEvent<
  Readonly<{
    timestamp: number;
  }>
>;

type DateMode = 'datetime' | 'date' | 'time' | 'month' | 'year';

interface ModalPickerProps {
  displayType?: 'view' | 'modal';
  /** 选择器标题 */
  title?: string;
  /** 是否弹窗显示 */
  visible?: boolean;
  /** 弹窗关闭事件 */
  onClosed?: () => void;
  /** 取消按钮文本 */
  cancelText?: string;
  /** 确认按钮文本 */
  okText?: string;
}

interface DatePickerPropsBase extends WheelPickerPropsBase {
  /** 显示模式 */
  mode?: DateMode;
  /** 单位文字 */
  labelUnit?: { year: string; month: string; day: string; hour: string; minute: string };
  /** 日期格式化 */
  format?: string;
  /** 当前日期 */
  value?: Date;
  /** 日期修改事件 */
  onChange?: (date?: Date, formatDate?: string) => void;
  /** 最小日期 */
  minDate?: string;
  /** 最大日期 */
  maxDate?: string;
}

type DateUnit = 'year' | 'month' | 'date' | 'hour' | 'minute';
type DateRef = { [key in DateUnit]: string };

export type { CascadePickerItemProps, DatePickerPropsBase, ModalPickerProps, DateUnit, DateRef };

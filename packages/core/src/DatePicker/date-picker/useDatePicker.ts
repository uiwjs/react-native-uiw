import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useSafeState, usePersistFn } from 'ahooks';
import { useLatest } from '../../utils/hooks';
import dayjs from 'dayjs';
import { DatePickerPropsBase, ModalPickerProps } from '../components/basic-date-picker/type';

export default function useDatePicker({
  onClosed,
  onChange,
  value,
  displayType,
  visible,
  format,
}: DatePickerPropsBase & ModalPickerProps) {
  const [date, setDate] = useSafeState<Date | undefined>(value ?? new Date());
  const onChangeRef = useLatest(onChange);
  const onCloseRef = useLatest(onClosed);

  useEffect(() => {
    setDate(value ?? new Date());
  }, [value]);

  /** 绑定物理返回键监听事件，如果当前picker是打开的，返回键作用是关闭picker，否则返回上一个界面 */
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => visible);
    return () => sub.remove();
  }, [visible]);

  const handleChange = (date?: Date) => {
    setDate(date);
    if (displayType === 'view') {
      onChangeRef.current?.(date);
    }
  };

  const handleClose = () => {
    setDate(value);
    onCloseRef.current?.();
  };

  const handleOk = () => {
    onChangeRef.current?.(date, dayjs(date).format(format));
    onCloseRef.current?.();
  };

  return {
    date,
    handleChange: usePersistFn(handleChange),
    handleOk: usePersistFn(handleOk),
    handleClose: usePersistFn(handleClose),
  };
}

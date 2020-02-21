import { GestureResponderEvent } from 'react-native'


export interface SelectTtitleProps {
  onOk: (event: GestureResponderEvent) => void;
  onDismiss: (event: GestureResponderEvent) => void;
  okText: string;
  title: string;
  dismissText: string;
  titleHeight: number
}
export interface  Idata {
  name: string
  sub: any
  }

export interface SelectItemProps {
  column: any;
  height: number;
  data: Idata[];
  changeValue: (row: any, column: any) => void
  row: any
}

export interface IPanel extends SelectTtitleProps {
  modalHeight: number,
  itemHeight: number,
  data: Idata[];
  changeValue: (row: any, column: any) => void
  value: any[];
  cols: any
}

export interface SelectCascaderProps {
  visible?: boolean,
  onOk: (event: GestureResponderEvent, value: any) => void;
  changeValue: (row: any, column: any) => void;
  onChange: (value: any) => {}
  onSelectChange: (value: any, column: any) => {}
  onDismiss: (event: GestureResponderEvent) => void;
  data: [],
  value: number[],
  cols: number,
  okText: string,
  dismissText: string,
  title: string
}
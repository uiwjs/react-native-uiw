import Button from './Button';
import Icon from './Icon';

export type Routes = {
  [key: string]: any;
};

export const routes: Routes = {
  Button, Icon,
  // LinkTabs: {
  //   screen: Button,
  //   path: 'settings',
  // },
};

export interface RoutesInfoDescription {
  description?: string;
  name?: string;
}

export interface RoutesInfo {
  [key: string]: RoutesInfoDescription;
}

export const routesInfo: RoutesInfo = {
  Button: {
    description: '按钮用于开始一个即时操作。',
    name: 'Button 按钮',
  },
  Icon: {
    description: '用于引用图标。',
    name: 'Icon 图标',
  },
};

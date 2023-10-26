import { Fragment } from 'react';
import Icon, { IconsName } from '../Icon';
import { Theme } from '../theme';
import type { TimelineItemsIcons } from './types';

interface IconCustomProps {
  icon?: TimelineItemsIcons;
  size?: number;
  color?: string;
  theme: Theme;
}

export const IconCustom = (props: IconCustomProps) => {
  const { icon, size, color, theme } = props;

  if (icon) {
    if (typeof icon === 'string') {
      return <Icon name={icon as IconsName} size={size ? size : 15} color={color ? color : 'red'} />;
    }
    return <Fragment>{icon}</Fragment>;
  }
  return (
    <Icon
      name="circle-o"
      size={size ? size : 15}
      color={color ? color : theme.colors.primary_background || '#3578e5'}
    />
  );
};

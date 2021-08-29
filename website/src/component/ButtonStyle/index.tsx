import React from 'react';
import styles from './index.module.less';

interface ButtonStyleProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ButtonStyle(props: ButtonStyleProps) {
  const { children, ...other } = props;
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: styles.btn,
      ...other,
    });
  }
  return null;
}

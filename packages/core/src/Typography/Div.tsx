import React, { Fragment } from 'react';
import { Text, TextProps, ViewProps } from 'react-native';

interface DivProps {
  children?: React.ReactNode;
}

export default function Div<T>({ children, ...otherProps }: DivProps & TextProps & ViewProps): JSX.Element | null {
  if (!children) {
    return null;
  }
  const someStr = React.Children.toArray(children).every((item) => {
    return typeof item === 'string' || (item && (item as any).type && (item as any).type.displayName === 'Text');
  });
  if (someStr) {
    return <Text {...otherProps} children={children} />;
  }
  return (
    <Fragment>
      {React.Children.toArray(children)
        .map((child, idx) => {
          if (typeof child === 'string') {
            return <Text {...otherProps} children={child} key={idx} />;
          }
          if (!React.isValidElement(child)) {
            return undefined;
          }
          return React.cloneElement(child, { key: idx, ...otherProps });
        })
        .filter(Boolean)}
    </Fragment>
  );
}

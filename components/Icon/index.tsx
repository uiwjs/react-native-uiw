import React from 'react';
import Svg, { SvgXml, SvgProps, Path } from 'react-native-svg';
import svgPaths from '@uiw/icons/fonts/w-icon.json';

export type IconsName = keyof typeof svgPaths;

export interface IconsProps extends SvgProps {
  name?: IconsName;
  size?: number;
  fill?: string;
  stroke?: string;
  /**
   * SVG path d=`paths`
   */
  paths?: string[];
  /**
   * Svg 图标字符串
   */
  xml?: string;
}

export default class Icons extends React.Component<IconsProps> {
  static displayName = 'uiwm.Icon';
  static defaultProps: IconsProps = {
    size: 26,
  }
  render() {
    const { name, size, fill, stroke, xml, paths, ...otherProps } = this.props;
    if (xml) {
      return <SvgXml xml={xml} height={size} width={size} {...otherProps} />;
    }
    let pathData = paths;
    if (!pathData) {
      if (!name || !svgPaths[name]) {
        return null;
      }
      pathData = svgPaths[name] as string[];
    }
    return (
      <Svg
        fill={fill}
        stroke={stroke}
        height={size}
        width={size}
        viewBox="0 0 20 20"
        {...otherProps}
      >
        {pathData.map((d: string, i: number) => <Path key={i} d={d} fillRule="evenodd" />)}
      </Svg>
    );
  }
}

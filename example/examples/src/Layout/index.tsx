import React, { PureComponent } from 'react';
import { StyleSheet, View, ViewProps, ViewStyle, SafeAreaView, ScrollView, ScrollViewProps, Text, TextStyle, Image, StyleProp } from 'react-native';
import PropTypes from 'prop-types';
import { Theme } from '@uiw/react-native';
import { useTheme } from '@shopify/restyle';

export interface HeaderProps {
  title?: string;
  description?: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  hasLogo?: boolean;
  children?: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  const { children, title, description, style, hasLogo, titleStyle, descriptionStyle } = props;
  const theme = useTheme<Theme>();
  const styles = createStyles({
    backgroundColor: theme.colors.background,
    shadowColor: theme.colors.border,
    color: theme.colors.primary_text,
  });
  return (
    <View style={[styles.header, style]}>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {hasLogo && (
        <View style={styles.logo}>
          <Image source={require('../image/logo.png')} style={{ width: 103, height: 18 }} />
        </View>
      )}
      {description && <Text style={[styles.description, descriptionStyle]}>{description}</Text>}
      {children}
    </View>
  );
};

export interface BodyProps extends ScrollViewProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  isScroll?: boolean;
}

const Body = (props: BodyProps) => {
  const { children, style, isScroll, ...other } = props;
  const theme = useTheme<Theme>();
  const styles = createStyles({
    backgroundColor: theme.colors.background,
    shadowColor: theme.colors.border,
    color: theme.colors.primary_text,
  });
  return (
    <ScrollView style={[styles.body, style]} automaticallyAdjustContentInsets={false} {...other}>
      {children}
    </ScrollView>
  );
};

export interface FooterProps {
  copyright?: string;
  style?: StyleProp<ViewStyle>;
  isShowCopyRight?: boolean;
  children?: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  const { children, copyright, style, isShowCopyRight, ...other } = props;
  const theme = useTheme<Theme>();
  const styles = createStyles({
    backgroundColor: theme.colors.background,
    shadowColor: theme.colors.border,
    color: theme.colors.primary_text,
  });
  return (
    <View style={[styles.footer, style]} {...other}>
      {isShowCopyRight && <Text style={styles.copyright}>{copyright}</Text>}
      {children}
    </View>
  );
};

export interface CardProps extends ViewProps {
  showTitle?: boolean;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  bodyStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  extra?: React.ReactNode;
  children?: React.ReactNode;
}

const Card = (props: CardProps) => {
  const { title, titleStyle, bodyStyle, children, style, showTitle, extra, ...other } = props;
  const theme = useTheme<Theme>();
  const styles = createStyles({
    backgroundColor: theme.colors.background,
    shadowColor: theme.colors.border,
    color: theme.colors.primary_text,
  });
  return (
    <View style={style} {...other}>
      {extra ? (
        <View style={[styles.extra, styles.cardTitle]}>
          {showTitle && (
            <View style={{ flex: 2 }}>
              <Text style={[titleStyle]}>{title}</Text>
            </View>
          )}
          <View>{extra}</View>
        </View>
      ) : (
        showTitle && <Text style={titleStyle ? [styles.cardTitle, titleStyle] : [styles.cardTitle]}>{title}</Text>
      )}
      {children && <View style={bodyStyle ? [styles.cardBody, bodyStyle] : [styles.cardBody]}>{children}</View>}
    </View>
  );
};

export interface ContainerProps extends ScrollViewProps {
  children?: React.ReactNode;
  isScroll?: boolean;
}

export const Container = (props: ContainerProps) => {
  const { children, ...others } = props;
  const theme = useTheme<Theme>();
  const styles = createStyles({
    backgroundColor: theme.colors.background,
    shadowColor: theme.colors.border,
    color: theme.colors.primary_text,
  });
  return (
    <SafeAreaView style={styles.body} {...others}>
      <ScrollView style={{ height: '100%' }} {...others}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export interface LayoutProps extends ViewProps { }

export default class Layout extends PureComponent<LayoutProps> {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;
  static Card = Card;
  render() {
    const { children, style } = this.props;
    const styles = createStyles({});
    return <View style={[styles.container, style]}>{children}</View>;
  }
}

function createStyles({ backgroundColor = '#F7F7F7', shadowColor = '#E6E6E6', color = '#9A9A9A' }) {
  return StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      minHeight: '100%',
      flexDirection: 'column',
    },
    header: {
      paddingTop: 25,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      shadowColor: shadowColor,
      backgroundColor: backgroundColor,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 3,
      // shadowOpacity: 0.8,
      shadowOpacity: 0,
      zIndex: 999,
    },
    footer: {
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: shadowColor,
      zIndex: 999,
      backgroundColor: backgroundColor,
    },
    body: {
      backgroundColor: backgroundColor,
    },
    logo: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 20,
      color: color,
    },
    description: {
      fontSize: 14,
      marginTop: 20,
      color: color,
    },
    copyright: {
      fontSize: 14,
      color: color,
    },
    cardTitle: {
      fontSize: 14,
      backgroundColor: shadowColor,
      paddingLeft: 16,
      marginTop: 16,
      paddingRight: 16,
      paddingTop: 12,
      paddingBottom: 12,
      marginBottom: 16,
      color: color,
    },
    cardBody: {
      // paddingLeft: 16,
      // paddingRight: 16,
      // paddingBottom: 16,
    },
    extra: {
      backgroundColor: backgroundColor,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
}

Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;
Layout.Card = Card;

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  style: PropTypes.object,
  hasLogo: PropTypes.bool,
};

Body.propTypes = {
  style: PropTypes.object,
  scrollBg: PropTypes.any,
};

Footer.propTypes = {
  copyright: PropTypes.string,
  style: PropTypes.object,
  isShowCopyRight: PropTypes.bool,
};

Footer.defaultProps = {
  copyright: 'uiw © 2023 React Native UIW',
  isShowCopyRight: true,
};

Card.propTypes = {
  showTitle: PropTypes.bool,
  title: PropTypes.string,
  style: PropTypes.object,
};

Card.defaultProps = {
  showTitle: true,
};

Container.propTypes = {};

Container.defaultProps = {
  children: null,
};

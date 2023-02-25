import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  ViewStyle,
  TextStyle,
  ScrollViewProps,
  ViewProps,
} from 'react-native';

export interface LayoutHeaderProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
}

const Header = (props: LayoutHeaderProps) => {
  const { children, title, description, style, titleStyle, descriptionStyle } = props;
  return (
    <View style={[styles.header, style]}>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {description && <Text style={[styles.description, descriptionStyle]}>{description}</Text>}
      {children}
    </View>
  );
};

export interface LayoutBodyProps extends ScrollViewProps {
  children?: React.ReactNode;
  isScroll?: boolean;
}

const Body = (props: LayoutBodyProps) => {
  const { children, style, isScroll, ...other } = props;
  return (
    <ScrollView style={[styles.body, style]} automaticallyAdjustContentInsets={false} {...other}>
      {children}
    </ScrollView>
  );
};

export interface LayoutFooterProps extends ViewProps {
  children?: React.ReactNode;
  copyright?: React.ReactNode;
  isShowCopyRight?: boolean;
}

const Footer = (props: LayoutFooterProps) => {
  const { children, copyright, style, isShowCopyRight, ...other } = props;
  return (
    <View style={[styles.footer, style]} {...other}>
      {isShowCopyRight && <Text style={styles.copyright}>{copyright}</Text>}
      {children}
    </View>
  );
};

export interface LayoutCardProps extends ViewProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  titleStyle?: TextStyle;
  bodyStyle?: ViewStyle;
  showTitle?: boolean;
  extra?: React.ReactNode;
}

const Card = (props: LayoutCardProps) => {
  const { title, titleStyle, bodyStyle, children, style, showTitle, extra, ...other } = props;
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

export interface LayoutContainerProps extends ScrollViewProps {
  children?: React.ReactNode;
}

export const Container = (props: LayoutContainerProps) => {
  const { children, ...others } = props;
  return (
    <SafeAreaView style={{ backgroundColor: '#ededed' }} {...others}>
      <ScrollView style={{ height: '100%' }} {...others}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
export interface LayoutProps {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
  Card: typeof Card;
  children?: React.ReactNode;
  style?: ViewStyle;
}

export default function Layout(props: LayoutProps) {
  const { children, style } = props;
  return <View style={[styles.container, style]}>{children}</View>;
}

Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;
Layout.Card = Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    minHeight: '100%',
    flexDirection: 'column',
  },
  header: {
    paddingTop: 25,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    shadowColor: '#E6E6E6',
    backgroundColor: 'transparent',
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
    // backgroundColor: '#F7F7F7',
    shadowColor: '#E6E6E6',
    // shadowOffset: { width: 0, height: -3 },
    // shadowRadius: 3,
    // shadowOpacity: 0.8,
    zIndex: 999,
  },
  body: {
    backgroundColor: '#ededed',
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: '#414141',
  },
  description: {
    fontSize: 14,
    marginTop: 20,
    color: '#9A9A9A',
  },
  copyright: {
    fontSize: 14,
    color: '#686868',
  },
  cardTitle: {
    fontSize: 14,
    backgroundColor: '#F7F7F7',
    paddingLeft: 16,
    marginTop: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 16,
    color: '#9A9A9A',
  },
  cardBody: {
    // paddingLeft: 16,
    // paddingRight: 16,
    // paddingBottom: 16,
  },
  extra: {
    backgroundColor: '#F7F7F7',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;
Layout.Card = Card;

Footer.defaultProps = {
  copyright: 'uiw © 2023 React Native UIW',
  isShowCopyRight: true,
};

Card.defaultProps = {
  showTitle: true,
};
Container.defaultProps = {
  children: null,
};

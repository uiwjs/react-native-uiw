import React from 'react';
import {
  Animated,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {
  NativeViewGestureHandler,
  RectButton,
} from 'react-native-gesture-handler';
import {
  SupportedThemes,
  ThemeColors,
  ThemeContext,
  Themed,
  createAppContainer,
  SafeAreaView,
} from 'react-navigation';

import HomeScreen from '../Home';

const ExampleRoutes: any = {
  HomeScreen,
}

const ExampleInfo: any = {
  HomeScreen: {
    description: 'Render additional views around a Tab navigator',
    name: 'Custom Tabs UI',
  },
}

interface State {
  scrollY: Animated.Value;
}

export class MainScreen extends React.Component<any, State> {
  static contextType = ThemeContext;
  context!: React.ContextType<typeof ThemeContext>;

  state = {
    scrollY: new Animated.Value(0),
  };

  render() {
    const { navigation } = this.props;

    const scale = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [-450, 0, 100],
      outputRange: [2, 1, 0.8],
    });

    const translateY = this.state.scrollY.interpolate({
      inputRange: [-450, 0, 100],
      outputRange: [-150, 0, 40],
    });

    const opacity = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [0, 50],
      outputRange: [1, 0],
    });

    const underlayOpacity = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [0, 50],
      outputRange: [0, 1],
    });

    const backgroundScale = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [-450, 0],
      outputRange: [3, 1],
    });

    const backgroundTranslateY = this.state.scrollY.interpolate({
      inputRange: [-450, 0],
      outputRange: [0, 0],
    });

    return (
      <View style={{ flex: 1 }}>
        <NativeViewGestureHandler>
          <Animated.ScrollView
            style={{ flex: 1, backgroundColor: ThemeColors[this.context].body }}
            scrollEventThrottle={1}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: this.state.scrollY } },
                },
              ],
              { useNativeDriver: true }
            )}
          >
            <Animated.View
              style={[
                styles.backgroundUnderlay,
                {
                  transform: [
                    { scale: backgroundScale },
                    { translateY: backgroundTranslateY },
                  ],
                },
              ]}
            />
            <Animated.View
              style={{ opacity, transform: [{ scale }, { translateY }] }}
            >
              <SafeAreaView
                style={styles.bannerContainer}
                forceInset={{ top: 'always', bottom: 'never' }}
              >
                <View style={styles.banner}>
                  <Image
                    source={require('./src/assets/NavLogo.png')}
                    style={styles.bannerImage}
                  />
                  <Text style={styles.bannerTitle}>
                    React Navigation Examples
                  </Text>
                </View>
              </SafeAreaView>
            </Animated.View>

            <SafeAreaView
              forceInset={{ top: 'never', bottom: 'always' }}
              style={{ backgroundColor: '#eee' }}
            >
              <View
                style={{
                  backgroundColor: ThemeColors[this.context].bodyContent,
                }}
              >
                {Object.keys(ExampleRoutes).map((routeName: string) => (
                  <RectButton
                    key={routeName}
                    underlayColor="#ccc"
                    activeOpacity={0.3}
                    onPress={() => {
                      const route = ExampleRoutes[routeName];
                      if (route.screen || route.path || route.params) {
                        const { path, params, screen } = route;
                        const { router } = screen;
                        const action =
                          path &&
                          router.getActionForPathAndParams(path, params);
                        navigation.navigate(routeName, {}, action);
                      } else {
                        navigation.navigate(routeName);
                      }
                    }}
                  >
                    <View
                      style={[
                        styles.item,
                        this.context === 'dark'
                          ? styles.itemDark
                          : styles.itemLight,
                      ]}
                    >
                      <Themed.Text style={styles.title}>
                        {ExampleInfo[routeName].name}
                      </Themed.Text>
                      <Text style={styles.description}>
                        {ExampleInfo[routeName].description}
                      </Text>
                    </View>
                  </RectButton>
                ))}
              </View>
            </SafeAreaView>
          </Animated.ScrollView>
        </NativeViewGestureHandler>
        <StatusBar barStyle="light-content" />
        <Animated.View
          style={[styles.statusBarUnderlay, { opacity: underlayOpacity }]}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  backgroundUnderlay: {
    backgroundColor: '#673ab7',
    height: 300,
    left: 0,
    position: 'absolute',
    right: 0,
    top: -100,
  },
  banner: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  bannerContainer: {
    // backgroundColor: '#673ab7',
    alignItems: 'center',
  },
  bannerImage: {
    height: 36,
    margin: 8,
    resizeMode: 'contain',
    tintColor: '#fff',
    width: 36,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '200',
    marginRight: 5,
    marginVertical: 8,
  },
  description: {
    color: '#999',
    fontSize: 13,
  },
  item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemLight: {
    borderBottomColor: ThemeColors.light.bodyBorder,
  },
  itemDark: {
    borderBottomColor: ThemeColors.dark.bodyBorder,
  },
  statusBarUnderlay: {
    backgroundColor: '#673ab7',
    height: 20,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

import React from 'react';
import { View, ScrollView, Text, SafeAreaView, StatusBar, StyleSheet, SectionList } from 'react-native';
import { NativeViewGestureHandler, RectButton, } from 'react-native-gesture-handler';
import { ThemeColors, ThemeContext, Themed, createAppContainer, } from 'react-navigation';
import { routes, Routes, routesInfo, RoutesInfo } from '../../routes';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

export interface HomeScreenProps {
  navigation: any;
}

export default class HomeScreen extends React.Component<HomeScreenProps> {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {Object.keys(routes).map((routeName, idx) => (
            <RectButton
              key={idx}
              activeOpacity={0.1}
              onPress={() => {
                const route = routes[routeName as keyof Routes];
                if (route.screen || route.path || route.params) {
                  const { path, params, screen } = route;
                  const { router } = screen;
                  const action = path && router.getActionForPathAndParams(path, params);
                  navigation.navigate(routeName, {}, action);
                } else {
                  navigation.navigate(routeName);
                }
              }}
            >
              <View style={styles.item}>
                <Themed.Text style={styles.title}>{routesInfo[routeName as keyof RoutesInfo].name}</Themed.Text>
                <Themed.Text style={styles.description}>{routesInfo[routeName as keyof RoutesInfo].description}</Themed.Text>
              </View>
            </RectButton>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    flex: 1,
    width: '100%',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  description: {
    color: '#999',
    fontSize: 13,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    borderBottomColor: ThemeColors.light.bodyBorder,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 16,
    paddingVertical: 12,
  }
});

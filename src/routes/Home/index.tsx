import React from 'react';
import { View, ScrollView, Text, SafeAreaView, StatusBar, StyleSheet, SectionList } from 'react-native';
import { NativeViewGestureHandler, RectButton, } from 'react-native-gesture-handler';
import { ThemeColors, ThemeContext, Themed, createAppContainer, } from 'react-navigation';
import { routes, Routes } from '../../routes';
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
              onPress={(pointerInside) => {
                const route = routes[routeName as keyof Routes];
                if (route.path) {
                  navigation.push(route.path);
                } else {
                  navigation.navigate(routeName);
                }
              }}
            >
              <View style={styles.item}>
                <Themed.Text style={styles.title}>{routes[routeName as keyof Routes].navigationOptions.title}</Themed.Text>
                <Themed.Text style={styles.description}>{routes[routeName as keyof Routes].params.description}</Themed.Text>
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
    paddingTop: 6,
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

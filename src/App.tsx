import React, { Component, Fragment } from 'react';
import { StatusBar, SafeAreaView, View, Text, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './routes/Home';
import { routes } from './routes';

const AppNavigator = createStackNavigator({
  ...routes,
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'UIW Mobile UI',
    }
  }
}, {
  initialRouteName: 'Home',
  /*
    * Use modal on iOS because the card mode comes from the right,
    * which conflicts with the drawer example gesture
    */
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

const Navigation = createAppContainer(AppNavigator);

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  )
}

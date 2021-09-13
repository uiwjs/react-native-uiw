import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';

import {stackPageData} from './routes';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

const App = () => {
  return (
    <RootSiblingParent>
      <SafeAreaView style={styles.block}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={require('./Home').default}
              options={{
                headerTitle: 'Home',
                // header: () => null,
              }}
            />
            {stackPageData.map((props: any, index: number) => {
              return (
                <Stack.Screen
                  key={index}
                  {...props}
                  // name="Home"
                  // options={{
                  //   header: () => null
                  // }}
                  // component={Home}
                />
              );
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </RootSiblingParent>
  );
};

export default App;

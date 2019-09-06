import React, { Component, Fragment } from 'react';
import { StatusBar, SafeAreaView, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Button, Spacing } from '../components';
import HomeScreen from './Home';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'UIW Mobile UI',
    }
  },
});

export default createAppContainer(AppNavigator);


// import HomeScreen from './Home';
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }


// const RootStack = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       title: 'Ane Mobile UI',
//     }
//   },
// }, {
//   initialRouteName: 'Home',
// });

// export default class App extends Component {
//   render() {
//     return <RootStack />
//   }
// }


// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
// });

// export default createAppContainer(AppNavigator);

// export default class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView>
//           <View style={{ paddingHorizontal: 16 }}>
//             <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse' }}>
//               <Button>默认按钮</Button>
//               <Button>默认按钮</Button>
//             </View>
//             <Spacing />
//             <Button>默认按钮</Button>
//             <Spacing />
//             <Button disabled>默认禁用按钮</Button>
//             <Spacing />
//             <Button inline type="primary">主要按钮</Button>
//             <Spacing />
//             <Button type="primary" disabled>主要禁用</Button>
//             <Spacing />
//             <Button type="warning">警告按钮</Button>
//             <Spacing />
//             <Button type="warning" disabled>警告禁用按钮</Button>
//             <Spacing />
//             <Button type="warning" loading>警告</Button>
//             <Spacing />
//             <Button type="warning" loading disabled>警告按钮</Button>
//             <Spacing />
//             <Button loading>默认按钮</Button>
//             <Spacing />
//             <Text>自定义颜色</Text>
//             <Spacing />
//             <Button loading disabled>默认按钮 禁用</Button>
//             <Spacing />
//             <Button color="#333">自定义颜色按钮</Button>
//             <Spacing />
//             <Button color="#393E48">自定义颜色按钮</Button>
//             <Spacing />
//             <Button color="#f6f8fa">自定义颜色按钮</Button>
//             <Spacing />
//             <Button color="#ffc107">自定义颜色按钮</Button>
//           </View>
//         </SafeAreaView>
//       </Fragment>
//     );
//   }
// }
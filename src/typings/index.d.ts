
import { NavigationScreenProp } from 'react-navigation';

export interface ComProps<S = {}> {
  navigation: NavigationScreenProp<S>;
  screenProps?: any;
}
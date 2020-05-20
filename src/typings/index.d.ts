import {StackNavigationProp} from '@react-navigation/stack';
import {Routes} from '../routes';

type ModalStackNavigation = StackNavigationProp<{}>;

export interface ComProps {
  navigation: ModalStackNavigation;
  route: Routes;
}

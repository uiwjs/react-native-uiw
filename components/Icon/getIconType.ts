import ZocialIcon from 'react-native-vector-icons/Zocial';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const customIcons: {
  [key: string]: any;
} = {};

export const registerCustomIconType = (id: IconType, customIcon: any) => {
  customIcons[id] = customIcon;
};


export type IconType = 'zocial' | 'oct' | 'material' | 'material-community'
  | 'ion' | 'foundation' | 'evil'
  | 'entypo' | 'font-awesome' | 'simple-line' | 'feather' | 'ant-design';

export interface DefaultIcons {
  zocial: typeof ZocialIcon,
  'ant-design': typeof AntDesignIcon,
  oct: typeof OcticonIcon,
  material: typeof MaterialIcon,
  'material-community': typeof MaterialCommunityIcon,
  ion: typeof Ionicon,
  foundation: typeof FoundationIcon,
  evil: typeof EvilIcon,
  entypo: typeof EntypoIcon,
  'font-awesome': typeof FAIcon,
  'simple-line': typeof SimpleLineIcon,
  feather: typeof FeatherIcon,
}

export const defaultIcons: DefaultIcons = {
  zocial: ZocialIcon,
  'ant-design': AntDesignIcon,
  oct: OcticonIcon,
  material: MaterialIcon,
  'material-community': MaterialCommunityIcon,
  ion: Ionicon,
  foundation: FoundationIcon,
  evil: EvilIcon,
  entypo: EntypoIcon,
  'font-awesome': FAIcon,
  'simple-line': SimpleLineIcon,
  feather: FeatherIcon,
}

export default (type: IconType = 'ant-design') => {
  if (type && customIcons.hasOwnProperty(type)) {
    return customIcons[type];
  }
  if (type && defaultIcons[type]) {
    return defaultIcons[type];
  }
  console.log('type:', type)
  return defaultIcons[type];
};

import React from 'react';
import {ScreenRoot} from '@uiw/react-native';
import {Text, TouchableOpacity} from 'react-native';
import {ComProps} from '../../routes';

export interface ScreenRootProps extends ComProps {}

export default class ScreenRootDemo extends React.Component<ScreenRootProps> {
  render() {
    const HeaderRight = () => (
      <TouchableOpacity onPress={() => {}}>
        <Text
          style={{
            color: '#333',
            fontWeight: '600',
            fontSize: 14,
            lineHeight: 44,
          }}>
          查看详情
        </Text>
      </TouchableOpacity>
    );
    return (
      <ScreenRoot
        title="ScreenRoot"
        headerRight={HeaderRight()}
        onBack={() => this.props.navigation.goBack()}
      />
    );
  }
}

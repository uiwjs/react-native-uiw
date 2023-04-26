import React from 'react';
import {ImageHeader, Icon, Flex, Text} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';

export interface ImageHeaderProps extends ComProps {}

export default class ImageHeaderView extends React.Component<ImageHeaderProps> {
  render() {
    return (
      <ImageHeader
        headerBackgroundImg={{uri: 'https://c-ssl.duitang.com/uploads/blog/201411/18/20141118232436_zkQVV.jpeg'}}
        headerHeight={161}
        headerLeftColor="#FFF"
        headerLeft="返回"
        headerRight={<Icon name="delete" size={20} color={'##FFF'} />}
        statusBarColor="blue"
        statusBarStyle="dark-content">
        <Flex justify="center" style={{backgroundColor: 'white', height: 100, marginHorizontal: 20}}>
          <Text>111</Text>
        </Flex>
      </ImageHeader>
    );
  }
}

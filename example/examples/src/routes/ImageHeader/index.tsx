import React from 'react';
import {ImageHeader, Icon, Avatar, Text} from '@uiw/react-native';
import {ComProps} from '../../routes';
import {View} from 'react-native';
export interface ImageHeaderProps extends ComProps {}

export default class ImageHeaderView extends React.Component<ImageHeaderProps> {
  render() {
    return (
      <ImageHeader
        safeBgColor="#010101"
        headerHeight={150}
        // headerTitle='我是title'
        // headerRight={<Icon name="delete" size={20} color={'#fff'} />}
        // headerLeftColor="#FFF"
        headerLeft={<></>}>
        <View
          style={{
            backgroundColor: '#010101',
            overflow: 'hidden',
            zIndex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Avatar style={{marginRight: 10}} size={70} shape="circle" src="https://avatars.githubusercontent.com/u/32630937?v=4" />
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 17, color: '#fff', fontWeight: '500', lineHeight: 30}}>胡意(huyi)</Text>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  96313241@qq.com
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    width: 240,
                    color: '#fff',
                    fontSize: 12,
                    lineHeight: 25,
                  }}>
                  大屏素材库概要，集成一些常见的大屏组件及图表组件，统一样式。
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageHeader>
    );
  }
}

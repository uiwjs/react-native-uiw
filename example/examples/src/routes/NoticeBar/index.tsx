import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {NoticeBar, Spacing, Icon} from '@uiw/react-native';

export default class NoticeBarExample extends Component {
  render() {
    const customIcon = (
      <Image
        // tslint:disable-next-line:jsx-no-multiline-js
        source={{
          uri: 'https://zos.alipayobjects.com/rmsportal/bRnouywfdRsCcLU.png',
        }}
        style={{width: 12, height: 12, tintColor: 'balck'}}
      />
    );

    const newCustomIcon = <Icon name={'star-off'} size={20} stroke={'blue'} />;
    return (
      <View style={{marginTop: 10}}>
        <NoticeBar
          onPress={() => console.log('click')}
          marqueeProps={{loop: true, style: {fontSize: 12, color: 'red'}}}>
          Notice: The arrival time of incomes and transfers of Yu 'E Bao will be
          delayed during National Day.
        </NoticeBar>
        <Spacing />
        <NoticeBar mode="closable" onPress={() => console.log('will close')}>
          Notice: The arrival time of incomes and transfers of Yu 'E Bao will be
          delayed during National Day.
        </NoticeBar>
        <Spacing />
        <NoticeBar mode="closable" icon={customIcon}>
          Customized icon.
        </NoticeBar>
        <Spacing />
        <NoticeBar mode="link" onPress={() => console.log('link')}>
          Notice: The arrival time of incomes and transfers of Yu 'E Bao will be
          delayed during National Day.
        </NoticeBar>
        <Spacing />
        <NoticeBar mode="closable" icon={undefined}>
          Remove the default icon.
        </NoticeBar>
        <Spacing />
        <NoticeBar
          mode="closable"
          action={<Text style={{color: '#a1a1a1'}}>不再提示</Text>}>
          Closable demo for `actionText`.
        </NoticeBar>
        <Spacing />
        <NoticeBar mode="link" action={<Text>去看看</Text>}>
          Link demo for `actionText`.
        </NoticeBar>
        <Spacing />
        <NoticeBar mode="link" textStyle={{color: 'blue'}}>
          Change `actionText` color
        </NoticeBar>
        <Spacing />
        <NoticeBar
          mode="link"
          action={<Text style={{color: 'blue'}}>去看看</Text>}>
          Change `Prompt` color
        </NoticeBar>
        <Spacing />
        <NoticeBar
          mode="link"
          icon={newCustomIcon}
          textStyle={{color: 'blue', fontSize: 20}}
          style={{backgroundColor: 'lightblue', height: 50}}>
          Change demo for `action`.
        </NoticeBar>
      </View>
    );
  }
}

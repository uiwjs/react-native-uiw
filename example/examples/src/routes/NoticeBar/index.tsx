import React from 'react'
import { Image, Text, View } from 'react-native'
import { NoticeBar, WingBlank } from '@uiw/react-native';


export default class NoticeBarExample extends React.Component{
  render() {
     const customIcon = (
      <Image
        // tslint:disable-next-line:jsx-no-multiline-js
        source={{
          uri: 'https://zos.alipayobjects.com/rmsportal/bRnouywfdRsCcLU.png',
        }}
        style={{ width: 12, height: 12 }}
      />
    )
    return (
       <View style={{ marginTop: 10 }}>
          <WingBlank size="large">
          {/* marqueeProps.style only support text style props*/}
          <NoticeBar
            onPress={() => console.log('click')}
            marqueeProps={{ loop: true, style: { fontSize: 12, color: 'red' } }}>
             Notice: The arrival time of incomes and transfers of Yu 'E Bao will be
             delayed during National Day.
          </NoticeBar>
         </WingBlank>
      </View>
    )
  }
}
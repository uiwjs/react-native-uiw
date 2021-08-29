import React from 'react';
import {View} from 'react-native';
import {Swiper} from '@uiw/react-native';

const SwiperDemo = () => {
  const data = [
    {url: 'https://wx4.sinaimg.cn/mw690/4718260ely1gt2cgf7u5oj22yo1o07wi.jpg'},
    {
      url: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F04%2F22%2Fca22d8623fe7454ea9cdb33f3137d14e.jpeg&thumbnail=650x2147483647&quality=80&type=jpg',
    },
    {url: 'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg'},
  ];
  return (
    <View>
      <Swiper dataSource={data} height={220} borderRadius={5} />
    </View>
  );
};
export default SwiperDemo;

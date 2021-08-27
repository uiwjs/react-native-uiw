import React from 'react';
import { View } from 'react-native';
import { Swiper } from '@uiw/react-native';

const SwiperDemo = () => {
    const data = [
        { url: 'https://img2.baidu.com/it/u=1669646624,570058533&fm=26&fmt=auto&gp=0.jpg' },
        { url: 'https://img0.baidu.com/it/u=1079471900,3150741739&fm=26&fmt=auto&gp=0.jpg' },
        { url: 'https://img0.baidu.com/it/u=2385784823,911121382&fm=26&fmt=auto&gp=0.jpg' },
    ]
    return (
        <View>
            <Swiper dataSource={data} height={150} borderRadius={24} />
        </View>
    )
}
export default SwiperDemo
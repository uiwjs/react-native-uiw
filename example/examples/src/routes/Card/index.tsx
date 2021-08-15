import React, { useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { Card, Divider, Loader } from '@uiw/react-native';
import Layout from '../../Layout';
const CardDemo = (props: any) => {
  const { Header } = Layout;
  const { route } = props;
  const description = route.params.description;
  const title = route.params.title;
  const [selected, setSelected] = useState(false)
  const [loading, setLoad] = useState(true)
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header title={title} description={description} />
      <Header description={'基本使用'} />
      <Card
      >
        <Loader loading={loading}>
          <Image
            onLoad={() => setLoad(false)}
            source={{
              uri: 'https://image11.m1905.cn/uploadfile/2020/ss/0624/20200624104507290748.jpg',
            }}
            style={{ height: 200 }}
          />
        </Loader>
      </Card>
      <Divider />
      <Header description={'带标题下划线圆角卡片'} />
      <Card
        title="我是标题"
        showDriver={true}
        borderRadius={12}
      >
        <Image
          source={{
            uri: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F04%2F22%2Fca22d8623fe7454ea9cdb33f3137d14e.jpeg&thumbnail=650x2147483647&quality=80&type=jpg',
          }}
          style={{ height: 200 }}
        />
      </Card>
      <Divider />
      <Header description={'可点击选中卡片'} />
      <Card
        selected={selected}
        title="我是标题"
        showDriver={true}
        borderRadius={12}
        onPress={() => { setSelected(!selected) }}
      >
        <Loader loading={loading}>
          <Image
            source={{
              uri: 'https://image11.m1905.cn/uploadfile/2020/ss/0624/20200624104507290748.jpg',
            }}
            style={{ height: 200 }}
          />
        </Loader>
      </Card>
    </ScrollView>
  );
};
export default CardDemo;

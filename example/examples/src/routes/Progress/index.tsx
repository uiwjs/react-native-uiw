import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Progress, Spacing, Button, Toast } from '@uiw/react-native';
import Layout, { Container } from '../../Layout';

const { Header, Body, Card } = Layout;

const ProgressDemo = (props: any) => {
  const { route } = props;
  const description = route.params.description;
  const title = route.params.title;

  const [val, setValue] = useState<number>(15);
  console.log('val', val);

  const onPress = () => {
    if (val < 100) {
      setValue(val + 5);
    } else {
      Toast.info('宝，别点了，要溢出了')
    }
  };

  return (
    <Container>
      <Header title={title} description={description} />
      <Body style={{ paddingLeft: 16, paddingRight: 16 }}>
        <Card title="基础实例">
          <Progress type='circle' value={60} />
          <Spacing />
          <Progress type='line' value={60} />
        </Card>
        <Card title="自定义值">
          <Progress type='circle' value={val} />
          <Spacing />
          <Progress type='line' value={val} />
          <Spacing />
          <Button onPress={() => onPress()} >你点我呀！</Button>
        </Card>
        <Card title="自定义渐变色">
          <Progress type='circle' color={['#FFD080', 'red']} value={80} />
          <Spacing />
          <Progress type='line' color={['red', '#FFD080',]} value={80} />
        </Card>
        <Card title="设置大小">
          <Progress type='circle' width={60} left='6.5%' value={10} />
          <Spacing />
          <Progress type='circle' width={80} left='8.5%' value={20} />
          <Spacing />
          <Progress type='line' width={60} value={40} />
          <Spacing />
          <Progress type='line' width={80} value={60} />
        </Card>
        <Card title="是否显示单位">
          <Progress type='circle' showUnit={false} left='13%' value={20} />
          <Spacing />
          <Progress type='line' showUnit={false} value={40} />
        </Card>
        <Card title="自定义单色">
          <Progress type='circle' color='#FFD080' value={50} />
          <Spacing />
          <Progress type='line' color='#FFD080' value={60} />
        </Card>
        <Card title="自定义背景色">
          <Progress type='circle' bgColor="#FFD080" value={5} />
          <Spacing />
          <Progress type='line' bgColor='#FFD080' value={70} />
        </Card>
        <Card title="设置外环宽度">
          <Progress type='circle' value={5} strokeWidth={25} />
          <Spacing />
          <Progress type='line' value={70} strokeWidth={15} />
        </Card>

        <Card title="是否显示文本">
          <Progress type='circle' value={68} showLabel={false} />
          <Spacing />
          <Progress type='line' value={70} showLabel={false} />
        </Card>
        <Card title="自定义标签">
          <Progress type='circle' value={53} label={<Text>饕餮</Text>} />
          <Spacing />
          <Progress type='line' value={30} label={<Text>饕餮</Text>} />
        </Card>
        <Card title="设置外环宽度">
          <Progress type='circle' value={5} strokeWidth={25} />
          <Spacing />
          <Progress type='line' value={70} strokeWidth={15} />
        </Card>
        <Card title="自定义文本位置">
          <Progress type='circle' value={5} top="50%" left='50%' />
          <Spacing />
          <Progress type='line' value={70} top="-20%" left='50%' />
        </Card>
        <Spacing />
      </Body>
    </Container >
  );
};

export default ProgressDemo;

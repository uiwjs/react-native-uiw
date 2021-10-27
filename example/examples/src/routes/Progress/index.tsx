import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Progress, Button, Spacing} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {motorcycle} from './svg';

const {Header, Body, Card} = Layout;

const ProgressDemo = (props: any) => {
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;

  const [val, setValue] = useState<number>(0);
  const [automaticVal, setAutomaticVal] = useState<number>(0);

  const onPress = () => {
    let count = val + 5;
    if (count > 100) {
      count = 0;
    }
    setValue(count);
  };

  return (
    <Container>
      <Header title={title} description={description} />
      <Body>
        <Header description={'基本使用'} />
        <Progress progressColor="#5847FF" progress={40} progressShow={false} />
        <Header description={'展示进度图标'} />
        <Progress
          progressColor="#5847FF"
          progressShow={false}
          iconShow={true}
          progress={30}
        />
        <Header description={'改变进度图标'} />
        <Progress
          progressColor="#5847FF"
          iconShow={true}
          progressShow={false}
          progress={60}
          xml={motorcycle}
        />
        <Header description={'点击变化'} />
        <View
          style={{
            flexDirection: 'column',
            marginBottom: 10,
          }}>
          <Progress
            progress={val}
            progressColor="#9185FF"
            iconShow={true}
            xml={motorcycle}
          />
          <Button color={'#5847FF'} onPress={onPress}>
            (+-)10
          </Button>
        </View>
      </Body>
    </Container>
  );
};

export default ProgressDemo;

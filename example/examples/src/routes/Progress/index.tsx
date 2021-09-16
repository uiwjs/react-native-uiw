import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Progress, Button, Spacing} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';

const {Header, Body, Card} = Layout;

const ProgressDemo = (props: any) => {
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;

  const [val, setValue] = useState<number>(0);

  const onPress = () => {
    let count = val + 10;
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
        <Progress progressColor="#5847FF" progress={40} />
        <Header description={'点击变化'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Progress progress={val} progressColor="#5847FF" />
          <Text style={{fontSize: 12, width: 40, textAlign: 'right'}}>
            {val}%
          </Text>
        </View>
        <Button color={'#5847FF'} onPress={onPress}>
          (+-)10
        </Button>
      </Body>
    </Container>
  );
};

export default ProgressDemo;

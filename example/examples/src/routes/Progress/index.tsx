import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Progress, Button, Spacing } from '@uiw/react-native';
import Layout, { Container } from '../../Layout';
import { motorcycle } from './svg';

const { Header, Body, Card } = Layout;

const ProgressDemo = (props: any) => {
  const { route } = props;
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
      <Body style={{ paddingLeft: 16, paddingRight: 16 }}>
        <Header description={'基本使用'} />
        <Progress type='circle' />
        <Header description={'基本使用'} />
        <Progress type='circle' />
        <Header description={'展示进度图标'} />
        <Progress type='line' />
        <Header description={'改变进度图标'} />
        <Progress type='circle' />
      </Body>
    </Container>
  );
};

export default ProgressDemo;

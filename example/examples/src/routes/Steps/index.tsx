import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
import {Steps, WingBlank, Button} from '@uiw/react-native';

const {Header, Body, Card} = Layout;

interface StepsViewProps extends ComProps {}

export default (props: StepsViewProps) => {
  const {route} = props;
  const [current, setCurrent] = useState<number>(1);
  const item = [
    {title: '步骤一', desc: '这里是额外的信息，这里是额外的信息'},
    {title: '步骤二', desc: '这里是额外的信息,这里是额'},
    {title: '步骤三', desc: '这里是'},
  ];
  const item2 = [
    {
      title: '步骤一',
      desc: '这里是额外的信息，这里是额外的信息',
      status: 'success',
    },
    {title: '步骤二', desc: '这里是额外的信息,这里是额', status: 'success'},
    {title: '步骤三', desc: '这里是', status: 'error'},
  ];

  const onBtnPress = () => {
    let index = current + 1;
    if (index > item.length - 1) {
      index = 0;
    }
    setCurrent(index);
  };

  const onChange = (index: number) => {
    setCurrent(index);
  };

  return (
    <Container>
      <Header
        title={route.params.title}
        description={route.params.description}
      />
      <Body>
        <Card title="基础用法">
          <WingBlank>
            <Steps
              items={item}
              current={current}
              // onChange={onChange}
            />
          </WingBlank>
          <Button
            style={{marginLeft: 20, marginRight: 20}}
            onPress={onBtnPress}>
            下一步
          </Button>
        </Card>
        <Card title="步骤状态">
          <WingBlank>
            <Steps items={item2} current={2} />
          </WingBlank>
        </Card>
      </Body>
    </Container>
  );
};

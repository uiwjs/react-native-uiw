import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
import {Timeline, WingBlank} from '@uiw/react-native';

const {Header, Body, Card} = Layout;

interface StepsViewProps extends ComProps {}

export default (props: StepsViewProps) => {
  const {route} = props;

  const item = [
    {
      title: '声明式声明式声明式声明式声明式声明式声明式声明式声明式',
      tips: '2021-08-07 12:00:00',
      desc: 'React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。',
    },
    {
      title: '组件化',
      color: 'yellow',
      desc: '构建管理自身状态的封装组件，然后对其组合以构成复杂的 UI。',
    },
    {
      title: '一次学习，随处编写',
      color: 'red',
      desc: [
        '无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入 React 来开发新功能。',
        'React 还可以使用 Node 进行服务器渲染，或使用 React Native 开发原生移动应用。',
      ],
    },
  ];

  return (
    <Container>
      <Header
        title={route.params.title}
        description={route.params.description}
      />
      <Body>
        <Card title="基础用法">
          <WingBlank>
            <Timeline
              style={{backgroundColor: '#fff'}}
              isReverse
              items={item}
            />
          </WingBlank>
        </Card>
      </Body>
    </Container>
  );
};

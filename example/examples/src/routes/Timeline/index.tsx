import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
import {Timeline, WingBlank, Icon} from '@uiw/react-native';

const {Header, Body, Card} = Layout;

interface StepsViewProps extends ComProps {}

export default (props: StepsViewProps) => {
  const {route} = props;

  const item = [
    {
      title: '声明式声明式声明式声',
      tips: '2021-08-07 12:00:00',
      desc: 'React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。',
    },
    {
      title: '组件化',
      desc: '构建管理自身状态的封装组件，然后对其组合以构成复杂的 UI。',
    },
    {
      title: '一次学习，随处编写',
      desc: [
        '无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入 React 来开发新功能。',
        'React 还可以使用 Node 进行服务器渲染，或使用 React Native 开发原生移动应用。',
      ],
    },
  ];
  const item1 = [
    {
      title: '声明式声明式',
      tips: '2021-08-07 12:00:00',
      desc: 'React 使创建交互式',
      icon: <Icon name="smile" fill="red" size={18} />,
    },
    {
      title: '组件化',
      tips: '2021-08-08 12:00:00',
      desc: '构建管理自身状态。',
      size: 20,
      color: 'blue',
      icon: 'qq',
    },
    {
      title: '随处编写',
      tips: '2021-08-09 12:00:00',
      desc: '服务器渲染。',
      color: 'green',
    },
    {
      title: '一次学习，随处编写',
      tips: '2021-08-10 12:00:00',
      desc: '开发新功能。',
      size: 30,
    },
  ];

  return (
    <Container>
      <Header title={route.params.title} description={route.params.description} />
      <Body>
        <Card title="基础用法">
          <WingBlank>
            <Timeline items={item} />
          </WingBlank>
        </Card>
        <Card title="展示在左边">
          <WingBlank>
            <Timeline items={item} mode="left" />
          </WingBlank>
        </Card>
        <Card title={`交替展现 & 自定义图标`}>
          <WingBlank>
            <Timeline items={item1} mode="alternate" />
          </WingBlank>
        </Card>
      </Body>
    </Container>
  );
};

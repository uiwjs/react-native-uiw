import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Accordion, Text } from '@uiw/react-native';
import Layout, { Container } from '../../Layout';
import { ComProps } from '../../routes';
const { Header, Body, Card, Footer } = Layout;

export interface Accordion extends ComProps { }

const contents = [
  {
    title: <Text>Section 1</Text>,
    content: (
      <View>
        <Text>Content of section 1</Text>
        <Image source={{ uri: 'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg' }} style={{ height: 180 }} />
      </View>
    ),
  },
  {
    title: <Text>Section 2</Text>,
    content: (
      <View>
        <Text>Content of section 2</Text>
        <Image source={{ uri: 'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg' }} style={{ height: 180 }} />
      </View>
    ),
  },
  {
    title: <Text>Section 3</Text>,
    content: (
      <View>
        <Text>Content of section 3</Text>
        <Image source={{ uri: 'https://iknow-pic.cdn.bcebos.com/810a19d8bc3eb135828572d2ab1ea8d3fd1f441d' }} style={{ height: 180 }} />
      </View>
    ),
  },
];
export default class MenuDropdownView extends Component<Accordion> {
  state = {
    expanded: false,
    top: false,
  };
  render() {
    const { route } = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例">
              <Accordion sections={contents} />
            </Card>
            <Card title="是否可以展开多个.默认为是,当前为否">
              <Accordion sections={contents} isMultiple={false} />
            </Card>
            <Card title="是否展示右侧图标,默认为是,当前为否">
              <Accordion sections={contents} iconShow={false} />
            </Card>
            <Card title="设置右侧图标尺寸大小">
              <Accordion sections={contents} iconSize={30} />
            </Card>
            <Card title="每行列表手风琴样式">
              <Accordion sections={contents} accordionStyle={{ backgroundColor: '#3578e5' }} />
            </Card>
            <Card title="展开手风琴内容样式">
              <Accordion sections={contents} contentStyle={{ backgroundColor: '#FFD21D' }} />
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}

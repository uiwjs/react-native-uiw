import React from 'react';
import {Text, View} from 'react-native';
import {Flex, Button} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

const Circle = (props: any) => {
  const size = props.size || 20;
  const style = {
    borderRadius: size / 2,
    backgroundColor: 'red',
    width: size,
    height: size,
    margin: 1,
  };
  return <View style={style} />;
};

const Square = (props: any) => {
  const size = props.size || 20;
  const style = {
    backgroundColor: 'red',
    width: size,
    height: size,
    margin: 1,
  };
  return <View style={style} />;
};

const Span = (props: any) => {
  const size = props.size || 14;
  return (
    <Text
      style={{
        fontSize: size,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#393E48',
      }}>
      {props.children}
    </Text>
  );
};

export interface FlexViewProps extends ComProps {}

export default class FlexView extends React.Component<FlexViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="主轴为水平方向，起点在左端: direction='row'">
              <Flex>
                <Flex.Item>
                  <Button size="small">按钮1</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button size="small">按钮2</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button size="small">按钮3</Button>
                </Flex.Item>
              </Flex>
            </Card>
            <Card title="主轴为水平方向，起点在右端: direction='row-reverse'">
              <Flex direction="row-reverse">
                <Flex.Item>
                  <Button size="small">按钮1</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button size="small">按钮2</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button size="small">按钮3</Button>
                </Flex.Item>
              </Flex>
            </Card>
            <Card title="主轴为垂直方向，起点在上沿: direction='column'">
              <Flex direction="column">
                <Flex.Item>
                  <Button size="small">按钮1</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button size="small">按钮2</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button size="small">按钮3</Button>
                </Flex.Item>
              </Flex>
            </Card>
            <Card title="主轴为垂直方向，起点在下沿: direction='column-reverse'">
              <Flex direction="column-reverse">
                <Flex.Item>
                  <Button size="small">按钮1</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button size="small">按钮2</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button size="small">按钮3</Button>
                </Flex.Item>
              </Flex>
            </Card>
            <Card title="左对齐 justify='start'">
              <Flex justify="start">
                <Circle /> <Circle /> <Circle /> <Circle /> <Circle />
              </Flex>
            </Card>
            <Card title="居中 justify='center'">
              <Flex justify="center">
                <Circle /> <Circle /> <Circle /> <Circle /> <Circle />
              </Flex>
            </Card>
            <Card title="右对齐 justify='end'">
              <Flex justify="end">
                <Circle /> <Circle /> <Circle /> <Circle /> <Circle />
              </Flex>
            </Card>
            <Card title="两端对齐，项目之间的间隔都相等 justify='between'">
              <Flex justify="between">
                <Circle /> <Circle /> <Circle /> <Circle /> <Circle />
              </Flex>
            </Card>
            <Card title="每个项目两侧的间隔相等 justify='around'">
              <Flex justify="around">
                <Circle /> <Circle /> <Circle /> <Circle /> <Circle />
              </Flex>
            </Card>
            <Card title="起点对齐 align='start'">
              <Flex align="start">
                <Square size={30} /> <Square size={26} /> <Square size={22} />{' '}
                <Square size={18} />
              </Flex>
            </Card>
            <Card title="中点对齐 align='center'">
              <Flex align="center">
                <Square size={30} /> <Square size={26} /> <Square size={22} />{' '}
                <Square size={18} />
              </Flex>
            </Card>
            <Card title="终点对齐 align='end'">
              <Flex align="end">
                <Square size={30} /> <Square size={26} /> <Square size={22} />{' '}
                <Square size={18} />
              </Flex>
            </Card>
            <Card title="如果项目未设置高度或设为auto，将占满整个容器的高度 align='stretch'">
              <Flex align="stretch" style={{height: 70}}>
                <Span size={20}> 组件 </Span>
                <Span size={18}> 组件 </Span>
                <Span size={16}> 组件 </Span>
                <Span size={14}> 组件 </Span>
              </Flex>
            </Card>
            <Card title="换行，第一行在上方: wrap='wrap'">
              <Flex wrap="wrap">
                {'ooooooooooooooooooooooooooooo'.split('').map((char, i) => (
                  <Circle key={`${i}-${char}`} />
                ))}
              </Flex>
            </Card>
            <Card title="换行: wrap='nowrap'">
              <Flex wrap="nowrap">
                {'ooooooooooooooooooooooooooooo'.split('').map((char, i) => (
                  <Circle key={`${i}-${char}`} />
                ))}
              </Flex>
            </Card>
            <Card title="换行，第一行在下方: wrap='wrap-reverse'">
              <Flex wrap="wrap-reverse">
                {'ooooooooooooooooooooooooooooo'.split('').map((char, i) => (
                  <Circle key={`${i}-${char}`} />
                ))}
              </Flex>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}

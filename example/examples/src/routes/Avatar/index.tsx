import React from 'react';
import {Spacing, Avatar, Flex} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
const {Header, Body, Card, Footer} = Layout;

export interface AvatarViewProps extends ComProps {}

export default class AvatarView extends React.Component<AvatarViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    const src = './1.jpeg';
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="默认头像">
              <Flex>
                <Avatar />
                <Spacing type="horizontal" />
                <Avatar src={require(src)} />
              </Flex>
            </Card>
            <Card title={"设置圆形头像 shape?: 'circle' | 'square'"}>
              <Flex>
                <Avatar shape="circle" src={require(src)} />
                <Spacing type="horizontal" />
                <Avatar shape="square" src={require(src)} />
              </Flex>
            </Card>
            <Card title={'设置头像尺寸 size?: number'}>
              <Flex>
                <Avatar size={40} shape="circle" src={require(src)} />
                <Spacing type="horizontal" />
                <Avatar size={30} shape="circle" src={require(src)} />
                <Spacing type="horizontal" />
                <Avatar size={24} shape="circle" src={require(src)} />
                <Spacing type="horizontal" />
                <Avatar size={18} shape="circle" src={require(src)} />
              </Flex>
            </Card>
            <Card title={'设置头像圆角 rounded?: number'}>
              <Flex>
                <Avatar size={40} rounded={10} src={require(src)} />
                <Spacing type="horizontal" />
                <Avatar size={30} rounded={10} src={require(src)} />
                <Spacing type="horizontal" />
                <Avatar size={24} rounded={10} src={require(src)} />
                <Spacing type="horizontal" />
                <Avatar size={18} rounded={10} src={require(src)} />
              </Flex>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}

import React from 'react';
import {Spacing, Avatar, Flex} from '../../../components';
import {ComProps} from '../../typings';
import Layout, {Container} from '../../Layout';
const {Header, Body, Card, Footer} = Layout;

export interface AvatarViewProps extends ComProps {}

export default class AvatarView extends React.Component<AvatarViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="默认头像">
              <Flex>
                <Avatar />
                <Spacing type="horizontal" />
                <Avatar src={require('../Grid/1.png')} />
              </Flex>
            </Card>
            <Card title={"设置圆形头像 shape?: 'circle' | 'square'"}>
              <Flex>
                <Avatar shape="circle" />
                <Spacing type="horizontal" />
                <Avatar shape="circle" />
                <Spacing type="horizontal" />
                <Avatar shape="circle" src={require('../Grid/1.png')} />
              </Flex>
            </Card>
            <Card title={'设置头像尺寸 size?: number'}>
              <Flex>
                <Avatar
                  size={40}
                  shape="circle"
                  src="https://xx.images.com/xxx/icon.png"
                />
                <Spacing type="horizontal" />
                <Avatar size={30} shape="circle" />
                <Spacing type="horizontal" />
                <Avatar size={24} shape="circle" />
                <Spacing type="horizontal" />
                <Avatar size={18} shape="circle" />
              </Flex>
            </Card>
            <Card title={'设置头像圆角 rounded?: number'}>
              <Flex>
                <Avatar size={40} rounded={10} />
                <Spacing type="horizontal" />
                <Avatar size={30} rounded={10} />
                <Spacing type="horizontal" />
                <Avatar size={24} rounded={10} />
                <Spacing type="horizontal" />
                <Avatar size={18} rounded={10} />
              </Flex>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}

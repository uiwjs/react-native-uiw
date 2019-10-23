import React from 'react';
import { Spacing, Avatar, Flex } from '../../../components';
import { ComProps } from '../../typings';
import Layout, { Container } from '../../Layout';
const { Header, Body, Card, Footer } = Layout;

export interface BadgeViewProps extends ComProps { }

const uri = 'data:image/jpeg;base64,/9j/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIACgAKAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APZtS8V6FpFylvqGpwW8r52q7egyRn1xjj3HrWyDkZr508WeAtWi8Z2lkR5NlfNHALqJWKZPynrkgnlmUnkknJ616trc2seH9Osp9P1zTFttMthHfpqCnEnChXyuWU9euRz3pXA7WivmXWdW8feMc6zpt5dx2TyeWtrZXDqsThMleAMng+pz7YNa/gfxp4w8NeJ7LSPE0l1c6bdgHzbgNI0ak7VkV+pTdtGTkYPFTzq9h2Z9B0UUVYivfR28llMt1GJIApLqVzkDnpXlOr6bqWpJcalNBD/a6wEWdtj5YHkXcAeCXdUwSxzlmOMYr16uS8X272Vjd6ja2zTzPEyxxqA3+kMAkbY79cce3Hes6ibWhcLXPLodf0HQ1jSyeFpLIyeWyxMxkZRtDFt2CXLOc46c98Ut54jtZddsrbQIbe7vJb9LfKxGNJY2yGBDFsIfmPHAwDj088ktpocCSJ1z0yp55I/mD+Rr1r4R6JZjRLzXZ7dTdLceRHMWKsiBVJwQR1LfjiuKk3OVmj6HMMBRw2H9pCd3fysej+HtTaXNjMXLopMZf72AcFW/2lJA9wQcnmt+uO0qw1KbxAl7LFKkEcrZkcBQ6BXRTjJYsQUJJA4UV2Nd1O9tT52dr6BVTUbCPUbdYpMjbIkgYEgjBB4IIIJGRketW6Kskxh4V0cFSLZwVxtP2iTIxnGPm7bmx9T61LBoltZC3gs4lhtY5DK6Ak7mC7VznsOPptX0rUooAKKKKAP/2Q==';

export default class BadgeView extends React.Component<BadgeViewProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="默认头像">
              <Flex>
                <Avatar />
                <Spacing type="horizontal" />
                <Avatar src={uri} />
                <Spacing type="horizontal" />
                <Avatar src={require('../Grid/1.png')} />
              </Flex>
            </Card>
            <Card title={`设置圆形头像 shape?: 'circle' | 'square'`}>
              <Flex>
                <Avatar shape="circle" />
                <Spacing type="horizontal" />
                <Avatar shape="circle" src={uri} />
                <Spacing type="horizontal" />
                <Avatar shape="circle" src={require('../Grid/1.png')} />
              </Flex>
            </Card>
            <Card title={`设置头像尺寸 size?: number`}>
              <Flex>
                <Avatar size={40} shape="circle" src="https://xx.images.com/xxx/icon.png" />
                <Spacing type="horizontal" />
                <Avatar size={30} shape="circle" src={uri} />
                <Spacing type="horizontal" />
                <Avatar size={24} shape="circle" src={uri} />
                <Spacing type="horizontal" />
                <Avatar size={18} shape="circle" src={uri} />
              </Flex>
            </Card>
            <Card title={`设置头像圆角 rounded?: number`}>
              <Flex>
                <Avatar size={40} rounded={10} />
                <Spacing type="horizontal" />
                <Avatar size={30} rounded={10} src={uri} />
                <Spacing type="horizontal" />
                <Avatar size={24} rounded={10} src={uri} />
                <Spacing type="horizontal" />
                <Avatar size={18} rounded={10} src={uri} />
              </Flex>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}

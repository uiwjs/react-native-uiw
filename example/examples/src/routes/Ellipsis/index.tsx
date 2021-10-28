import React from 'react';
import {Ellipsis, WingBlank} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';

const {Header, Body, Card, Footer} = Layout;

export interface DividerViewProps extends ComProps {}

export default class DividerView extends React.Component<DividerViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="默认基础实例">
              <WingBlank>
                <Ellipsis maxLen={5}>用于文本过长，超出长度显示</Ellipsis>
              </WingBlank>
            </Card>
            <Card title="设置长度 maxLen?: number;">
              <WingBlank>
                <Ellipsis maxLen={10}>用于文本过长，超出长度显示</Ellipsis>
              </WingBlank>
            </Card>
            <Card title="设置占位符 placeholder?: string;">
              <WingBlank>
                <Ellipsis maxLen={10} placeholder="~~~~">
                  用于文本过长，超出长度显示
                </Ellipsis>
              </WingBlank>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}

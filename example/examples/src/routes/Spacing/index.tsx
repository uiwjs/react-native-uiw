import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Spacing} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface SpacingViewProps extends ComProps {}

export default class SpacingView extends Component<SpacingViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例">
              <Button>按钮之间的间距</Button>
              <Spacing />
              <Button type="primary">按钮之间的间距</Button>
              <Spacing />
              <Button type="danger">按钮之间的间距</Button>
            </Card>
            <Card title="横向间距 type?: 'horizontal' | 'vertical'">
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap-reverse',
                }}>
                <Button>按钮之间的间距</Button>
                <Spacing type="horizontal" />
                <Button>间距</Button>
                <Spacing type="horizontal" />
                <Button>间距</Button>
              </View>
            </Card>
            <Card title="间距大小 size?: 'small' | 'default' | 'large'">
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap-reverse',
                }}>
                <Button>间距</Button>
                <Spacing type="horizontal" size="large" />
                <Button>间距</Button>
                <Spacing type="horizontal" />
                <Button>间距</Button>
                <Spacing type="horizontal" size="small" />
                <Button>间距</Button>
              </View>
            </Card>
            <Card title="间距大小数字设置 size?: number">
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap-reverse',
                }}>
                <Button>间距</Button>
                <Spacing type="horizontal" size={30} />
                <Button>间距</Button>
              </View>
              <Spacing />
              <View>
                <Button>按钮上下之间的间距 {'size={30}'} </Button>
                <Spacing size={30} />
                <Button type="primary">按钮上下之间的间距</Button>
              </View>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}

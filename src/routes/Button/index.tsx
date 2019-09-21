import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Button, Spacing, Icon } from '../../../components';
import { ComProps } from '../../typings';
import Layout, { Container } from '../../Layout';
const { Header, Body, Card, Footer } = Layout;

export interface ButtonViewProps extends ComProps {}

export default class ButtonView extends React.Component<ButtonViewProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例">
              <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse' }}>
                <Button>默认按钮</Button>
                <Button>默认按钮</Button>
                <Button>按钮</Button>
              </View>
              <Spacing />
              <Button>默认按钮</Button>
              <Spacing />
              <Button disabled>默认禁用按钮</Button>
              <Spacing />
              <Button type="primary">主要按钮</Button>
              <Spacing />
              <Button type="primary" disabled>主要禁用</Button>
              <Spacing />
              <Button type="warning">警告按钮</Button>
              <Spacing />
              <Button type="warning" disabled>警告禁用按钮</Button>
              <Spacing />
              <Button type="warning" loading>警告</Button>
              <Spacing />
              <Button type="warning" loading disabled>警告按钮</Button>
              <Spacing />
              <Button loading>默认按钮</Button>
              <Spacing />
              <Button loading disabled>默认按钮 禁用</Button>
            </Card>
            <Card title="按钮圆角设置">
              <Button rounded={false} color="#333">设置圆角 {`rounded={false}`}</Button>
              <Spacing />
              <Button rounded={23} color="#393E48">自定义圆角 {`rounded={23}`}</Button>
              <Spacing />
              <Button rounded={10} color="#f6f8fa">自定义圆角 {`rounded={10}`}</Button>
              <Spacing />
              <Button rounded={16} color="#ffc107">自定义圆角 {`rounded={16}`}</Button>
            </Card>
            <Card title="按钮尺寸 size={'small', 'default', 'large'}">
              <Button size="small" color="#333">按钮尺寸 {`size="small"`}</Button>
              <Spacing />
              <Button color="#393E48">按钮尺寸 {`rounded={23}`}</Button>
              <Spacing />
              <Button size="large" color="#f6f8fa">自定义圆角 {`size="large"`}</Button>
            </Card>
            <Card title="自定义颜色">
              <Button color="#333">自定义颜色{`color="#333"`}</Button>
              <Spacing />
              <Button color="#28a745">自定义颜色{`color="#28a745"`}</Button>
              <Spacing />
              <Button color="#008EF0">自定义颜色{`color="#008EF0"`}</Button>
              <Spacing />
              <Button color="#1EABCD">自定义颜色{`color="#1EABCD"`}</Button>
              <Spacing />
              <Button color="#393E48">自定义颜色{`color="#393E48"`}</Button>
              <Spacing />
              <Button color="#ffc107">自定义颜色{`color="#ffc107"`}</Button>
              <Spacing />
              <Button color="#F95C2B">自定义颜色{`color="#F95C2B"`}</Button>
              <Spacing />
              <Button color="#dc3545">自定义颜色{`color="#dc3545"`}</Button>
              <Spacing />
              <Button color="#f6f8fa">自定义颜色{`color="#f6f8fa"`}</Button>
            </Card>
            <Card title="设置边框">
              <Button bordered={false} color="#f6f8fa">不显示边框{`bordered={false}`}</Button>
              <Spacing />
              <Button bordered={false} color="#ffc107">不显示边框{`bordered={false}`}</Button>
            </Card>
            <Card title="显示图标">
              <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse' }}>
                <Button bordered={false} color="#fff">
                  <Icon name="apple" size={17} />
                  <Text> 首页</Text>
                </Button>
                <Button bordered={false} color="#fff">
                  <Icon name="menu-fold" size={17} />
                  <Text> 菜单</Text>
                </Button>
              </View>
              <Spacing />
              <Button bordered={false} color="#ffc107">
                <Icon name="warning" size={17} />
                <Text> 菜单</Text>
              </Button>
              <Spacing />
              <Button bordered={false} type="warning">
                <Icon name="warning" fill="#fff" size={17} />
                <Text> 菜单</Text>
              </Button>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
